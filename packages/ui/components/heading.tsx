import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import {
  heading,
  type HeadingVariantProps,
} from "@foundry/styled-system/recipes";
import { styled } from "@foundry/styled-system/jsx";
import { MarginProps } from "./helpers/margin-props";
import { TrimProps } from "./helpers/trim-props";

export type HeadingProps = HeadingVariantProps &
  MarginProps &
  TrimProps & {
    children?: React.ReactNode;
    asChild?: boolean;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  };

export const Heading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & HeadingProps
>(({ asChild = false, children, as = "h1", ...props }, ref) => {
  const Comp = asChild ? Slot : styled[as];
  return (
    <Comp {...props} ref={ref} className={heading(props)}>
      {children}
    </Comp>
  );
});
Heading.displayName = "Heading";
