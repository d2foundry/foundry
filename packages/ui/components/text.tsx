import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { styled } from "@foundry/styled-system/jsx";
import { text, type TextVariantProps } from "@foundry/styled-system/recipes";
import { MarginProps } from "./helpers/margin-props";
import { TrimProps } from "./helpers/trim-props";

export type TextProps = TextVariantProps &
  MarginProps &
  TrimProps & {
    children?: React.ReactNode;
    asChild?: boolean;
    as?: "p" | "label" | "div" | "span";
  };

export const Text = ({
  asChild = false,
  as = "span",
  children,
  ...props
}: TextProps) => {
  const Comp = asChild ? Slot : styled[as];
  return <Comp className={text(props)}>{children}</Comp>;
};
