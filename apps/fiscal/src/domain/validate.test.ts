import { SEED, type CreateInvoiceInput } from "@fiscal-mvp/contracts";
import { describe, expect, it } from "vitest";
import { generateValidCnpj } from "./documents";
import { validateInvoice } from "./validate";

const cnpj = generateValidCnpj(112223330001);
const input: CreateInvoiceInput = {
  emitterId: SEED.emitters.sp,
  operation: "VENDA",
  purpose: 1,
  origin: { type: null, id: null },
  recipient: {
    document: cnpj,
    name: "Cliente",
    ie: null,
    ieIndicator: 9,
    email: "cliente@exemplo.com",
    address: {
      street: "Rua A",
      number: "100",
      district: "Centro",
      city: "Rio de Janeiro",
      uf: "RJ",
      zip: "20040020",
    },
  },
  items: [
    {
      code: "P001",
      description: "Produto",
      ncm: "84713012",
      cest: null,
      origin: 0,
      fiscalProfileId: SEED.profiles.resale,
      unit: "UN",
      quantity: 2,
      unitPrice: 100,
      discount: 0,
    },
  ],
  payments: [{ method: "01", amount: 200 }],
  freight: { modality: 9 },
  additionalInfo: "",
};

describe("validateInvoice", () => {
  it("resolves CFOP for interstate sale", () => {
    const result = validateInvoice(input, {
      workspaceId: SEED.workspaces.a,
      emitter: {
        id: SEED.emitters.sp,
        workspaceId: SEED.workspaces.a,
        active: true,
        uf: "SP",
        environment: "HOMOLOGACAO",
      },
      profiles: {
        [SEED.profiles.resale]: {
          id: SEED.profiles.resale,
          workspaceId: SEED.workspaces.a,
          active: true,
          rules: [
            {
              operation: "VENDA",
              ufOrigin: "SP",
              ufDestination: "SP",
              cfop: "5102",
              taxCode: "102",
            },
            {
              operation: "VENDA",
              ufOrigin: "SP",
              ufDestination: null,
              cfop: "6102",
              taxCode: "102",
            },
          ],
        },
      },
    });
    expect(result.valid).toBe(true);
    expect(result.preview.items[0]?.cfop).toBe("6102");
  });

  it("rejects invalid document and payment mismatch", () => {
    const result = validateInvoice(
      {
        ...input,
        recipient: { ...input.recipient, document: "12345678000199" },
        payments: [{ method: "01", amount: 10 }],
      },
      {
        workspaceId: SEED.workspaces.a,
        emitter: null,
        profiles: {},
      },
    );
    expect(result.errors.map((e) => e.code)).toEqual(
      expect.arrayContaining(["EMITTER_NOT_FOUND", "INVALID_DOCUMENT", "PAYMENT_MISMATCH"]),
    );
  });
});
