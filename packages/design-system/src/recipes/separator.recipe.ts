import { defineRecipe } from "@pandacss/dev";

export const separatorRecipe = defineRecipe({
  className: "separator",
  base: {
    bg: "gray.line",
    flexShrink: "0",

    _horizontal: {
      h: "1px",
      w: "full",
    },
    _vertical: {
      h: "full",
      w: "1px",
    },
  },
});
