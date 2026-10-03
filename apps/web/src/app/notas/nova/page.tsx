"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { api } from "../../../lib/api";

type Emitter = { id: string; legalName: string; environment: string };
type Product = { id: string; name: string; ncm: string; unit: string; price: string; origin: number; fiscalProfileId: string };
type Preview = { valid: boolean; errors: Array<{ message: string }>; warnings: Array<{ message: string }>; preview: { items: Array<{ cfop?: string }>; total: number } };
type SourceNota = {
  status: string;
  requestPayload?: {
    emitterId?: string;
    additionalInfo?: string;
    items?: Array<{ quantity?: number; code?: string; description?: string }>;
  } | null;
};

export default function NovaNotaPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fromId = searchParams.get("from");
  const [emitters, setEmitters] = useState<Emitter[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [emitterId, setEmitterId] = useState("");
  const [productId, setProductId] = useState("");
  const [qty, setQty] = useState(2);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [preview, setPreview] = useState<Preview | null>(null);
  const [error, setError] = useState("");
  const [resendBlocked, setResendBlocked] = useState("");

  useEffect(() => {
    void (async () => {
      const [emitterRows, productRows] = await Promise.all([
        api<Emitter[]>("/emitentes"),
        api<Product[]>("/produtos"),
      ]);
      setEmitters(emitterRows);
      setProducts(productRows);
      let nextEmitter = emitterRows[0]?.id ?? "";
      let nextProduct = productRows[0]?.id ?? "";
      let nextQty = 2;
      let nextInfo = "";

      if (fromId) {
        const source = await api<SourceNota>(`/notas/${fromId}`);
        if (source.status === "PENDING" || source.status === "AUTHORIZED") {
          setResendBlocked(
            source.status === "PENDING"
              ? "Esta nota ainda está pendente. Não é possível reenviar sem criar outro registro."
              : "Nota autorizada é imutável. Crie uma nota nova só se for outra operação.",
          );
          return;
        }
        const payload = source.requestPayload;
        if (payload?.emitterId) nextEmitter = payload.emitterId;
        if (payload?.additionalInfo) nextInfo = payload.additionalInfo.replace(/\[FAKE:[A-Z]+\]/g, "").trim();
        const item = payload?.items?.[0];
        if (item?.quantity) nextQty = item.quantity;
        const matched = productRows.find((p) => p.name === item?.description || p.id.startsWith(item?.code ?? ""));
        if (matched) nextProduct = matched.id;
      }

      setEmitterId(nextEmitter);
      setProductId(nextProduct);
      setQty(nextQty);
      setAdditionalInfo(nextInfo);
    })();
  }, [fromId]);

  const emitter = emitters.find((e) => e.id === emitterId);
  const product = products.find((p) => p.id === productId);

  function payload() {
    const unitPrice = Number(product?.price ?? 0);
    const total = qty * unitPrice;
    return {
      emitterId,
      operation: "VENDA",
      purpose: 1,
      origin: { type: null, id: null },
      recipient: {
        document: "11444777000161",
        name: "Cliente Exemplo LTDA",
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
          code: product?.id.slice(0, 8) ?? "P001",
          description: product?.name ?? "Produto",
          ncm: product?.ncm ?? "84713012",
          cest: null,
          origin: product?.origin ?? 0,
          fiscalProfileId: product?.fiscalProfileId,
          unit: product?.unit ?? "UN",
          quantity: qty,
          unitPrice,
          discount: 0,
        },
      ],
      payments: [{ method: "01", amount: total }],
      freight: { modality: 9 },
      additionalInfo,
    };
  }

  return (
    <div>
      <h1>{fromId ? "Corrigir e reenviar" : "Nova nota avulsa"}</h1>
      <div className="badge">Ambiente: {emitter?.environment ?? "—"}</div>
      {resendBlocked && <p className="error">{resendBlocked}</p>}
      <form
        className="card"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>
          Emitente
          <select value={emitterId} onChange={(e) => setEmitterId(e.target.value)}>
            {emitters.map((item) => (
              <option key={item.id} value={item.id}>
                {item.legalName}
              </option>
            ))}
          </select>
        </label>
        <label>
          Produto
          <select value={productId} onChange={(e) => setProductId(e.target.value)}>
            {products.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Quantidade
          <input type="number" value={qty} onChange={(e) => setQty(Number(e.target.value))} />
        </label>
        <label>
          additionalInfo
          <input value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} placeholder="[FAKE:REJECT]" />
        </label>
        <button
          type="button"
          disabled={Boolean(resendBlocked)}
          onClick={async () => {
            setError("");
            try {
              setPreview(await api<Preview>("/notas/validar", { method: "POST", body: JSON.stringify(payload()) }));
            } catch (err) {
              setError(JSON.stringify(err));
            }
          }}
        >
          Revisar
        </button>
        <button
          type="button"
          disabled={Boolean(resendBlocked)}
          onClick={async () => {
            setError("");
            try {
              const created = await api<{ localId: string }>("/notas", {
                method: "POST",
                body: JSON.stringify(payload()),
                idempotencyKey: crypto.randomUUID(),
              });
              router.push(`/notas/${created.localId}`);
            } catch (err) {
              setError(JSON.stringify(err));
            }
          }}
        >
          Emitir
        </button>
      </form>
      {preview && (
        <div className="card">
          <p className={preview.valid ? "ok" : "error"}>{preview.valid ? "Válido" : "Inválido"}</p>
          <p>Total: {preview.preview.total}</p>
          <p>CFOP: {preview.preview.items.map((i) => i.cfop).join(", ")}</p>
          {preview.errors.map((e) => (
            <p className="error" key={e.message}>
              {e.message}
            </p>
          ))}
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
}
