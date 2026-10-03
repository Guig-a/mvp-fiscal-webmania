import type { EmitInput } from "../fiscal-provider";

export type FakeNoteState = {
  invoiceId: string;
  input: EmitInput;
  providerRef: string;
  checkCount: number;
  authorizeAfterChecks: number;
};

const store = new Map<string, FakeNoteState>();

export function putFakeState(state: FakeNoteState) {
  store.set(state.providerRef, state);
}

export function getFakeState(providerRef: string): FakeNoteState | undefined {
  return store.get(providerRef);
}

export function bumpFakeCheck(providerRef: string): FakeNoteState | undefined {
  const current = store.get(providerRef);
  if (!current) return undefined;
  current.checkCount += 1;
  return current;
}
