-- CreateEnum
CREATE TYPE "Environment" AS ENUM ('HOMOLOGACAO', 'PRODUCAO');
CREATE TYPE "InvoiceType" AS ENUM ('NFE');
CREATE TYPE "InvoiceStatus" AS ENUM ('PENDING', 'AUTHORIZED', 'REJECTED', 'ERROR', 'CANCELLED');
CREATE TYPE "InvoiceEventType" AS ENUM ('CREATED', 'ENQUEUED', 'WORKER_STARTED', 'WORKER_FINISHED', 'RESULT_RECEIVED', 'AUTHORIZED', 'REJECTED', 'ERROR', 'WEBHOOK_SENT', 'WEBHOOK_FAILED', 'CANCEL_REQUESTED', 'CANCELLED');
CREATE TYPE "Operation" AS ENUM ('VENDA');

CREATE TABLE "emitters" (
    "id" UUID NOT NULL,
    "workspace_id" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "legal_name" TEXT NOT NULL,
    "trade_name" TEXT,
    "ie" TEXT,
    "im" TEXT,
    "crt" INTEGER NOT NULL,
    "uf" CHAR(2) NOT NULL,
    "address" JSONB NOT NULL,
    "environment" "Environment" NOT NULL,
    "series" INTEGER NOT NULL DEFAULT 1,
    "credential_ref" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "emitters_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "fiscal_profiles" (
    "id" UUID NOT NULL,
    "workspace_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "fiscal_profiles_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "fiscal_rules" (
    "id" UUID NOT NULL,
    "profile_id" UUID NOT NULL,
    "operation" "Operation" NOT NULL,
    "uf_origin" TEXT,
    "uf_destination" TEXT,
    "cfop" TEXT NOT NULL,
    "tax_code" TEXT NOT NULL,
    "taxes" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "fiscal_rules_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "invoices" (
    "id" UUID NOT NULL,
    "workspace_id" TEXT NOT NULL,
    "emitter_id" UUID NOT NULL,
    "type" "InvoiceType" NOT NULL DEFAULT 'NFE',
    "status" "InvoiceStatus" NOT NULL DEFAULT 'PENDING',
    "idempotency_key" TEXT NOT NULL,
    "request_hash" TEXT NOT NULL,
    "origin_type" TEXT,
    "origin_id" TEXT,
    "operation" "Operation" NOT NULL,
    "purpose" INTEGER NOT NULL,
    "request_payload" JSONB NOT NULL,
    "resolved_items" JSONB NOT NULL,
    "total_value" DECIMAL(14,2) NOT NULL,
    "number" INTEGER,
    "series" INTEGER,
    "access_key" TEXT,
    "protocol" TEXT,
    "environment" "Environment" NOT NULL,
    "provider_ref" TEXT,
    "s3_xml_key" TEXT,
    "s3_pdf_key" TEXT,
    "rejection_code" TEXT,
    "rejection_message" TEXT,
    "referenced_key" TEXT,
    "authorized_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "invoice_events" (
    "id" UUID NOT NULL,
    "invoice_id" UUID NOT NULL,
    "type" "InvoiceEventType" NOT NULL,
    "payload" JSONB NOT NULL,
    "occurred_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "invoice_events_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "emitters_cnpj_environment_key" ON "emitters"("cnpj", "environment");
CREATE INDEX "emitters_workspace_id_idx" ON "emitters"("workspace_id");
CREATE UNIQUE INDEX "fiscal_profiles_workspace_id_name_key" ON "fiscal_profiles"("workspace_id", "name");
CREATE UNIQUE INDEX "fiscal_rules_profile_id_operation_uf_origin_uf_destination_key" ON "fiscal_rules"("profile_id", "operation", "uf_origin", "uf_destination");
CREATE UNIQUE INDEX "invoices_access_key_key" ON "invoices"("access_key");
CREATE UNIQUE INDEX "invoices_emitter_id_idempotency_key_key" ON "invoices"("emitter_id", "idempotency_key");
CREATE INDEX "invoices_workspace_id_status_created_at_idx" ON "invoices"("workspace_id", "status", "created_at");
CREATE INDEX "invoices_status_created_at_idx" ON "invoices"("status", "created_at");

ALTER TABLE "fiscal_rules" ADD CONSTRAINT "fiscal_rules_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "fiscal_profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_emitter_id_fkey" FOREIGN KEY ("emitter_id") REFERENCES "emitters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "invoice_events" ADD CONSTRAINT "invoice_events_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "invoices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
