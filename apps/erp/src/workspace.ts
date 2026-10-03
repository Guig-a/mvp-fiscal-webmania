import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { HttpException, HttpStatus } from "@nestjs/common";
import type { Request } from "express";

@Injectable()
export class WorkspaceGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<Request>();
    const workspaceId = req.header("x-workspace-id");
    if (!workspaceId) {
      throw new HttpException(
        { code: "MISSING_WORKSPACE", message: "x-workspace-id obrigatório", details: {} },
        HttpStatus.BAD_REQUEST,
      );
    }
    (req as Request & { workspaceId: string }).workspaceId = workspaceId;
    return true;
  }
}

export function workspaceOf(req: Request): string {
  return (req as Request & { workspaceId: string }).workspaceId;
}
