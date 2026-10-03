import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const jobs = [
  {
    cwd: resolve("apps/fiscal"),
    marker: resolve("apps/fiscal/src/generated/prisma/index.js"),
  },
  {
    cwd: resolve("apps/erp"),
    marker: resolve("apps/erp/src/generated/prisma/index.js"),
  },
];

for (const job of jobs) {
  const result = spawnSync("pnpm", ["prisma:generate"], {
    cwd: job.cwd,
    stdio: "inherit",
    shell: true,
  });
  if (result.status === 0) continue;
  if (existsSync(job.marker)) {
    console.warn(
      `prisma generate falhou em ${job.cwd}. Mantendo o client já gerado (engine provavelmente bloqueado por um processo Node).`,
    );
    continue;
  }
  process.exit(result.status ?? 1);
}
