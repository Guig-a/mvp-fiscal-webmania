import { config } from "dotenv";
config();
import { SEED } from "@fiscal-mvp/contracts";
import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.upsert({
    where: { id: SEED.products.notebook },
    update: {},
    create: {
      id: SEED.products.notebook,
      workspaceId: SEED.workspaces.a,
      name: "Notebook",
      unit: "UN",
      price: 100,
      ncm: "84713012",
      origin: 0,
      fiscalProfileId: SEED.profiles.resale,
    },
  });
  await prisma.product.upsert({
    where: { id: SEED.products.mouse },
    update: {},
    create: {
      id: SEED.products.mouse,
      workspaceId: SEED.workspaces.a,
      name: "Mouse",
      unit: "UN",
      price: 50,
      ncm: "84716070",
      origin: 0,
      fiscalProfileId: SEED.profiles.resale,
    },
  });
  await prisma.product.upsert({
    where: { id: SEED.products.chair },
    update: {},
    create: {
      id: SEED.products.chair,
      workspaceId: SEED.workspaces.a,
      name: "Cadeira",
      unit: "UN",
      price: 200,
      ncm: "94013000",
      origin: 0,
      fiscalProfileId: SEED.profiles.resale,
    },
  });
  await prisma.financialEntry.upsert({
    where: { id: SEED.financialEntries.income },
    update: {},
    create: {
      id: SEED.financialEntries.income,
      workspaceId: SEED.workspaces.a,
      kind: "INCOME",
      description: "Receita de exemplo",
      amount: 200,
      dueDate: new Date("2026-10-10"),
      status: "OPEN",
    },
  });
  await prisma.financialEntry.upsert({
    where: { id: SEED.financialEntries.expense },
    update: {},
    create: {
      id: SEED.financialEntries.expense,
      workspaceId: SEED.workspaces.a,
      kind: "EXPENSE",
      description: "Despesa de exemplo",
      amount: 80,
      dueDate: new Date("2026-10-15"),
      status: "OPEN",
    },
  });
  console.log("erp seed ok");
}

void main().finally(() => prisma.$disconnect());
