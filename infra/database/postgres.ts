import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";
import type { DatabaseSettings } from "../config";

export function createPostgres(input: {
  namePrefix: string;
  database: DatabaseSettings;
  dbPassword: pulumi.Input<string>;
  subnetIds: pulumi.Input<string>[];
  securityGroupIds: pulumi.Input<string>[];
}) {
  const subnetGroup = new aws.rds.SubnetGroup(`${input.namePrefix}-db-subnets`, {
    subnetIds: input.subnetIds,
    tags: { Name: `${input.namePrefix}-db-subnets` },
  });

  const parameterGroup = new aws.rds.ParameterGroup(`${input.namePrefix}-postgres16`, {
    family: "postgres16",
    parameters: [
      { name: "client_encoding", value: "UTF8" },
      { name: "rds.force_ssl", value: "1" },
    ],
  });

  const instance = new aws.rds.Instance(`${input.namePrefix}-postgres`, {
    allocatedStorage: input.database.allocatedStorage,
    maxAllocatedStorage: input.database.maxAllocatedStorage,
    engine: "postgres",
    engineVersion: "16.3",
    instanceClass: input.database.instanceClass,
    dbName: input.database.dbName,
    username: input.database.username,
    password: input.dbPassword,
    dbSubnetGroupName: subnetGroup.name,
    vpcSecurityGroupIds: input.securityGroupIds,
    multiAz: input.database.multiAz,
    backupRetentionPeriod: input.database.backupRetentionDays,
    deletionProtection: input.database.deletionProtection,
    storageEncrypted: true,
    skipFinalSnapshot: !input.database.deletionProtection,
    publiclyAccessible: false,
    parameterGroupName: parameterGroup.name,
  });

  const jdbcUrl = pulumi.interpolate`postgresql://${input.database.username}:${input.dbPassword}@${instance.address}:${instance.port}/${input.database.dbName}`;

  return {
    subnetGroup,
    parameterGroup,
    instance,
    connectionString: pulumi.secret(jdbcUrl),
  };
}
