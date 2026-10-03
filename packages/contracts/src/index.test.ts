import { describe, expect, it } from "vitest";
import { createInvoiceSchema } from "./api";
import { emitMessageSchema } from "./queue";
import { SEED } from "./seed";
import { buildWebmaniaCallbackToken, verifyWebmaniaCallbackToken } from "./webmania-callback-token";

describe("contracts", () => {
  it("parses invoice payload", () => {
    const parsed = createInvoiceSchema.parse({
      emitterId: SEED.emitters.sp,
      operation: "VENDA",
      purpose: 1,
      origin: { type: null, id: null },
      recipient: {
        document: "12345678000195",
        name: "Cliente",
        ie: null,
        ieIndicator: 9,
        email: "cliente@exemplo.com",
        address: {
          street: "Rua A",
          number: "100",
          district: "Centro",
          city: "São Paulo",
          uf: "SP",
          zip: "01001000",
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
    });
    expect(parsed.items).toHaveLength(1);
  });

  it("accepts null emitter ie from JSON", () => {
    const parsed = emitMessageSchema.parse({
      version: 1,
      messageType: "EMIT",
      messageId: SEED.emitters.sp,
      invoiceId: SEED.emitters.rj,
      workspaceId: SEED.workspaces.a,
      enqueuedAt: new Date().toISOString(),
      emitter: {
        id: SEED.emitters.sp,
        cnpj: "11444777000161",
        legalName: "Emitente",
        ie: null,
        crt: 1,
        uf: "SP",
        environment: "HOMOLOGACAO",
        series: 1,
      },
      credentialRef: "/fiscal/ws/e/webmania",
      recipient: {},
      items: [],
      payments: [],
      freight: {},
      additionalInfo: "",
      totalValue: 200,
    });
    expect(parsed.emitter.ie).toBeNull();
  });

  it("round-trips webmania callback token", () => {
    const claims = {
      invoiceId: "11111111-1111-1111-1111-111111111111",
      workspaceId: SEED.workspaces.a,
      emitterId: SEED.emitters.sp,
      credentialRef: "/fiscal/ws/a/webmania",
      emitterCnpj: "11444777000161",
    };
    const token = buildWebmaniaCallbackToken(claims, "secret");
    expect(verifyWebmaniaCallbackToken(token, "secret")).toEqual(claims);
    expect(verifyWebmaniaCallbackToken(token, "wrong")).toBeNull();
  });

  it("requires emit message version", () => {
    expect(() =>
      emitMessageSchema.parse({
        version: 2,
        messageType: "EMIT",
      }),
    ).toThrow();
  });
});
