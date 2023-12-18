"use client";
import { styled } from "@foundry/styled-system/jsx";
import { input } from "@foundry/styled-system/recipes";

export const Input = styled("input", input, {
  defaultProps: {
    spellCheck: "false",
    autoComplete: "false",
    autoCorrect: "false",
  },
});
