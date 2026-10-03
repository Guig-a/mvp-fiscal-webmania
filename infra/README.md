# Infra Pulumi

Provisiona a infraestrutura AWS do serviço fiscal sem depender de criação manual no console.

## O que este stack cria

- VPC com subnets públicas, privadas de aplicação e privadas de banco
- Security groups
- S3 de documentos XML/PDF
- SQS `fiscal-pedidos`, `fiscal-resultados` e respectivas DLQs
- RDS PostgreSQL
- Repositórios ECR para `fiscal-api`, `fiscal-callback`, `fiscal-worker`, `fiscal-persist`, `fiscal-dlq`
- API Gateway HTTP API
- Roles IAM de runtime
- Alarmes e dashboard no CloudWatch
- Lambda inline de reconciliação agendada

As lambdas de aplicação em container são **condicionais**: primeiro você pode subir a base da infra com `enableLambdaFunctions: false`, publicar as imagens no ECR e depois ligar `enableLambdaFunctions: true` com `infra:images`.

## Instalação

```bash
pnpm install
cd infra
pulumi stack init dev
```

## Configs secretas obrigatórias

```bash
pulumi config set --secret mvp-fiscal-infra:dbPassword "<senha-do-rds>"
pulumi config set --secret mvp-fiscal-infra:fiscalApiKey "<api-key-interna>"
pulumi config set --secret mvp-fiscal-infra:webhookSecret "<hmac-fiscal-erp>"
pulumi config set --secret mvp-fiscal-infra:webmaniaCallbackSecret "<hmac-callback-webmania>"
```

## Depois de publicar imagens no ECR

```bash
pulumi config set --path 'mvp-fiscal-infra:images.api' '<account>.dkr.ecr.sa-east-1.amazonaws.com/fiscal-mvp-prod-fiscal-api:sha'
pulumi config set --path 'mvp-fiscal-infra:images.callback' '<account>.dkr.ecr.sa-east-1.amazonaws.com/fiscal-mvp-prod-fiscal-callback:sha'
pulumi config set --path 'mvp-fiscal-infra:images.worker' '<account>.dkr.ecr.sa-east-1.amazonaws.com/fiscal-mvp-prod-fiscal-worker:sha'
pulumi config set --path 'mvp-fiscal-infra:images.persist' '<account>.dkr.ecr.sa-east-1.amazonaws.com/fiscal-mvp-prod-fiscal-persist:sha'
pulumi config set --path 'mvp-fiscal-infra:images.dlq' '<account>.dkr.ecr.sa-east-1.amazonaws.com/fiscal-mvp-prod-fiscal-dlq:sha'
pulumi config set --path 'mvp-fiscal-infra:features.enableLambdaFunctions' 'true'
```

## Uso

```bash
pulumi preview
pulumi up
```
