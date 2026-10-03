import { HttpStatus, Injectable } from "@nestjs/common";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { SendMessageCommand } from "@aws-sdk/client-sqs";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import {
  cancelInvoiceSchema,
  createInvoiceSchema,
  type CreateInvoiceInput,
} from "@fiscal-mvp/contracts";
import { randomUUID } from "node:crypto";
import { ZodError } from "zod";
import { createS3, createSqs } from "../../aws/clients";
import { invoiceTotal, validateInvoice } from "../../domain/validate";
import { PrismaClient } from "../../generated/prisma";
import { normalizeJson, sha256 } from "../../hash";
import { ApiException } from "../../http/errors";

const prisma = new PrismaClient();

@Injectable()
export class InvoicesService {

  async validate(workspaceId: string, raw: unknown) {
    const input = parseInvoice(raw);
    const ctx = await this.context(workspaceId, input);
    return validateInvoice(input, ctx);
  }

  async create(workspaceId: string, raw: unknown, idempotencyKey?: string) {
    if (!idempotencyKey) {
      throw new ApiException(HttpStatus.BAD_REQUEST, "MISSING_IDEMPOTENCY_KEY", "Idempotency-Key obrigatório");
    }
    const input = parseInvoice(raw);
    const requestHash = sha256(normalizeJson(input));
    const existing = await prisma.invoice.findFirst({
      where: { emitterId: input.emitterId, idempotencyKey },
    });
    if (existing) {
      if (existing.requestHash !== requestHash) {
        throw new ApiException(HttpStatus.CONFLICT, "IDEMPOTENCY_CONFLICT", "Mesma chave com payload diferente");
      }
      return { id: existing.id, status: existing.status };
    }

    const ctx = await this.context(workspaceId, input);
    const result = validateInvoice(input, ctx);
    if (!result.valid || !ctx.emitter) {
      throw new ApiException(HttpStatus.UNPROCESSABLE_ENTITY, "VALIDATION_FAILED", "Payload inválido", {
        errors: result.errors,
      });
    }

    const total = invoiceTotal(input.items);
    const resolvedItems = input.items.map((item, index) => ({
      ...item,
      cfop: result.preview.items[index]?.cfop,
      taxCode: result.preview.items[index]?.taxCode,
    }));

    const invoice = await prisma.invoice.create({
      data: {
        workspaceId,
        emitterId: input.emitterId,
        status: "PENDING",
        idempotencyKey,
        requestHash,
        originType: input.origin?.type ?? null,
        originId: input.origin?.id ?? null,
        operation: input.operation,
        purpose: input.purpose,
        requestPayload: input as object,
        resolvedItems: resolvedItems as object,
        totalValue: total,
        environment: ctx.emitter.environment,
      },
      include: { emitter: true },
    });
    await prisma.invoiceEvent.createMany({
      data: [
        { invoiceId: invoice.id, type: "CREATED", payload: { idempotencyKey } },
        { invoiceId: invoice.id, type: "ENQUEUED", payload: { queue: "fiscal-pedidos" } },
      ],
    });

    const messageId = randomUUID();
    await createSqs().send(
      new SendMessageCommand({
        QueueUrl: process.env.SQS_PEDIDOS_URL,
        MessageBody: JSON.stringify({
          version: 1,
          messageType: "EMIT",
          messageId,
          invoiceId: invoice.id,
          workspaceId,
          enqueuedAt: new Date().toISOString(),
          emitter: {
            id: invoice.emitter.id,
            cnpj: invoice.emitter.cnpj,
            legalName: invoice.emitter.legalName,
            ie: invoice.emitter.ie ?? undefined,
            crt: invoice.emitter.crt,
            uf: invoice.emitter.uf,
            environment: invoice.emitter.environment,
            series: invoice.emitter.series,
          },
          credentialRef: invoice.emitter.credentialRef,
          recipient: input.recipient,
          items: resolvedItems,
          payments: input.payments,
          freight: input.freight,
          additionalInfo: input.additionalInfo ?? "",
          totalValue: total,
        }),
      }),
    );

    return { id: invoice.id, status: "PENDING" as const };
  }

  list(workspaceId: string, query: { emitterId?: string; status?: string; from?: string; to?: string }) {
    return prisma.invoice.findMany({
      where: {
        workspaceId,
        emitterId: query.emitterId,
        status: query.status as never,
        createdAt: {
          gte: query.from ? new Date(query.from) : undefined,
          lte: query.to ? new Date(query.to) : undefined,
        },
      },
      include: { emitter: true },
      orderBy: { createdAt: "desc" },
    });
  }

  async get(workspaceId: string, id: string) {
    const invoice = await prisma.invoice.findFirst({
      where: { id, workspaceId },
      include: { emitter: true, events: { orderBy: { occurredAt: "asc" } } },
    });
    if (!invoice) throw new ApiException(HttpStatus.NOT_FOUND, "INVOICE_NOT_FOUND", "Nota não encontrada");
    return invoice;
  }

  async events(workspaceId: string, id: string) {
    const invoice = await this.get(workspaceId, id);
    return invoice.events;
  }

  async file(workspaceId: string, id: string, kind: "xml" | "pdf") {
    const invoice = await this.get(workspaceId, id);
    const key = kind === "xml" ? invoice.s3XmlKey : invoice.s3PdfKey;
    if (!key) throw new ApiException(HttpStatus.NOT_FOUND, "FILE_NOT_READY", "Arquivo ainda não disponível");
    const ttl = Number(process.env.PRESIGN_TTL_SECONDS ?? 60);
    if (process.env.PRESIGN_MODE === "stream") {
      const object = await createS3().send(
        new GetObjectCommand({ Bucket: process.env.S3_BUCKET, Key: key }),
      );
      const bytes = Buffer.from(await object.Body!.transformToByteArray());
      return { mode: "stream" as const, bytes, contentType: kind === "xml" ? "application/xml" : "application/pdf" };
    }
    const url = await getSignedUrl(
      createS3(),
      new GetObjectCommand({ Bucket: process.env.S3_BUCKET, Key: key }),
      { expiresIn: ttl },
    );
    return { mode: "url" as const, url, expiresInSeconds: ttl };
  }

  async cancel(workspaceId: string, id: string, raw: unknown) {
    const body = cancelInvoiceSchema.parse(raw);
    const invoice = await this.get(workspaceId, id);
    if (invoice.status !== "AUTHORIZED" || !invoice.accessKey) {
      throw new ApiException(HttpStatus.CONFLICT, "INVALID_STATUS", "Somente nota autorizada pode ser cancelada");
    }
    await prisma.invoiceEvent.create({
      data: { invoiceId: id, type: "CANCEL_REQUESTED", payload: { justification: body.justification } },
    });
    await createSqs().send(
      new SendMessageCommand({
        QueueUrl: process.env.SQS_PEDIDOS_URL,
        MessageBody: JSON.stringify({
          version: 1,
          messageType: "CANCEL",
          messageId: randomUUID(),
          invoiceId: id,
          workspaceId,
          enqueuedAt: new Date().toISOString(),
          justification: body.justification,
          credentialRef: invoice.emitter.credentialRef,
          accessKey: invoice.accessKey,
        }),
      }),
    );
    return { id, status: invoice.status };
  }

  async checkStatus(workspaceId: string, id: string) {
    const invoice = await this.get(workspaceId, id);
    if (invoice.status !== "PROCESSING" || !invoice.providerRef) {
      throw new ApiException(
        HttpStatus.CONFLICT,
        "INVALID_STATUS",
        "Consulta de status só para notas em PROCESSING com referência do provider",
      );
    }
    await this.enqueueCheckStatus(invoice);
    return { id, status: invoice.status, enqueued: true };
  }

  async reconcile() {
    const pendingStaleSeconds = Number(process.env.PENDING_STALE_SECONDS ?? 120);
    const processingStaleSeconds = Number(process.env.PROCESSING_STALE_SECONDS ?? 120);
    const pendingCutoff = new Date(Date.now() - pendingStaleSeconds * 1000);
    const processingCutoff = new Date(Date.now() - processingStaleSeconds * 1000);

    const stalePending = await prisma.invoice.findMany({
      where: { status: "PENDING", createdAt: { lt: pendingCutoff }, providerRef: null },
      include: { emitter: true },
    });
    const staleProcessing = await prisma.invoice.findMany({
      where: {
        status: "PROCESSING",
        providerRef: { not: null },
        OR: [{ lastCheckedAt: null }, { lastCheckedAt: { lt: processingCutoff } }],
      },
      include: { emitter: true },
    });

    for (const invoice of stalePending) {
      const payload = invoice.requestPayload as CreateInvoiceInput;
      await createSqs().send(
        new SendMessageCommand({
          QueueUrl: process.env.SQS_PEDIDOS_URL,
          MessageBody: JSON.stringify({
            version: 1,
            messageType: "EMIT",
            messageId: randomUUID(),
            invoiceId: invoice.id,
            workspaceId: invoice.workspaceId,
            enqueuedAt: new Date().toISOString(),
            emitter: {
              id: invoice.emitter.id,
              cnpj: invoice.emitter.cnpj,
              legalName: invoice.emitter.legalName,
              ie: invoice.emitter.ie ?? undefined,
              crt: invoice.emitter.crt,
              uf: invoice.emitter.uf,
              environment: invoice.emitter.environment,
              series: invoice.emitter.series,
            },
            credentialRef: invoice.emitter.credentialRef,
            recipient: payload.recipient,
            items: invoice.resolvedItems,
            payments: payload.payments,
            freight: payload.freight,
            additionalInfo: payload.additionalInfo ?? "",
            totalValue: Number(invoice.totalValue),
          }),
        }),
      );
    }
    for (const invoice of staleProcessing) {
      await this.enqueueCheckStatus(invoice);
    }
    return { requeuedEmit: stalePending.length, requeuedCheckStatus: staleProcessing.length };
  }

  private async enqueueCheckStatus(invoice: {
    id: string;
    workspaceId: string;
    providerRef: string | null;
    emitter: { id: string; cnpj: string; credentialRef: string };
  }) {
    if (!invoice.providerRef) return;
    await prisma.invoiceEvent.create({
      data: {
        invoiceId: invoice.id,
        type: "CHECK_STATUS_ENQUEUED",
        payload: { providerRef: invoice.providerRef },
      },
    });
    await createSqs().send(
      new SendMessageCommand({
        QueueUrl: process.env.SQS_PEDIDOS_URL,
        MessageBody: JSON.stringify({
          version: 1,
          messageType: "CHECK_STATUS",
          messageId: randomUUID(),
          invoiceId: invoice.id,
          workspaceId: invoice.workspaceId,
          emitterId: invoice.emitter.id,
          enqueuedAt: new Date().toISOString(),
          providerRef: invoice.providerRef,
          credentialRef: invoice.emitter.credentialRef,
          emitterCnpj: invoice.emitter.cnpj,
        }),
      }),
    );
  }

  private async context(workspaceId: string, input: CreateInvoiceInput) {
    const emitter = await prisma.emitter.findFirst({
      where: { id: input.emitterId, workspaceId },
    });
    const profileIds = [...new Set(input.items.map((item) => item.fiscalProfileId))];
    const profiles = await prisma.fiscalProfile.findMany({
      where: { id: { in: profileIds } },
      include: { rules: true },
    });
    return {
      workspaceId,
      emitter,
      profiles: Object.fromEntries(profiles.map((p) => [p.id, p])),
    };
  }
}

function parseInvoice(raw: unknown): CreateInvoiceInput {
  try {
    return createInvoiceSchema.parse(raw);
  } catch (error) {
    if (error instanceof ZodError) {
      throw new ApiException(HttpStatus.BAD_REQUEST, "INVALID_BODY", "Payload inválido", { issues: error.issues });
    }
    throw error;
  }
}
