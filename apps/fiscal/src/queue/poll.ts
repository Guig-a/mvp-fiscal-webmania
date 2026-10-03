import { DeleteMessageCommand, ReceiveMessageCommand, type SQSClient } from "@aws-sdk/client-sqs";
import type { Logger } from "pino";

export async function pollQueue(input: {
  sqs: SQSClient;
  queueUrl: string;
  logger: Logger;
  handle: (body: string, messageId?: string) => Promise<void>;
}) {
  while (true) {
    const received = await input.sqs.send(
      new ReceiveMessageCommand({
        QueueUrl: input.queueUrl,
        MaxNumberOfMessages: 5,
        WaitTimeSeconds: 20,
        VisibilityTimeout: 60,
      }),
    );
    for (const message of received.Messages ?? []) {
      try {
        await input.handle(message.Body ?? "", message.MessageId);
        if (message.ReceiptHandle) {
          await input.sqs.send(
            new DeleteMessageCommand({
              QueueUrl: input.queueUrl,
              ReceiptHandle: message.ReceiptHandle,
            }),
          );
        }
      } catch (error) {
        input.logger.error({ err: error, messageId: message.MessageId }, "handler failed");
      }
    }
  }
}
