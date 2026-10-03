import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import type { Response } from "express";
import { ZodError } from "zod";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const res = host.switchToHttp().getResponse<Response>();
    if (exception instanceof HttpException) {
      const body = exception.getResponse();
      res.status(exception.getStatus()).json(
        typeof body === "object" ? body : { code: "ERROR", message: String(body), details: {} },
      );
      return;
    }
    if (exception instanceof ZodError) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: "INVALID_BODY",
        message: "Payload inválido",
        details: { issues: exception.issues },
      });
      return;
    }
    const err = exception instanceof Error ? exception : new Error(String(exception));
    console.error(err);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      code: "INTERNAL_ERROR",
      message: err.message,
      details: { stack: err.stack },
    });
  }
}
