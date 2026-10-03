# SPEC — MVP local do Serviço Fiscal (NF-e) desacoplado do ERP

> Documento de contexto para uma IA de código. Leia tudo antes de implementar. Implemente por fases (seção 18), na ordem, sem inventar escopo.

## 0. Instruções para a IA

- Construa **exatamente** o que está descrito. Se algo estiver ambíguo, escolha a opção mais simples e registre a suposição em `DECISIONS.md` (não pare para perguntar).
- **Nunca** chame a WebMania real nem qualquer serviço externo. O provedor é um **fake** local (seção 14).
- Tudo roda **localmente**: Postgres em containers e um emulador de AWS (S3, SQS, SSM) em container. Nenhuma credencial AWS real.
- Código em TypeScript estrito. Nomes de modelos, tabelas e campos em **inglês**; valores de domínio fiscal (natureza, CFOP etc.) em português/sigla fiscal.
- Valores fiscais do seed (CFOP, CSOSN, etc.) são **ilustrativos**, não validados por contador.
- Escreva testes para as regras puras (seção 13) e um script E2E (seção 18).

## 1. Contexto e objetivo

Hoje o ERP (NestJS + Next.js + Prisma + PostgreSQL, multi-tenant por `workspace`) trata fiscal e financeiro como uma coisa só e roda tudo acoplado (dois containers locais: Redis e banco). A proposta é extrair a **emissão de NF-e** para um **microserviço fiscal autônomo**, que integra com a WebMania.

Este MVP serve para **apresentar e validar a arquitetura**, tornando visíveis: dois bancos separados, comunicação por eventos, filas, armazenamento de arquivos em S3 e o isolamento entre ERP e fiscal. Também será a base do desenvolvimento local real.

### Premissa de domínio (decisão tomada)

- **Fiscal e financeiro são domínios distintos e autônomos.**
- Não há módulo de vendas/compras: **toda nota é avulsa**.
- O vínculo é **opcional** e vai do **lançamento financeiro → nota** (N:N). Emitir nota **não** cria lançamento e criar lançamento **não** emite nota.
- O serviço fiscal **não conhece** lançamentos nem pedidos. Pode guardar uma referência de origem opcional e opaca (`origin_type`, `origin_id`), nula no MVP.

## 2. Princípios de arquitetura

1. O navegador **nunca** fala com o serviço fiscal; só o backend do ERP fala (service-to-service).
2. **Cada serviço tem seu banco.** Nenhum acesso cruzado, nenhuma FK entre bancos. Referências entre serviços são só IDs opacos.
3. O serviço fiscal é a **fonte da verdade** da nota. O ERP guarda uma **projeção local enxuta** (`NotaFiscalRef`) alimentada por eventos.
4. A emissão é **assíncrona** (fila). O ERP recebe `202` e acompanha o status.
5. Tudo idempotente: criação de nota (Idempotency-Key), processamento de mensagens (SQS é at-least-once) e recebimento de webhooks (dedup por `eventId`).
6. O **worker não tem acesso ao banco** (em produção rodará fora da VPC, sem NAT). Ele só usa SQS, S3, SSM e o provider. Isso deve ser **imposto no código** (seção 15).
7. Lógica de negócio em services NestJS puros; os entrypoints (HTTP, consumidores de fila) são adaptadores finos, para virarem Lambdas depois sem reescrever nada.
8. Provider fiscal atrás de uma interface (`FiscalProvider`), com adapter `fake` (MVP) e `webmania` (apenas stub).

## 3. Escopo

**Dentro (MVP):**
- Cadastro de emitentes (CNPJs) por workspace, com referência de credencial no SSM.
- Perfis fiscais e regras (operação + UF → CFOP/CST).
- Validação prévia (dry-run) e emissão avulsa de NF-e (provider fake).
- Fila de emissão, fila de resultados, DLQ, S3 (XML e PDF), download por URL pré-assinada.
- Eventos/webhook do fiscal para o ERP, com assinatura HMAC e deduplicação.
- ERP: produtos (com campos fiscais), notas (projeção local), lançamentos com vínculo N:N a notas.
- Timeline de eventos da nota.
- UI mínima no ERP (fase 3) e testes.

**Fora (MVP local, fases 0–3):** WebMania real, deploy em Lambda/IaC, autenticação/IAM real, NFS-e/NFC-e, cálculo completo de impostos, manipulação de certificado A1, RDS Proxy, UI elaborada, alarmes CloudWatch.

**Estágio 4 (stretch no MVP local):** DLQ handler, reconciliação básica de `PENDING` sem mensagem, cancelamento.

**Estágio 5 (produção / pós-MVP, ver seção 21):** status `PROCESSING`, consulta de status na WebMania (nunca reemitir às cegas), callback `url_notificacao`, reconciliação agendada com `CHECK_STATUS`, contingência como estado intermediário. Continua **sem** chamar a WebMania real no ambiente local; o fake simula os cenários.

## 4. Arquitetura e fluxos

```
                     ┌───────────────────────── ERP ─────────────────────────┐
 Browser ──────────▶ │ Next.js (apps/web) ─▶ ERP API (NestJS)  ─▶ erp-db      │
                     │                         │      ▲                       │
                     └─────────────────────────┼──────┼───────────────────────┘
                          HTTP (x-api-key)     │      │ webhook assinado (HMAC)
                                               ▼      │
 ┌─────────────────────────── SERVIÇO FISCAL ─────────┼───────────────────────┐
 │  fiscal-api ──▶ fiscal-db                           │                       │
 │      │ (envia)                                      │                       │
 │      ▼                                              │                       │
 │  SQS fiscal-pedidos ──▶ worker ──▶ provider fake    │                       │
 │      │ (falhas)         │  └──▶ S3 (XML/PDF)        │                       │
 │      ▼                  ▼                           │                       │
 │  fiscal-pedidos-dlq   SQS fiscal-resultados ──▶ persist ──▶ fiscal-db ──────┘
 │      └──▶ dlq-handler ──▶ fiscal-db (status ERROR)                          │
 └──────────────────────────────────────────────────────────────────────────────┘
```

**Quem acessa o quê:**

| Processo | Banco fiscal | SQS | S3 | SSM | Rede externa |
|---|---|---|---|---|---|
| `fiscal-api` | sim | envia pedidos | gera URL pré-assinada | grava credencial | — |
| `worker` | **não** | consome pedidos, envia resultados | grava XML/PDF | lê credencial | provider |
| `persist` | sim | consome resultados | — | — | webhook para o ERP |
| `dlq-handler` | sim | consome DLQ | — | — | webhook para o ERP |

**Fluxo de emissão:**
1. ERP `POST /invoices` (fiscal) com `Idempotency-Key`. O fiscal valida, grava `invoice` como `PENDING`, registra eventos `CREATED` e `ENQUEUED`, envia a mensagem `EMIT` para `fiscal-pedidos` e responde `202 {id, status}`.
2. O ERP grava `NotaFiscalRef` com status `PENDING`.
3. O `worker` lê a mensagem, busca a credencial no SSM, chama o provider fake, grava XML/PDF no S3 e publica `EMIT_RESULT` em `fiscal-resultados`.
4. O `persist` lê o resultado, atualiza `invoice` (somente se ainda `PENDING`), registra eventos, e envia o webhook ao ERP.
5. O ERP valida a assinatura, deduplica por `eventId`, faz **upsert** da `NotaFiscalRef` e responde `200`.

**Fluxo de download:** usuário → ERP (`GET /notas/:id/arquivos/xml`) → fiscal (`GET /invoices/:id/files/xml`, checa workspace, busca `s3_xml_key`, gera URL pré-assinada de 60 s) → ERP responde `302` para a URL → navegador baixa direto do S3.

## 5. Stack e estrutura do repositório

- Node 20+, pnpm workspaces, TypeScript estrito.
- NestJS (ERP e fiscal), Prisma + PostgreSQL 16 (**dois schemas Prisma, dois bancos**).
- AWS SDK v3 (`@aws-sdk/client-s3`, `client-sqs`, `client-ssm`, `s3-request-presigner`).
- Validação com `zod`. Logs estruturados (pino) com `invoiceId` e `messageId`.
- Next.js 15 (apenas fase 3). Testes com Vitest ou Jest.

```
fiscal-mvp/
├─ docker-compose.yml
├─ init/ready.d/01-resources.sh        # cria bucket, filas e DLQs no emulador
├─ DECISIONS.md                        # suposições registradas pela IA
├─ packages/
│  └─ contracts/                       # schemas zod + tipos: API, mensagens SQS, webhook
├─ apps/
│  ├─ erp/                             # NestJS + prisma/erp.prisma  (erp-db)
│  ├─ fiscal/                          # NestJS + prisma/fiscal.prisma (fiscal-db)
│  │   └─ src/
│  │      ├─ domain/ (regras puras)    # validação, resolução de CFOP, chave de acesso
│  │      ├─ providers/ (fake, webmania-stub)
│  │      ├─ modules/ (emitters, profiles, invoices, files, admin)
│  │      └─ entrypoints/ (api.ts, worker.ts, persist.ts, dlq.ts)
│  └─ web/                             # Next.js (fase 3)
```

`packages/contracts` é a **única** coisa compartilhada entre ERP e fiscal. O ERP não importa nada interno do fiscal.

## 6. Infra local

Serviços do `docker-compose.yml`:

| Serviço | Imagem | Porta host | Observação |
|---|---|---|---|
| `erp-db` | `postgres:16-alpine` | 5432 | db `erp`, user/senha `erp` |
| `fiscal-db` | `postgres:16-alpine` | 5433 | db `fiscal`, user/senha `fiscal` |
| `aws` | `floci/floci:latest-compat` (fixar versão) | 4566 | emulador de S3/SQS/SSM; monta `./init` em `/etc/localstack/init` |

- Variáveis do emulador: `FLOCI_DEFAULT_REGION=sa-east-1`, `AWS_DEFAULT_REGION=sa-east-1`, `AWS_ACCESS_KEY_ID=test`, `AWS_SECRET_ACCESS_KEY=test`.
- Apps rodam **na máquina** (`pnpm dev`), não em container. Se algum app rodar em container no compose, defina `FLOCI_HOSTNAME=aws` e use `http://aws:4566` como endpoint.
- No cliente S3, usar `forcePathStyle: true`. Região `sa-east-1`, credenciais `test/test`, endpoint `http://localhost:4566`.
- Se a URL pré-assinada do emulador não funcionar no navegador, implementar fallback `PRESIGN_MODE=stream` (a API fiscal devolve o arquivo em streaming) e registrar em `DECISIONS.md`.

**Recursos criados pelo script de init (nomes fixos):**
- Bucket `fiscal-documents`.
- Filas `fiscal-pedidos` e `fiscal-resultados`, cada uma com DLQ (`-dlq`) e `maxReceiveCount=5`.
- URLs no formato `http://localhost:4566/000000000000/<nome-da-fila>`.

**Portas dos apps:** ERP API `3000`, Fiscal API `3100`, Web `3200`.

**Variáveis (fiscal):** `DATABASE_URL` (`postgresql://fiscal:fiscal@localhost:5433/fiscal`), `AWS_ENDPOINT_URL`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `S3_BUCKET`, `S3_FORCE_PATH_STYLE`, `SQS_PEDIDOS_URL`, `SQS_RESULTADOS_URL`, `SQS_PEDIDOS_DLQ_URL`, `FISCAL_PROVIDER` (`fake`), `FISCAL_API_KEY`, `ERP_WEBHOOK_URL` (`http://localhost:3000/fiscal/webhook`), `WEBHOOK_SECRET`, `PRESIGN_MODE` (`url`|`stream`), `PRESIGN_TTL_SECONDS` (60), `PENDING_STALE_SECONDS` (120).

**Variáveis (ERP):** `DATABASE_URL` (`postgresql://erp:erp@localhost:5432/erp`), `FISCAL_API_URL` (`http://localhost:3100`), `FISCAL_API_KEY`, `WEBHOOK_SECRET`.

O `worker` **não** recebe `DATABASE_URL` (seção 15).

## 7. Modelo de dados — banco fiscal (`fiscal.prisma`)

Toda tabela tem `workspace_id` (string opaca vinda do ERP) e **toda query filtra por ele**. Sem FKs para o ERP.

**Emitter** — CNPJ emitente.
`id uuid`, `workspace_id`, `cnpj` (14 dígitos), `legal_name`, `trade_name?`, `ie?`, `im?`, `crt` (1=Simples, 2=Simples excesso de sublimite, 3=Regime normal), `uf` (char 2), `address` (json), `environment` (`HOMOLOGACAO`|`PRODUCAO`), `series` (int, default 1), `credential_ref` (caminho no SSM), `active` (bool), `created_at`, `updated_at`.
Unique: `(cnpj, environment)`. Índice: `(workspace_id)`.
Um workspace pode ter **vários** emitentes.

**FiscalProfile** — perfil fiscal do produto (ex.: "Mercadoria para revenda").
`id`, `workspace_id`, `name`, `description?`, `active`. Unique `(workspace_id, name)`. Perfil **nunca é apagado**, só desativado.

**FiscalRule**
`id`, `profile_id`, `operation` (`VENDA` no MVP), `uf_origin?`, `uf_destination?` (null = qualquer), `cfop`, `tax_code` (CST ou CSOSN), `taxes` (json, opcional), `created_at`.
Unique: `(profile_id, operation, uf_origin, uf_destination)`.

**Invoice**
`id uuid`, `workspace_id`, `emitter_id` (FK), `type` (`NFE`), `status` (`PENDING`|`PROCESSING`|`AUTHORIZED`|`REJECTED`|`ERROR`|`CANCELLED`), `idempotency_key`, `request_hash`, `origin_type?`, `origin_id?`, `operation`, `purpose` (1 normal, 2 complementar, 3 ajuste, 4 devolução), `request_payload` (json), `resolved_items` (json, com CFOP/CST resolvidos), `total_value` (decimal 14,2), `number?`, `series?`, `access_key?` (44 dígitos, unique), `protocol?`, `environment`, `provider_ref?` (uuid/referência WebMania após aceite), `s3_xml_key?`, `s3_pdf_key?`, `rejection_code?`, `rejection_message?`, `referenced_key?`, `authorized_at?`, `processing_at?` (quando entrou em `PROCESSING`), `last_checked_at?`, `check_count` (int, default 0), `created_at`, `updated_at`.
Unique: `(emitter_id, idempotency_key)`. Índices: `(workspace_id, status, created_at)`, `(status, created_at)`.
Nota autorizada é **imutável**: só muda por evento (cancelamento).

**InvoiceEvent** (append-only)
`id`, `invoice_id`, `type` (`CREATED`|`ENQUEUED`|`WORKER_STARTED`|`WORKER_FINISHED`|`RESULT_RECEIVED`|`PROCESSING`|`AUTHORIZED`|`REJECTED`|`ERROR`|`WEBHOOK_SENT`|`WEBHOOK_FAILED`|`CHECK_STATUS_ENQUEUED`|`PROVIDER_CALLBACK_RECEIVED`|`CANCEL_REQUESTED`|`CANCELLED`), `payload` (json), `occurred_at`.
É a base da timeline exibida na UI.

## 8. Modelo de dados — banco do ERP (`erp.prisma`)

**Product**: `id`, `workspace_id`, `name`, `unit`, `price`, `ncm` (8 dígitos), `cest?`, `origin` (0–8), `fiscal_profile_id?` (**ID opaco** do perfil no serviço fiscal; sem FK).

**FinancialEntry** (lançamento): `id`, `workspace_id`, `kind` (`INCOME`|`EXPENSE`), `description`, `amount`, `due_date`, `status` (`OPEN`|`PAID`), `created_at`.

**NotaFiscalRef** (projeção local da nota): `id`, `workspace_id`, `fiscal_invoice_id` (unique), `emitter_id`, `emitter_cnpj`, `emitter_name`, `recipient_name`, `status`, `number?`, `series?`, `access_key?`, `total_value`, `rejection_message?`, `authorized_at?`, `created_at`, `updated_at`.

**FinancialEntryNota** (vínculo N:N): `financial_entry_id`, `nota_fiscal_ref_id`, `created_at`. PK composta. É o **único** vínculo entre financeiro e fiscal, e fica no ERP.

**FiscalEventInbox**: `event_id` (PK), `received_at`. Deduplicação de webhooks.

O ERP **nunca** consulta tabelas do fiscal. Telas de lista/filtro leem `NotaFiscalRef`; detalhes pesados vêm por API.

## 9. Contratos — API do serviço fiscal

Headers obrigatórios em tudo: `x-api-key` (igual a `FISCAL_API_KEY`) e `x-workspace-id`. Erros: `{ "code": "STRING", "message": "texto", "details": {} }` com status HTTP adequado (400/403/404/409/422).

| Método e rota | Função |
|---|---|
| `POST /emitters` | Cria emitente. Body inclui `credentials` (4 campos fake); grava no SSM `SecureString` em `/fiscal/{workspaceId}/{emitterId}/webmania` e salva só o `credential_ref`. |
| `GET /emitters`, `GET /emitters/:id` | Lista/detalha (nunca devolve credenciais). |
| `PATCH /emitters/:id` | Ativar/desativar e editar dados. |
| `POST /fiscal-profiles`, `GET /fiscal-profiles` | Perfis (desativar em vez de apagar). |
| `POST /fiscal-profiles/:id/rules`, `GET /fiscal-profiles/:id/rules` | Regras do perfil. |
| `POST /invoices/validate` | Dry-run: não persiste, não enfileira. |
| `POST /invoices` | Cria e enfileira. Header `Idempotency-Key` obrigatório. Responde `202 {id, status:"PENDING"}`. |
| `GET /invoices`, `GET /invoices/:id` | Lista (filtros: emitente, status, período) e detalhe. |
| `GET /invoices/:id/events` | Timeline. |
| `GET /invoices/:id/files/:kind` (`xml`\|`pdf`) | `{ url, expiresInSeconds }` (ou streaming no fallback). |
| `POST /invoices/:id/cancel` | (estágio 4) body `{ justification }` com mínimo de 15 caracteres. |
| `POST /admin/reconcile` | (estágio 4) re-enfileira `PENDING` mais antigas que `PENDING_STALE_SECONDS` (sem mensagem na fila). |
| `POST /invoices/:id/check-status` | (estágio 5) enfileira `CHECK_STATUS` imediato (botão “Consultar status agora”). |
| `POST /webhooks/webmania?t=…` | (estágio 5) callback público da WebMania (`url_notificacao` **por emissão**): valida token HMAC na query, lê `uuid` do corpo só como hint, enfileira `CHECK_STATUS` em `fiscal-pedidos` (200 rápido; sem banco). |

**Body de `POST /invoices` e `/invoices/validate`:**

```json
{
  "emitterId": "uuid",
  "operation": "VENDA",
  "purpose": 1,
  "origin": { "type": null, "id": null },
  "recipient": {
    "document": "12345678000199",
    "name": "Cliente Exemplo LTDA",
    "ie": null,
    "ieIndicator": 9,
    "email": "cliente@exemplo.com",
    "address": { "street": "Rua A", "number": "100", "district": "Centro", "city": "São Paulo", "uf": "SP", "zip": "01001000" }
  },
  "items": [
    { "code": "P001", "description": "Produto", "ncm": "84713012", "cest": null,
      "origin": 0, "fiscalProfileId": "uuid", "unit": "UN",
      "quantity": 2, "unitPrice": 100.0, "discount": 0 }
  ],
  "payments": [ { "method": "01", "amount": 200.0 } ],
  "freight": { "modality": 9 },
  "additionalInfo": ""
}
```

**Resposta de `/invoices/validate`:**

```json
{
  "valid": false,
  "errors": [ { "field": "items[0].fiscalProfileId", "code": "PROFILE_WITHOUT_RULE", "message": "Sem regra para VENDA SP→RJ" } ],
  "warnings": [],
  "preview": { "items": [ { "index": 0, "cfop": "6102", "taxCode": "102" } ], "total": 200.0 }
}
```

**Idempotência de `POST /invoices`:** mesma `Idempotency-Key` + mesmo `request_hash` (sha256 do body normalizado) → devolve a nota já criada (mesmo `id`, mesmo status). Mesma chave com body diferente → `409 IDEMPOTENCY_CONFLICT`. O escopo da chave é o emitente.

## 10. Contratos — mensagens SQS (todas versionadas, com zod em `packages/contracts`)

**`fiscal-pedidos`** (`messageType: "EMIT"`):

```json
{
  "version": 1,
  "messageType": "EMIT",
  "messageId": "uuid",
  "invoiceId": "uuid",
  "workspaceId": "string",
  "enqueuedAt": "ISO-8601",
  "emitter": { "id": "uuid", "cnpj": "14dig", "legalName": "...", "ie": "...", "crt": 1, "uf": "SP", "environment": "HOMOLOGACAO", "series": 1 },
  "credentialRef": "/fiscal/{workspaceId}/{emitterId}/webmania",
  "recipient": { },
  "items": [ { "code": "P001", "description": "...", "ncm": "...", "quantity": 2, "unitPrice": 100.0, "discount": 0, "cfop": "5102", "taxCode": "102" } ],
  "payments": [ ],
  "freight": { },
  "additionalInfo": "",
  "totalValue": 200.0
}
```

A mensagem carrega **tudo** de que o worker precisa, porque ele não lê o banco.

**`fiscal-resultados`** (`messageType: "EMIT_RESULT"`):

```json
{
  "version": 1,
  "messageType": "EMIT_RESULT",
  "invoiceId": "uuid",
  "workspaceId": "string",
  "outcome": "AUTHORIZED",
  "startedAt": "ISO-8601",
  "finishedAt": "ISO-8601",
  "authorization": { "number": 123456, "series": 1, "accessKey": "44dig", "protocol": "string",
                     "authorizedAt": "ISO-8601", "providerRef": "string",
                     "s3XmlKey": "ws/cnpj/2026/10/chave.xml", "s3PdfKey": "ws/cnpj/2026/10/chave.pdf" },
  "rejection": null
}
```

Em `REJECTED`, `authorization` é nulo e `rejection` é `{ "code": "233", "message": "..." }`.

Em **`PROCESSING`** (estágio 5 / WebMania), `outcome` é `"PROCESSING"`, `authorization` e `rejection` são nulos, e o corpo inclui `providerRef` (uuid WebMania). XML/PDF só após `AUTHORIZED`. O persist grava `status = PROCESSING` e `provider_ref`; transição condicional a partir de `PENDING` ou `PROCESSING`.

**`fiscal-pedidos`** (`messageType: "CHECK_STATUS"`, estágio 5):

```json
{
  "version": 1,
  "messageType": "CHECK_STATUS",
  "messageId": "uuid",
  "invoiceId": "uuid",
  "workspaceId": "string",
  "enqueuedAt": "ISO-8601",
  "providerRef": "uuid-webmania",
  "credentialRef": "/fiscal/{workspaceId}/{emitterId}/webmania"
}
```

O worker **consulta** o provider (`checkStatus`); **nunca** chama `emit` de novo para a mesma nota enquanto houver `provider_ref` ou status `PROCESSING`. Publica `EMIT_RESULT` com o estado atual (continua `PROCESSING`, vira `AUTHORIZED`/`REJECTED`, ou contingência — ver seção 21).

**Consumo:** long polling (`WaitTimeSeconds=20`), visibility timeout de 60 s, mensagem apagada **só após sucesso**, handlers idempotentes. Falha repetida 5 vezes leva à DLQ. Chave S3: `{workspaceId}/{cnpj}/{ano}/{mes}/{accessKey}.xml|.pdf`.

## 11. Contrato — webhook fiscal → ERP

`POST {ERP_WEBHOOK_URL}` com headers `x-fiscal-signature: sha256=<hmac hex do corpo bruto com WEBHOOK_SECRET>` e `x-fiscal-event-id`.

```json
{
  "eventId": "uuid",
  "type": "invoice.authorized",
  "occurredAt": "ISO-8601",
  "workspaceId": "string",
  "data": {
    "invoiceId": "uuid", "emitterId": "uuid", "emitterCnpj": "14dig", "emitterName": "...",
    "recipientName": "...", "status": "AUTHORIZED", "number": 123456, "series": 1,
    "accessKey": "44dig", "protocol": "string", "totalValue": 200.0,
    "authorizedAt": "ISO-8601", "rejection": null,
    "origin": { "type": null, "id": null }
  }
}
```

Tipos: `invoice.authorized`, `invoice.rejected`, `invoice.error`, `invoice.cancelled`, `invoice.processing` (estágio 5; ERP atualiza projeção para `PROCESSING`).
`eventId` é **determinístico** (UUID v5 de `invoiceId + type`), então um reprocessamento gera o mesmo id e a deduplicação do ERP funciona.

**Receptor no ERP:** valida HMAC sobre o corpo bruto; se `eventId` já está em `FiscalEventInbox`, responde `200` sem fazer nada; senão faz **upsert** de `NotaFiscalRef` por `fiscal_invoice_id` (cria se não existir, pois o webhook pode chegar antes do insert local) e registra o `eventId`. Qualquer status diferente de 2xx faz o fiscal tentar de novo (a mensagem volta à fila).

## 12. API do ERP (resumo)

Header `x-workspace-id` em tudo (sem autenticação real no MVP).

- `GET/POST /produtos`.
- `GET/POST /emitentes`, `GET /perfis-fiscais`: **proxy** para o fiscal.
- `POST /notas/validar`: proxy de `/invoices/validate`.
- `POST /notas`: repassa ao fiscal (com `Idempotency-Key`) e, ao receber `202`, grava `NotaFiscalRef` como `PENDING`.
- `GET /notas`, `GET /notas/:id`: leem a projeção local.
- `GET /notas/:id/eventos`: proxy da timeline.
- `GET /notas/:id/arquivos/:kind`: pede a URL ao fiscal e responde `302`.
- `POST /fiscal/webhook`: receptor (seção 11).
- `GET/POST /lancamentos`; `POST /lancamentos/:id/notas/:notaId` e `DELETE` para vincular/desvincular (N:N).

Regra: cancelar nota ou receber `invoice.rejected` com lançamento vinculado só **sinaliza** no lançamento; nunca estorna sozinho.

## 13. Regras de negócio (funções puras, com testes)

**Validação (`validate`):**
- Emitente existe, pertence ao `x-workspace-id` e está ativo → senão `EMITTER_NOT_FOUND` / `EMITTER_INACTIVE`.
- Documento do destinatário com dígito verificador válido (CPF 11 ou CNPJ 14) → `INVALID_DOCUMENT`.
- Pelo menos 1 item; `quantity > 0`; `ncm` com 8 dígitos → `INVALID_ITEM`.
- Todo item com `fiscalProfileId` existente, ativo e do workspace, com regra aplicável → `PROFILE_NOT_FOUND` / `PROFILE_WITHOUT_RULE`.
- Soma de `payments` igual ao total (itens menos descontos) → `PAYMENT_MISMATCH`.
- Aviso (não bloqueia) se o ambiente do emitente for `PRODUCAO`.

**Resolução de CFOP/CST:** para cada item, entre as regras do perfil com a mesma `operation`, escolher a mais específica: par exato `(uf_origin = emitter.uf, uf_destination = recipient.address.uf)` > só `uf_destination` > regra genérica (ambas nulas). Sem correspondência → erro.

**Chave de acesso (44 dígitos):** `cUF(2) + AAMM(4) + CNPJ(14) + modelo "55"(2) + série(3) + número(9) + tpEmis "1"(1) + cNF(8) + DV(1)`. DV por módulo 11 (pesos 2 a 9 da direita para a esquerda; se o resto for 0 ou 1, DV = 0, senão DV = 11 − resto). Incluir mapa completo UF → código IBGE.

**Máquina de estados (MVP fake, fases 0–3):** `PENDING → AUTHORIZED | REJECTED | ERROR` e `AUTHORIZED → CANCELLED`.

**Máquina de estados (WebMania, estágio 5):** `PENDING → PROCESSING | REJECTED | ERROR`; `PROCESSING → AUTHORIZED | REJECTED | ERROR` (contingência permanece `PROCESSING` até resolução final — confirmar mapeamento exato na doc WebMania); `AUTHORIZED → CANCELLED`.

**Regra de ouro (timeout):** se a chamada ao provider **não retornou** (timeout/rede), o resultado é **desconhecido** → tratar como `PROCESSING` se já existir `provider_ref`, ou reconsultar antes de qualquer nova emissão. **Proibido** reemitir a mesma nota enquanto WebMania/SEFAZ indicarem “em processamento” (orientação WebMania).

Transições finais (`AUTHORIZED`/`REJECTED`) usam update condicional (`WHERE status IN ('PENDING','PROCESSING')` conforme o caso); se afetar 0 linhas, a mensagem já foi processada: não duplica eventos, mas ainda tenta o webhook.

## 14. Provider fiscal (interface e adapter fake)

```ts
interface FiscalProvider {
  emit(input: EmitInput): Promise<EmitResult>;       // AUTHORIZED | REJECTED | PROCESSING (estágio 5)
  checkStatus(input: CheckStatusInput): Promise<EmitResult>; // só consulta; nunca cria nova nota
  cancel(input: CancelInput): Promise<CancelResult>; // estágio 4
}
```

Seleção por `FISCAL_PROVIDER`. O adapter `webmania` é apenas um **stub** que lança `NotImplemented` (não implementar chamadas reais).

**Comportamento do `FakeProvider`** (gatilhos em `additionalInfo`):

| Gatilho | Resultado |
|---|---|
| (nenhum) | Aprova após 1–3 s aleatórios |
| `[FAKE:REJECT]` | Rejeita: código `233`, mensagem "IE do destinatário não cadastrada" (simulada) |
| `[FAKE:SLOW]` | Aprova após 8 s |
| `[FAKE:ERROR]` | Lança erro transitório (a mensagem volta à fila, tenta 5 vezes, cai na DLQ) |
| `[FAKE:PROCESSING]` | (estágio 5) Retorna `PROCESSING` com `providerRef` determinístico; após N consultas `checkStatus` ou após delay simulado, passa a `AUTHORIZED` (demonstração de recuperação) |
| `[FAKE:TIMEOUT]` | (estágio 5) Simula timeout na `emit` após WebMania ter “aceito” (worker grava estado intermediário via mensagem de resultado ou reconsulta) |

**Determinismo:** `number`, `cNF` e `protocol` derivam de um hash estável do `invoiceId`. Assim uma mensagem duplicada (SQS at-least-once) produz exatamente o mesmo resultado.

**Artefatos gerados:**
- XML simples no formato `<NFe>` com chave, emitente, destinatário, itens, total e protocolo, contendo a marca `DOCUMENTO SIMULADO – SEM VALOR FISCAL`.
- PDF simples (pdfkit ou pdf-lib) com os mesmos dados e a mesma marca.
- Ambos gravados no S3 pelo **worker**.

**Credencial:** mesmo no modo fake, o worker lê a credencial do SSM (`GetParameter` com decriptação) para exercitar o caminho real. Nunca logar valores de credencial.

## 15. Processos (entrypoints) e isolamento

Quatro entrypoints em `apps/fiscal/src/entrypoints/`. Cada um sobe um `NestFactory.createApplicationContext` (a API sobe HTTP) e roda localmente como processo; no futuro, cada um vira um handler de Lambda chamando os mesmos services.

- `api.ts`: HTTP na porta 3100.
- `worker.ts`: consome `fiscal-pedidos`, **sem banco**.
- `persist.ts`: consome `fiscal-resultados`, atualiza o banco e envia o webhook.
- `dlq.ts`: consome `fiscal-pedidos-dlq`, marca a nota como `ERROR`, registra evento e envia `invoice.error`.

**Isolamento imposto no código (obrigatório):**
- Cada entrypoint valida suas variáveis de ambiente com um schema zod próprio. O schema do worker **não inclui** `DATABASE_URL`.
- O módulo do worker não importa Prisma. Regra de lint (`no-restricted-imports`) bloqueando `@prisma/client` e módulos de repositório dentro do código do worker.
- Logs de cada etapa com `invoiceId` e `messageId` (para acompanhar o fluxo em 4 terminais na demonstração).

**Scripts na raiz:** `infra:up`, `infra:down`, `db:migrate` (os dois bancos), `seed`, `dev:erp`, `dev:fiscal:api`, `dev:fiscal:worker`, `dev:fiscal:persist`, `dev:fiscal:dlq`, `dev:web`, `dev` (todos juntos com `concurrently`), `test`, `e2e`.

## 16. UI mínima (fase 3, Next.js 15, no ERP)

Telas simples, sem polimento, todas falando só com a API do ERP:
1. **Emitentes:** lista e cadastro (com seletor de ambiente).
2. **Notas:** lista com filtros (emitente, status, período), lendo a projeção local.
3. **Nova nota (avulsa):** destinatário, itens (escolhendo produtos do ERP), pagamento, natureza e emitente; botão "Revisar" (chama validar e mostra erros/avisos e o CFOP resolvido por item) e botão "Emitir" (gera um `Idempotency-Key` UUID por tentativa; em produção, confirmação em modal).
4. **Detalhe da nota:** status (com atualização automática por polling a cada 2 s), **timeline de eventos**, downloads de XML e PDF, motivo da rejeição. Em `PROCESSING`, exibir “Processando há N min” (`processing_at`). Botão **Consultar status agora** (estágio 5). Botão **Corrigir e reenviar** só em `REJECTED`/`ERROR` (nova tentativa com novo `Idempotency-Key`; **não** reemitir `PENDING`/`PROCESSING`).
5. **Lançamentos:** lista e cadastro, com campo opcional "vincular nota" (busca na lista local).
6. **Produtos:** cadastro com aba "Fiscal" (NCM, CEST, origem, select de perfil fiscal lido da API do fiscal).

Selo bem visível de ambiente (homologação/produção) na emissão.

## 17. Seed

Constantes compartilhadas (UUIDs fixos) em `packages/contracts` para que ERP e fiscal se refiram aos mesmos IDs de perfil sem FK.

- Workspace `ws_demo_a`: **2 emitentes** (um em SP, um em RJ; CNPJs fictícios com dígito verificador válido, gerados por helper), ambiente `HOMOLOGACAO`, credenciais fake gravadas no SSM.
- Workspace `ws_demo_b`: 1 emitente (usado para provar o isolamento entre workspaces).
- Perfil "Mercadoria para revenda" com regras de exemplo: `VENDA` SP→SP `5102`/`102`; SP→outras UFs `6102`/`102`; RJ→RJ `5102`/`102`; RJ→outras `6102`/`102`. (Valores ilustrativos.)
- ERP: 3 produtos com NCM e `fiscal_profile_id` apontando para o perfil seed; 2 lançamentos de exemplo.

## 18. Fases e critérios de aceite

**Fase 0 — Infra:** `infra:up` sobe os 3 containers; o script de init cria bucket e filas; ambos os bancos migram. *Aceite:* `aws --endpoint-url=http://localhost:4566 sqs list-queues` lista as 4 filas.

**Fase 1 — Núcleo fiscal:** emitentes, perfis/regras, validate, criação de nota, worker, persist, arquivos, timeline. *Aceite:* nota aprovada de ponta a ponta usando só `curl`; XML e PDF baixáveis.

**Fase 2 — Integração com o ERP:** cliente HTTP, webhook com HMAC e dedup, projeção `NotaFiscalRef`, lançamentos com vínculo N:N. *Aceite:* nota emitida via ERP aparece em `GET /notas` e muda de `PENDING` para `AUTHORIZED` sozinha.

**Fase 3 — UI mínima** (seção 16).

**Fase 4 — Stretch:** `dlq.ts`, `POST /admin/reconcile` (notas `PENDING` stale sem mensagem), cancelamento (mensagem `CANCEL` pelas mesmas filas e evento `invoice.cancelled`).

**Fase 5 — WebMania e recuperação (seção 21):** status `PROCESSING`, mensagem `CHECK_STATUS`, callback `POST /webhooks/webmania?t=` (token HMAC por emissão → fila pedidos), job de reconciliação que enfileira consultas (VPC, com banco), worker consulta provider, `[FAKE:PROCESSING]` + POST simulado no fake, UI de consulta manual, webhook `invoice.processing`. *Aceite:* nota fica `PROCESSING`, recupera para `AUTHORIZED` via consulta ou callback simulado, **sem** segunda emissão para o mesmo `invoiceId`.

**Script `e2e` (cenários obrigatórios):**
1. Emissão aprovada: `PENDING → AUTHORIZED`, arquivos no S3, `NotaFiscalRef` atualizada, timeline completa.
2. Rejeição (`[FAKE:REJECT]`): `REJECTED` com código e mensagem.
3. Idempotência: mesmo `Idempotency-Key` e mesmo body devolve a mesma nota; body diferente dá `409`.
4. Worker parado: notas ficam `PENDING` e a fila acumula; ao subir o worker, todas são processadas.
5. Erro persistente (`[FAKE:ERROR]`): 5 tentativas, DLQ, nota em `ERROR` (fase 4).
6. Webhook duplicado: o ERP processa uma única vez.
7. Isolamento: `ws_demo_b` recebe `404` ao ler nota de `ws_demo_a` e erro ao usar emitente de outro workspace.
8. Vínculo: um lançamento com 2 notas e uma nota em 2 lançamentos; emitir nota não cria lançamento.

## 19. Roteiro de demonstração (para a apresentação)

1. `infra:up` e mostrar os dois bancos vazios e separados (cliente SQL) e os recursos AWS emulados.
2. Rodar os processos em terminais lado a lado (ERP, fiscal-api, worker, persist).
3. Emitir uma nota na UI: mostrar a timeline e os logs passando por api → fila → worker → resultado → persist → webhook.
4. Mostrar no banco do ERP só a projeção enxuta e no banco fiscal a nota completa; baixar o XML por URL pré-assinada.
5. Emitir com `[FAKE:REJECT]` e mostrar o fluxo de correção e reenvio.
6. **Parar o worker**, emitir 3 notas, mostrar a fila acumulando; subir o worker e ver tudo drenar (resiliência).
7. Repetir a mesma requisição (mesmo `Idempotency-Key`): nenhuma nota duplicada.
8. Criar um lançamento e vinculá-lo a uma nota, mostrando que os domínios são independentes.

## 20. Limites conhecidos e caminho para produção

- Em produção: `api`, `persist` e `dlq` rodam em Lambda **dentro da VPC** (acesso ao RDS; SQS via VPC Endpoint) e o `worker` roda em Lambda **fora da VPC** (sem NAT), lendo credenciais do SSM/Secrets Manager.
- Envio ao SQS depois do commit pode falhar e deixar a nota `PENDING` sem mensagem; no MVP isso é coberto pela reconciliação (fase 4). Em produção, considerar *transactional outbox*.
- Autenticação service-to-service real (IAM/JWT) e rotação de segredos ficam fora do MVP.
- A numeração real é controlada pela WebMania/SEFAZ; o fake apenas simula.
- O emulador de AWS tem fidelidade parcial; validar o fluxo em um staging na AWS real antes de produção.
- Integração WebMania assíncrona, timeout e recuperação: **seção 21**.

## 21. Integração WebMania (produção) e recuperação

Referência de comportamento esperado da WebMania (não chamar API real no MVP local). Objetivo: encaixar na arquitetura **worker fora da VPC (sem NAT)** + **persist/api dentro da VPC**.

### O que a WebMania faz pelo integrador

- Status inicial pode ser **processamento**; a WebMania consulta a SEFAZ periodicamente (ex.: a cada minuto) para notas nesse estado.
- **`url_notificacao` não é configuração global**: uma **única URL base** atende todos os workspaces/CNPJs, mas o parâmetro é enviado **em cada requisição de emissão**. A WebMania faz **POST** nessa URL quando o status muda.
- O POST traz o **`uuid` da nota** no corpo (e campo **`motivo`** explicando o status). Esse `uuid` é a referência para consulta na API deles — e **só aparece nos logs de notificação se `url_notificacao` foi informado na emissão** → **sempre enviar**.
- POST sai de **IPs estáticos** de saída da WebMania (liberar no firewall). **Não está confirmado** se a WebMania assina o callback nem a política de reenvio se o endpoint falhar — perguntar ao suporte; por isso a **reconciliação agendada permanece obrigatória** (callback acelera, não garante).
- Mesmo com o integrador fora do ar, a nota evolui do lado deles; sempre é possível **reconsultar** por `uuid`/`provider_ref`.

Confirmar na documentação oficial: campo de **referência externa** / consulta por identificador (necessário para conciliar timeout).

### URL de notificação assinada (correlação)

O worker monta, por nota:

`https://fiscal.exemplo.com/webhooks/webmania?t=<payload-base64url>.<hmac-sha256>`

Payload assinado inclui `invoiceId`, `workspaceId`, `emitterId`, `credentialRef`, `emitterCnpj`. O callback **valida o HMAC** e enfileira `CHECK_STATUS` **sem consultar banco** (handler pode ficar fora da VPC). **Não confiar no corpo** para identidade da nota; o `uuid` do POST só orienta a consulta `checkStatus` no worker (único componente que fala com a WebMania).

### Risco crítico: timeout ≠ falha

Se `emit` não retornar, **não se sabe** se a nota foi criada na WebMania. **Reemitir às cegas** pode gerar duplicidade. Regra do serviço fiscal:

1. Resultado desconhecido → tratar como **em processamento** (gravar `PROCESSING` + `provider_ref` quando a API tiver devolvido referência antes do timeout, ou após primeira consulta bem-sucedida).
2. Só permitir **nova emissão** (novo `invoiceId` + novo `Idempotency-Key`) após consulta confirmar que a tentativa anterior **não existe** ou está **reprovada**.
3. Enquanto status WebMania for processamento/contingência, **apenas `checkStatus`**, nunca novo `emit` para o mesmo `invoiceId`.

### Camadas de recuperação

| Camada | Onde roda | O que faz |
|---|---|---|
| **Callback** | API Gateway → Lambda **fora da VPC** → `fiscal-pedidos` | Valida token HMAC em `?t=` (correlaciona `invoiceId`/`workspaceId`/`emitterId`); **não confia** no corpo para identidade; enfileira `CHECK_STATUS`; worker consulta WebMania e publica `EMIT_RESULT`; **persist** grava e avisa ERP |
| **Reconciliação agendada** | Job/Lambda **na VPC** (acesso ao banco) | Lista `PENDING`/`PROCESSING` com `updated_at` ou `last_checked_at` > X min; enfileira **`CHECK_STATUS`** (não `EMIT`) |
| **Consulta manual** | UI → ERP → fiscal `POST /invoices/:id/check-status` | Mesmo fluxo que reconciliação, disparo imediato |
| **ERP watchdog** | Job no ERP (opcional) | `GET /invoices/:id` no fiscal para projeções `PENDING`/`PROCESSING` paradas (webhook perdido) |

O job de varredura **não** chama WebMania; só enfileira. Quem tem internet é sempre o **worker**.

### Fluxo estendido (estágio 5)

```
EMIT → worker → provider.emit
  → AUTHORIZED/REJECTED (fake síncrono ou resposta final imediata)
  → PROCESSING + providerRef (WebMania aceitou, SEFAZ pendente)
       → persist grava PROCESSING, webhook invoice.processing
       → (paralelo) WebMania POST url_notificacao → POST /webhooks/webmania?t=… → fiscal-pedidos (CHECK_STATUS)
       → (paralelo) CHECK_STATUS na fila → worker.checkStatus → EMIT_RESULT
  → persist: PROCESSING → AUTHORIZED | REJECTED
```

**Contingência:** se a WebMania emitir em contingência, tratar como **intermediário** (`PROCESSING` ou subestado documentado em `DECISIONS.md` após leitura da doc); nota permanece pendente de autorização definitiva; arquivos finais só após `AUTHORIZED`.

### Observabilidade e operação

- UI: “Processando há 12 min” em vez de status mudo.
- Alarmes (produção): nota em `PENDING`/`PROCESSING` > N minutos; mensagens na **DLQ** de pedidos e de resultados.
- Painel de pendências para suporte (fora do MVP local).

### Demonstração local (fake)

- `[FAKE:PROCESSING]`: emissão retorna `PROCESSING` com `providerRef`; o fake **simula** o POST da WebMania na `url_notificacao` assinada (após ~1,5 s); o callback enfileira `CHECK_STATUS`; o worker consulta e publica `AUTHORIZED`.
- A WebMania **não alcança localhost**; homologação real na máquina exige túnel (ngrok/cloudflared) ou dependência só de polling/reconciliação.
- Roteiro extra: emitir com `[FAKE:PROCESSING]`, observar `PROCESSING`, usar “Consultar status agora” ou aguardar callback simulado.

### DLQ de resultados

A fila `fiscal-resultados-dlq` existe no emulador. Se o **persist** falhar repetidamente (ex.: ERP down), a nota pode ficar desatualizada. Estágio 5+: handler opcional para `fiscal-resultados-dlq` (reprocessar ou marcar `ERROR` + alerta), espelhando `dlq.ts` de pedidos.