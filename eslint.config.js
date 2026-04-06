import { defineConfig } from "eslint/config";
import astroPlugin from "eslint-plugin-astro";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import prettierPlugin from "eslint-plugin-prettier/recommended";
import tsParser from "@typescript-eslint/parser";

const eslintConfig = defineConfig([
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
    },
  },
  ...astroPlugin.configs.recommended,
  jsxA11yPlugin.flatConfigs.recommended,
  prettierPlugin,
  {
    files: ["**/*.astro/*.js", "**/*.astro/*.ts"],
    rules: {
      "prettier/prettier": "off",
    },
  },
]);

export default eslintConfig;
