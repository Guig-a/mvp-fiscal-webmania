import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["src/worker/**/*.ts", "src/entrypoints/worker.ts", "src/providers/**/*.ts"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: ["@prisma/client", "**/generated/prisma", "**/prisma.service", "**/modules/**"],
        },
      ],
    },
  },
];
