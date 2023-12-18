import { defineRecipe } from "@pandacss/dev";

export const textareaRecipe = defineRecipe({
  className: "textarea",
  base: {
    display: "flex",
    w: "full",
    p: "1",
    border: "gray",
    rounded: "2",
    bg: "gray.bg",
    color: "gray.text.contrast",
    resize: "vertical",
    _placeholder: {
      opacity: "1",
      color: "gray.solid",
    },
    _hover: { border: "gray.hover" },

    _focus: {
      outline: "0",
      shadow: "focusRing",
    },
  },
  variants: {
    size: {
      sm: { textStyle: "inputField.sm", minH: "3" },
      md: { textStyle: "inputField.md", minH: "4" },
      lg: { textStyle: "inputField.lg", minH: "5" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
