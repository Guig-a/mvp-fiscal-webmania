import { createHmac } from "node:crypto";
import { describe, expect, it } from "vitest";
import { verifySignature } from "./hmac";

describe("verifySignature", () => {
  it("accepts matching hmac", () => {
    const body = '{"ok":true}';
    const header = `sha256=${createHmac("sha256", "secret").update(body).digest("hex")}`;
    expect(verifySignature(body, header, "secret")).toBe(true);
    expect(verifySignature(body, header, "other")).toBe(false);
  });
});
