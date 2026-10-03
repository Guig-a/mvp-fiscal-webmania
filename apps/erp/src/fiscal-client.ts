import { Injectable } from "@nestjs/common";

@Injectable()
export class FiscalClient {
  private readonly base = process.env.FISCAL_API_URL ?? "http://localhost:3100";
  private readonly apiKey = process.env.FISCAL_API_KEY ?? "dev-fiscal-key";

  async request<T>(
    workspaceId: string,
    path: string,
    init: RequestInit & { idempotencyKey?: string } = {},
  ): Promise<{ status: number; data: T; headers: Headers }> {
    const headers = new Headers(init.headers);
    headers.set("x-api-key", this.apiKey);
    headers.set("x-workspace-id", workspaceId);
    if (init.body && !headers.has("content-type")) headers.set("content-type", "application/json");
    if (init.idempotencyKey) headers.set("Idempotency-Key", init.idempotencyKey);
    const response = await fetch(`${this.base}${path}`, { ...init, headers });
    const text = await response.text();
    const data = text ? (JSON.parse(text) as T) : ({} as T);
    return { status: response.status, data, headers: response.headers };
  }
}
