import { defineTokens } from "@pandacss/dev";

const fonts = defineTokens.fonts({
  body: { value: "var(--font-inter), sans-serif" },
});

const lineHeights = defineTokens.lineHeights({
  1: { value: "1rem" },
  2: { value: "1.25rem" },
  3: { value: "1.5rem" },
  4: { value: "1.75rem" },
  5: { value: "1.75rem" },
  6: { value: "2rem" },
  7: { value: "2.5rem" },
  8: { value: "3rem" },
});

const letterSpacings = defineTokens.letterSpacings({
  1: { value: "0.0025em" },
  2: { value: "0em" },
  3: { value: "0em" },
  4: { value: "-0.0025em" },
  5: { value: "-0.005em" },
  6: { value: "-0.00625em" },
  7: { value: "-0.01em" },
  8: { value: "-0.025em" },
});

const fontWeights = defineTokens.fontWeights({
  regular: { value: "400" },
  medium: { value: "500" },
  bold: { value: "600" },
  black: { value: "700" },
});

const fontSizes = defineTokens.fontSizes({
  1: { value: "0.75rem" },
  2: { value: "0.875rem" },
  3: { value: "1rem" },
  4: { value: "1.125rem" },
  5: { value: "1.25rem" },
  6: { value: "1.5rem" },
  7: { value: "2rem" },
  8: { value: "3rem" },
});

export { fonts, fontSizes, fontWeights, letterSpacings, lineHeights };
