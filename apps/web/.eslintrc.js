/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@foundry/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
