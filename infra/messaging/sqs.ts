import * as aws from "@pulumi/aws";

export type QueueBundle = {
  pedidos: aws.sqs.Queue;
  pedidosDlq: aws.sqs.Queue;
  resultados: aws.sqs.Queue;
  resultadosDlq: aws.sqs.Queue;
};

export function createQueues(namePrefix: string) {
  const pedidosDlq = new aws.sqs.Queue(`${namePrefix}-pedidos-dlq`, {
    name: `${namePrefix}-fiscal-pedidos-dlq`,
    messageRetentionSeconds: 1209600,
  });

  const resultadosDlq = new aws.sqs.Queue(`${namePrefix}-resultados-dlq`, {
    name: `${namePrefix}-fiscal-resultados-dlq`,
    messageRetentionSeconds: 1209600,
  });

  const pedidos = new aws.sqs.Queue(`${namePrefix}-pedidos`, {
    name: `${namePrefix}-fiscal-pedidos`,
    visibilityTimeoutSeconds: 120,
    messageRetentionSeconds: 345600,
    redrivePolicy: pedidosDlq.arn.apply((deadLetterTargetArn) =>
      JSON.stringify({ deadLetterTargetArn, maxReceiveCount: 5 }),
    ),
  });

  const resultados = new aws.sqs.Queue(`${namePrefix}-resultados`, {
    name: `${namePrefix}-fiscal-resultados`,
    visibilityTimeoutSeconds: 120,
    messageRetentionSeconds: 345600,
    redrivePolicy: resultadosDlq.arn.apply((deadLetterTargetArn) =>
      JSON.stringify({ deadLetterTargetArn, maxReceiveCount: 5 }),
    ),
  });

  return { pedidos, pedidosDlq, resultados, resultadosDlq } satisfies QueueBundle;
}
