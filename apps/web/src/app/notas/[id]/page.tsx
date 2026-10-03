"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { api } from "../../../lib/api";

type Nota = {
  id: string;
  status: string;
  rejectionMessage?: string | null;
  accessKey?: string | null;
  number?: number | null;
  createdAt?: string;
  updatedAt?: string;
};
type Event = { id: string; type: string; occurredAt: string };

function minutesSince(iso: string | undefined) {
  if (!iso) return null;
  const diff = Date.now() - new Date(iso).getTime();
  return Math.max(0, Math.floor(diff / 60000));
}

export default function NotaDetailPage() {
  const params = useParams<{ id: string }>();
  const [nota, setNota] = useState<Nota | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [checking, setChecking] = useState(false);

  async function load() {
    const current = await api<Nota>(`/notas/${params.id}`);
    setNota(current);
    setEvents(await api<Event[]>(`/notas/${params.id}/eventos`));
  }

  async function download(id: string, kind: "xml" | "pdf") {
    const file = await api<{ url: string }>(`/notas/${id}/arquivos/${kind}?json=1`);
    window.open(file.url, "_blank");
  }

  async function consultarStatus() {
    setChecking(true);
    try {
      await api(`/notas/${params.id}/check-status`, { method: "POST" });
      await load();
    } finally {
      setChecking(false);
    }
  }

  useEffect(() => {
    void load();
    const timer = setInterval(() => void load(), 2000);
    return () => clearInterval(timer);
  }, [params.id]);

  if (!nota) return <p>Carregando...</p>;

  const processingMinutes = nota.status === "PROCESSING" ? minutesSince(nota.updatedAt ?? nota.createdAt) : null;

  return (
    <div>
      <h1>Nota {nota.id}</h1>
      <div className="badge">{nota.status}</div>
      {nota.status === "PROCESSING" && processingMinutes !== null && (
        <p>Processando há {processingMinutes} min</p>
      )}
      {nota.rejectionMessage && <p className="error">{nota.rejectionMessage}</p>}
      <p>Número: {nota.number ?? "-"}</p>
      <p>Chave: {nota.accessKey ?? "-"}</p>
      <p>
        <button type="button" onClick={() => void download(nota.id, "xml")}>
          XML
        </button>{" "}
        <button type="button" onClick={() => void download(nota.id, "pdf")}>
          PDF
        </button>
      </p>
      {nota.status === "PROCESSING" && (
        <p>
          <button type="button" disabled={checking} onClick={() => void consultarStatus()}>
            {checking ? "Consultando…" : "Consultar status agora"}
          </button>
        </p>
      )}
      {(nota.status === "REJECTED" || nota.status === "ERROR") && (
        <Link href={`/notas/nova?from=${nota.id}`}>Corrigir e reenviar</Link>
      )}
      {nota.status === "PENDING" && <p>Aguarde o processamento.</p>}
      <h2>Timeline</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.occurredAt} — {event.type}
          </li>
        ))}
      </ul>
    </div>
  );
}
