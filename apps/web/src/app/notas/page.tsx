"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "../../lib/api";

type Nota = {
  id: string;
  status: string;
  emitterName: string;
  recipientName: string;
  totalValue: string;
  createdAt: string;
};

export default function NotasPage() {
  const [items, setItems] = useState<Nota[]>([]);
  useEffect(() => {
    void api<Nota[]>("/notas").then(setItems);
  }, []);
  return (
    <div>
      <h1>Notas</h1>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Emitente</th>
            <th>Destinatário</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.status}</td>
              <td>{item.emitterName}</td>
              <td>{item.recipientName}</td>
              <td>{item.totalValue}</td>
              <td>
                <Link href={`/notas/${item.id}`}>detalhe</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
