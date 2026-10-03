import { GetParameterCommand, type SSMClient } from "@aws-sdk/client-ssm";

export async function readCredential(ssm: SSMClient, credentialRef: string): Promise<string> {
  const result = await ssm.send(
    new GetParameterCommand({
      Name: credentialRef,
      WithDecryption: true,
    }),
  );
  const value = result.Parameter?.Value;
  if (!value) throw new Error(`Missing credential ${credentialRef}`);
  return value;
}
