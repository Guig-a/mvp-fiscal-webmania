"use client";

import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/api";

type Entry = {
  id: string;
  description: string;
  amount: string;
  kind: string;
  notas?: Array<{ notaFiscalRef: { status: string; recipientName: string; number: number | null } }>;
};
type Nota = {
  id: string;
  status: string;
  recipientName: string;
  number: number | null;
  createdAt: string;
};

function notaLabel(nota: Nota) {
  const when = new Date(nota.createdAt).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" });
  const num = nota.number != null ? ` nº ${nota.number}` : "";
  return `${nota.status}${num} · ${nota.recipientName || "—"} · ${when}`;
}

export default function LancamentosPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [notas, setNotas] = useState<Nota[]>([]);
  const [description, setDescription] = useState("Receita avulsa");
  const [amount, setAmount] = useState(200);
  const [notaId, setNotaId] = useState("");

  const loadNotas = useCallback(async () => {
    setNotas(await api<Nota[]>("/notas"));
  }, []);

  async function load() {
    setEntries(await api<Entry[]>("/lancamentos"));
    await loadNotas();
  }

  useEffect(() => {
    void load();
  }, [loadNotas]);

  useEffect(() => {
    const onFocus = () => void loadNotas();
    window.addEventListener("focus", onFocus);
    return () => window.removeEventListener("focus", onFocus);
  }, [loadNotas]);

  return (
    <div>
      <h1>Lançamentos</h1>
      <form
        className="card"
        onSubmit={async (e) => {
          e.preventDefault();
          const created = await api<{ id: string }>("/lancamentos", {
            method: "POST",
            body: JSON.stringify({
              kind: "INCOME",
              description,
              amount,
              dueDate: new Date().toISOString(),
              status: "OPEN",
            }),
          });
          if (notaId) {
            await api(`/lancamentos/${created.id}/notas/${notaId}`, { method: "POST" });
          }
          await load();
        }}
      >
        <input value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
        <select
          value={notaId}
          onFocus={() => void loadNotas()}
          onChange={(e) => setNotaId(e.target.value)}
        >
          <option value="">vincular nota (opcional)</option>
          {notas.map((nota) => (
            <option key={nota.id} value={nota.id}>
              {notaLabel(nota)}
            </option>
          ))}
        </select>
        <button type="button" onClick={() => void loadNotas()}>
          Atualizar lista de notas
        </button>
        <button type="submit">Salvar</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Tipo</th>
            <th>Notas vinculadas</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.description}</td>
              <td>{entry.amount}</td>
              <td>{entry.kind}</td>
              <td>
                {entry.notas?.length
                  ? entry.notas.map((link, index) => (
                      <span key={`${entry.id}-nota-${index}`}>
                        {link.notaFiscalRef.status} {link.notaFiscalRef.recipientName}
                        {link.notaFiscalRef.number != null ? ` (#${link.notaFiscalRef.number})` : ""}
                        <br />
                      </span>
                    ))
                  : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
