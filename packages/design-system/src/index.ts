import { definePreset, defineTokens } from "@pandacss/dev";
import type { Preset, Theme } from "@pandacss/types";

import { textStyles } from "./text-styles";

import { colors } from "./tokens/colors";
import { spacing } from "./tokens/spacing";
import { breakpoints } from "./tokens/breakpoints";
import { shadows } from "./tokens/shadows";
import { durations } from "./tokens/durations";
import { easings } from "./tokens/easings";
import { radii } from "./tokens/radii";
import { sizes } from "./tokens/sizes";
import * as typography from "./tokens/typography";
import { semanticTokens } from "./semantic-tokens";
import { zIndex } from "./tokens/z-index";
import { recipes } from "./recipes";
import { keyframes } from "./keyframes";
import { animations } from "./tokens/animations";

export const theme: Theme = {
  textStyles,
  breakpoints,
  keyframes,
  tokens: defineTokens({
    animations,
    colors,
    spacing,
    sizes,
    shadows,
    durations,
    easings,
    radii,
    zIndex,
    ...typography,
    leadingTrim: {
      start: { value: "0.42em" },
      end: { value: "0.36em" },
    },
  }),
  semanticTokens,
  recipes,
};

export const preset: Preset = definePreset({
  theme,
  globalCss: {
    html: {
      bg: "gray.1",
      color: "gray.11",
    },
  },
  utilities: {
    extend: {
      leadingTrim: {
        className: "leading-trim",
        shorthand: "trim",
        values: ["normal", "start", "end", "both"],
        transform(value, { token }) {
          const defaultStyle = {
            "&::before": { content: "none" },
            "&::after": { content: "none" },
          };
          if (value === "normal") return defaultStyle;

          const start = {
            "&::before": {
              content: "''",
              display: "table",
              marginBottom: `calc(${token(
                "leadingTrim.start"
              )} - var(--line-height) / 2)`,
            },
          };
          const end = {
            "&::after": {
              content: "''",
              display: "table",
              marginTop: `calc(${token(
                "leadingTrim.end"
              )} - var(--line-height) / 2)`,
            },
          };

          if (value === "start") return start;
          if (value === "end") return end;
          return { ...start, ...end };
        },
      },
    },
  },
});
