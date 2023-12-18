import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { styled } from "@foundry/styled-system/jsx";

import { BoxProperties } from "@foundry/styled-system/patterns";
import { MarginProps } from "./helpers/margin-props";
import { css } from "@foundry/styled-system/css";

export type BoxProps = BoxProperties &
  MarginProps & {
    children?: React.ReactNode;
    asChild?: boolean;
  };

export const Box = ({ asChild = false, children, ...props }: BoxProps) => {
  const Comp = asChild ? Slot : styled.div;
  return (
    <Comp className={css({ boxSizing: "border-box" }, props)}>{children}</Comp>
  );
};
