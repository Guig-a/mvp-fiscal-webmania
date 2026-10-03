import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";

export type SecurityGroupBundle = {
  lambda: aws.ec2.SecurityGroup;
  database: aws.ec2.SecurityGroup;
  vpce: aws.ec2.SecurityGroup;
  bastion?: aws.ec2.SecurityGroup;
};

export function createSecurityGroups(input: {
  namePrefix: string;
  vpcId: pulumi.Input<string>;
  enableBastion: boolean;
}) {
  const lambda = new aws.ec2.SecurityGroup(`${input.namePrefix}-lambda-sg`, {
    vpcId: input.vpcId,
    description: "Egress-only SG for fiscal lambdas",
    egress: [
      {
        protocol: "-1",
        fromPort: 0,
        toPort: 0,
        cidrBlocks: ["0.0.0.0/0"],
      },
    ],
  });

  const vpce = new aws.ec2.SecurityGroup(`${input.namePrefix}-vpce-sg`, {
    vpcId: input.vpcId,
    description: "Allows VPC endpoints to receive HTTPS from app lambdas",
    ingress: [
      {
        protocol: "tcp",
        fromPort: 443,
        toPort: 443,
        securityGroups: [lambda.id],
      },
    ],
    egress: [
      {
        protocol: "-1",
        fromPort: 0,
        toPort: 0,
        cidrBlocks: ["0.0.0.0/0"],
      },
    ],
  });

  const bastion = input.enableBastion
    ? new aws.ec2.SecurityGroup(`${input.namePrefix}-bastion-sg`, {
        vpcId: input.vpcId,
        description: "SSH bastion SG",
        egress: [
          {
            protocol: "-1",
            fromPort: 0,
            toPort: 0,
            cidrBlocks: ["0.0.0.0/0"],
          },
        ],
      })
    : undefined;

  const database = new aws.ec2.SecurityGroup(`${input.namePrefix}-db-sg`, {
    vpcId: input.vpcId,
    description: "PostgreSQL access from fiscal lambdas and optional bastion",
    ingress: [
      {
        protocol: "tcp",
        fromPort: 5432,
        toPort: 5432,
        securityGroups: bastion ? [lambda.id, bastion.id] : [lambda.id],
      },
    ],
    egress: [
      {
        protocol: "-1",
        fromPort: 0,
        toPort: 0,
        cidrBlocks: ["0.0.0.0/0"],
      },
    ],
  });

  return { lambda, database, vpce, bastion } satisfies SecurityGroupBundle;
}
