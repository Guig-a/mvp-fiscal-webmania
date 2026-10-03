"use client";

import { useEffect, useState } from "react";
import { api } from "../../lib/api";

type Product = { id: string; name: string; ncm: string; fiscalProfileId?: string };
type Profile = { id: string; name: string };

export default function ProdutosPage() {
  const [items, setItems] = useState<Product[]>([]);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [form, setForm] = useState({ name: "Novo produto", ncm: "84713012", fiscalProfileId: "" });

  async function load() {
    setItems(await api<Product[]>("/produtos"));
    setProfiles(await api<Profile[]>("/perfis-fiscais"));
  }

  useEffect(() => {
    void load();
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      <form
        className="card"
        onSubmit={async (e) => {
          e.preventDefault();
          await api("/produtos", {
            method: "POST",
            body: JSON.stringify({
              name: form.name,
              unit: "UN",
              price: 10,
              ncm: form.ncm,
              origin: 0,
              fiscalProfileId: form.fiscalProfileId || undefined,
            }),
          });
          await load();
        }}
      >
        <h2>Fiscal</h2>
        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input value={form.ncm} onChange={(e) => setForm({ ...form, ncm: e.target.value })} />
        <select value={form.fiscalProfileId} onChange={(e) => setForm({ ...form, fiscalProfileId: e.target.value })}>
          <option value="">perfil fiscal</option>
          {profiles.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
        <button type="submit">Cadastrar</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>NCM</th>
            <th>Perfil</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.ncm}</td>
              <td>{item.fiscalProfileId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
