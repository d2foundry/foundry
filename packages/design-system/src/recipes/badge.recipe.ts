import { defineRecipe } from "@pandacss/dev";

export const badgeRecipe = defineRecipe({
  className: "badge",
  base: {
    border: "accent",
    px: "1",
    py: "0.5",
    bg: "accent.bg",
    color: "accent.text",
    fontSize: "1",
    rounded: "full",
    fontWeight: "medium",
    lineHeight: 1,
  },
  variants: {
    variant: {
      success: {},
      secondary: {},
      destructive: {},
    },
    size: {
      sm: {},
      md: {},
      lg: {},
    },
  },
});
