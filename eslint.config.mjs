import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    extends: ["prettier" , "airbnb-base"],
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js, prettier },
    languageOptions: { globals: globals.node },
    rules: {
      "prettier/prettier": "error",
      "class-methods-use-this": "off",
      "no-param-reassign": "off",
      camelcase: "off",
      "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
      "no-console": ["error", { allow: [, "warn", "error"] }],
    },
  },
]);

