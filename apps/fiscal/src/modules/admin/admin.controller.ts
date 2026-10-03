import { Controller, Inject, Post } from "@nestjs/common";
import { InvoicesService } from "../invoices/invoices.service";

@Controller("admin")
export class AdminController {
  constructor(@Inject(InvoicesService) private readonly invoices: InvoicesService) {}

  @Post("reconcile")
  reconcile() {
    return this.invoices.reconcile();
  }
}
