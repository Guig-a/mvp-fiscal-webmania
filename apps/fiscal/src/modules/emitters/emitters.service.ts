import { HttpStatus, Inject, Injectable } from "@nestjs/common";
import { PutParameterCommand } from "@aws-sdk/client-ssm";
import type { CreateEmitterInput, PatchEmitterInput } from "@fiscal-mvp/contracts";
import { createSsm } from "../../aws/clients";
import { ApiException } from "../../http/errors";
import { PrismaService } from "../../prisma.service";

@Injectable()
export class EmittersService {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async create(workspaceId: string, input: CreateEmitterInput) {
    const emitter = await this.prisma.client.emitter.create({
      data: {
        workspaceId,
        cnpj: input.cnpj,
        legalName: input.legalName,
        tradeName: input.tradeName,
        ie: input.ie,
        im: input.im,
        crt: input.crt,
        uf: input.uf,
        address: input.address,
        environment: input.environment,
        series: input.series ?? 1,
        credentialRef: "pending",
      },
    });
    const credentialRef = `/fiscal/${workspaceId}/${emitter.id}/webmania`;
    await createSsm().send(
      new PutParameterCommand({
        Name: credentialRef,
        Type: "SecureString",
        Value: JSON.stringify(input.credentials),
        Overwrite: true,
      }),
    );
    return this.prisma.client.emitter.update({
      where: { id: emitter.id },
      data: { credentialRef },
    });
  }

  list(workspaceId: string) {
    return this.prisma.client.emitter.findMany({ where: { workspaceId }, orderBy: { createdAt: "desc" } });
  }

  async get(workspaceId: string, id: string) {
    const emitter = await this.prisma.client.emitter.findFirst({ where: { id, workspaceId } });
    if (!emitter) throw new ApiException(HttpStatus.NOT_FOUND, "EMITTER_NOT_FOUND", "Emitente não encontrado");
    return emitter;
  }

  async patch(workspaceId: string, id: string, input: PatchEmitterInput) {
    await this.get(workspaceId, id);
    return this.prisma.client.emitter.update({
      where: { id },
      data: {
        legalName: input.legalName,
        tradeName: input.tradeName,
        ie: input.ie,
        im: input.im,
        active: input.active,
        series: input.series,
      },
    });
  }
}
