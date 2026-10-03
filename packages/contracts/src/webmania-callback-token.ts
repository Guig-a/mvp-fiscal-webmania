import { createHmac, timingSafeEqual } from "node:crypto";

export type WebmaniaCallbackClaims = {
  invoiceId: string;
  workspaceId: string;
  emitterId: string;
  credentialRef: string;
  emitterCnpj: string;
};

function signPayload(payloadB64: string, secret: string): string {
  return createHmac("sha256", secret).update(payloadB64).digest("hex");
}

export function buildWebmaniaCallbackToken(claims: WebmaniaCallbackClaims, secret: string): string {
  const payloadB64 = Buffer.from(JSON.stringify(claims), "utf8").toString("base64url");
  return `${payloadB64}.${signPayload(payloadB64, secret)}`;
}

export function buildWebmaniaNotificationUrl(baseUrl: string, claims: WebmaniaCallbackClaims, secret: string): string {
  const base = baseUrl.replace(/\/$/, "");
  const token = buildWebmaniaCallbackToken(claims, secret);
  return `${base}/webhooks/webmania?t=${token}`;
}

export function verifyWebmaniaCallbackToken(token: string, secret: string): WebmaniaCallbackClaims | null {
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [payloadB64, sig] = parts;
  if (!payloadB64 || !sig) return null;
  const expected = signPayload(payloadB64, secret);
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  try {
    const claims = JSON.parse(Buffer.from(payloadB64, "base64url").toString("utf8")) as WebmaniaCallbackClaims;
    if (!claims.invoiceId || !claims.workspaceId || !claims.emitterId || !claims.credentialRef || !claims.emitterCnpj) {
      return null;
    }
    return claims;
  } catch {
    return null;
  }
}
