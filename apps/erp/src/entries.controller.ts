import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, Post, Req, UseGuards } from "@nestjs/common";
import { createFinancialEntrySchema } from "@fiscal-mvp/contracts";
import type { Request } from "express";
import { PrismaService } from "./prisma.service";
import { WorkspaceGuard, workspaceOf } from "./workspace";

@Controller("lancamentos")
@UseGuards(WorkspaceGuard)
export class EntriesController {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  @Get()
  list(@Req() req: Request) {
    return this.prisma.client.financialEntry.findMany({
      where: { workspaceId: workspaceOf(req) },
      include: { notas: { include: { notaFiscalRef: true } } },
      orderBy: { createdAt: "desc" },
    });
  }

  @Post()
  create(@Req() req: Request, @Body() body: unknown) {
    const input = createFinancialEntrySchema.parse(body);
    return this.prisma.client.financialEntry.create({
      data: {
        workspaceId: workspaceOf(req),
        kind: input.kind,
        description: input.description,
        amount: input.amount,
        dueDate: new Date(input.dueDate),
        status: input.status,
      },
    });
  }

  @Post(":id/notas/:notaId")
  async link(@Req() req: Request, @Param("id") id: string, @Param("notaId") notaId: string) {
    const workspaceId = workspaceOf(req);
    const entry = await this.prisma.client.financialEntry.findFirst({ where: { id, workspaceId } });
    const nota = await this.prisma.client.notaFiscalRef.findFirst({ where: { id: notaId, workspaceId } });
    if (!entry || !nota) {
      throw new HttpException({ code: "NOT_FOUND", message: "Lançamento ou nota não encontrados", details: {} }, HttpStatus.NOT_FOUND);
    }
    return this.prisma.client.financialEntryNota.create({
      data: { financialEntryId: id, notaFiscalRefId: notaId },
    });
  }

  @Delete(":id/notas/:notaId")
  async unlink(@Req() req: Request, @Param("id") id: string, @Param("notaId") notaId: string) {
    await this.prisma.client.financialEntryNota.deleteMany({
      where: { financialEntryId: id, notaFiscalRefId: notaId, financialEntry: { workspaceId: workspaceOf(req) } },
    });
    return { ok: true };
  }
}
