import { z } from "zod";
import { invoiceStatusSchema, uuidSchema } from "./common.js";

export const webhookEventTypeSchema = z.enum([
  "invoice.authorized",
  "invoice.rejected",
  "invoice.error",
  "invoice.cancelled",
  "invoice.processing",
]);

export const webhookPayloadSchema = z.object({
  eventId: uuidSchema,
  type: webhookEventTypeSchema,
  occurredAt: z.string(),
  workspaceId: z.string().min(1),
  data: z.object({
    invoiceId: uuidSchema,
    emitterId: uuidSchema,
    emitterCnpj: z.string(),
    emitterName: z.string(),
    recipientName: z.string(),
    status: invoiceStatusSchema,
    number: z.number().int().nullable().optional(),
    series: z.number().int().nullable().optional(),
    accessKey: z.string().nullable().optional(),
    protocol: z.string().nullable().optional(),
    totalValue: z.number(),
    authorizedAt: z.string().nullable().optional(),
    processingAt: z.string().nullable().optional(),
    rejection: z
      .object({
        code: z.string(),
        message: z.string(),
      })
      .nullable()
      .optional(),
    origin: z
      .object({
        type: z.string().nullable(),
        id: z.string().nullable(),
      })
      .optional(),
  }),
});

export type WebhookPayload = z.infer<typeof webhookPayloadSchema>;
export type WebhookEventType = z.infer<typeof webhookEventTypeSchema>;
