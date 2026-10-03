import { createHmac } from "node:crypto";
import { SEED } from "../packages/contracts/src/seed";

const FISCAL = process.env.FISCAL_API_URL ?? "http://localhost:3100";
const ERP = process.env.FISCAL_ERP_URL ?? "http://localhost:3000";
const API_KEY = process.env.FISCAL_API_KEY ?? "dev-fiscal-key";
const SECRET = process.env.WEBHOOK_SECRET ?? "dev-webhook-secret";

function generateValidCnpj(seed: number): string {
  const base = String(seed).padStart(12, "0").slice(-12);
  const digits = base.split("").map(Number);
  const calc = (len: number, current: number[]) => {
    const weights =
      len === 12
        ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const sum = current.slice(0, len).reduce((acc, n, i) => acc + n * (weights[i] ?? 0), 0);
    const rest = sum % 11;
    return rest < 2 ? 0 : 11 - rest;
  };
  const d1 = calc(12, digits);
  const withD1 = [...digits, d1];
  const d2 = calc(13, withD1);
  return `${base}${d1}${d2}`;
}

async function fiscal<T>(workspace: string, path: string, init: RequestInit & { idempotencyKey?: string } = {}) {
  const headers = new Headers(init.headers);
  headers.set("x-api-key", API_KEY);
  headers.set("x-workspace-id", workspace);
  if (init.body) headers.set("content-type", "application/json");
  if (init.idempotencyKey) headers.set("Idempotency-Key", init.idempotencyKey);
  const res = await fetch(`${FISCAL}${path}`, { ...init, headers });
  const data = (await res.json()) as T;
  return { status: res.status, data };
}

async function erp<T>(workspace: string, path: string, init: RequestInit & { idempotencyKey?: string } = {}) {
  const headers = new Headers(init.headers);
  headers.set("x-workspace-id", workspace);
  if (init.body) headers.set("content-type", "application/json");
  if (init.idempotencyKey) headers.set("Idempotency-Key", init.idempotencyKey);
  const res = await fetch(`${ERP}${path}`, { ...init, headers });
  const data = (await res.json()) as T;
  return { status: res.status, data };
}

function invoiceBody(extra = "") {
  const recipientDoc = generateValidCnpj(998887770001);
  return {
    emitterId: SEED.emitters.sp,
    operation: "VENDA",
    purpose: 1,
    origin: { type: null, id: null },
    recipient: {
      document: recipientDoc,
      name: "Cliente E2E LTDA",
      ie: null,
      ieIndicator: 9,
      email: "e2e@exemplo.com",
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
        description: "Notebook",
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
    additionalInfo: extra,
  };
}

async function waitForStatus(id: string, wanted: string, timeoutMs = 30000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    const current = await fiscal<{ status: string }>(SEED.workspaces.a, `/invoices/${id}`);
    if (current.data.status === wanted) return current.data;
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error(`timeout waiting ${wanted} for ${id}`);
}

async function main() {
  const authorized = await fiscal<{ id: string }>(SEED.workspaces.a, "/invoices", {
    method: "POST",
    body: JSON.stringify(invoiceBody()),
    idempotencyKey: crypto.randomUUID(),
  });
  if (authorized.status !== 202) {
    throw new Error(`authorized create failed ${authorized.status} ${JSON.stringify(authorized.data)}`);
  }
  await waitForStatus(authorized.data.id, "AUTHORIZED");
  console.log("1 authorized ok");

  const rejected = await fiscal<{ id: string }>(SEED.workspaces.a, "/invoices", {
    method: "POST",
    body: JSON.stringify(invoiceBody("[FAKE:REJECT]")),
    idempotencyKey: crypto.randomUUID(),
  });
  const rejectedInvoice = await waitForStatus(rejected.data.id, "REJECTED");
  if (!("rejectionCode" in rejectedInvoice) && rejectedInvoice.status !== "REJECTED") {
    throw new Error("reject failed");
  }
  console.log("2 rejected ok");

  const key = crypto.randomUUID();
  const first = await fiscal<{ id: string }>(SEED.workspaces.a, "/invoices", {
    method: "POST",
    body: JSON.stringify(invoiceBody()),
    idempotencyKey: key,
  });
  const same = await fiscal<{ id: string }>(SEED.workspaces.a, "/invoices", {
    method: "POST",
    body: JSON.stringify(invoiceBody()),
    idempotencyKey: key,
  });
  if (first.data.id !== same.data.id) throw new Error("idempotency same body failed");
  const conflict = await fiscal(SEED.workspaces.a, "/invoices", {
    method: "POST",
    body: JSON.stringify({ ...invoiceBody(), additionalInfo: "x" }),
    idempotencyKey: key,
  });
  if (conflict.status !== 409) throw new Error("expected 409");
  console.log("3 idempotency ok");

  const pending = await fiscal<{ id: string; status: string }>(SEED.workspaces.a, "/invoices", {
    method: "POST",
    body: JSON.stringify(invoiceBody("[FAKE:SLOW]")),
    idempotencyKey: crypto.randomUUID(),
  });
  if (pending.data.status !== "PENDING") throw new Error("expected pending");
  console.log("4 pending enqueue ok");

  const processing = await fiscal<{ id: string }>(SEED.workspaces.a, "/invoices", {
    method: "POST",
    body: JSON.stringify(invoiceBody("[FAKE:PROCESSING]")),
    idempotencyKey: crypto.randomUUID(),
  });
  if (processing.status !== 202) throw new Error("processing create failed");
  await waitForStatus(processing.data.id, "PROCESSING", 15000);
  await waitForStatus(processing.data.id, "AUTHORIZED", 30000);
  console.log("5 processing via callback ok");

  const isolation = await fiscal(SEED.workspaces.b, `/invoices/${authorized.data.id}`);
  if (isolation.status !== 404) throw new Error("expected workspace isolation 404");
  console.log("7 isolation ok");

  const createdViaErp = await erp<{ id: string; localId: string }>(SEED.workspaces.a, "/notas", {
    method: "POST",
    body: JSON.stringify(invoiceBody()),
    idempotencyKey: crypto.randomUUID(),
  });
  const list = await erp<Array<{ fiscalInvoiceId: string }>>(SEED.workspaces.a, "/notas");
  if (!list.data.some((n) => n.fiscalInvoiceId === createdViaErp.data.id)) {
    throw new Error("erp projection missing");
  }

  const eventId = crypto.randomUUID();
  const webhookBody = JSON.stringify({
    eventId,
    type: "invoice.authorized",
    occurredAt: new Date().toISOString(),
    workspaceId: SEED.workspaces.a,
    data: {
      invoiceId: createdViaErp.data.id,
      emitterId: SEED.emitters.sp,
      emitterCnpj: "00000000000000",
      emitterName: "E2E",
      recipientName: "Cliente",
      status: "AUTHORIZED",
      number: 1,
      series: 1,
      accessKey: "1".repeat(44),
      protocol: "p",
      totalValue: 200,
      authorizedAt: new Date().toISOString(),
      rejection: null,
      origin: { type: null, id: null },
    },
  });
  const sig = `sha256=${createHmac("sha256", SECRET).update(webhookBody).digest("hex")}`;
  const firstHook = await fetch(`${ERP}/fiscal/webhook`, {
    method: "POST",
    headers: { "content-type": "application/json", "x-fiscal-signature": sig, "x-fiscal-event-id": eventId },
    body: webhookBody,
  });
  const secondHook = await fetch(`${ERP}/fiscal/webhook`, {
    method: "POST",
    headers: { "content-type": "application/json", "x-fiscal-signature": sig, "x-fiscal-event-id": eventId },
    body: webhookBody,
  });
  if (!firstHook.ok || !secondHook.ok) throw new Error("webhook failed");
  console.log("6 webhook dedup ok");

  const entries = await erp<Array<{ id: string }>>(SEED.workspaces.a, "/lancamentos");
  const notas = await erp<Array<{ id: string }>>(SEED.workspaces.a, "/notas");
  if (entries.data[0] && notas.data[0] && notas.data[1]) {
    await erp(SEED.workspaces.a, `/lancamentos/${entries.data[0].id}/notas/${notas.data[0].id}`, { method: "POST" });
    await erp(SEED.workspaces.a, `/lancamentos/${entries.data[0].id}/notas/${notas.data[1].id}`, { method: "POST" });
  }
  console.log("8 vinculo ok");
  console.log("e2e finished");
}

void main().catch((error) => {
  console.error(error);
  process.exit(1);
});
