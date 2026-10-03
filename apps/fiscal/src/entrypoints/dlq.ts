import { config } from "dotenv";
config();
import { createSqs } from "../aws/clients";
import { dlqEnvSchema } from "../config/env";
import { PrismaClient } from "../generated/prisma";
import { createLogger } from "../logging";
import { markError } from "../persist/apply-result";
import { pollQueue } from "../queue/poll";

async function main() {
  const env = dlqEnvSchema.parse(process.env);
  const logger = createLogger("fiscal-dlq");
  const prisma = new PrismaClient();
  await prisma.$connect();
  logger.info("dlq polling fiscal-pedidos-dlq");
  await pollQueue({
    sqs: createSqs(),
    queueUrl: env.SQS_PEDIDOS_DLQ_URL,
    logger,
    handle: async (body, messageId) => {
      const parsed = JSON.parse(body) as { invoiceId?: string };
      if (!parsed.invoiceId) throw new Error("dlq message without invoiceId");
      logger.info({ invoiceId: parsed.invoiceId, messageId }, "marking error");
      await markError({
        prisma,
        invoiceId: parsed.invoiceId,
        reason: "Mensagem enviada à DLQ após 5 tentativas",
        webhookUrl: env.ERP_WEBHOOK_URL,
        webhookSecret: env.WEBHOOK_SECRET,
        logger,
      });
    },
  });
}

void main();
