import "reflect-metadata";
import { config } from "dotenv";
config();
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function main() {
  const app = await NestFactory.create(AppModule, { bodyParser: false });
  app.enableCors();
  await app.listen(Number(process.env.PORT ?? 3000));
}

void main();
