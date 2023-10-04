import { defineConfig } from "@pandacss/dev";
import { foundryPreset } from "@foundry/panda-preset";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@foundry/ui/panda.buildinfo.json",
  ],
  presets: ["@pandacss/preset-base", foundryPreset],

  // Files to exclude
  exclude: [],
  separator: "-",
  // strictTokens: true,
  // Useful for theme customization

  // The output directory for your css system
  outdir: "@foundry/styled-system",
  outExtension: "js",
  emitPackage: true,
});
