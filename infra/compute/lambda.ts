import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";

type RuntimeFunction = aws.lambda.Function | undefined;

export type EcrRepositories = {
  api: aws.ecr.Repository;
  callback: aws.ecr.Repository;
  worker: aws.ecr.Repository;
  persist: aws.ecr.Repository;
  dlq: aws.ecr.Repository;
};

export type RuntimeFunctions = {
  api?: aws.lambda.Function;
  callback?: aws.lambda.Function;
  worker?: aws.lambda.Function;
  persist?: aws.lambda.Function;
  dlq?: aws.lambda.Function;
  reconcileTrigger: aws.lambda.Function;
};

type FunctionArgs = {
  namePrefix: string;
  suffix: string;
  roleArn: pulumi.Input<string>;
  imageUri?: string;
  memorySize: number;
  timeout: number;
  environment: Record<string, pulumi.Input<string | undefined>>;
  subnetIds?: pulumi.Input<string>[];
  securityGroupIds?: pulumi.Input<string>[];
};

function compactEnvironment(environment: Record<string, pulumi.Input<string | undefined>>) {
  return pulumi
    .all(environment)
    .apply(
      (resolved) => Object.fromEntries(Object.entries(resolved).filter(([, value]) => value !== undefined)) as Record<string, string>,
    );
}

function createImageLambda(input: FunctionArgs): RuntimeFunction {
  if (!input.imageUri) {
    return undefined;
  }

  const fn = new aws.lambda.Function(`${input.namePrefix}-${input.suffix}`, {
    packageType: "Image",
    role: input.roleArn,
    imageUri: input.imageUri,
    memorySize: input.memorySize,
    timeout: input.timeout,
    environment: {
      variables: compactEnvironment(input.environment),
    },
    vpcConfig:
      input.subnetIds && input.securityGroupIds
        ? {
            subnetIds: input.subnetIds,
            securityGroupIds: input.securityGroupIds,
          }
        : undefined,
  });

  new aws.cloudwatch.LogGroup(`${input.namePrefix}-${input.suffix}-logs`, {
    name: pulumi.interpolate`/aws/lambda/${fn.name}`,
    retentionInDays: 30,
  });

  return fn;
}

export function createEcrRepositories(namePrefix: string): EcrRepositories {
  const createRepo = (suffix: string) =>
    new aws.ecr.Repository(`${namePrefix}-${suffix}-repo`, {
      name: `${namePrefix}-${suffix}`,
      imageTagMutability: "MUTABLE",
      imageScanningConfiguration: { scanOnPush: true },
    });

  return {
    api: createRepo("fiscal-api"),
    callback: createRepo("fiscal-callback"),
    worker: createRepo("fiscal-worker"),
    persist: createRepo("fiscal-persist"),
    dlq: createRepo("fiscal-dlq"),
  };
}

export function createRuntimeFunctions(input: {
  namePrefix: string;
  region: string;
  databaseUrl: pulumi.Input<string>;
  bucketName: pulumi.Input<string>;
  pedidosQueueUrl: pulumi.Input<string>;
  pedidosQueueArn: pulumi.Input<string>;
  pedidosDlqQueueUrl: pulumi.Input<string>;
  pedidosDlqQueueArn: pulumi.Input<string>;
  resultadosQueueUrl: pulumi.Input<string>;
  resultadosQueueArn: pulumi.Input<string>;
  erpWebhookUrl: string;
  fiscalApiKey: pulumi.Input<string>;
  webhookSecret: pulumi.Input<string>;
  webmaniaCallbackSecret: pulumi.Input<string>;
  callbackBaseUrl: pulumi.Input<string>;
  apiBaseUrl: pulumi.Input<string>;
  fiscalProvider: "fake" | "webmania";
  presignMode: "url" | "stream";
  presignTtlSeconds: number;
  pendingStaleSeconds: number;
  processingStaleSeconds: number;
  privateSubnetIds: pulumi.Input<string>[];
  lambdaSecurityGroupIds: pulumi.Input<string>[];
  apiRoleArn: pulumi.Input<string>;
  callbackRoleArn: pulumi.Input<string>;
  workerRoleArn: pulumi.Input<string>;
  persistRoleArn: pulumi.Input<string>;
  dlqRoleArn: pulumi.Input<string>;
  reconcileRoleArn: pulumi.Input<string>;
  images: {
    api?: string;
    callback?: string;
    worker?: string;
    persist?: string;
    dlq?: string;
  };
  defaultWorkspaceId: string;
  reconcileEveryMinutes: number;
}) {
  const commonAwsEnv = {
    AWS_REGION: input.region,
    S3_BUCKET: input.bucketName,
    S3_FORCE_PATH_STYLE: "false",
  };

  const api = createImageLambda({
    namePrefix: input.namePrefix,
    suffix: "fiscal-api",
    roleArn: input.apiRoleArn,
    imageUri: input.images.api,
    memorySize: 1024,
    timeout: 30,
    subnetIds: input.privateSubnetIds,
    securityGroupIds: input.lambdaSecurityGroupIds,
    environment: {
      ...commonAwsEnv,
      DATABASE_URL: input.databaseUrl,
      SQS_PEDIDOS_URL: input.pedidosQueueUrl,
      FISCAL_API_KEY: input.fiscalApiKey,
      PRESIGN_MODE: input.presignMode,
      PRESIGN_TTL_SECONDS: String(input.presignTtlSeconds),
      PENDING_STALE_SECONDS: String(input.pendingStaleSeconds),
      PROCESSING_STALE_SECONDS: String(input.processingStaleSeconds),
      WEBMANIA_CALLBACK_BASE_URL: input.callbackBaseUrl,
      WEBMANIA_CALLBACK_SECRET: input.webmaniaCallbackSecret,
      PORT: "3100",
    },
  });

  const callback = createImageLambda({
    namePrefix: input.namePrefix,
    suffix: "fiscal-callback",
    roleArn: input.callbackRoleArn,
    imageUri: input.images.callback ?? input.images.api,
    memorySize: 512,
    timeout: 15,
    environment: {
      AWS_REGION: input.region,
      SQS_PEDIDOS_URL: input.pedidosQueueUrl,
      WEBMANIA_CALLBACK_SECRET: input.webmaniaCallbackSecret,
    },
  });

  const worker = createImageLambda({
    namePrefix: input.namePrefix,
    suffix: "fiscal-worker",
    roleArn: input.workerRoleArn,
    imageUri: input.images.worker,
    memorySize: 1024,
    timeout: 120,
    environment: {
      ...commonAwsEnv,
      SQS_PEDIDOS_URL: input.pedidosQueueUrl,
      SQS_RESULTADOS_URL: input.resultadosQueueUrl,
      FISCAL_PROVIDER: input.fiscalProvider,
      WEBMANIA_CALLBACK_BASE_URL: input.callbackBaseUrl,
      WEBMANIA_CALLBACK_SECRET: input.webmaniaCallbackSecret,
    },
  });

  const persist = createImageLambda({
    namePrefix: input.namePrefix,
    suffix: "fiscal-persist",
    roleArn: input.persistRoleArn,
    imageUri: input.images.persist,
    memorySize: 1024,
    timeout: 60,
    subnetIds: input.privateSubnetIds,
    securityGroupIds: input.lambdaSecurityGroupIds,
    environment: {
      ...commonAwsEnv,
      DATABASE_URL: input.databaseUrl,
      SQS_RESULTADOS_URL: input.resultadosQueueUrl,
      ERP_WEBHOOK_URL: input.erpWebhookUrl,
      WEBHOOK_SECRET: input.webhookSecret,
    },
  });

  const dlq = createImageLambda({
    namePrefix: input.namePrefix,
    suffix: "fiscal-dlq",
    roleArn: input.dlqRoleArn,
    imageUri: input.images.dlq,
    memorySize: 512,
    timeout: 60,
    subnetIds: input.privateSubnetIds,
    securityGroupIds: input.lambdaSecurityGroupIds,
    environment: {
      AWS_REGION: input.region,
      DATABASE_URL: input.databaseUrl,
      SQS_PEDIDOS_DLQ_URL: input.pedidosDlqQueueUrl,
      ERP_WEBHOOK_URL: input.erpWebhookUrl,
      WEBHOOK_SECRET: input.webhookSecret,
    },
  });

  const reconcileTrigger = new aws.lambda.Function(`${input.namePrefix}-reconcile-trigger`, {
    runtime: "nodejs20.x",
    handler: "index.handler",
    role: input.reconcileRoleArn,
    timeout: 15,
    memorySize: 256,
    code: new pulumi.asset.AssetArchive({
      "index.js": new pulumi.asset.StringAsset(`
exports.handler = async function () {
  const response = await fetch(process.env.RECONCILE_URL, {
    method: "POST",
    headers: {
      "x-api-key": process.env.FISCAL_API_KEY,
      "x-workspace-id": process.env.WORKSPACE_ID
    }
  });
  if (!response.ok) {
    const body = await response.text();
    throw new Error("reconcile trigger failed: " + response.status + " " + body);
  }
  return { ok: true };
};
      `),
    }),
    environment: {
      variables: {
        RECONCILE_URL: pulumi.interpolate`${input.apiBaseUrl}/admin/reconcile`,
        FISCAL_API_KEY: input.fiscalApiKey,
        WORKSPACE_ID: input.defaultWorkspaceId,
      },
    },
  });

  new aws.cloudwatch.LogGroup(`${input.namePrefix}-reconcile-trigger-logs`, {
    name: pulumi.interpolate`/aws/lambda/${reconcileTrigger.name}`,
    retentionInDays: 30,
  });

  if (worker) {
    new aws.lambda.EventSourceMapping(`${input.namePrefix}-worker-esm`, {
      eventSourceArn: input.pedidosQueueArn,
      functionName: worker.arn,
      batchSize: 1,
    });
  }

  if (persist) {
    new aws.lambda.EventSourceMapping(`${input.namePrefix}-persist-esm`, {
      eventSourceArn: input.resultadosQueueArn,
      functionName: persist.arn,
      batchSize: 1,
    });
  }

  if (dlq) {
    new aws.lambda.EventSourceMapping(`${input.namePrefix}-dlq-esm`, {
      eventSourceArn: input.pedidosDlqQueueArn,
      functionName: dlq.arn,
      batchSize: 1,
    });
  }

  return {
    api,
    callback,
    worker,
    persist,
    dlq,
    reconcileTrigger,
  } satisfies RuntimeFunctions;
}
