import { config } from "dotenv";
config();
import { pedidoMessageSchema } from "@fiscal-mvp/contracts";
import { createS3, createSqs, createSsm } from "../aws/clients";
import { workerEnvSchema } from "../config/env";
import { createLogger } from "../logging";
import { createFiscalProvider } from "../providers/factory";
import { pollQueue } from "../queue/poll";
import { processPedido } from "../worker/process-pedido";

async function main() {
  const env = workerEnvSchema.parse(process.env);
  const logger = createLogger("fiscal-worker");
  const s3 = createS3();
  const ssm = createSsm();
  const sqs = createSqs();
  const provider = createFiscalProvider(env.FISCAL_PROVIDER);
  logger.info("worker polling fiscal-pedidos");
  await pollQueue({
    sqs,
    queueUrl: env.SQS_PEDIDOS_URL,
    logger,
    handle: async (body, messageId) => {
      const message = pedidoMessageSchema.parse(JSON.parse(body));
      logger.info({ invoiceId: message.invoiceId, messageId }, "processing pedido");
      await processPedido({
        message,
        provider,
        s3,
        ssm,
        sqs,
        resultadosUrl: env.SQS_RESULTADOS_URL,
        bucket: env.S3_BUCKET,
        callbackBaseUrl: env.WEBMANIA_CALLBACK_BASE_URL,
        callbackSecret: env.WEBMANIA_CALLBACK_SECRET,
        logger,
      });
    },
  });
}

void main();
