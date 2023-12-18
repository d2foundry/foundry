import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { styled } from "@foundry/styled-system/jsx";

import { grid, GridProperties } from "@foundry/styled-system/patterns";
import { MarginProps } from "./helpers/margin-props";

export type GridProps = GridProperties &
  MarginProps & {
    children?: React.ReactNode;
    asChild?: boolean;
  };

export const Grid = ({ asChild = false, children, ...props }: GridProps) => {
  const Comp = asChild ? Slot : styled.div;
  return <Comp className={grid(props)}>{children}</Comp>;
};
