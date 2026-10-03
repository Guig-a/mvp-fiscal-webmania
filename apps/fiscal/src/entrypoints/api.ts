import "reflect-metadata";
import { config } from "dotenv";
config();
import { NestFactory } from "@nestjs/core";
import { AppModule } from "../app.module";
import { apiEnvSchema } from "../config/env";
import { AllExceptionsFilter } from "../http/exception.filter";
import { createLogger } from "../logging";

async function main() {
  const env = apiEnvSchema.parse(process.env);
  const logger = createLogger("fiscal-api");
  const app = await NestFactory.create(AppModule, { logger: false });
  app.useGlobalFilters(new AllExceptionsFilter());
  app.enableCors();
  await app.listen(env.PORT);
  logger.info({ port: env.PORT }, "fiscal api listening");
}

void main();
