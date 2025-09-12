// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Use compat to consume legacy shareables (next/core-web-vitals, prettier)
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Ignore build artifacts
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"],
  },

  // Bring in Next's recommended rules and TypeScript rules (legacy shareables)
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Turn off rules that conflict with Prettier
  ...compat.extends("prettier"),

  // Your custom rules (optional)
  {
    rules: {
      // "@next/next/no-img-element": "off",
    },
  },
];
