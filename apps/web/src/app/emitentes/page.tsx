"use client";

import { useEffect, useState } from "react";
import { api } from "../../lib/api";

type Emitter = {
  id: string;
  legalName: string;
  cnpj: string;
  uf: string;
  environment: string;
  active: boolean;
};

export default function EmitentesPage() {
  const [items, setItems] = useState<Emitter[]>([]);
  const [form, setForm] = useState({
    cnpj: "",
    legalName: "",
    uf: "SP",
    environment: "HOMOLOGACAO",
  });

  async function load() {
    setItems(await api<Emitter[]>("/emitentes"));
  }

  useEffect(() => {
    void load();
  }, []);

  return (
    <div>
      <h1>Emitentes</h1>
      <form
        className="card"
        onSubmit={async (e) => {
          e.preventDefault();
          await api("/emitentes", {
            method: "POST",
            body: JSON.stringify({
              ...form,
              crt: 1,
              series: 1,
              address: {
                street: "Rua A",
                number: "1",
                district: "Centro",
                city: "São Paulo",
                uf: form.uf,
                zip: "01001000",
              },
              credentials: {
                consumerKey: "k",
                consumerSecret: "s",
                accessToken: "t",
                accessTokenSecret: "ts",
              },
            }),
          });
          await load();
        }}
      >
        <input placeholder="CNPJ" value={form.cnpj} onChange={(e) => setForm({ ...form, cnpj: e.target.value })} />
        <input placeholder="Razão social" value={form.legalName} onChange={(e) => setForm({ ...form, legalName: e.target.value })} />
        <select value={form.uf} onChange={(e) => setForm({ ...form, uf: e.target.value })}>
          <option>SP</option>
          <option>RJ</option>
          <option>MG</option>
        </select>
        <select value={form.environment} onChange={(e) => setForm({ ...form, environment: e.target.value })}>
          <option value="HOMOLOGACAO">HOMOLOGACAO</option>
          <option value="PRODUCAO">PRODUCAO</option>
        </select>
        <button type="submit">Cadastrar</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CNPJ</th>
            <th>UF</th>
            <th>Ambiente</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.legalName}</td>
              <td>{item.cnpj}</td>
              <td>{item.uf}</td>
              <td>{item.environment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
