import { CreateBucketCommand, HeadBucketCommand } from "@aws-sdk/client-s3";
import {
  CreateQueueCommand,
  GetQueueAttributesCommand,
  GetQueueUrlCommand,
  SetQueueAttributesCommand,
} from "@aws-sdk/client-sqs";
import { createS3, createSqs } from "./clients";

export async function ensureAwsResources() {
  const s3 = createS3();
  const sqs = createSqs();
  const bucket = process.env.S3_BUCKET ?? "fiscal-documents";
  try {
    await s3.send(new HeadBucketCommand({ Bucket: bucket }));
  } catch {
    await s3.send(new CreateBucketCommand({ Bucket: bucket }));
  }

  for (const name of ["fiscal-pedidos", "fiscal-resultados"]) {
    const dlqUrl = await ensureQueue(sqs, `${name}-dlq`);
    const dlqArn = (
      await sqs.send(
        new GetQueueAttributesCommand({ QueueUrl: dlqUrl, AttributeNames: ["QueueArn"] }),
      )
    ).Attributes?.QueueArn;
    const queueUrl = await ensureQueue(sqs, name);
    if (dlqArn) {
      await sqs.send(
        new SetQueueAttributesCommand({
          QueueUrl: queueUrl,
          Attributes: {
            RedrivePolicy: JSON.stringify({ deadLetterTargetArn: dlqArn, maxReceiveCount: "5" }),
          },
        }),
      );
    }
  }
}

async function ensureQueue(sqs: ReturnType<typeof createSqs>, name: string) {
  try {
    const existing = await sqs.send(new GetQueueUrlCommand({ QueueName: name }));
    return existing.QueueUrl!;
  } catch {
    const created = await sqs.send(new CreateQueueCommand({ QueueName: name }));
    return created.QueueUrl!;
  }
}
