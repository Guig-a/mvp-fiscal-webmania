import { config } from "dotenv";
config();
import { PutParameterCommand } from "@aws-sdk/client-ssm";
import { SEED } from "@fiscal-mvp/contracts";
import { createSsm } from "./aws/clients";
import { ensureAwsResources } from "./aws/ensure-resources";
import { generateValidCnpj } from "./domain/documents";
import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const fakeCredentials = {
  consumerKey: "fake-key",
  consumerSecret: "fake-secret",
  accessToken: "fake-token",
  accessTokenSecret: "fake-token-secret",
};

async function upsertEmitter(input: {
  id: string;
  workspaceId: string;
  seed: number;
  legalName: string;
  uf: string;
  address: object;
}) {
  const cnpj = generateValidCnpj(input.seed);
  const credentialRef = `/fiscal/${input.workspaceId}/${input.id}/webmania`;
  await createSsm().send(
    new PutParameterCommand({
      Name: credentialRef,
      Type: "SecureString",
      Value: JSON.stringify(fakeCredentials),
      Overwrite: true,
    }),
  );
  await prisma.emitter.upsert({
    where: { id: input.id },
    update: { credentialRef, active: true },
    create: {
      id: input.id,
      workspaceId: input.workspaceId,
      cnpj,
      legalName: input.legalName,
      tradeName: input.legalName,
      ie: "ISENTO",
      crt: 1,
      uf: input.uf,
      address: input.address,
      environment: "HOMOLOGACAO",
      series: 1,
      credentialRef,
    },
  });
}

async function main() {
  await ensureAwsResources();
  await prisma.fiscalProfile.upsert({
    where: { id: SEED.profiles.resale },
    update: { active: true },
    create: {
      id: SEED.profiles.resale,
      workspaceId: SEED.workspaces.a,
      name: "Mercadoria para revenda",
      description: "Perfil ilustrativo",
    },
  });

  await prisma.fiscalRule.deleteMany({ where: { profileId: SEED.profiles.resale } });
  const rules = [
    { ufOrigin: "SP", ufDestination: "SP", cfop: "5102" },
    { ufOrigin: "SP", ufDestination: null, cfop: "6102" },
    { ufOrigin: "RJ", ufDestination: "RJ", cfop: "5102" },
    { ufOrigin: "RJ", ufDestination: null, cfop: "6102" },
  ];
  for (const rule of rules) {
    await prisma.fiscalRule.create({
      data: {
        profileId: SEED.profiles.resale,
        operation: "VENDA",
        ufOrigin: rule.ufOrigin,
        ufDestination: rule.ufDestination,
        cfop: rule.cfop,
        taxCode: "102",
      },
    });
  }

  await upsertEmitter({
    id: SEED.emitters.sp,
    workspaceId: SEED.workspaces.a,
    seed: 112223330001,
    legalName: "Emitente SP Demo LTDA",
    uf: "SP",
    address: {
      street: "Av. Paulista",
      number: "1000",
      district: "Bela Vista",
      city: "São Paulo",
      uf: "SP",
      zip: "01310100",
    },
  });
  await upsertEmitter({
    id: SEED.emitters.rj,
    workspaceId: SEED.workspaces.a,
    seed: 223334440001,
    legalName: "Emitente RJ Demo LTDA",
    uf: "RJ",
    address: {
      street: "Av. Rio Branco",
      number: "200",
      district: "Centro",
      city: "Rio de Janeiro",
      uf: "RJ",
      zip: "20040002",
    },
  });
  await upsertEmitter({
    id: SEED.emitters.isolated,
    workspaceId: SEED.workspaces.b,
    seed: 334445550001,
    legalName: "Emitente Isolado LTDA",
    uf: "MG",
    address: {
      street: "Av. Afonso Pena",
      number: "50",
      district: "Centro",
      city: "Belo Horizonte",
      uf: "MG",
      zip: "30130000",
    },
  });

  console.log("fiscal seed ok");
}

void main()
  .finally(() => prisma.$disconnect());
