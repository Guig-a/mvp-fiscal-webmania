import { S3Client } from "@aws-sdk/client-s3";
import { SQSClient } from "@aws-sdk/client-sqs";
import { SSMClient } from "@aws-sdk/client-ssm";

export function awsConfig() {
  return {
    region: process.env.AWS_REGION ?? "sa-east-1",
    endpoint: process.env.AWS_ENDPOINT_URL ?? "http://localhost:4566",
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? "test",
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? "test",
    },
    forcePathStyle: process.env.S3_FORCE_PATH_STYLE !== "false",
  };
}

export function createS3() {
  const cfg = awsConfig();
  return new S3Client({
    region: cfg.region,
    endpoint: cfg.endpoint,
    credentials: cfg.credentials,
    forcePathStyle: cfg.forcePathStyle,
  });
}

export function createSqs() {
  const cfg = awsConfig();
  return new SQSClient({
    region: cfg.region,
    endpoint: cfg.endpoint,
    credentials: cfg.credentials,
  });
}

export function createSsm() {
  const cfg = awsConfig();
  return new SSMClient({
    region: cfg.region,
    endpoint: cfg.endpoint,
    credentials: cfg.credentials,
  });
}
