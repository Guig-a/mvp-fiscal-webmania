import { Body, Controller, Get, Headers, Inject, Param, Post, Query, Req, Res } from "@nestjs/common";
import type { Request, Response } from "express";
import { workspaceOf } from "../auth.guard";
import { InvoicesService } from "./invoices.service";

@Controller("invoices")
export class InvoicesController {
  constructor(@Inject(InvoicesService) private readonly service: InvoicesService) {}

  @Post("validate")
  validate(@Req() req: Request, @Body() body: unknown) {
    return this.service.validate(workspaceOf(req), body);
  }

  @Post()
  async create(
    @Req() req: Request,
    @Body() body: unknown,
    @Headers("idempotency-key") idempotencyKey: string | undefined,
    @Res({ passthrough: true }) res: Response,
  ) {
    const result = await this.service.create(workspaceOf(req), body, idempotencyKey);
    res.status(202);
    return result;
  }

  @Get()
  list(
    @Req() req: Request,
    @Query("emitterId") emitterId?: string,
    @Query("status") status?: string,
    @Query("from") from?: string,
    @Query("to") to?: string,
  ) {
    return this.service.list(workspaceOf(req), { emitterId, status, from, to });
  }

  @Get(":id")
  get(@Req() req: Request, @Param("id") id: string) {
    return this.service.get(workspaceOf(req), id);
  }

  @Get(":id/events")
  events(@Req() req: Request, @Param("id") id: string) {
    return this.service.events(workspaceOf(req), id);
  }

  @Get(":id/files/:kind")
  async files(
    @Req() req: Request,
    @Param("id") id: string,
    @Param("kind") kind: "xml" | "pdf",
    @Res() res: Response,
  ) {
    const result = await this.service.file(workspaceOf(req), id, kind);
    if (result.mode === "stream") {
      res.setHeader("content-type", result.contentType);
      res.send(result.bytes);
      return;
    }
    res.json({ url: result.url, expiresInSeconds: result.expiresInSeconds });
  }

  @Post(":id/cancel")
  cancel(@Req() req: Request, @Param("id") id: string, @Body() body: unknown) {
    return this.service.cancel(workspaceOf(req), id, body);
  }

  @Post(":id/check-status")
  checkStatus(@Req() req: Request, @Param("id") id: string) {
    return this.service.checkStatus(workspaceOf(req), id);
  }
}
