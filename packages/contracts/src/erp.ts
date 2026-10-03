import { z } from "zod";
import { ncmSchema, uuidSchema } from "./common.js";

export const createProductSchema = z.object({
  name: z.string().min(1),
  unit: z.string().min(1),
  price: z.number().nonnegative(),
  ncm: ncmSchema,
  cest: z.string().optional(),
  origin: z.number().int().min(0).max(8),
  fiscalProfileId: uuidSchema.optional(),
});

export const createFinancialEntrySchema = z.object({
  kind: z.enum(["INCOME", "EXPENSE"]),
  description: z.string().min(1),
  amount: z.number().positive(),
  dueDate: z.string(),
  status: z.enum(["OPEN", "PAID"]).default("OPEN"),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;
export type CreateFinancialEntryInput = z.infer<typeof createFinancialEntrySchema>;
