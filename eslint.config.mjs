/** @type {import('eslint').Linter.Config} */
export default {
  ignores: ["next-env.d.ts", "node_modules/.cache/", ".next/", "*.env*"],
  rules: {
    "no-console": ["warn", { allow: ["error"] }],
    "no-debugger": "warn",
    "react/react-internal": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: {
      ecmaVersion: "latest",
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      React: "readonly",
    },
  },
};