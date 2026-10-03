#!/bin/sh
ENDPOINT="${AWS_ENDPOINT_URL:-http://localhost:4566}"
REGION="${AWS_DEFAULT_REGION:-sa-east-1}"
export AWS_ACCESS_KEY_ID="${AWS_ACCESS_KEY_ID:-test}"
export AWS_SECRET_ACCESS_KEY="${AWS_SECRET_ACCESS_KEY:-test}"
export AWS_DEFAULT_REGION="$REGION"

if ! command -v aws >/dev/null 2>&1; then
  echo "aws cli missing; skip hook (seed will create resources)"
  exit 0
fi

aws --endpoint-url="$ENDPOINT" --region "$REGION" s3 mb "s3://fiscal-documents" || true

create_queue_with_dlq() {
  name="$1"
  dlq="${name}-dlq"
  aws --endpoint-url="$ENDPOINT" --region "$REGION" sqs create-queue --queue-name "$dlq" >/dev/null
  dlq_url="http://localhost:4566/000000000000/${dlq}"
  dlq_arn="$(aws --endpoint-url="$ENDPOINT" --region "$REGION" sqs get-queue-attributes --queue-url "$dlq_url" --attribute-names QueueArn --query 'Attributes.QueueArn' --output text)"
  aws --endpoint-url="$ENDPOINT" --region "$REGION" sqs create-queue --queue-name "$name" --attributes "{\"RedrivePolicy\":\"{\\\"deadLetterTargetArn\\\":\\\"${dlq_arn}\\\",\\\"maxReceiveCount\\\":\\\"5\\\"}\"}" >/dev/null
}

create_queue_with_dlq "fiscal-pedidos"
create_queue_with_dlq "fiscal-resultados"
echo "resources ready"
