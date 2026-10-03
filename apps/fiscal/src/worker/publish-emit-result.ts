import { SendMessageCommand, type SQSClient } from "@aws-sdk/client-sqs";
import type { EmitResult } from "../providers/fiscal-provider";
import { documentKeys, putDocuments } from "./s3-store";
import type { S3Client } from "@aws-sdk/client-s3";

export async function publishEmitResult(input: {
  sqs: SQSClient;
  resultadosUrl: string;
  s3: S3Client;
  bucket: string;
  invoiceId: string;
  workspaceId: string;
  cnpj: string;
  startedAt: string;
  result: EmitResult;
}) {
  const finishedAt = new Date().toISOString();
  if (input.result.outcome === "REJECTED") {
    await input.sqs.send(
      new SendMessageCommand({
        QueueUrl: input.resultadosUrl,
        MessageBody: JSON.stringify({
          version: 1,
          messageType: "EMIT_RESULT",
          invoiceId: input.invoiceId,
          workspaceId: input.workspaceId,
          outcome: "REJECTED",
          startedAt: input.startedAt,
          finishedAt,
          processing: null,
          authorization: null,
          rejection: { code: input.result.code, message: input.result.message },
        }),
      }),
    );
    return;
  }
  if (input.result.outcome === "PROCESSING") {
    await input.sqs.send(
      new SendMessageCommand({
        QueueUrl: input.resultadosUrl,
        MessageBody: JSON.stringify({
          version: 1,
          messageType: "EMIT_RESULT",
          invoiceId: input.invoiceId,
          workspaceId: input.workspaceId,
          outcome: "PROCESSING",
          startedAt: input.startedAt,
          finishedAt,
          processing: { providerRef: input.result.providerRef },
          authorization: null,
          rejection: null,
        }),
      }),
    );
    return;
  }
  const keys = documentKeys({
    workspaceId: input.workspaceId,
    cnpj: input.cnpj,
    accessKey: input.result.accessKey,
  });
  await putDocuments(input.s3, input.bucket, keys, input.result.xml, input.result.pdf);
  await input.sqs.send(
    new SendMessageCommand({
      QueueUrl: input.resultadosUrl,
      MessageBody: JSON.stringify({
        version: 1,
        messageType: "EMIT_RESULT",
        invoiceId: input.invoiceId,
        workspaceId: input.workspaceId,
        outcome: "AUTHORIZED",
        startedAt: input.startedAt,
        finishedAt,
        processing: null,
        authorization: {
          number: input.result.number,
          series: input.result.series,
          accessKey: input.result.accessKey,
          protocol: input.result.protocol,
          authorizedAt: input.result.authorizedAt,
          providerRef: input.result.providerRef,
          s3XmlKey: keys.xml,
          s3PdfKey: keys.pdf,
        },
        rejection: null,
      }),
    }),
  );
}
