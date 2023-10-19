module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier", // Add "plugin:prettier/recommended" for Prettier integration
  ],
  plugins: ["@typescript-eslint", "react"],
  ignorePatterns: ["next.config.js"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "single"],
    // Add any additional rules or overrides here
  },
};
