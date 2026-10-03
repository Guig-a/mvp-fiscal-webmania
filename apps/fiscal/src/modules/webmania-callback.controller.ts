import { Body, Controller, HttpStatus, Post, Query } from "@nestjs/common";
import { SendMessageCommand } from "@aws-sdk/client-sqs";
import { verifyWebmaniaCallbackToken } from "@fiscal-mvp/contracts";
import { randomUUID } from "node:crypto";
import { createSqs } from "../aws/clients";
import { ApiException } from "../http/errors";
import { Public } from "./public.decorator";

@Public()
@Controller("webhooks")
export class WebmaniaCallbackController {
  @Post("webmania")
  async handle(@Query("t") token: string | undefined, @Body() body: unknown) {
    const secret = process.env.WEBMANIA_CALLBACK_SECRET ?? "";
    if (!token) {
      throw new ApiException(HttpStatus.BAD_REQUEST, "MISSING_TOKEN", "Parâmetro t obrigatório");
    }
    const claims = verifyWebmaniaCallbackToken(token, secret);
    if (!claims) {
      throw new ApiException(HttpStatus.FORBIDDEN, "INVALID_TOKEN", "Token de callback inválido");
    }
    const providerRef =
      typeof body === "object" && body !== null && "uuid" in body && typeof (body as { uuid: unknown }).uuid === "string"
        ? (body as { uuid: string }).uuid
        : "";
    if (!providerRef) {
      throw new ApiException(HttpStatus.BAD_REQUEST, "MISSING_UUID", "Corpo deve incluir uuid (referência WebMania)");
    }
    const queueUrl = process.env.SQS_PEDIDOS_URL;
    if (!queueUrl) {
      throw new ApiException(HttpStatus.INTERNAL_SERVER_ERROR, "MISSING_QUEUE", "SQS_PEDIDOS_URL não configurada");
    }
    await createSqs().send(
      new SendMessageCommand({
        QueueUrl: queueUrl,
        MessageBody: JSON.stringify({
          version: 1,
          messageType: "CHECK_STATUS",
          messageId: randomUUID(),
          invoiceId: claims.invoiceId,
          workspaceId: claims.workspaceId,
          emitterId: claims.emitterId,
          enqueuedAt: new Date().toISOString(),
          providerRef,
          credentialRef: claims.credentialRef,
          emitterCnpj: claims.emitterCnpj,
        }),
      }),
    );
    return { ok: true };
  }
}
