import PDFDocument from "pdfkit";
import type { EmitInput } from "../fiscal-provider";

const MARK = "DOCUMENTO SIMULADO – SEM VALOR FISCAL";

export function buildXml(input: EmitInput, extra: { accessKey: string; protocol: string; number: number }): string {
  const items = input.items
    .map(
      (item, i) =>
        `<det nItem="${i + 1}"><prod><cProd>${item.code}</cProd><xProd>${item.description}</xProd><NCM>${item.ncm}</NCM><CFOP>${item.cfop}</CFOP><qCom>${item.quantity}</qCom><vUnCom>${item.unitPrice}</vUnCom></prod></det>`,
    )
    .join("");
  return `<?xml version="1.0" encoding="UTF-8"?><NFe><infNFe Id="NFe${extra.accessKey}"><ide><nNF>${extra.number}</nNF></ide><emit><CNPJ>${input.emitter.cnpj}</CNPJ><xNome>${input.emitter.legalName}</xNome></emit><dest><xNome>${String((input.recipient as { name?: string }).name ?? "")}</xNome></dest>${items}<total><vNF>${input.totalValue}</vNF></total><protNFe><nProt>${extra.protocol}</nProt></protNFe><infAdic>${MARK}</infAdic></infNFe></NFe>`;
}

export async function buildPdf(input: EmitInput, extra: { accessKey: string; protocol: string; number: number }): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: "A4", margin: 48 });
    const chunks: Buffer[] = [];
    doc.on("data", (c) => chunks.push(c as Buffer));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);
    doc.fontSize(16).text("NF-e simulada");
    doc.moveDown().fontSize(10).text(MARK);
    doc.text(`Chave: ${extra.accessKey}`);
    doc.text(`Número: ${extra.number}`);
    doc.text(`Protocolo: ${extra.protocol}`);
    doc.text(`Emitente: ${input.emitter.legalName} ${input.emitter.cnpj}`);
    doc.text(`Total: ${input.totalValue}`);
    doc.end();
  });
}
