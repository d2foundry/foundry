import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: ["@foundry/design-system"],

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@foundry/ui/components/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],
  separator: "-",
  // Useful for theme customization

  // The output directory for your css system
  outdir: "@foundry/styled-system",
  outExtension: "js",
  emitPackage: true,
});
