import { describe, expect, it } from "vitest";
import { accessKeyCheckDigit, buildAccessKey } from "./access-key";

describe("access key", () => {
  it("computes modulo 11 DV", () => {
    const body = "3510071111111111111155001000000011100000001".slice(0, 43);
    const dv = accessKeyCheckDigit(body);
    expect(dv).toMatch(/^\d$/);
    expect(body + dv).toHaveLength(44);
  });

  it("builds 44-digit key", () => {
    const key = buildAccessKey({
      uf: "SP",
      issuedAt: new Date("2026-10-03T12:00:00Z"),
      cnpj: "11111111000191",
      series: 1,
      number: 123,
      cnf: "12345678",
    });
    expect(key).toHaveLength(44);
    expect(key.slice(0, 2)).toBe("35");
    expect(key.slice(20, 22)).toBe("55");
  });
});
