import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { json, type Request } from "express";
import { EntriesController } from "./entries.controller";
import { FiscalClient } from "./fiscal-client";
import { NotasController } from "./notas.controller";
import { PrismaService } from "./prisma.service";
import { ProductsController } from "./products.controller";
import { WebhookController } from "./webhook.controller";

@Module({
  controllers: [ProductsController, EntriesController, NotasController, WebhookController],
  providers: [PrismaService, FiscalClient],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        json({
          verify: (req: Request & { rawBody?: Buffer }, _res, buf) => {
            req.rawBody = buf;
          },
        }),
      )
      .forRoutes("*");
  }
}
