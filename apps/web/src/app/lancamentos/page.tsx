"use client";

import { useEffect, useState } from "react";
import { api } from "../../lib/api";

type Entry = { id: string; description: string; amount: string; kind: string };
type Nota = { id: string; status: string; recipientName: string };

export default function LancamentosPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [notas, setNotas] = useState<Nota[]>([]);
  const [description, setDescription] = useState("Receita avulsa");
  const [amount, setAmount] = useState(200);
  const [notaId, setNotaId] = useState("");

  async function load() {
    setEntries(await api<Entry[]>("/lancamentos"));
    setNotas(await api<Nota[]>("/notas"));
  }

  useEffect(() => {
    void load();
  }, []);

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
        <select value={notaId} onChange={(e) => setNotaId(e.target.value)}>
          <option value="">vincular nota (opcional)</option>
          {notas.map((nota) => (
            <option key={nota.id} value={nota.id}>
              {nota.status} {nota.recipientName}
            </option>
          ))}
        </select>
        <button type="submit">Salvar</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.description}</td>
              <td>{entry.amount}</td>
              <td>{entry.kind}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
