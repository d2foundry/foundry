import {
  definePreset,
  defineSemanticTokens,
  defineTokens,
} from "@pandacss/dev";
import type { Preset } from "@pandacss/types";
import { textStyles } from "./textStyles";
// import { semanticTokens } from "./semantic-tokens";
const spacing = {
  "0.25": { value: "0.125rem" },
  "0.5": { value: "0.25rem" },
  "1": { value: "0.5rem" },
  "1.5": { value: "0.75rem" },
  "2": { value: "1rem" },
  "3": { value: "1.5rem" },
  "4": { value: "2rem" },
  "5": { value: "2.5rem" },
  "6": { value: "3rem" },
  "7": { value: "3.5rem" },
  "8": { value: "4rem" },
  "9": { value: "4.5rem" },
  "10": { value: "5rem" },
  "12": { value: "6rem" },
  "14": { value: "7rem" },
  "16": { value: "8rem" },
  "18": { value: "9rem" },
  "20": { value: "10rem" },
  "30": { value: "15rem" },
  "40": { value: "20rem" },
};

const shadows = {
  xs: { value: "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
  sm: {
    value: ["0 1px 3px 0 rgb(0 0 0 / 0.1)", "0 1px 2px -1px rgb(0 0 0 / 0.1)"],
  },
  md: {
    value: [
      "0 4px 6px -1px rgb(0 0 0 / 0.1)",
      "0 2px 4px -2px rgb(0 0 0 / 0.1)",
    ],
  },
  lg: {
    value: [
      "0 10px 15px -3px rgb(0 0 0 / 0.1)",
      "0 4px 6px -4px rgb(0 0 0 / 0.1)",
    ],
  },
  xl: {
    value: [
      "0 20px 25px -5px rgb(0 0 0 / 0.1)",
      "0 8px 10px -6px rgb(0 0 0 / 0.1)",
    ],
  },
  "2xl": { value: "0 25px 50px -12px rgb(0 0 0 / 0.25)" },
  inner: { value: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)" },
};

const largeSizes = {
  xs: { value: "20rem" },
  sm: { value: "24rem" },
  md: { value: "28rem" },
  lg: { value: "32rem" },
  xl: { value: "36rem" },
  "2xl": { value: "42rem" },
  "3xl": { value: "48rem" },
  "4xl": { value: "56rem" },
  "5xl": { value: "64rem" },
  "6xl": { value: "72rem" },
  "7xl": { value: "80rem" },
  "8xl": { value: "90rem" },
  prose: { value: "65ch" },
};

export const sizes = {
  ...spacing,
  ...largeSizes,
  full: { value: "100%" },
  min: { value: "min-content" },
  max: { value: "max-content" },
  fit: { value: "fit-content" },
};

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const easings = {
  default: { value: "cubic-bezier(0.4, 0, 0.2, 1)" },
  linear: { value: "linear" },
  in: { value: "cubic-bezier(0.4, 0, 1, 1)" },
  out: { value: "cubic-bezier(0, 0, 0.2, 1)" },
  "in-out": { value: "cubic-bezier(0.4, 0, 0.2, 1)" },
};
const durations = {
  fastest: { value: "50ms" },
  faster: { value: "100ms" },
  fast: { value: "150ms" },
  normal: { value: "200ms" },
  slow: { value: "300ms" },
  slower: { value: "400ms" },
  slowest: { value: "500ms" },
};

const theme = {
  textStyles,
  tokens: defineTokens({
    colors: {
      gray: {
        1: { value: "#111111" },
        2: { value: "#191919" },
        3: { value: "#222222" },
        4: { value: "#2a2a2a" },
        5: { value: "#313131" },
        6: { value: "#3a3a3a" },
        7: { value: "#484848" },
        8: { value: "#606060" },
        9: { value: "#6e6e6e" },
        10: { value: "#7b7b7b" },
        11: { value: "#b4b4b4" },
        12: { value: "#eeeeee" },
      },
      black: {
        a1: { value: "rgba(0, 0, 0, 0.05)" },
        a2: { value: "rgba(0, 0, 0, 0.1)" },
        a3: { value: "rgba(0, 0, 0, 0.15)" },
        a4: { value: "rgba(0, 0, 0, 0.2)" },
        a5: { value: "rgba(0, 0, 0, 0.3)" },
        a6: { value: "rgba(0, 0, 0, 0.4)" },
        a7: { value: "rgba(0, 0, 0, 0.5)" },
        a8: { value: "rgba(0, 0, 0, 0.6)" },
        a9: { value: "rgba(0, 0, 0, 0.7)" },
        a10: { value: "rgba(0, 0, 0, 0.8)" },
        a11: { value: "rgba(0, 0, 0, 0.9)" },
        a12: { value: "rgba(0, 0, 0, 0.95)" },
      },
      blue: {
        1: { value: "#0d1520" },
        2: { value: "#111927" },
        3: { value: "#0d2847" },
        4: { value: "#003362" },
        5: { value: "#004074" },
        6: { value: "#104d87" },
        7: { value: "#205d9e" },
        8: { value: "#2870bd" },
        9: { value: "#0090ff" },
        10: { value: "#3b9eff" },
        11: { value: "#70b8ff" },
        12: { value: "#c2e6ff" },
      },
    },
    spacing,
    sizes,
    shadows,
    breakpoints,
    durations,
    easings,
    lineHeights: {
      sm: { value: "1rem" },
      md: { value: "1.5rem" },
      lg: { value: "1.5rem" },
    },
    letterSpacings: {
      sm: { value: "0.005em" },
      md: { value: "-0.001em" },
      lg: { value: "-0.006em" },
    },
    fontSizes: {
      body: {
        sm: { value: "0.75rem" },
        md: { value: "0.875rem" },
        lg: { value: "1rem" },
      },
      heading: {
        "1": { value: "2rem" },
        "2": { value: "1.5rem" },
        "3": { value: "1.25rem" },
        "4": { value: "1rem" },
      },
    },
    borders: {
      gray: {
        DEFAULT: {
          value: "1px solid {colors.gray.7}",
        },
        subtle: { value: "1px solid {colors.gray.6}" },
        hover: {
          value: "1px solid {colors.gray.8}",
        },
      },
    },
    fontWeights: {
      regular: { value: "400" },
      medium: { value: "500" },
      bold: { value: "600" },
      black: { value: "700" },
    },
    fonts: {
      body: {
        value: `var(--font-neue-haas-grotesk-text), Arial, sans-serif`,
      },
      heading: { value: ["Roboto Mono", "sans-serif"] },
    },
    radii: {
      xxs: { value: "0.125rem" },
      sm: { value: "0.25rem" },
      md: { value: "0.5rem" },
      lg: { value: "1rem" },
      pill: { value: "999px" },
      circle: { value: "50%" },
    },
  }),
  semanticTokens: defineSemanticTokens({
    colors: {
      gray: {
        text: {
          value: "{colors.gray.11}",
        },
      },
    },
  }),
};

export const foundryPreset = definePreset({
  theme: {
    extend: theme,
  },
  globalCss: {
    html: {
      bg: "gray.1",
      color: "gray.11",
      fontFamily: "body",
      fontWeight: "400",
    },
  },
}) as Preset;
