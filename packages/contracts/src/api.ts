import { z } from "zod";
import {
  addressSchema,
  cnpjSchema,
  documentSchema,
  environmentSchema,
  ncmSchema,
  operationSchema,
  purposeSchema,
  uuidSchema,
} from "./common.js";

export const credentialsSchema = z.object({
  consumerKey: z.string().min(1),
  consumerSecret: z.string().min(1),
  accessToken: z.string().min(1),
  accessTokenSecret: z.string().min(1),
});

export const createEmitterSchema = z.object({
  cnpj: cnpjSchema,
  legalName: z.string().min(1),
  tradeName: z.string().optional(),
  ie: z.string().optional(),
  im: z.string().optional(),
  crt: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  uf: z.string().length(2),
  address: addressSchema,
  environment: environmentSchema,
  series: z.number().int().positive().default(1),
  credentials: credentialsSchema,
});

export const patchEmitterSchema = z.object({
  legalName: z.string().min(1).optional(),
  tradeName: z.string().optional(),
  ie: z.string().optional(),
  im: z.string().optional(),
  active: z.boolean().optional(),
  series: z.number().int().positive().optional(),
});

export const createFiscalProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
});

export const createFiscalRuleSchema = z.object({
  operation: operationSchema,
  ufOrigin: z.string().length(2).nullable().optional(),
  ufDestination: z.string().length(2).nullable().optional(),
  cfop: z.string().min(4),
  taxCode: z.string().min(1),
  taxes: z.record(z.unknown()).optional(),
});

export const invoiceItemSchema = z.object({
  code: z.string().min(1),
  description: z.string().min(1),
  ncm: ncmSchema,
  cest: z.string().nullable().optional(),
  origin: z.number().int().min(0).max(8),
  fiscalProfileId: uuidSchema,
  unit: z.string().min(1),
  quantity: z.number().positive(),
  unitPrice: z.number().nonnegative(),
  discount: z.number().nonnegative().default(0),
});

export const invoicePaymentSchema = z.object({
  method: z.string().min(1),
  amount: z.number().nonnegative(),
});

export const createInvoiceSchema = z.object({
  emitterId: uuidSchema,
  operation: operationSchema,
  purpose: purposeSchema,
  origin: z
    .object({
      type: z.string().nullable(),
      id: z.string().nullable(),
    })
    .optional(),
  recipient: z.object({
    document: documentSchema,
    name: z.string().min(1),
    ie: z.string().nullable().optional(),
    ieIndicator: z.number().int(),
    email: z.string().email().optional(),
    address: addressSchema,
  }),
  items: z.array(invoiceItemSchema).min(1),
  payments: z.array(invoicePaymentSchema).min(1),
  freight: z.object({
    modality: z.number().int(),
  }),
  additionalInfo: z.string().optional().default(""),
});

export const cancelInvoiceSchema = z.object({
  justification: z.string().min(15),
});

export const validateErrorSchema = z.object({
  field: z.string(),
  code: z.string(),
  message: z.string(),
});

export const validateResponseSchema = z.object({
  valid: z.boolean(),
  errors: z.array(validateErrorSchema),
  warnings: z.array(validateErrorSchema),
  preview: z.object({
    items: z.array(
      z.object({
        index: z.number().int(),
        cfop: z.string().optional(),
        taxCode: z.string().optional(),
      }),
    ),
    total: z.number(),
  }),
});

export type CreateEmitterInput = z.infer<typeof createEmitterSchema>;
export type PatchEmitterInput = z.infer<typeof patchEmitterSchema>;
export type CreateFiscalProfileInput = z.infer<typeof createFiscalProfileSchema>;
export type CreateFiscalRuleInput = z.infer<typeof createFiscalRuleSchema>;
export type CreateInvoiceInput = z.infer<typeof createInvoiceSchema>;
export type CancelInvoiceInput = z.infer<typeof cancelInvoiceSchema>;
export type ValidateResponse = z.infer<typeof validateResponseSchema>;
