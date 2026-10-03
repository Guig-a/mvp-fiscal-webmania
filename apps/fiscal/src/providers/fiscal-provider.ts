export type EmitInput = {
  invoiceId: string;
  additionalInfo: string;
  notificationUrl: string;
  emitter: {
    cnpj: string;
    legalName: string;
    ie?: string;
    uf: string;
    environment: "HOMOLOGACAO" | "PRODUCAO";
    series: number;
  };
  recipient: Record<string, unknown>;
  items: Array<Record<string, unknown>>;
  totalValue: number;
};

export type AuthorizedEmitResult = {
  outcome: "AUTHORIZED";
  number: number;
  series: number;
  accessKey: string;
  protocol: string;
  authorizedAt: string;
  providerRef: string;
  xml: string;
  pdf: Buffer;
};

export type RejectedEmitResult = {
  outcome: "REJECTED";
  code: string;
  message: string;
};

export type ProcessingEmitResult = {
  outcome: "PROCESSING";
  providerRef: string;
};

export type EmitResult = AuthorizedEmitResult | RejectedEmitResult | ProcessingEmitResult;

export type CheckStatusInput = {
  invoiceId: string;
  providerRef: string;
};

export type CancelInput = {
  invoiceId: string;
  accessKey: string;
  justification: string;
};

export type CancelResult =
  | { outcome: "CANCELLED"; cancelledAt: string }
  | { outcome: "REJECTED"; code: string; message: string };

export interface FiscalProvider {
  emit(input: EmitInput): Promise<EmitResult>;
  checkStatus(input: CheckStatusInput): Promise<EmitResult>;
  cancel(input: CancelInput): Promise<CancelResult>;
}
