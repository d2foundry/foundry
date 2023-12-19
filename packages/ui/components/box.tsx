import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { styled, splitCssProps } from "@foundry/styled-system/jsx";
import type { HTMLStyledProps } from "@foundry/styled-system/types";
import { BoxProperties } from "@foundry/styled-system/patterns";
import { MarginProps } from "./helpers/margin-props";
import { css } from "@foundry/styled-system/css";

export type BoxProps = HTMLStyledProps<"div"> & {
  children?: React.ReactNode;
  asChild?: boolean;
};

export const Box = ({ asChild = false, children, ...props }: BoxProps) => {
  const [cssProps, restProps] = splitCssProps(props);
  const Comp = asChild ? Slot : styled.div;

  return (
    <Comp {...restProps} className={css({ boxSizing: "border-box" }, cssProps)}>
      {children}
    </Comp>
  );
};
