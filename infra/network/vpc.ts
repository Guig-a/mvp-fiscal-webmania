import * as aws from "@pulumi/aws";
import { resolveSubnetLayout } from "./subnets";
import type { NetworkSettings } from "../config";

export type NetworkResources = {
  vpc: aws.ec2.Vpc;
  internetGateway: aws.ec2.InternetGateway;
  publicSubnets: aws.ec2.Subnet[];
  privateAppSubnets: aws.ec2.Subnet[];
  privateDbSubnets: aws.ec2.Subnet[];
  privateAppRouteTable: aws.ec2.RouteTable;
  privateDbRouteTable: aws.ec2.RouteTable;
};

export function createVpcResources(input: {
  namePrefix: string;
  network: NetworkSettings;
}) {
  const layout = resolveSubnetLayout(input.network);
  const azNames = layout.availabilityZones;

  const vpc = new aws.ec2.Vpc(`${input.namePrefix}-vpc`, {
    cidrBlock: input.network.vpcCidr,
    enableDnsHostnames: true,
    enableDnsSupport: true,
    tags: { Name: `${input.namePrefix}-vpc` },
  });

  const internetGateway = new aws.ec2.InternetGateway(`${input.namePrefix}-igw`, {
    vpcId: vpc.id,
    tags: { Name: `${input.namePrefix}-igw` },
  });

  const publicRouteTable = new aws.ec2.RouteTable(`${input.namePrefix}-public-rt`, {
    vpcId: vpc.id,
    routes: [
      {
        cidrBlock: "0.0.0.0/0",
        gatewayId: internetGateway.id,
      },
    ],
  });

  const publicSubnets = azNames.map(
    (availabilityZone, index) =>
      new aws.ec2.Subnet(`${input.namePrefix}-public-${index + 1}`, {
        vpcId: vpc.id,
        cidrBlock: layout.publicSubnetCidrs[index],
        availabilityZone,
        mapPublicIpOnLaunch: true,
        tags: { Name: `${input.namePrefix}-public-${index + 1}` },
      }),
  );

  publicSubnets.forEach((subnet, index) => {
    new aws.ec2.RouteTableAssociation(`${input.namePrefix}-public-rta-${index + 1}`, {
      subnetId: subnet.id,
      routeTableId: publicRouteTable.id,
    });
  });

  const privateAppSubnets = azNames.map(
    (availabilityZone, index) =>
      new aws.ec2.Subnet(`${input.namePrefix}-app-${index + 1}`, {
        vpcId: vpc.id,
        cidrBlock: layout.privateAppSubnetCidrs[index],
        availabilityZone,
        tags: { Name: `${input.namePrefix}-app-${index + 1}` },
      }),
  );

  const privateDbSubnets = azNames.map(
    (availabilityZone, index) =>
      new aws.ec2.Subnet(`${input.namePrefix}-db-${index + 1}`, {
        vpcId: vpc.id,
        cidrBlock: layout.privateDbSubnetCidrs[index],
        availabilityZone,
        tags: { Name: `${input.namePrefix}-db-${index + 1}` },
      }),
  );

  let natGatewayId: aws.ec2.NatGateway["id"] | undefined;
  if (input.network.enableNatGateway) {
    const eip = new aws.ec2.Eip(`${input.namePrefix}-nat-eip`, {
      domain: "vpc",
    });
    const natGateway = new aws.ec2.NatGateway(`${input.namePrefix}-nat`, {
      allocationId: eip.id,
      subnetId: publicSubnets[0]!.id,
      tags: { Name: `${input.namePrefix}-nat` },
    });
    natGatewayId = natGateway.id;
  }

  const privateAppRouteTable = new aws.ec2.RouteTable(`${input.namePrefix}-app-rt`, {
    vpcId: vpc.id,
    routes: natGatewayId
      ? [
          {
            cidrBlock: "0.0.0.0/0",
            natGatewayId,
          },
        ]
      : [],
  });

  const privateDbRouteTable = new aws.ec2.RouteTable(`${input.namePrefix}-db-rt`, {
    vpcId: vpc.id,
    routes: [],
  });

  privateAppSubnets.forEach((subnet, index) => {
    new aws.ec2.RouteTableAssociation(`${input.namePrefix}-app-rta-${index + 1}`, {
      subnetId: subnet.id,
      routeTableId: privateAppRouteTable.id,
    });
  });

  privateDbSubnets.forEach((subnet, index) => {
    new aws.ec2.RouteTableAssociation(`${input.namePrefix}-db-rta-${index + 1}`, {
      subnetId: subnet.id,
      routeTableId: privateDbRouteTable.id,
    });
  });

  new aws.ec2.VpcEndpoint(`${input.namePrefix}-s3-endpoint`, {
    vpcId: vpc.id,
    serviceName: `com.amazonaws.${aws.config.region}.s3`,
    routeTableIds: [privateAppRouteTable.id, privateDbRouteTable.id],
    vpcEndpointType: "Gateway",
  });

  return {
    vpc,
    internetGateway,
    publicSubnets,
    privateAppSubnets,
    privateDbSubnets,
    privateAppRouteTable,
    privateDbRouteTable,
  } satisfies NetworkResources;
}
