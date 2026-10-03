import { v5 as uuidv5 } from "uuid";
import { buildAccessKey } from "../../domain/access-key";
import { stableHashNumber } from "../../hash";
import type {
  CancelInput,
  CancelResult,
  CheckStatusInput,
  EmitInput,
  EmitResult,
  FiscalProvider,
} from "../fiscal-provider";
import { buildPdf, buildXml } from "./artifacts";
import { bumpFakeCheck, getFakeState, putFakeState } from "./fake-state";

const NAMESPACE = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";

export class TransientProviderError extends Error {
  constructor(message = "transient provider failure") {
    super(message);
    this.name = "TransientProviderError";
  }
}

export class FakeProvider implements FiscalProvider {
  async emit(input: EmitInput): Promise<EmitResult> {
    const info = input.additionalInfo ?? "";
    if (info.includes("[FAKE:ERROR]")) {
      throw new TransientProviderError();
    }
    if (info.includes("[FAKE:REJECT]")) {
      await sleep(500);
      return {
        outcome: "REJECTED",
        code: "233",
        message: "IE do destinatário não cadastrada",
      };
    }
    if (info.includes("[FAKE:PROCESSING]")) {
      const providerRef = uuidv5(`fake-wm:${input.invoiceId}`, NAMESPACE);
      putFakeState({
        invoiceId: input.invoiceId,
        input,
        providerRef,
        checkCount: 0,
        authorizeAfterChecks: 1,
      });
      void scheduleFakeCallback(input.notificationUrl, providerRef);
      return { outcome: "PROCESSING", providerRef };
    }

    const delay = info.includes("[FAKE:SLOW]") ? 8000 : 1000 + Math.floor(Math.random() * 2000);
    await sleep(delay);
    return authorizeWithPdf(input);
  }

  async checkStatus(input: CheckStatusInput): Promise<EmitResult> {
    const state = bumpFakeCheck(input.providerRef) ?? getFakeState(input.providerRef);
    if (!state || state.invoiceId !== input.invoiceId) {
      return {
        outcome: "REJECTED",
        code: "404",
        message: "Nota não encontrada no provider (simulado)",
      };
    }
    if (state.checkCount >= state.authorizeAfterChecks) {
      return authorizeWithPdf(state.input);
    }
    return { outcome: "PROCESSING", providerRef: input.providerRef };
  }

  async cancel(input: CancelInput): Promise<CancelResult> {
    if (input.justification.includes("[FAKE:REJECT]")) {
      return { outcome: "REJECTED", code: "501", message: "Cancelamento rejeitado (simulado)" };
    }
    return { outcome: "CANCELLED", cancelledAt: new Date().toISOString() };
  }
}

async function scheduleFakeCallback(notificationUrl: string, providerRef: string) {
  if (!notificationUrl) return;
  await sleep(1500);
  try {
    await fetch(notificationUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ uuid: providerRef, motivo: "processamento (simulado)" }),
    });
  } catch {
    // localhost unreachable is ok in some dev setups
  }
}

async function authorizeWithPdf(input: EmitInput): Promise<EmitResult> {
  const number = stableHashNumber(`${input.invoiceId}:number`, 6) || 1;
  const cnf = String(stableHashNumber(`${input.invoiceId}:cnf`, 8)).padStart(8, "0");
  const protocol = String(stableHashNumber(`${input.invoiceId}:protocol`, 15)).padStart(15, "0");
  const issuedAt = new Date();
  const accessKey = buildAccessKey({
    uf: input.emitter.uf,
    issuedAt,
    cnpj: input.emitter.cnpj,
    series: input.emitter.series,
    number,
    cnf,
  });
  const xml = buildXml(input, { accessKey, protocol, number });
  const pdf = await buildPdf(input, { accessKey, protocol, number });
  return {
    outcome: "AUTHORIZED",
    number,
    series: input.emitter.series,
    accessKey,
    protocol,
    authorizedAt: issuedAt.toISOString(),
    providerRef: uuidv5(`fake-wm:${input.invoiceId}`, NAMESPACE),
    xml,
    pdf,
  };
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
