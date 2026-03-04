import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginSecurity from "eslint-plugin-security";

export default [
  {
    ignores: ["dist/**", "**/dist/*"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginSecurity.configs.recommended,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {},
  },
];
