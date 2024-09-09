import globals from "globals";
import pluginJs from "@eslint/js";
import pluginUnusedImports from "eslint-plugin-unused-imports";
import pluginUnusedVars from "eslint-plugin-unused-vars";

export default [
  {
    languageOptions: { globals: globals.browser },
    plugins: {
      'unused-imports': pluginUnusedImports,
      'unused-vars': pluginUnusedVars
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
      "unused-vars/no-unused-vars": ["error", { "vars": "all", "args": "none" }]
    }
  },
  pluginJs.configs.recommended,
];
