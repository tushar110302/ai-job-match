import js from "@eslint/js";
import globals from "globals";
import importPlugin from "eslint-plugin-import";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { 
      js, 
      import: importPlugin 
    },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.node, // ✅ Node globals: process, __dirname, require, etc.
        ...globals.es2022, // ✅ Modern JS globals: Promise, Map, Set, etc.
      },
      ecmaVersion: 2022,
      sourceType: "module", // since you're using ESM (import/export)
    },
    rules: {
      // Code quality
      "no-unused-vars": "warn",
      "no-console": "off", // consoles are fine in backend
      "no-undef": "error",

      // Bug prevention
      eqeqeq: "error", // forces === instead of ==
      "no-duplicate-case": "error",
      "no-unreachable": "error",
      "no-constant-condition": "error",

      "import/extensions": [
        "warn",
        "always",
        {
          js: "always",
        },
      ],

      // Style consistency
      "prefer-const": "warn", // use const when var is never reassigned
      "no-var": "error", // ban var, use let/const
      // "arrow-body-style": "warn",   // cleaner arrow functions
      semi: ["warn", "always"],
      quotes: ["warn", "double"],
    },
  },
]);
