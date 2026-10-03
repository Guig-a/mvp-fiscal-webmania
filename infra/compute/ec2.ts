import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";

export function maybeCreateBastionHost(input: {
  enabled: boolean;
  namePrefix: string;
  amiId: pulumi.Input<string>;
  instanceType?: string;
  subnetId?: pulumi.Input<string>;
  securityGroupId?: pulumi.Input<string>;
  keyName?: string;
}) {
  if (!input.enabled || !input.subnetId || !input.securityGroupId || !input.keyName) {
    return undefined;
  }

  return new aws.ec2.Instance(`${input.namePrefix}-bastion`, {
    ami: input.amiId,
    instanceType: input.instanceType ?? "t3.micro",
    subnetId: input.subnetId,
    vpcSecurityGroupIds: [input.securityGroupId],
    associatePublicIpAddress: true,
    keyName: input.keyName,
    tags: { Name: `${input.namePrefix}-bastion` },
  });
}
