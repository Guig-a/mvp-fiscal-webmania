import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <strong>ERP Fiscal MVP</strong>
          <Link href="/">Início</Link>
          <Link href="/emitentes">Emitentes</Link>
          <Link href="/notas">Notas</Link>
          <Link href="/notas/nova">Nova nota</Link>
          <Link href="/lancamentos">Lançamentos</Link>
          <Link href="/produtos">Produtos</Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
