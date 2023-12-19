import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { styled } from "@foundry/styled-system/jsx";
import { link, type LinkVariantProps } from "@foundry/styled-system/recipes";
import { MarginProps } from "./helpers/margin-props";
import { TrimProps } from "./helpers/trim-props";

export type LinkProps = LinkVariantProps &
  MarginProps &
  TrimProps & {
    children?: React.ReactNode;
    asChild?: boolean;
    href?: string;
    target?: string;
    rel?: string;
  };

export const Link = ({ asChild = false, children, ...props }: LinkProps) => {
  const Comp = asChild ? Slot : styled.a;
  return (
    <Comp {...props} className={link(props)}>
      {children}
    </Comp>
  );
};
