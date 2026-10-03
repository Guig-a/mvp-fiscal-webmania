import type { CancelResultMessage, EmitResultMessage } from "@fiscal-mvp/contracts";
import type { PrismaClient } from "../generated/prisma";
import { postWebhook, webhookEventId } from "../webhook/sign";
import type { Logger } from "pino";

export async function applyResult(input: {
  prisma: PrismaClient;
  payload: EmitResultMessage | CancelResultMessage;
  webhookUrl: string;
  webhookSecret: string;
  logger: Logger;
}) {
  const invoice = await input.prisma.invoice.findUnique({
    where: { id: input.payload.invoiceId },
    include: { emitter: true },
  });
  if (!invoice) {
    input.logger.warn({ invoiceId: input.payload.invoiceId }, "invoice missing");
    return;
  }

  await input.prisma.invoiceEvent.create({
    data: { invoiceId: invoice.id, type: "RESULT_RECEIVED", payload: input.payload as object },
  });

  if (input.payload.messageType === "EMIT_RESULT") {
    await applyEmitResult(input, invoice);
    return;
  }

  if (input.payload.outcome === "CANCELLED") {
    const updated = await input.prisma.invoice.updateMany({
      where: { id: invoice.id, status: "AUTHORIZED" },
      data: { status: "CANCELLED" },
    });
    if (updated.count > 0) {
      await input.prisma.invoiceEvent.create({
        data: { invoiceId: invoice.id, type: "CANCELLED", payload: input.payload as object },
      });
    }
  }
  const fresh = await input.prisma.invoice.findUniqueOrThrow({
    where: { id: invoice.id },
    include: { emitter: true },
  });
  await sendInvoiceWebhook({
    prisma: input.prisma,
    invoice: fresh,
    type: "invoice.cancelled",
    webhookUrl: input.webhookUrl,
    webhookSecret: input.webhookSecret,
    logger: input.logger,
  });
}

async function applyEmitResult(
  input: {
    prisma: PrismaClient;
    payload: EmitResultMessage;
    webhookUrl: string;
    webhookSecret: string;
    logger: Logger;
  },
  invoice: { id: string; status: string },
) {
  const now = new Date();
  const { payload } = input;

  if (payload.outcome === "PROCESSING" && payload.processing) {
    if (invoice.status === "PROCESSING") {
      await input.prisma.invoice.update({
        where: { id: invoice.id },
        data: { lastCheckedAt: now, checkCount: { increment: 1 }, providerRef: payload.processing.providerRef },
      });
      return;
    }
    const updated = await input.prisma.invoice.updateMany({
      where: { id: invoice.id, status: "PENDING" },
      data: {
        status: "PROCESSING",
        providerRef: payload.processing.providerRef,
        processingAt: now,
        lastCheckedAt: now,
        checkCount: { increment: 1 },
      },
    });
    if (updated.count > 0) {
      await input.prisma.invoiceEvent.create({
        data: { invoiceId: invoice.id, type: "PROCESSING", payload: payload as object },
      });
      const fresh = await input.prisma.invoice.findUniqueOrThrow({
        where: { id: invoice.id },
        include: { emitter: true },
      });
      await sendInvoiceWebhook({
        prisma: input.prisma,
        invoice: fresh,
        type: "invoice.processing",
        webhookUrl: input.webhookUrl,
        webhookSecret: input.webhookSecret,
        logger: input.logger,
      });
    }
    return;
  }

  if (payload.outcome === "AUTHORIZED" && payload.authorization) {
    const auth = payload.authorization;
    const updated = await input.prisma.invoice.updateMany({
      where: { id: invoice.id, status: { in: ["PENDING", "PROCESSING"] } },
      data: {
        status: "AUTHORIZED",
        number: auth.number,
        series: auth.series,
        accessKey: auth.accessKey,
        protocol: auth.protocol,
        providerRef: auth.providerRef,
        s3XmlKey: auth.s3XmlKey,
        s3PdfKey: auth.s3PdfKey,
        authorizedAt: new Date(auth.authorizedAt),
        lastCheckedAt: now,
        checkCount: { increment: 1 },
      },
    });
    if (updated.count > 0) {
      await input.prisma.invoiceEvent.create({
        data: { invoiceId: invoice.id, type: "AUTHORIZED", payload: payload as object },
      });
    }
    const fresh = await input.prisma.invoice.findUniqueOrThrow({
      where: { id: invoice.id },
      include: { emitter: true },
    });
    await sendInvoiceWebhook({
      prisma: input.prisma,
      invoice: fresh,
      type: "invoice.authorized",
      webhookUrl: input.webhookUrl,
      webhookSecret: input.webhookSecret,
      logger: input.logger,
    });
    return;
  }

  if (payload.outcome === "REJECTED") {
    const updated = await input.prisma.invoice.updateMany({
      where: { id: invoice.id, status: { in: ["PENDING", "PROCESSING"] } },
      data: {
        status: "REJECTED",
        rejectionCode: payload.rejection?.code,
        rejectionMessage: payload.rejection?.message,
        lastCheckedAt: now,
        checkCount: { increment: 1 },
      },
    });
    if (updated.count > 0) {
      await input.prisma.invoiceEvent.create({
        data: { invoiceId: invoice.id, type: "REJECTED", payload: payload as object },
      });
    }
    const fresh = await input.prisma.invoice.findUniqueOrThrow({
      where: { id: invoice.id },
      include: { emitter: true },
    });
    await sendInvoiceWebhook({
      prisma: input.prisma,
      invoice: fresh,
      type: "invoice.rejected",
      webhookUrl: input.webhookUrl,
      webhookSecret: input.webhookSecret,
      logger: input.logger,
    });
  }
}

export async function markError(input: {
  prisma: PrismaClient;
  invoiceId: string;
  reason: string;
  webhookUrl: string;
  webhookSecret: string;
  logger: Logger;
}) {
  const invoice = await input.prisma.invoice.findUnique({
    where: { id: input.invoiceId },
    include: { emitter: true },
  });
  if (!invoice) return;
  const updated = await input.prisma.invoice.updateMany({
    where: { id: invoice.id, status: "PENDING" },
    data: { status: "ERROR", rejectionMessage: input.reason },
  });
  if (updated.count > 0) {
    await input.prisma.invoiceEvent.create({
      data: { invoiceId: invoice.id, type: "ERROR", payload: { reason: input.reason } },
    });
  }
  const fresh = await input.prisma.invoice.findUniqueOrThrow({
    where: { id: invoice.id },
    include: { emitter: true },
  });
  await sendInvoiceWebhook({
    prisma: input.prisma,
    invoice: fresh,
    type: "invoice.error",
    webhookUrl: input.webhookUrl,
    webhookSecret: input.webhookSecret,
    logger: input.logger,
  });
}

async function sendInvoiceWebhook(input: {
  prisma: PrismaClient;
  invoice: {
    id: string;
    workspaceId: string;
    status: string;
    number: number | null;
    series: number | null;
    accessKey: string | null;
    protocol: string | null;
    totalValue: { toString(): string } | number;
    authorizedAt: Date | null;
    processingAt: Date | null;
    rejectionCode: string | null;
    rejectionMessage: string | null;
    originType: string | null;
    originId: string | null;
    requestPayload: unknown;
    emitter: { id: string; cnpj: string; legalName: string };
  };
  type: "invoice.authorized" | "invoice.rejected" | "invoice.error" | "invoice.cancelled" | "invoice.processing";
  webhookUrl: string;
  webhookSecret: string;
  logger: Logger;
}) {
  const recipientName =
    ((input.invoice.requestPayload as { recipient?: { name?: string } } | null)?.recipient?.name) ?? "";
  const payload = {
    eventId: webhookEventId(input.invoice.id, input.type),
    type: input.type,
    occurredAt: new Date().toISOString(),
    workspaceId: input.invoice.workspaceId,
    data: {
      invoiceId: input.invoice.id,
      emitterId: input.invoice.emitter.id,
      emitterCnpj: input.invoice.emitter.cnpj,
      emitterName: input.invoice.emitter.legalName,
      recipientName,
      status: input.invoice.status,
      number: input.invoice.number,
      series: input.invoice.series,
      accessKey: input.invoice.accessKey,
      protocol: input.invoice.protocol,
      totalValue: Number(input.invoice.totalValue),
      authorizedAt: input.invoice.authorizedAt?.toISOString() ?? null,
      processingAt: input.invoice.processingAt?.toISOString() ?? null,
      rejection: input.invoice.rejectionMessage
        ? { code: input.invoice.rejectionCode ?? "ERROR", message: input.invoice.rejectionMessage }
        : null,
      origin: { type: input.invoice.originType, id: input.invoice.originId },
    },
  };
  const ok = await postWebhook(input.webhookUrl, input.webhookSecret, payload);
  await input.prisma.invoiceEvent.create({
    data: {
      invoiceId: input.invoice.id,
      type: ok ? "WEBHOOK_SENT" : "WEBHOOK_FAILED",
      payload,
    },
  });
  if (!ok) {
    input.logger.error({ invoiceId: input.invoice.id }, "webhook failed");
    throw new Error("webhook failed");
  }
}
