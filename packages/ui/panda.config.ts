import { defineConfig } from "@pandacss/dev";
import { foundryPreset } from "@foundry/panda-preset";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./demos/**/*.{js,jsx,ts,tsx}",
  ],
  presets: ["@pandacss/preset-base", foundryPreset],
  // Files to exclude
  exclude: [],
  separator: "-",
  // strictTokens: true,
  // Useful for theme customization
  // The output directory for your css system
  jsxFramework: "react",
  outdir: "@foundry/styled-system",
  outExtension: "js",
  emitPackage: true,
});
