import { defineRecipe } from "@pandacss/dev";

export const cardRecipe = defineRecipe({
  className: "card",
  base: {
    rounded: "2",
    position: "relative",
    border: "gray.subtle",
  },
  variants: {
    size: {
      sm: {
        p: "1.5",
      },
      md: {
        p: "2",
      },
      lg: {
        p: "3",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
