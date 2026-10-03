export type FiscalRuleLike = {
  operation: string;
  ufOrigin: string | null;
  ufDestination: string | null;
  cfop: string;
  taxCode: string;
};

export function resolveRule(input: {
  rules: FiscalRuleLike[];
  operation: string;
  ufOrigin: string;
  ufDestination: string;
}): FiscalRuleLike | null {
  const candidates = input.rules.filter((rule) => rule.operation === input.operation);
  const exact = candidates.find(
    (rule) => rule.ufOrigin === input.ufOrigin && rule.ufDestination === input.ufDestination,
  );
  if (exact) return exact;
  const destOnly = candidates.find(
    (rule) => rule.ufOrigin == null && rule.ufDestination === input.ufDestination,
  );
  if (destOnly) return destOnly;
  const originOnly = candidates.find(
    (rule) => rule.ufOrigin === input.ufOrigin && rule.ufDestination == null,
  );
  if (originOnly) return originOnly;
  const generic = candidates.find((rule) => rule.ufOrigin == null && rule.ufDestination == null);
  return generic ?? null;
}
