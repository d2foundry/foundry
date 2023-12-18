import { styled } from "@foundry/styled-system/jsx";

export const Label = styled("label", {
  base: {
    textStyle: "label",
    display: "inline-flex",
    alignItems: "center",
  },
  variants: {
    size: {
      sm: {},
      md: {},
      lg: {},
    },
    orientation: {
      horizontal: {
        flexDir: "row",
      },
      vertical: {
        flexDir: "column",
        alignItems: "start",
      },
    },
  },
});
