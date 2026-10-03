import { Body, Controller, Get, Inject, Post, Req, UseGuards } from "@nestjs/common";
import { createProductSchema } from "@fiscal-mvp/contracts";
import type { Request } from "express";
import { PrismaService } from "./prisma.service";
import { WorkspaceGuard, workspaceOf } from "./workspace";

@Controller("produtos")
@UseGuards(WorkspaceGuard)
export class ProductsController {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  @Get()
  list(@Req() req: Request) {
    return this.prisma.client.product.findMany({ where: { workspaceId: workspaceOf(req) } });
  }

  @Post()
  create(@Req() req: Request, @Body() body: unknown) {
    const input = createProductSchema.parse(body);
    return this.prisma.client.product.create({
      data: {
        workspaceId: workspaceOf(req),
        name: input.name,
        unit: input.unit,
        price: input.price,
        ncm: input.ncm,
        cest: input.cest,
        origin: input.origin,
        fiscalProfileId: input.fiscalProfileId,
      },
    });
  }
}
