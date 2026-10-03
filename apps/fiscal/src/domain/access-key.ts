export const UF_IBGE: Record<string, string> = {
  RO: "11",
  AC: "12",
  AM: "13",
  RR: "14",
  PA: "15",
  AP: "16",
  TO: "17",
  MA: "21",
  PI: "22",
  CE: "23",
  RN: "24",
  PB: "25",
  PE: "26",
  AL: "27",
  SE: "28",
  BA: "29",
  MG: "31",
  ES: "32",
  RJ: "33",
  SP: "35",
  PR: "41",
  SC: "42",
  RS: "43",
  MS: "50",
  MT: "51",
  GO: "52",
  DF: "53",
};

export function accessKeyCheckDigit(body43: string): string {
  let weight = 2;
  let sum = 0;
  for (let i = body43.length - 1; i >= 0; i -= 1) {
    sum += Number(body43[i]) * weight;
    weight = weight === 9 ? 2 : weight + 1;
  }
  const rest = sum % 11;
  return rest === 0 || rest === 1 ? "0" : String(11 - rest);
}

export function buildAccessKey(input: {
  uf: string;
  issuedAt: Date;
  cnpj: string;
  series: number;
  number: number;
  cnf: string;
}): string {
  const cUf = UF_IBGE[input.uf];
  if (!cUf) throw new Error(`Unknown UF ${input.uf}`);
  const aamm = `${String(input.issuedAt.getUTCFullYear()).slice(-2)}${String(input.issuedAt.getUTCMonth() + 1).padStart(2, "0")}`;
  const series = String(input.series).padStart(3, "0");
  const number = String(input.number).padStart(9, "0");
  const cnf = input.cnf.padStart(8, "0").slice(-8);
  const body = `${cUf}${aamm}${input.cnpj}55${series}${number}1${cnf}`;
  return `${body}${accessKeyCheckDigit(body)}`;
}
