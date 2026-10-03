import * as pulumi from "@pulumi/pulumi";

export type NetworkSettings = {
  vpcCidr: string;
  availabilityZones: string[];
  enableNatGateway: boolean;
  publicSubnetCidrs: string[];
  privateAppSubnetCidrs: string[];
  privateDbSubnetCidrs: string[];
};

export type DatabaseSettings = {
  dbName: string;
  username: string;
  instanceClass: string;
  allocatedStorage: number;
  maxAllocatedStorage: number;
  multiAz: boolean;
  backupRetentionDays: number;
  deletionProtection: boolean;
};

export type AppSettings = {
  erpWebhookUrl: string;
  fiscalProvider: "fake" | "webmania";
  defaultWorkspaceId: string;
  pendingStaleSeconds: number;
  processingStaleSeconds: number;
  presignMode: "url" | "stream";
  presignTtlSeconds: number;
  reconcileEveryMinutes: number;
};

export type FeatureFlags = {
  enableBastion: boolean;
  enableSupportTable: boolean;
  enableLambdaFunctions: boolean;
};

export type ImageUris = {
  api?: string;
  callback?: string;
  worker?: string;
  persist?: string;
  dlq?: string;
};

export type StackSettings = {
  environment: string;
  projectName: string;
  namePrefix: string;
  region: string;
  network: NetworkSettings;
  database: DatabaseSettings;
  app: AppSettings;
  features: FeatureFlags;
  images: ImageUris;
  alarmEmail?: string;
  bastionKeyName?: string;
  dbPassword: pulumi.Output<string>;
  fiscalApiKey: pulumi.Output<string>;
  webhookSecret: pulumi.Output<string>;
  webmaniaCallbackSecret: pulumi.Output<string>;
};

function requireObject<T>(cfg: pulumi.Config, key: string): T {
  return cfg.requireObject<T>(key);
}

export function loadStackSettings(): StackSettings {
  const cfg = new pulumi.Config();
  const region = new pulumi.Config("aws").require("region");
  const environment = cfg.get("environment") ?? pulumi.getStack();
  const projectName = cfg.get("projectName") ?? "fiscal-mvp";

  return {
    environment,
    projectName,
    namePrefix: `${projectName}-${environment}`,
    region,
    network: requireObject<NetworkSettings>(cfg, "network"),
    database: requireObject<DatabaseSettings>(cfg, "database"),
    app: requireObject<AppSettings>(cfg, "app"),
    features: requireObject<FeatureFlags>(cfg, "features"),
    images: cfg.getObject<ImageUris>("images") ?? {},
    alarmEmail: cfg.get("alarmEmail") ?? undefined,
    bastionKeyName: cfg.get("bastionKeyName") ?? undefined,
    dbPassword: cfg.requireSecret("dbPassword"),
    fiscalApiKey: cfg.requireSecret("fiscalApiKey"),
    webhookSecret: cfg.requireSecret("webhookSecret"),
    webmaniaCallbackSecret: cfg.requireSecret("webmaniaCallbackSecret"),
  };
}
