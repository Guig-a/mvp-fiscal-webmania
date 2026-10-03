import { z } from "zod";

export const workspaceIdSchema = z.string().min(1);
export const uuidSchema = z.string().uuid();
export const cnpjSchema = z.string().regex(/^\d{14}$/);
export const cpfSchema = z.string().regex(/^\d{11}$/);
export const documentSchema = z.string().regex(/^\d{11}$|^\d{14}$/);
export const ufSchema = z.string().length(2);
export const ncmSchema = z.string().regex(/^\d{8}$/);
export const environmentSchema = z.enum(["HOMOLOGACAO", "PRODUCAO"]);
export const invoiceStatusSchema = z.enum([
  "PENDING",
  "PROCESSING",
  "AUTHORIZED",
  "REJECTED",
  "ERROR",
  "CANCELLED",
]);
export const operationSchema = z.literal("VENDA");
export const purposeSchema = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
]);

export const addressSchema = z.object({
  street: z.string().min(1),
  number: z.string().min(1),
  district: z.string().min(1),
  city: z.string().min(1),
  uf: ufSchema,
  zip: z.string().regex(/^\d{8}$/),
  complement: z.string().optional(),
});

export const apiErrorSchema = z.object({
  code: z.string(),
  message: z.string(),
  details: z.record(z.unknown()).default({}),
});

export type WorkspaceId = z.infer<typeof workspaceIdSchema>;
export type InvoiceStatus = z.infer<typeof invoiceStatusSchema>;
export type Environment = z.infer<typeof environmentSchema>;
export type Address = z.infer<typeof addressSchema>;
export type ApiError = z.infer<typeof apiErrorSchema>;
