import * as aws from "@pulumi/aws";

export function createDocumentsBucket(namePrefix: string) {
  const bucket = new aws.s3.BucketV2(`${namePrefix}-documents`, {
    bucketPrefix: `${namePrefix}-documents-`,
    forceDestroy: false,
    tags: { Name: `${namePrefix}-documents` },
  });

  new aws.s3.BucketVersioningV2(`${namePrefix}-documents-versioning`, {
    bucket: bucket.id,
    versioningConfiguration: { status: "Enabled" },
  });

  new aws.s3.BucketServerSideEncryptionConfigurationV2(`${namePrefix}-documents-sse`, {
    bucket: bucket.id,
    rules: [
      {
        applyServerSideEncryptionByDefault: {
          sseAlgorithm: "AES256",
        },
      },
    ],
  });

  new aws.s3.BucketPublicAccessBlock(`${namePrefix}-documents-public-access`, {
    bucket: bucket.id,
    blockPublicAcls: true,
    blockPublicPolicy: true,
    ignorePublicAcls: true,
    restrictPublicBuckets: true,
  });

  new aws.s3.BucketLifecycleConfigurationV2(`${namePrefix}-documents-lifecycle`, {
    bucket: bucket.id,
    rules: [
      {
        id: "abort-multipart-after-7-days",
        status: "Enabled",
        abortIncompleteMultipartUpload: {
          daysAfterInitiation: 7,
        },
      },
    ],
  });

  return bucket;
}
