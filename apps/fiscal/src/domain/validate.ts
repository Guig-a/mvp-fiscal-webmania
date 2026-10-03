import type { CreateInvoiceInput } from "@fiscal-mvp/contracts";
import { isValidDocument } from "./documents";
import { resolveRule, type FiscalRuleLike } from "./resolve-rule";

export type ValidationIssue = {
  field: string;
  code: string;
  message: string;
};

export type EmitterLike = {
  id: string;
  workspaceId: string;
  active: boolean;
  uf: string;
  environment: "HOMOLOGACAO" | "PRODUCAO";
};

export type ProfileLike = {
  id: string;
  workspaceId: string;
  active: boolean;
  rules: FiscalRuleLike[];
};

export type ValidateContext = {
  workspaceId: string;
  emitter: EmitterLike | null;
  profiles: Record<string, ProfileLike | undefined>;
};

export function itemTotal(item: CreateInvoiceInput["items"][number]): number {
  return Number((item.quantity * item.unitPrice - item.discount).toFixed(2));
}

export function invoiceTotal(items: CreateInvoiceInput["items"]): number {
  return Number(items.reduce((sum, item) => sum + itemTotal(item), 0).toFixed(2));
}

export function validateInvoice(input: CreateInvoiceInput, ctx: ValidateContext) {
  const errors: ValidationIssue[] = [];
  const warnings: ValidationIssue[] = [];
  const previewItems: Array<{ index: number; cfop?: string; taxCode?: string }> = [];

  if (!ctx.emitter || ctx.emitter.workspaceId !== ctx.workspaceId) {
    errors.push({
      field: "emitterId",
      code: "EMITTER_NOT_FOUND",
      message: "Emitente não encontrado neste workspace",
    });
  } else if (!ctx.emitter.active) {
    errors.push({
      field: "emitterId",
      code: "EMITTER_INACTIVE",
      message: "Emitente inativo",
    });
  } else if (ctx.emitter.environment === "PRODUCAO") {
    warnings.push({
      field: "emitterId",
      code: "PRODUCTION_ENVIRONMENT",
      message: "Emitente configurado em PRODUCAO",
    });
  }

  if (!isValidDocument(input.recipient.document)) {
    errors.push({
      field: "recipient.document",
      code: "INVALID_DOCUMENT",
      message: "Documento do destinatário inválido",
    });
  }

  if (input.items.length < 1) {
    errors.push({ field: "items", code: "INVALID_ITEM", message: "Informe ao menos um item" });
  }

  input.items.forEach((item, index) => {
    if (item.quantity <= 0 || !/^\d{8}$/.test(item.ncm)) {
      errors.push({
        field: `items[${index}]`,
        code: "INVALID_ITEM",
        message: "Item inválido",
      });
    }
    const profile = ctx.profiles[item.fiscalProfileId];
    if (!profile || profile.workspaceId !== ctx.workspaceId || !profile.active) {
      errors.push({
        field: `items[${index}].fiscalProfileId`,
        code: "PROFILE_NOT_FOUND",
        message: "Perfil fiscal não encontrado",
      });
      previewItems.push({ index });
      return;
    }
    const rule = ctx.emitter
      ? resolveRule({
          rules: profile.rules,
          operation: input.operation,
          ufOrigin: ctx.emitter.uf,
          ufDestination: input.recipient.address.uf,
        })
      : null;
    if (!rule) {
      errors.push({
        field: `items[${index}].fiscalProfileId`,
        code: "PROFILE_WITHOUT_RULE",
        message: `Sem regra para ${input.operation} ${ctx.emitter?.uf ?? "??"}→${input.recipient.address.uf}`,
      });
      previewItems.push({ index });
      return;
    }
    previewItems.push({ index, cfop: rule.cfop, taxCode: rule.taxCode });
  });

  const total = invoiceTotal(input.items);
  const payments = Number(input.payments.reduce((sum, p) => sum + p.amount, 0).toFixed(2));
  if (payments !== total) {
    errors.push({
      field: "payments",
      code: "PAYMENT_MISMATCH",
      message: "Soma dos pagamentos diferente do total",
    });
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    preview: { items: previewItems, total },
  };
}
