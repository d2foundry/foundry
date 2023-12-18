import { defineRecipe } from "@pandacss/dev";

export const inputRecipe = defineRecipe({
  className: "input",
  base: {
    display: "flex",
    bg: "gray.bg",
    border: "gray",
    rounded: "2",
    w: "full",
    color: "gray.text",
    textIndent: "calc(var(--spacing-1) - 1px)",
    _hover: {
      border: "gray.hover",
    },
    _focus: {
      outline: "0",
      border: "gray.active",
      shadow: "focusRing",
    },
    _placeholder: {
      opacity: "1",
      color: "gray.solid",
    },
  },
  variants: {
    size: {
      sm: { h: "3", textStyle: "inputField.sm" },
      md: { h: "4", textStyle: "inputField.md" },
      lg: { h: "5", textStyle: "inputField.lg" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
