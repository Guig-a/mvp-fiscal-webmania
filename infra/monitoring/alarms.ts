import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";

export function createAlarmTopic(namePrefix: string, alarmEmail?: string) {
  const topic = new aws.sns.Topic(`${namePrefix}-alarms`);

  if (alarmEmail) {
    new aws.sns.TopicSubscription(`${namePrefix}-alarms-email`, {
      topic: topic.arn,
      protocol: "email",
      endpoint: alarmEmail,
    });
  }

  return topic;
}

export function createOperationalAlarms(input: {
  namePrefix: string;
  region: string;
  alarmTopicArn: pulumi.Input<string>;
  pedidosDlqName: pulumi.Input<string>;
  resultadosDlqName: pulumi.Input<string>;
  dbIdentifier: pulumi.Input<string>;
  lambdaNames: pulumi.Input<string>[];
}) {
  new aws.cloudwatch.MetricAlarm(`${input.namePrefix}-pedidos-dlq-depth`, {
    alarmDescription: "Mensagens na DLQ de pedidos",
    comparisonOperator: "GreaterThanThreshold",
    evaluationPeriods: 1,
    metricName: "ApproximateNumberOfMessagesVisible",
    namespace: "AWS/SQS",
    period: 60,
    statistic: "Maximum",
    threshold: 0,
    dimensions: { QueueName: input.pedidosDlqName },
    alarmActions: [input.alarmTopicArn],
  });

  new aws.cloudwatch.MetricAlarm(`${input.namePrefix}-resultados-dlq-depth`, {
    alarmDescription: "Mensagens na DLQ de resultados",
    comparisonOperator: "GreaterThanThreshold",
    evaluationPeriods: 1,
    metricName: "ApproximateNumberOfMessagesVisible",
    namespace: "AWS/SQS",
    period: 60,
    statistic: "Maximum",
    threshold: 0,
    dimensions: { QueueName: input.resultadosDlqName },
    alarmActions: [input.alarmTopicArn],
  });

  new aws.cloudwatch.MetricAlarm(`${input.namePrefix}-rds-cpu`, {
    alarmDescription: "CPU alta no PostgreSQL",
    comparisonOperator: "GreaterThanThreshold",
    evaluationPeriods: 3,
    metricName: "CPUUtilization",
    namespace: "AWS/RDS",
    period: 300,
    statistic: "Average",
    threshold: 80,
    dimensions: { DBInstanceIdentifier: input.dbIdentifier },
    alarmActions: [input.alarmTopicArn],
  });

  input.lambdaNames.forEach((lambdaName, index) => {
    new aws.cloudwatch.MetricAlarm(`${input.namePrefix}-lambda-errors-${index}`, {
      alarmDescription: `Erros na lambda ${index}`,
      comparisonOperator: "GreaterThanThreshold",
      evaluationPeriods: 1,
      metricName: "Errors",
      namespace: "AWS/Lambda",
      period: 300,
      statistic: "Sum",
      threshold: 0,
      dimensions: { FunctionName: lambdaName },
      alarmActions: [input.alarmTopicArn],
    });
  });
}
