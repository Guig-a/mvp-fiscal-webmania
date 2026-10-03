import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";

export function createDashboard(input: {
  namePrefix: string;
  region: string;
  queueNames: {
    pedidos: pulumi.Input<string>;
    resultados: pulumi.Input<string>;
    pedidosDlq: pulumi.Input<string>;
    resultadosDlq: pulumi.Input<string>;
  };
  lambdaNames: pulumi.Input<string>[];
  dbIdentifier: pulumi.Input<string>;
}) {
  return new aws.cloudwatch.Dashboard(`${input.namePrefix}-dashboard`, {
    dashboardName: `${input.namePrefix}-ops`,
    dashboardBody: pulumi
      .all([
        input.queueNames.pedidos,
        input.queueNames.resultados,
        input.queueNames.pedidosDlq,
        input.queueNames.resultadosDlq,
        pulumi.all(input.lambdaNames),
        input.dbIdentifier,
      ])
      .apply(([pedidos, resultados, pedidosDlq, resultadosDlq, lambdaNames, dbIdentifier]) =>
        JSON.stringify({
          widgets: [
            {
              type: "metric",
              x: 0,
              y: 0,
              width: 12,
              height: 6,
              properties: {
                title: "SQS depth",
                region: input.region,
                metrics: [
                  ["AWS/SQS", "ApproximateNumberOfMessagesVisible", "QueueName", pedidos],
                  [".", ".", ".", resultados],
                  [".", ".", ".", pedidosDlq],
                  [".", ".", ".", resultadosDlq],
                ],
              },
            },
            {
              type: "metric",
              x: 12,
              y: 0,
              width: 12,
              height: 6,
              properties: {
                title: "Lambda errors",
                region: input.region,
                metrics: lambdaNames.flatMap((lambdaName) => [
                  ["AWS/Lambda", "Errors", "FunctionName", lambdaName],
                ]),
              },
            },
            {
              type: "metric",
              x: 0,
              y: 6,
              width: 12,
              height: 6,
              properties: {
                title: "RDS CPU",
                region: input.region,
                metrics: [["AWS/RDS", "CPUUtilization", "DBInstanceIdentifier", dbIdentifier]],
              },
            },
          ],
        }),
      ),
  });
}
