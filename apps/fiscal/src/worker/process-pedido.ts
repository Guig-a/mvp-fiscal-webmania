import type { S3Client } from "@aws-sdk/client-s3";
import { SendMessageCommand, type SQSClient } from "@aws-sdk/client-sqs";
import type { SSMClient } from "@aws-sdk/client-ssm";
import { buildWebmaniaNotificationUrl } from "@fiscal-mvp/contracts";
import type { CancelMessage, CheckStatusMessage, EmitMessage } from "@fiscal-mvp/contracts";
import type { Logger } from "pino";
import type { FiscalProvider } from "../providers/fiscal-provider";
import { publishEmitResult } from "./publish-emit-result";
import { readCredential } from "./ssm-credentials";

export async function processPedido(input: {
  message: EmitMessage | CancelMessage | CheckStatusMessage;
  provider: FiscalProvider;
  s3: S3Client;
  ssm: SSMClient;
  sqs: SQSClient;
  resultadosUrl: string;
  bucket: string;
  callbackBaseUrl: string;
  callbackSecret: string;
  logger: Logger;
}) {
  const { message, logger } = input;
  logger.info({ invoiceId: message.invoiceId, messageId: message.messageId, messageType: message.messageType }, "worker started");
  await readCredential(input.ssm, message.credentialRef);
  const startedAt = new Date().toISOString();

  if (message.messageType === "CHECK_STATUS") {
    const result = await input.provider.checkStatus({
      invoiceId: message.invoiceId,
      providerRef: message.providerRef,
    });
    await publishEmitResult({
      sqs: input.sqs,
      resultadosUrl: input.resultadosUrl,
      s3: input.s3,
      bucket: input.bucket,
      invoiceId: message.invoiceId,
      workspaceId: message.workspaceId,
      cnpj: message.emitterCnpj,
      startedAt,
      result,
    });
    logger.info({ invoiceId: message.invoiceId, messageId: message.messageId, outcome: result.outcome }, "worker finished");
    return;
  }

  if (message.messageType === "EMIT") {
    const notificationUrl = buildWebmaniaNotificationUrl(input.callbackBaseUrl, {
      invoiceId: message.invoiceId,
      workspaceId: message.workspaceId,
      emitterId: message.emitter.id,
      credentialRef: message.credentialRef,
      emitterCnpj: message.emitter.cnpj,
    }, input.callbackSecret);
    const result = await input.provider.emit({
      invoiceId: message.invoiceId,
      additionalInfo: message.additionalInfo,
      notificationUrl,
      emitter: message.emitter,
      recipient: message.recipient,
      items: message.items,
      totalValue: message.totalValue,
    });
    await publishEmitResult({
      sqs: input.sqs,
      resultadosUrl: input.resultadosUrl,
      s3: input.s3,
      bucket: input.bucket,
      invoiceId: message.invoiceId,
      workspaceId: message.workspaceId,
      cnpj: message.emitter.cnpj,
      startedAt,
      result,
    });
    logger.info({ invoiceId: message.invoiceId, messageId: message.messageId, outcome: result.outcome }, "worker finished");
    return;
  }

  const result = await input.provider.cancel({
    invoiceId: message.invoiceId,
    accessKey: message.accessKey,
    justification: message.justification,
  });
  await input.sqs.send(
    new SendMessageCommand({
      QueueUrl: input.resultadosUrl,
      MessageBody: JSON.stringify({
        version: 1,
        messageType: "CANCEL_RESULT",
        invoiceId: message.invoiceId,
        workspaceId: message.workspaceId,
        outcome: result.outcome,
        startedAt,
        finishedAt: new Date().toISOString(),
        cancelledAt: result.outcome === "CANCELLED" ? result.cancelledAt : null,
        rejection: result.outcome === "REJECTED" ? { code: result.code, message: result.message } : null,
      }),
    }),
  );
}
