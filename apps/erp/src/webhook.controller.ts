import { Controller, Headers, HttpException, HttpStatus, Inject, Post, Req } from "@nestjs/common";
import { webhookPayloadSchema } from "@fiscal-mvp/contracts";
import type { RawBodyRequest } from "@nestjs/common";
import type { Request } from "express";
import { verifySignature } from "./hmac";
import { PrismaService } from "./prisma.service";

@Controller("fiscal")
export class WebhookController {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  @Post("webhook")
  async handle(
    @Req() req: RawBodyRequest<Request>,
    @Headers("x-fiscal-signature") signature: string | undefined,
    @Headers("x-fiscal-event-id") eventIdHeader: string | undefined,
  ) {
    const raw = req.rawBody?.toString("utf8") ?? JSON.stringify(req.body);
    if (!verifySignature(raw, signature, process.env.WEBHOOK_SECRET ?? "")) {
      throw new HttpException({ code: "INVALID_SIGNATURE", message: "Assinatura inválida", details: {} }, HttpStatus.FORBIDDEN);
    }
    const payload = webhookPayloadSchema.parse(JSON.parse(raw));
    const eventId = eventIdHeader ?? payload.eventId;
    const existing = await this.prisma.client.fiscalEventInbox.findUnique({ where: { eventId } });
    if (existing) return { ok: true, duplicate: true };

    await this.prisma.client.$transaction(async (tx) => {
      await tx.fiscalEventInbox.create({ data: { eventId } });
      await tx.notaFiscalRef.upsert({
        where: { fiscalInvoiceId: payload.data.invoiceId },
        update: {
          status: payload.data.status,
          emitterId: payload.data.emitterId,
          emitterCnpj: payload.data.emitterCnpj,
          emitterName: payload.data.emitterName,
          recipientName: payload.data.recipientName,
          number: payload.data.number ?? null,
          series: payload.data.series ?? null,
          accessKey: payload.data.accessKey ?? null,
          totalValue: payload.data.totalValue,
          rejectionMessage: payload.data.rejection?.message ?? null,
          authorizedAt: payload.data.authorizedAt ? new Date(payload.data.authorizedAt) : null,
        },
        create: {
          workspaceId: payload.workspaceId,
          fiscalInvoiceId: payload.data.invoiceId,
          emitterId: payload.data.emitterId,
          emitterCnpj: payload.data.emitterCnpj,
          emitterName: payload.data.emitterName,
          recipientName: payload.data.recipientName,
          status: payload.data.status,
          number: payload.data.number ?? null,
          series: payload.data.series ?? null,
          accessKey: payload.data.accessKey ?? null,
          totalValue: payload.data.totalValue,
          rejectionMessage: payload.data.rejection?.message ?? null,
          authorizedAt: payload.data.authorizedAt ? new Date(payload.data.authorizedAt) : null,
        },
      });
    });
    return { ok: true };
  }
}
