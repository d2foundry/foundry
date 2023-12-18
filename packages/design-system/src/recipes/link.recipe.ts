import { defineRecipe } from "@pandacss/dev";

export const linkRecipe = defineRecipe({
  className: "link",
  base: {
    cursor: "pointer",
    transition: "common",
    transitionTimingFunction: "in",
    transitionDuration: "fast",
  },
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
        _hover: {
          color: "gray.text.contrast",
        },
      },
      accent: {
        color: "accent.text",
        _hover: {
          color: "gray.text.contrast",
        },
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
    underline: {
      always: {
        textDecorationLine: "underline",
        textDecorationThickness: "1px",
        textDecorationColor: "gray.border",
      },
      hover: {
        _hover: {
          textDecorationLine: "underline",
          textDecorationThickness: "1px",
          textDecorationColor: "gray.border",
        },
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
    underline: "always",
  },
});
