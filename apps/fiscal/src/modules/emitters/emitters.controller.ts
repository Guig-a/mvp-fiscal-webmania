import { Body, Controller, Get, Inject, Param, Patch, Post, Req } from "@nestjs/common";
import { createEmitterSchema, patchEmitterSchema } from "@fiscal-mvp/contracts";
import type { Request } from "express";
import { workspaceOf } from "../auth.guard";
import { EmittersService } from "./emitters.service";

@Controller("emitters")
export class EmittersController {
  constructor(@Inject(EmittersService) private readonly service: EmittersService) {}

  @Post()
  create(@Req() req: Request, @Body() body: unknown) {
    return this.service.create(workspaceOf(req), createEmitterSchema.parse(body));
  }

  @Get()
  list(@Req() req: Request) {
    return this.service.list(workspaceOf(req));
  }

  @Get(":id")
  get(@Req() req: Request, @Param("id") id: string) {
    return this.service.get(workspaceOf(req), id);
  }

  @Patch(":id")
  patch(@Req() req: Request, @Param("id") id: string, @Body() body: unknown) {
    return this.service.patch(workspaceOf(req), id, patchEmitterSchema.parse(body));
  }
}
