import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";
import { loadStackSettings } from "./config";
import { createVpcResources } from "./network/vpc";
import { createSecurityGroups } from "./network/security-groups";
import { createQueues } from "./messaging/sqs";
import { createDocumentsBucket } from "./storage/s3";
import { createPostgres } from "./database/postgres";
import { createSupportTable } from "./database/dynamodb";
import { createLambdaRoles } from "./iam/roles";
import { createDashboard } from "./monitoring/cloudwatch";
import { createAlarmTopic, createOperationalAlarms } from "./monitoring/alarms";
import { createEcrRepositories, createRuntimeFunctions } from "./compute/lambda";
import { maybeCreateBastionHost } from "./compute/ec2";

const settings = loadStackSettings();
const account = aws.getCallerIdentity({});

const network = createVpcResources({
  namePrefix: settings.namePrefix,
  network: settings.network,
});

const securityGroups = createSecurityGroups({
  namePrefix: settings.namePrefix,
  vpcId: network.vpc.id,
  enableBastion: settings.features.enableBastion,
});

new aws.ec2.VpcEndpoint(`${settings.namePrefix}-sqs-endpoint`, {
  vpcId: network.vpc.id,
  serviceName: `com.amazonaws.${settings.region}.sqs`,
  vpcEndpointType: "Interface",
  privateDnsEnabled: true,
  subnetIds: network.privateAppSubnets.map((subnet) => subnet.id),
  securityGroupIds: [securityGroups.vpce.id],
});

const bucket = createDocumentsBucket(settings.namePrefix);
const queues = createQueues(settings.namePrefix);
const supportTable = createSupportTable({
  namePrefix: settings.namePrefix,
  enabled: settings.features.enableSupportTable,
});

const database = createPostgres({
  namePrefix: settings.namePrefix,
  database: settings.database,
  dbPassword: settings.dbPassword,
  subnetIds: network.privateDbSubnets.map((subnet) => subnet.id),
  securityGroupIds: [securityGroups.database.id],
});

const roles = createLambdaRoles({
  namePrefix: settings.namePrefix,
  region: settings.region,
  accountId: pulumi.output(account).accountId,
  bucketArn: bucket.arn,
  pedidosQueueArn: queues.pedidos.arn,
  pedidosDlqArn: queues.pedidosDlq.arn,
  resultadosQueueArn: queues.resultados.arn,
  resultadosDlqArn: queues.resultadosDlq.arn,
  supportTableArn: supportTable?.arn,
});

const repositories = createEcrRepositories(settings.namePrefix);

const httpApi = new aws.apigatewayv2.Api(`${settings.namePrefix}-http-api`, {
  protocolType: "HTTP",
});

const stage = new aws.apigatewayv2.Stage(`${settings.namePrefix}-default-stage`, {
  apiId: httpApi.id,
  name: "$default",
  autoDeploy: true,
});

const apiBaseUrl = stage.invokeUrl;
const callbackBaseUrl = pulumi.interpolate`${apiBaseUrl}/webhooks/webmania`;

const runtime = settings.features.enableLambdaFunctions
  ? createRuntimeFunctions({
      namePrefix: settings.namePrefix,
      region: settings.region,
      databaseUrl: database.connectionString,
      bucketName: bucket.bucket,
      pedidosQueueUrl: queues.pedidos.url,
      pedidosQueueArn: queues.pedidos.arn,
      pedidosDlqQueueUrl: queues.pedidosDlq.url,
      pedidosDlqQueueArn: queues.pedidosDlq.arn,
      resultadosQueueUrl: queues.resultados.url,
      resultadosQueueArn: queues.resultados.arn,
      erpWebhookUrl: settings.app.erpWebhookUrl,
      fiscalApiKey: settings.fiscalApiKey,
      webhookSecret: settings.webhookSecret,
      webmaniaCallbackSecret: settings.webmaniaCallbackSecret,
      callbackBaseUrl,
      apiBaseUrl,
      fiscalProvider: settings.app.fiscalProvider,
      presignMode: settings.app.presignMode,
      presignTtlSeconds: settings.app.presignTtlSeconds,
      pendingStaleSeconds: settings.app.pendingStaleSeconds,
      processingStaleSeconds: settings.app.processingStaleSeconds,
      privateSubnetIds: network.privateAppSubnets.map((subnet) => subnet.id),
      lambdaSecurityGroupIds: [securityGroups.lambda.id],
      apiRoleArn: roles.api.arn,
      callbackRoleArn: roles.callback.arn,
      workerRoleArn: roles.worker.arn,
      persistRoleArn: roles.persist.arn,
      dlqRoleArn: roles.dlq.arn,
      reconcileRoleArn: roles.reconcile.arn,
      images: settings.images,
      defaultWorkspaceId: settings.app.defaultWorkspaceId,
      reconcileEveryMinutes: settings.app.reconcileEveryMinutes,
    })
  : undefined;

if (runtime?.api) {
  const integration = new aws.apigatewayv2.Integration(`${settings.namePrefix}-api-integration`, {
    apiId: httpApi.id,
    integrationType: "AWS_PROXY",
    integrationUri: runtime.api.invokeArn,
    payloadFormatVersion: "2.0",
  });

  new aws.apigatewayv2.Route(`${settings.namePrefix}-api-root-route`, {
    apiId: httpApi.id,
    routeKey: "ANY /",
    target: pulumi.interpolate`integrations/${integration.id}`,
  });

  new aws.apigatewayv2.Route(`${settings.namePrefix}-api-proxy-route`, {
    apiId: httpApi.id,
    routeKey: "ANY /{proxy+}",
    target: pulumi.interpolate`integrations/${integration.id}`,
  });

  new aws.lambda.Permission(`${settings.namePrefix}-api-permission`, {
    action: "lambda:InvokeFunction",
    function: runtime.api.name,
    principal: "apigateway.amazonaws.com",
    sourceArn: pulumi.interpolate`${httpApi.executionArn}/*/*`,
  });
}

const callbackTarget = runtime?.callback ?? runtime?.api;
if (callbackTarget) {
  const callbackIntegration = new aws.apigatewayv2.Integration(`${settings.namePrefix}-callback-integration`, {
    apiId: httpApi.id,
    integrationType: "AWS_PROXY",
    integrationUri: callbackTarget.invokeArn,
    payloadFormatVersion: "2.0",
  });

  new aws.apigatewayv2.Route(`${settings.namePrefix}-callback-route`, {
    apiId: httpApi.id,
    routeKey: "POST /webhooks/webmania",
    target: pulumi.interpolate`integrations/${callbackIntegration.id}`,
  });

  new aws.lambda.Permission(`${settings.namePrefix}-callback-permission`, {
    action: "lambda:InvokeFunction",
    function: callbackTarget.name,
    principal: "apigateway.amazonaws.com",
    sourceArn: pulumi.interpolate`${httpApi.executionArn}/*/POST/webhooks/webmania`,
  });
}

if (runtime?.reconcileTrigger) {
  const rule = new aws.cloudwatch.EventRule(`${settings.namePrefix}-reconcile-schedule`, {
    scheduleExpression: `rate(${settings.app.reconcileEveryMinutes} minutes)`,
  });

  new aws.cloudwatch.EventTarget(`${settings.namePrefix}-reconcile-target`, {
    rule: rule.name,
    arn: runtime.reconcileTrigger.arn,
  });

  new aws.lambda.Permission(`${settings.namePrefix}-reconcile-permission`, {
    action: "lambda:InvokeFunction",
    function: runtime.reconcileTrigger.name,
    principal: "events.amazonaws.com",
    sourceArn: rule.arn,
  });
}

const amazonLinux = settings.features.enableBastion
  ? aws.ec2.getAmi({
      mostRecent: true,
      owners: ["amazon"],
      filters: [
        { name: "name", values: ["al2023-ami-2023.*-x86_64"] },
        { name: "virtualization-type", values: ["hvm"] },
      ],
    })
  : undefined;

const bastion = maybeCreateBastionHost({
  enabled: settings.features.enableBastion,
  namePrefix: settings.namePrefix,
  amiId: amazonLinux ? pulumi.output(amazonLinux).id : "",
  subnetId: network.publicSubnets[0]?.id,
  securityGroupId: securityGroups.bastion?.id,
  keyName: settings.bastionKeyName,
});

const alarmTopic = createAlarmTopic(settings.namePrefix, settings.alarmEmail);

const lambdaNames = [
  runtime?.api?.name,
  runtime?.callback?.name,
  runtime?.worker?.name,
  runtime?.persist?.name,
  runtime?.dlq?.name,
  runtime?.reconcileTrigger.name,
].filter((name): name is pulumi.Output<string> => name !== undefined);

createDashboard({
  namePrefix: settings.namePrefix,
  region: settings.region,
  queueNames: {
    pedidos: queues.pedidos.name,
    resultados: queues.resultados.name,
    pedidosDlq: queues.pedidosDlq.name,
    resultadosDlq: queues.resultadosDlq.name,
  },
  lambdaNames,
  dbIdentifier: database.instance.identifier,
});

createOperationalAlarms({
  namePrefix: settings.namePrefix,
  region: settings.region,
  alarmTopicArn: alarmTopic.arn,
  pedidosDlqName: queues.pedidosDlq.name,
  resultadosDlqName: queues.resultadosDlq.name,
  dbIdentifier: database.instance.identifier,
  lambdaNames,
});

export const vpcId = network.vpc.id;
export const privateAppSubnetIds = network.privateAppSubnets.map((subnet) => subnet.id);
export const privateDbSubnetIds = network.privateDbSubnets.map((subnet) => subnet.id);
export const documentsBucketName = bucket.bucket;
export const pedidosQueueUrl = queues.pedidos.url;
export const resultadosQueueUrl = queues.resultados.url;
export const pedidosDlqUrl = queues.pedidosDlq.url;
export const resultadosDlqUrl = queues.resultadosDlq.url;
export const postgresAddress = database.instance.address;
export const postgresDatabase = settings.database.dbName;
export const fiscalApiUrl = apiBaseUrl;
export const webmaniaCallbackBaseUrl = callbackBaseUrl;
export const ecrRepositories = {
  api: repositories.api.repositoryUrl,
  callback: repositories.callback.repositoryUrl,
  worker: repositories.worker.repositoryUrl,
  persist: repositories.persist.repositoryUrl,
  dlq: repositories.dlq.repositoryUrl,
};
export const supportTableName = supportTable?.name;
export const bastionPublicIp = bastion?.publicIp;
