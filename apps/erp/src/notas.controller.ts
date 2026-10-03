import { Body, Controller, Get, Headers, HttpException, Inject, Param, Post, Req, Res, UseGuards } from "@nestjs/common";
import type { Request, Response } from "express";
import { FiscalClient } from "./fiscal-client";
import { PrismaService } from "./prisma.service";
import { WorkspaceGuard, workspaceOf } from "./workspace";

@Controller()
@UseGuards(WorkspaceGuard)
export class NotasController {
  constructor(
    @Inject(FiscalClient) private readonly fiscal: FiscalClient,
    @Inject(PrismaService) private readonly prisma: PrismaService,
  ) {}

  @Get("emitentes")
  emitentes(@Req() req: Request) {
    return this.proxy(req, "/emitters");
  }

  @Post("emitentes")
  createEmitente(@Req() req: Request, @Body() body: unknown) {
    return this.proxy(req, "/emitters", { method: "POST", body: JSON.stringify(body) });
  }

  @Get("perfis-fiscais")
  profiles(@Req() req: Request) {
    return this.proxy(req, "/fiscal-profiles");
  }

  @Post("notas/validar")
  validate(@Req() req: Request, @Body() body: unknown) {
    return this.proxy(req, "/invoices/validate", { method: "POST", body: JSON.stringify(body) });
  }

  @Post("notas")
  async create(
    @Req() req: Request,
    @Body() body: unknown,
    @Headers("idempotency-key") idempotencyKey: string | undefined,
    @Res({ passthrough: true }) res: Response,
  ) {
    const workspaceId = workspaceOf(req);
    const result = await this.fiscal.request<{ id: string; status: string }>(workspaceId, "/invoices", {
      method: "POST",
      body: JSON.stringify(body),
      idempotencyKey,
    });
    if (result.status >= 400) {
      throwFiscal(result.status, result.data);
    }
    const payload = body as { recipient?: { name?: string }; emitterId?: string };
    const ref = await this.prisma.client.notaFiscalRef.upsert({
      where: { fiscalInvoiceId: result.data.id },
      update: { status: result.data.status },
      create: {
        workspaceId,
        fiscalInvoiceId: result.data.id,
        emitterId: payload.emitterId ?? "",
        emitterCnpj: "",
        emitterName: "",
        recipientName: payload.recipient?.name ?? "",
        status: result.data.status,
        totalValue: 0,
      },
    });
    res.status(202);
    return { ...result.data, localId: ref.id };
  }

  @Get("notas")
  list(@Req() req: Request) {
    return this.prisma.client.notaFiscalRef.findMany({
      where: { workspaceId: workspaceOf(req) },
      orderBy: { createdAt: "desc" },
    });
  }

  @Get("notas/:id")
  async get(@Req() req: Request, @Param("id") id: string) {
    const nota = await this.prisma.client.notaFiscalRef.findFirst({
      where: { id, workspaceId: workspaceOf(req) },
    });
    if (!nota) throw new HttpException({ code: "NOT_FOUND", message: "Nota não encontrada", details: {} }, 404);
    const fiscal = await this.fiscal.request<{ requestPayload?: unknown }>(
      workspaceOf(req),
      `/invoices/${nota.fiscalInvoiceId}`,
    );
    return {
      ...nota,
      requestPayload: fiscal.status < 400 ? fiscal.data.requestPayload ?? null : null,
    };
  }

  @Get("notas/:id/eventos")
  async events(@Req() req: Request, @Param("id") id: string) {
    const nota = await this.get(req, id);
    return this.proxy(req, `/invoices/${nota.fiscalInvoiceId}/events`);
  }

  @Post("notas/:id/check-status")
  async checkStatus(@Req() req: Request, @Param("id") id: string) {
    const nota = await this.get(req, id);
    return this.proxy(req, `/invoices/${nota.fiscalInvoiceId}/check-status`, { method: "POST" });
  }

  @Get("notas/:id/arquivos/:kind")
  async files(
    @Req() req: Request,
    @Param("id") id: string,
    @Param("kind") kind: string,
    @Res() res: Response,
  ) {
    const nota = await this.get(req, id);
    const result = await this.fiscal.request<{ url: string }>(
      workspaceOf(req),
      `/invoices/${nota.fiscalInvoiceId}/files/${kind}`,
    );
    if (result.status >= 400) throwFiscal(result.status, result.data);
    if (req.query.json === "1") {
      res.json(result.data);
      return;
    }
    res.redirect(302, result.data.url);
  }

  private async proxy(req: Request, path: string, init: RequestInit = {}) {
    const result = await this.fiscal.request(workspaceOf(req), path, init);
    if (result.status >= 400) throwFiscal(result.status, result.data);
    return result.data;
  }
}

function throwFiscal(status: number, data: unknown): never {
  throw new HttpException((data ?? { code: "FISCAL_ERROR", message: "Erro no fiscal", details: {} }) as object, status);
}
