import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { PrismaService } from "./prisma.service";
import { AuthGuard } from "./modules/auth.guard";
import { EmittersController } from "./modules/emitters/emitters.controller";
import { EmittersService } from "./modules/emitters/emitters.service";
import { ProfilesController } from "./modules/profiles/profiles.controller";
import { ProfilesService } from "./modules/profiles/profiles.service";
import { InvoicesController } from "./modules/invoices/invoices.controller";
import { InvoicesService } from "./modules/invoices/invoices.service";
import { AdminController } from "./modules/admin/admin.controller";
import { WebmaniaCallbackController } from "./modules/webmania-callback.controller";

@Module({
  controllers: [
    EmittersController,
    ProfilesController,
    InvoicesController,
    AdminController,
    WebmaniaCallbackController,
  ],
  providers: [
    PrismaService,
    EmittersService,
    ProfilesService,
    InvoicesService,
    { provide: APP_GUARD, useClass: AuthGuard },
  ],
})
export class AppModule {}
