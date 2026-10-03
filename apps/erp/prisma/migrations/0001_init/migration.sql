CREATE TYPE "EntryKind" AS ENUM ('INCOME', 'EXPENSE');
CREATE TYPE "EntryStatus" AS ENUM ('OPEN', 'PAID');

CREATE TABLE "products" (
    "id" UUID NOT NULL,
    "workspace_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "price" DECIMAL(14,2) NOT NULL,
    "ncm" TEXT NOT NULL,
    "cest" TEXT,
    "origin" INTEGER NOT NULL,
    "fiscal_profile_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "financial_entries" (
    "id" UUID NOT NULL,
    "workspace_id" TEXT NOT NULL,
    "kind" "EntryKind" NOT NULL,
    "description" TEXT NOT NULL,
    "amount" DECIMAL(14,2) NOT NULL,
    "due_date" TIMESTAMP(3) NOT NULL,
    "status" "EntryStatus" NOT NULL DEFAULT 'OPEN',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "financial_entries_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "nota_fiscal_refs" (
    "id" UUID NOT NULL,
    "workspace_id" TEXT NOT NULL,
    "fiscal_invoice_id" TEXT NOT NULL,
    "emitter_id" TEXT NOT NULL,
    "emitter_cnpj" TEXT NOT NULL,
    "emitter_name" TEXT NOT NULL,
    "recipient_name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "number" INTEGER,
    "series" INTEGER,
    "access_key" TEXT,
    "total_value" DECIMAL(14,2) NOT NULL,
    "rejection_message" TEXT,
    "authorized_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "nota_fiscal_refs_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "financial_entry_notas" (
    "financial_entry_id" UUID NOT NULL,
    "nota_fiscal_ref_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "financial_entry_notas_pkey" PRIMARY KEY ("financial_entry_id", "nota_fiscal_ref_id")
);

CREATE TABLE "fiscal_event_inbox" (
    "event_id" TEXT NOT NULL,
    "received_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "fiscal_event_inbox_pkey" PRIMARY KEY ("event_id")
);

CREATE UNIQUE INDEX "nota_fiscal_refs_fiscal_invoice_id_key" ON "nota_fiscal_refs"("fiscal_invoice_id");

ALTER TABLE "financial_entry_notas" ADD CONSTRAINT "financial_entry_notas_financial_entry_id_fkey" FOREIGN KEY ("financial_entry_id") REFERENCES "financial_entries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "financial_entry_notas" ADD CONSTRAINT "financial_entry_notas_nota_fiscal_ref_id_fkey" FOREIGN KEY ("nota_fiscal_ref_id") REFERENCES "nota_fiscal_refs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
