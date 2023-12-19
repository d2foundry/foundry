import { defineSemanticTokens } from "@pandacss/dev";
import { colors } from "./colors";
export const semanticTokens = defineSemanticTokens({
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
    accent: {
      DEFAULT: {
        value: "1px solid {colors.blue.7}",
      },
      subtle: { value: "1px solid {colors.blue.6}" },
      hover: {
        value: "1px solid {colors.blue.8}",
      },
    },
  },
  colors: {
    ...colors,
    accent: {
      base: {
        value: "{colors.blue.1}",
      },
      bg: {
        DEFAULT: {
          value: "{colors.blue.3}",
        },
        subtle: {
          value: "{colors.blue.2}",
        },
        hover: {
          value: "{colors.blue.4}",
        },
        active: {
          value: "{colors.blue.5}",
        },
      },
      focusRing: {
        value: "{colors.blue.8}",
      },
      solid: {
        DEFAULT: { value: "{colors.blue.9}" },
        hover: {
          value: "{colors.blue.10}",
        },
      },
      text: {
        DEFAULT: { value: "{colors.blue.11}" },
        contrast: {
          value: "{colors.blue.12}",
        },
      },
    },
    danger: {
      base: {
        value: "{colors.red.1}",
      },
      bg: {
        DEFAULT: { value: "{colors.red.3}" },
        subtle: {
          value: "{colors.red.2}",
        },
        hover: {
          value: "{colors.red.4}",
        },
        active: {
          value: "{colors.red.5}",
        },
      },
      line: {
        value: "{colors.red.6}",
      },
      border: {
        value: "{colors.red.7}",
      },
      focusRing: {
        value: "{colors.red.8}",
      },
      solid: {
        DEFAULT: {
          value: "{colors.red.9}",
        },
        hover: {
          value: "{colors.red.10}",
        },
      },
      text: {
        DEFAULT: {
          value: "{colors.red.11}",
        },
        contrast: {
          value: "{colors.red.12}",
        },
      },
    },
  },
  fontSizes: {
    body: {
      xs: { value: "{fontSizes.1}" },
      sm: { value: "{fontSizes.2}" },
      md: { value: "{fontSizes.3}" },
      lg: { value: "{fontSizes.4}" },
    },
    heading: {
      "1": { value: "{fontSizes.8}" },
      "2": { value: "{fontSizes.7}" },
      "3": { value: "{fontSizes.6}" },
      "4": { value: "{fontSizes.5}" },
    },
  },
  shadows: {
    focusRing: { value: "0 0 0 2px {colors.accent.focusRing}" },
  },
});
