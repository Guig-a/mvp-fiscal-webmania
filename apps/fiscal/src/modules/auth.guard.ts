import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import type { Request } from "express";
import { ApiException } from "../http/errors";
import { IS_PUBLIC_KEY } from "./public.decorator";

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly reflector = new Reflector();

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;
    const req = context.switchToHttp().getRequest<Request>();
    const apiKey = req.header("x-api-key");
    const workspaceId = req.header("x-workspace-id");
    if (apiKey !== process.env.FISCAL_API_KEY) {
      throw new ApiException(HttpStatus.FORBIDDEN, "FORBIDDEN", "API key inválida");
    }
    if (!workspaceId) {
      throw new ApiException(HttpStatus.BAD_REQUEST, "MISSING_WORKSPACE", "x-workspace-id obrigatório");
    }
    (req as Request & { workspaceId: string }).workspaceId = workspaceId;
    return true;
  }
}

export function workspaceOf(req: Request): string {
  return (req as Request & { workspaceId: string }).workspaceId;
}
