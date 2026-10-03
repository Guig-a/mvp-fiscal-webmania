import { z } from "zod";

const awsShape = {
  AWS_ENDPOINT_URL: z.string().url(),
  AWS_REGION: z.string().min(1),
  AWS_ACCESS_KEY_ID: z.string().min(1),
  AWS_SECRET_ACCESS_KEY: z.string().min(1),
  S3_BUCKET: z.string().min(1),
  S3_FORCE_PATH_STYLE: z.enum(["true", "false"]).default("true"),
};

export const apiEnvSchema = z.object({
  ...awsShape,
  DATABASE_URL: z.string().min(1),
  SQS_PEDIDOS_URL: z.string().url(),
  FISCAL_API_KEY: z.string().min(1),
  PRESIGN_MODE: z.enum(["url", "stream"]).default("url"),
  PRESIGN_TTL_SECONDS: z.coerce.number().default(60),
  PENDING_STALE_SECONDS: z.coerce.number().default(120),
  PROCESSING_STALE_SECONDS: z.coerce.number().default(120),
  WEBMANIA_CALLBACK_BASE_URL: z.string().url().default("http://localhost:3100"),
  WEBMANIA_CALLBACK_SECRET: z.string().min(1).default("dev-webmania-callback-secret"),
  PORT: z.coerce.number().default(3100),
});

export const workerEnvSchema = z.object({
  ...awsShape,
  SQS_PEDIDOS_URL: z.string().url(),
  SQS_RESULTADOS_URL: z.string().url(),
  FISCAL_PROVIDER: z.enum(["fake", "webmania"]).default("fake"),
  WEBMANIA_CALLBACK_BASE_URL: z.string().url().default("http://localhost:3100"),
  WEBMANIA_CALLBACK_SECRET: z.string().min(1).default("dev-webmania-callback-secret"),
});

export const persistEnvSchema = z.object({
  ...awsShape,
  DATABASE_URL: z.string().min(1),
  SQS_RESULTADOS_URL: z.string().url(),
  ERP_WEBHOOK_URL: z.string().url(),
  WEBHOOK_SECRET: z.string().min(1),
});

export const dlqEnvSchema = z.object({
  DATABASE_URL: z.string().min(1),
  AWS_ENDPOINT_URL: z.string().url(),
  AWS_REGION: z.string().min(1),
  AWS_ACCESS_KEY_ID: z.string().min(1),
  AWS_SECRET_ACCESS_KEY: z.string().min(1),
  SQS_PEDIDOS_DLQ_URL: z.string().url(),
  ERP_WEBHOOK_URL: z.string().url(),
  WEBHOOK_SECRET: z.string().min(1),
});

export type ApiEnv = z.infer<typeof apiEnvSchema>;
export type WorkerEnv = z.infer<typeof workerEnvSchema>;
export type PersistEnv = z.infer<typeof persistEnvSchema>;
export type DlqEnv = z.infer<typeof dlqEnvSchema>;
