import { config } from "dotenv";
config();
import { resultadoMessageSchema } from "@fiscal-mvp/contracts";
import { createSqs } from "../aws/clients";
import { persistEnvSchema } from "../config/env";
import { PrismaClient } from "../generated/prisma";
import { createLogger } from "../logging";
import { applyResult } from "../persist/apply-result";
import { pollQueue } from "../queue/poll";

async function main() {
  const env = persistEnvSchema.parse(process.env);
  const logger = createLogger("fiscal-persist");
  const prisma = new PrismaClient();
  await prisma.$connect();
  logger.info("persist polling fiscal-resultados");
  await pollQueue({
    sqs: createSqs(),
    queueUrl: env.SQS_RESULTADOS_URL,
    logger,
    handle: async (body, messageId) => {
      const payload = resultadoMessageSchema.parse(JSON.parse(body));
      logger.info({ invoiceId: payload.invoiceId, messageId, type: payload.messageType }, "applying result");
      await applyResult({
        prisma,
        payload,
        webhookUrl: env.ERP_WEBHOOK_URL,
        webhookSecret: env.WEBHOOK_SECRET,
        logger,
      });
    },
  });
}

void main();
