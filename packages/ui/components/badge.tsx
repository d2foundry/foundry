import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { styled } from "@foundry/styled-system/jsx";

import { MarginProps } from "./helpers/margin-props";

import { BadgeVariantProps, badge } from "@foundry/styled-system/recipes";

export type BadgeProps = BadgeVariantProps &
  MarginProps & {
    children?: React.ReactNode;
    asChild?: boolean;
  };

export const Badge = ({ asChild = false, children, ...props }: BadgeProps) => {
  const Comp = asChild ? Slot : styled.div;
  return <Comp className={badge(props)}>{children}</Comp>;
};
