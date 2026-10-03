import * as aws from "@pulumi/aws";

export function createSupportTable(input: {
  namePrefix: string;
  enabled: boolean;
}) {
  if (!input.enabled) {
    return undefined;
  }

  return new aws.dynamodb.Table(`${input.namePrefix}-support`, {
    name: `${input.namePrefix}-fiscal-support`,
    billingMode: "PAY_PER_REQUEST",
    hashKey: "pk",
    rangeKey: "sk",
    attributes: [
      { name: "pk", type: "S" },
      { name: "sk", type: "S" },
    ],
    ttl: {
      attributeName: "ttl",
      enabled: true,
    },
  });
}
