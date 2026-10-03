import type { FiscalProvider } from "./fiscal-provider";
import { FakeProvider } from "./fake/fake-provider";
import { WebmaniaProvider } from "./webmania/webmania-provider";

export function createFiscalProvider(name = process.env.FISCAL_PROVIDER ?? "fake"): FiscalProvider {
  switch (name) {
    case "fake":
      return new FakeProvider();
    case "webmania":
      return new WebmaniaProvider();
    default: {
      const exhaustive: never = name as never;
      throw new Error(`Unknown provider ${String(exhaustive)}`);
    }
  }
}
