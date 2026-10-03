import { createHmac } from "node:crypto";
import { v5 as uuidv5 } from "uuid";

const NAMESPACE = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";

export function signWebhook(body: string, secret: string): string {
  const hex = createHmac("sha256", secret).update(body).digest("hex");
  return `sha256=${hex}`;
}

export function webhookEventId(invoiceId: string, type: string): string {
  return uuidv5(`${invoiceId}+${type}`, NAMESPACE);
}

export async function postWebhook(url: string, secret: string, payload: unknown): Promise<boolean> {
  const body = JSON.stringify(payload);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-fiscal-signature": signWebhook(body, secret),
      "x-fiscal-event-id": (payload as { eventId: string }).eventId,
      "x-workspace-id": (payload as { workspaceId?: string }).workspaceId ?? "",
    },
    body,
  });
  return response.ok;
}
