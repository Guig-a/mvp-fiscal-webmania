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
  async list(@Req() req: Request) {
    const workspaceId = workspaceOf(req);
    await this.syncNotaRefsFromFiscal(workspaceId);
    return this.prisma.client.notaFiscalRef.findMany({
      where: { workspaceId },
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

  private async syncNotaRefsFromFiscal(workspaceId: string) {
    type FiscalInvoiceRow = {
      id: string;
      emitterId: string;
      status: string;
      number: number | null;
      series: number | null;
      accessKey: string | null;
      totalValue: number | string;
      authorizedAt: string | null;
      rejectionMessage: string | null;
      originType: string | null;
      originId: string | null;
      requestPayload: { recipient?: { name?: string } } | null;
      emitter?: { cnpj: string; legalName: string };
    };
    const result = await this.fiscal.request<FiscalInvoiceRow[]>(workspaceId, "/invoices");
    if (result.status >= 400) return;
    for (const invoice of result.data) {
      const recipientName = invoice.requestPayload?.recipient?.name ?? "";
      await this.prisma.client.notaFiscalRef.upsert({
        where: { fiscalInvoiceId: invoice.id },
        create: {
          workspaceId,
          fiscalInvoiceId: invoice.id,
          emitterId: invoice.emitterId,
          emitterCnpj: invoice.emitter?.cnpj ?? "",
          emitterName: invoice.emitter?.legalName ?? "",
          recipientName,
          status: invoice.status,
          number: invoice.number,
          series: invoice.series,
          accessKey: invoice.accessKey,
          totalValue: Number(invoice.totalValue),
          rejectionMessage: invoice.rejectionMessage,
          authorizedAt: invoice.authorizedAt ? new Date(invoice.authorizedAt) : null,
        },
        update: {
          emitterId: invoice.emitterId,
          emitterCnpj: invoice.emitter?.cnpj ?? "",
          emitterName: invoice.emitter?.legalName ?? "",
          recipientName,
          status: invoice.status,
          number: invoice.number,
          series: invoice.series,
          accessKey: invoice.accessKey,
          totalValue: Number(invoice.totalValue),
          rejectionMessage: invoice.rejectionMessage,
          authorizedAt: invoice.authorizedAt ? new Date(invoice.authorizedAt) : null,
        },
      });
    }
  }
}

function throwFiscal(status: number, data: unknown): never {
  throw new HttpException((data ?? { code: "FISCAL_ERROR", message: "Erro no fiscal", details: {} }) as object, status);
}
