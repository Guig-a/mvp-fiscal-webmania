import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";

type RoleBundle = {
  api: aws.iam.Role;
  callback: aws.iam.Role;
  worker: aws.iam.Role;
  persist: aws.iam.Role;
  dlq: aws.iam.Role;
  reconcile: aws.iam.Role;
};

function createLambdaRole(name: string) {
  return new aws.iam.Role(name, {
    assumeRolePolicy: aws.iam.assumeRolePolicyForPrincipal({
      Service: "lambda.amazonaws.com",
    }),
  });
}

function attachManagedPolicies(namePrefix: string, role: aws.iam.Role, policyArns: string[]) {
  policyArns.forEach((policyArn, index) => {
    new aws.iam.RolePolicyAttachment(`${namePrefix}-managed-${index}`, {
      role: role.name,
      policyArn,
    });
  });
}

export function createLambdaRoles(input: {
  namePrefix: string;
  region: string;
  accountId: pulumi.Input<string>;
  bucketArn: pulumi.Input<string>;
  pedidosQueueArn: pulumi.Input<string>;
  pedidosDlqArn: pulumi.Input<string>;
  resultadosQueueArn: pulumi.Input<string>;
  resultadosDlqArn: pulumi.Input<string>;
  supportTableArn?: pulumi.Input<string>;
}) {
  const api = createLambdaRole(`${input.namePrefix}-api-role`);
  const callback = createLambdaRole(`${input.namePrefix}-callback-role`);
  const worker = createLambdaRole(`${input.namePrefix}-worker-role`);
  const persist = createLambdaRole(`${input.namePrefix}-persist-role`);
  const dlq = createLambdaRole(`${input.namePrefix}-dlq-role`);
  const reconcile = createLambdaRole(`${input.namePrefix}-reconcile-role`);

  const vpcManagedPolicy = "arn:aws:iam::aws:policy/service-role/AWSLambdaVPCAccessExecutionRole";
  const basicManagedPolicy = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole";

  attachManagedPolicies(`${input.namePrefix}-api`, api, [basicManagedPolicy, vpcManagedPolicy]);
  attachManagedPolicies(`${input.namePrefix}-worker`, worker, [basicManagedPolicy]);
  attachManagedPolicies(`${input.namePrefix}-persist`, persist, [basicManagedPolicy, vpcManagedPolicy]);
  attachManagedPolicies(`${input.namePrefix}-dlq`, dlq, [basicManagedPolicy, vpcManagedPolicy]);
  attachManagedPolicies(`${input.namePrefix}-callback`, callback, [basicManagedPolicy]);
  attachManagedPolicies(`${input.namePrefix}-reconcile`, reconcile, [basicManagedPolicy]);

  const workerSsmArn = pulumi.interpolate`arn:aws:ssm:${input.region}:${input.accountId}:parameter/fiscal/*/*/webmania`;

  new aws.iam.RolePolicy(`${input.namePrefix}-api-inline`, {
    role: api.id,
    policy: pulumi
      .all([input.bucketArn, input.pedidosQueueArn])
      .apply(([bucketArn, pedidosQueueArn]) =>
        JSON.stringify({
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Action: ["sqs:SendMessage", "sqs:GetQueueAttributes", "sqs:GetQueueUrl"],
              Resource: pedidosQueueArn,
            },
            {
              Effect: "Allow",
              Action: ["s3:GetObject", "s3:ListBucket"],
              Resource: [bucketArn, `${bucketArn}/*`],
            },
          ],
        }),
      ),
  });

  new aws.iam.RolePolicy(`${input.namePrefix}-callback-inline`, {
    role: callback.id,
    policy: pulumi.output(input.pedidosQueueArn).apply((pedidosQueueArn) =>
      JSON.stringify({
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Action: ["sqs:SendMessage", "sqs:GetQueueAttributes", "sqs:GetQueueUrl"],
            Resource: pedidosQueueArn,
          },
        ],
      }),
    ),
  });

  new aws.iam.RolePolicy(`${input.namePrefix}-worker-inline`, {
    role: worker.id,
    policy: pulumi
      .all([input.bucketArn, input.pedidosQueueArn, input.resultadosQueueArn, workerSsmArn, input.supportTableArn])
      .apply(([bucketArn, pedidosQueueArn, resultadosQueueArn, ssmArn, supportTableArn]) =>
        JSON.stringify({
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Action: [
                "sqs:ReceiveMessage",
                "sqs:DeleteMessage",
                "sqs:ChangeMessageVisibility",
                "sqs:GetQueueAttributes",
              ],
              Resource: pedidosQueueArn,
            },
            {
              Effect: "Allow",
              Action: ["sqs:SendMessage", "sqs:GetQueueAttributes"],
              Resource: resultadosQueueArn,
            },
            {
              Effect: "Allow",
              Action: ["s3:PutObject", "s3:AbortMultipartUpload"],
              Resource: `${bucketArn}/*`,
            },
            {
              Effect: "Allow",
              Action: ["ssm:GetParameter", "ssm:GetParameters"],
              Resource: ssmArn,
            },
            ...(supportTableArn
              ? [
                  {
                    Effect: "Allow",
                    Action: ["dynamodb:GetItem", "dynamodb:PutItem", "dynamodb:UpdateItem"],
                    Resource: supportTableArn,
                  },
                ]
              : []),
          ],
        }),
      ),
  });

  new aws.iam.RolePolicy(`${input.namePrefix}-persist-inline`, {
    role: persist.id,
    policy: pulumi.output(input.resultadosQueueArn).apply((resultadosQueueArn) =>
      JSON.stringify({
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Action: [
              "sqs:ReceiveMessage",
              "sqs:DeleteMessage",
              "sqs:ChangeMessageVisibility",
              "sqs:GetQueueAttributes",
            ],
            Resource: resultadosQueueArn,
          },
        ],
      }),
    ),
  });

  new aws.iam.RolePolicy(`${input.namePrefix}-dlq-inline`, {
    role: dlq.id,
    policy: pulumi.output(input.pedidosDlqArn).apply((pedidosDlqArn) =>
      JSON.stringify({
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Action: [
              "sqs:ReceiveMessage",
              "sqs:DeleteMessage",
              "sqs:ChangeMessageVisibility",
              "sqs:GetQueueAttributes",
            ],
            Resource: pedidosDlqArn,
          },
        ],
      }),
    ),
  });

  new aws.iam.RolePolicy(`${input.namePrefix}-reconcile-inline`, {
    role: reconcile.id,
    policy: JSON.stringify({
      Version: "2012-10-17",
      Statement: [],
    }),
  });

  return { api, callback, worker, persist, dlq, reconcile } satisfies RoleBundle;
}
