import { HttpStatus, Inject, Injectable } from "@nestjs/common";
import type { CreateFiscalProfileInput, CreateFiscalRuleInput } from "@fiscal-mvp/contracts";
import { ApiException } from "../../http/errors";
import { PrismaService } from "../../prisma.service";

@Injectable()
export class ProfilesService {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  create(workspaceId: string, input: CreateFiscalProfileInput) {
    return this.prisma.client.fiscalProfile.create({
      data: { workspaceId, name: input.name, description: input.description },
    });
  }

  list(workspaceId: string) {
    return this.prisma.client.fiscalProfile.findMany({
      where: { workspaceId },
      include: { rules: true },
      orderBy: { name: "asc" },
    });
  }

  async get(workspaceId: string, id: string) {
    const profile = await this.prisma.client.fiscalProfile.findFirst({
      where: { id, workspaceId },
      include: { rules: true },
    });
    if (!profile) throw new ApiException(HttpStatus.NOT_FOUND, "PROFILE_NOT_FOUND", "Perfil não encontrado");
    return profile;
  }

  deactivate(workspaceId: string, id: string) {
    return this.prisma.client.fiscalProfile.updateMany({
      where: { id, workspaceId },
      data: { active: false },
    });
  }

  async addRule(workspaceId: string, id: string, input: CreateFiscalRuleInput) {
    await this.get(workspaceId, id);
    return this.prisma.client.fiscalRule.create({
      data: {
        profileId: id,
        operation: input.operation,
        ufOrigin: input.ufOrigin ?? null,
        ufDestination: input.ufDestination ?? null,
        cfop: input.cfop,
        taxCode: input.taxCode,
        taxes: input.taxes as object | undefined,
      },
    });
  }

  async listRules(workspaceId: string, id: string) {
    await this.get(workspaceId, id);
    return this.prisma.client.fiscalRule.findMany({ where: { profileId: id } });
  }
}
