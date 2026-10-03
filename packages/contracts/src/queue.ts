import { z } from "zod";
import { environmentSchema, uuidSchema } from "./common.js";

export const emitMessageSchema = z.object({
  version: z.literal(1),
  messageType: z.literal("EMIT"),
  messageId: uuidSchema,
  invoiceId: uuidSchema,
  workspaceId: z.string().min(1),
  enqueuedAt: z.string(),
  emitter: z.object({
    id: uuidSchema,
    cnpj: z.string(),
    legalName: z.string(),
    ie: z.string().nullish(),
    crt: z.number().int(),
    uf: z.string(),
    environment: environmentSchema,
    series: z.number().int(),
  }),
  credentialRef: z.string(),
  recipient: z.record(z.unknown()),
  items: z.array(z.record(z.unknown())),
  payments: z.array(z.record(z.unknown())),
  freight: z.record(z.unknown()),
  additionalInfo: z.string().default(""),
  totalValue: z.number(),
});

export const checkStatusMessageSchema = z.object({
  version: z.literal(1),
  messageType: z.literal("CHECK_STATUS"),
  messageId: uuidSchema,
  invoiceId: uuidSchema,
  workspaceId: z.string().min(1),
  emitterId: uuidSchema,
  enqueuedAt: z.string(),
  providerRef: z.string().min(1),
  credentialRef: z.string(),
  emitterCnpj: z.string().min(1),
});

export const emitResultMessageSchema = z.object({
  version: z.literal(1),
  messageType: z.literal("EMIT_RESULT"),
  invoiceId: uuidSchema,
  workspaceId: z.string().min(1),
  outcome: z.enum(["AUTHORIZED", "REJECTED", "PROCESSING"]),
  startedAt: z.string(),
  finishedAt: z.string(),
  processing: z.object({ providerRef: z.string() }).nullable(),
  authorization: z
    .object({
      number: z.number().int(),
      series: z.number().int(),
      accessKey: z.string().length(44),
      protocol: z.string(),
      authorizedAt: z.string(),
      providerRef: z.string(),
      s3XmlKey: z.string(),
      s3PdfKey: z.string(),
    })
    .nullable(),
  rejection: z
    .object({
      code: z.string(),
      message: z.string(),
    })
    .nullable(),
});

export const cancelMessageSchema = z.object({
  version: z.literal(1),
  messageType: z.literal("CANCEL"),
  messageId: uuidSchema,
  invoiceId: uuidSchema,
  workspaceId: z.string().min(1),
  enqueuedAt: z.string(),
  justification: z.string().min(15),
  credentialRef: z.string(),
  accessKey: z.string(),
});

export const cancelResultMessageSchema = z.object({
  version: z.literal(1),
  messageType: z.literal("CANCEL_RESULT"),
  invoiceId: uuidSchema,
  workspaceId: z.string().min(1),
  outcome: z.enum(["CANCELLED", "REJECTED"]),
  startedAt: z.string(),
  finishedAt: z.string(),
  cancelledAt: z.string().nullable(),
  rejection: z
    .object({
      code: z.string(),
      message: z.string(),
    })
    .nullable(),
});

export const pedidoMessageSchema = z.discriminatedUnion("messageType", [
  emitMessageSchema,
  cancelMessageSchema,
  checkStatusMessageSchema,
]);

export const resultadoMessageSchema = z.discriminatedUnion("messageType", [
  emitResultMessageSchema,
  cancelResultMessageSchema,
]);

export type EmitMessage = z.infer<typeof emitMessageSchema>;
export type CheckStatusMessage = z.infer<typeof checkStatusMessageSchema>;
export type EmitResultMessage = z.infer<typeof emitResultMessageSchema>;
export type CancelMessage = z.infer<typeof cancelMessageSchema>;
export type CancelResultMessage = z.infer<typeof cancelResultMessageSchema>;
