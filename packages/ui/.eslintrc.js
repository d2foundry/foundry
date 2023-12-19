/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@foundry/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
