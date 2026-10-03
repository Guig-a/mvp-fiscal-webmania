import { Body, Controller, Get, Inject, Param, Patch, Post, Req } from "@nestjs/common";
import { createFiscalProfileSchema, createFiscalRuleSchema } from "@fiscal-mvp/contracts";
import type { Request } from "express";
import { workspaceOf } from "../auth.guard";
import { ProfilesService } from "./profiles.service";

@Controller("fiscal-profiles")
export class ProfilesController {
  constructor(@Inject(ProfilesService) private readonly service: ProfilesService) {}

  @Post()
  create(@Req() req: Request, @Body() body: unknown) {
    return this.service.create(workspaceOf(req), createFiscalProfileSchema.parse(body));
  }

  @Get()
  list(@Req() req: Request) {
    return this.service.list(workspaceOf(req));
  }

  @Patch(":id/deactivate")
  deactivate(@Req() req: Request, @Param("id") id: string) {
    return this.service.deactivate(workspaceOf(req), id);
  }

  @Post(":id/rules")
  addRule(@Req() req: Request, @Param("id") id: string, @Body() body: unknown) {
    return this.service.addRule(workspaceOf(req), id, createFiscalRuleSchema.parse(body));
  }

  @Get(":id/rules")
  listRules(@Req() req: Request, @Param("id") id: string) {
    return this.service.listRules(workspaceOf(req), id);
  }
}
