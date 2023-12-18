import { defineRecipe } from "@pandacss/dev";

export const headingRecipe = defineRecipe({
  className: "heading",
  variants: {
    size: {
      "4xl": { textStyle: "heading.1" },
      "3xl": { textStyle: "heading.2" },
      "2xl": { textStyle: "heading.3" },
      xl: { textStyle: "heading.4" },
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
    size: "2xl",
    weight: "bold",
  },
});
