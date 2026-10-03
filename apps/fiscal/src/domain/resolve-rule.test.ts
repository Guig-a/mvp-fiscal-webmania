import { describe, expect, it } from "vitest";
import { resolveRule } from "./resolve-rule";

const rules = [
  { operation: "VENDA", ufOrigin: "SP", ufDestination: "SP", cfop: "5102", taxCode: "102" },
  { operation: "VENDA", ufOrigin: null, ufDestination: "RJ", cfop: "6102", taxCode: "102" },
  { operation: "VENDA", ufOrigin: null, ufDestination: null, cfop: "5102", taxCode: "102" },
];

describe("resolveRule", () => {
  it("prefers exact pair", () => {
    expect(resolveRule({ rules, operation: "VENDA", ufOrigin: "SP", ufDestination: "SP" })?.cfop).toBe(
      "5102",
    );
  });

  it("falls back to destination then generic", () => {
    expect(resolveRule({ rules, operation: "VENDA", ufOrigin: "MG", ufDestination: "RJ" })?.cfop).toBe(
      "6102",
    );
    expect(resolveRule({ rules, operation: "VENDA", ufOrigin: "MG", ufDestination: "BA" })?.cfop).toBe(
      "5102",
    );
  });
});
