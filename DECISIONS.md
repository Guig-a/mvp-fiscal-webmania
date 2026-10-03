# DECISIONS

Registro de suposições feitas durante a implementação do MVP.

- O repositório usa o diretório raiz `MVP-fiscal` (não `fiscal-mvp/`) como workspace pnpm.
- Prisma schemas ficam em `apps/fiscal/prisma/schema.prisma` e `apps/erp/prisma/schema.prisma` (Prisma exige `schema.prisma`; o domínio permanece isolado).
- Testes usam Vitest.
- PDF gerado com `pdfkit`.
- HMAC do webhook usa o corpo bruto em UTF-8.
- `PRESIGN_MODE` default é `url`; fallback `stream` está implementado.
- Versão do emulador AWS: `floci/floci:latest-compat` (imagem pedida no spec).
- Cancelamento (fase 4) reusa as filas `fiscal-pedidos` / `fiscal-resultados` com `messageType: CANCEL` / `CANCEL_RESULT`.
- Numeração fake deriva de hash estável do `invoiceId`.
- O hook de init do Floci derruba o emulador se o script falha. O compose não monta `./init` automaticamente; `01-resources.sh` permanece no repo e o seed chama `ensureAwsResources()` para criar bucket/filas.
- Apps Next.js e NestJS usam `x-workspace-id` sem autenticação de usuário.
- `tsx` não emite `design:paramtypes`; a injeção Nest usa `@Inject(Token)` explícito. `AuthGuard` (APP_GUARD) usa `new Reflector()` no próprio guard — construtor com DI quebra sob `tsx`.
- No Windows, `prisma generate` falha com EPERM se API/worker/persist estiverem rodando (engine DLL em uso). O `postinstall` reutiliza o client já gerado nesse caso.
- Integração WebMania assíncrona: `PROCESSING`, fila `CHECK_STATUS`, callback `POST /webhooks/webmania?t=` (token HMAC por nota, sem banco), worker único que chama provider; ver `spec.md` seção 21.
- `url_notificacao` enviada **por emissão** (URL base única + token na query); callback enfileira pedido, não grava nem publica em `fiscal-resultados` diretamente.
- Reconciliação: `PENDING` stale sem `provider_ref` → re-`EMIT`; `PROCESSING` stale → `CHECK_STATUS` (nunca reemitir às cegas com referência).
- Mapeamento exato de **contingência** WebMania → status interno fica pendente até leitura da documentação oficial (tratar como intermediário `PROCESSING` por padrão).
