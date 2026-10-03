import type {
  CancelInput,
  CancelResult,
  CheckStatusInput,
  EmitInput,
  EmitResult,
  FiscalProvider,
} from "../fiscal-provider";

export class NotImplemented extends Error {
  constructor(feature: string) {
    super(`${feature} is not implemented`);
    this.name = "NotImplemented";
  }
}

export class WebmaniaProvider implements FiscalProvider {
  async emit(_input: EmitInput): Promise<EmitResult> {
    throw new NotImplemented("webmania.emit");
  }

  async checkStatus(_input: CheckStatusInput): Promise<EmitResult> {
    throw new NotImplemented("webmania.checkStatus");
  }

  async cancel(_input: CancelInput): Promise<CancelResult> {
    throw new NotImplemented("webmania.cancel");
  }
}
