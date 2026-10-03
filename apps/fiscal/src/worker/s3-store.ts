import { PutObjectCommand, type S3Client } from "@aws-sdk/client-s3";

export function documentKeys(input: {
  workspaceId: string;
  cnpj: string;
  accessKey: string;
  issuedAt?: Date;
}) {
  const date = input.issuedAt ?? new Date();
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const prefix = `${input.workspaceId}/${input.cnpj}/${year}/${month}/${input.accessKey}`;
  return { xml: `${prefix}.xml`, pdf: `${prefix}.pdf` };
}

export async function putDocuments(
  s3: S3Client,
  bucket: string,
  keys: { xml: string; pdf: string },
  xml: string,
  pdf: Buffer,
) {
  await s3.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: keys.xml,
      Body: xml,
      ContentType: "application/xml",
    }),
  );
  await s3.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: keys.pdf,
      Body: pdf,
      ContentType: "application/pdf",
    }),
  );
}
