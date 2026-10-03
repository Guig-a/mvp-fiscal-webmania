const BASE = process.env.NEXT_PUBLIC_ERP_API_URL ?? "http://localhost:3000";

export function workspace(): string {
  if (typeof window === "undefined") return process.env.NEXT_PUBLIC_DEFAULT_WORKSPACE ?? "ws_demo_a";
  return localStorage.getItem("workspace") ?? process.env.NEXT_PUBLIC_DEFAULT_WORKSPACE ?? "ws_demo_a";
}

export async function api<T>(path: string, init: RequestInit & { idempotencyKey?: string } = {}): Promise<T> {
  const headers = new Headers(init.headers);
  headers.set("x-workspace-id", workspace());
  if (init.body && !headers.has("content-type")) headers.set("content-type", "application/json");
  if (init.idempotencyKey) headers.set("Idempotency-Key", init.idempotencyKey);
  const res = await fetch(`${BASE}${path}`, { ...init, headers });
  if (res.status === 302) return { url: res.headers.get("location") } as T;
  const data = await res.json();
  if (!res.ok) throw data;
  return data as T;
}
