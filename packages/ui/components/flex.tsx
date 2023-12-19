import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { styled } from "@foundry/styled-system/jsx";
import { css } from "@foundry/styled-system/css";

import type { JsxStyleProps } from "@foundry/styled-system/types";
import { flex, FlexProperties } from "@foundry/styled-system/patterns";
import { MarginProps } from "./helpers/margin-props";

export type FlexProps = FlexProperties &
  MarginProps & {
    children?: React.ReactNode;
    asChild?: boolean;
    gap?: JsxStyleProps["gap"];
  };

export const Flex = ({ asChild = false, children, ...props }: FlexProps) => {
  const Comp = asChild ? Slot : styled.div;
  return (
    <Comp className={css({ w: "full" }, flex.raw(props))}>{children}</Comp>
  );
};
