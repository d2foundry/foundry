import { defineRecipe } from "@pandacss/dev";

export const textRecipe = defineRecipe({
  className: "text",
  variants: {
    size: {
      xs: { textStyle: "body.xs" },
      sm: { textStyle: "body.sm" },
      md: { textStyle: "body.md" },
      lg: { textStyle: "body.lg" },
    },
    weight: {
      regular: { fontWeight: "regular" },
      medium: { fontWeight: "medium" },
      bold: {
        fontWeight: "bold",
      },
    },
    align: {
      left: { textAlign: "left" },
      center: { textAlign: "center" },
      right: { textAlign: "right" },
      justify: { textAlign: "justify" },
    },
    color: {
      gray: {
        color: "gray.text",
      },
      accent: {
        color: "accent.text",
      },
    },
    highContrast: {
      true: {},
    },
    trim: {
      start: {
        leadingTrim: "start",
      },
      both: {
        leadingTrim: "both",
      },
      end: {
        leadingTrim: "end",
      },
    },
  },
  compoundVariants: [
    { color: "gray", highContrast: true, css: { color: "gray.text.contrast" } },
    {
      color: "accent",
      highContrast: true,
      css: { color: "accent.text.contrast" },
    },
  ],
  defaultVariants: {
    size: "md",
    weight: "regular",
    color: "gray",
  },
});
