import React from "react";
import { css } from "@foundry/styled-system/css";
import { SystemStyleObject } from "@foundry/styled-system/types";
import {
  flex,
  FlexProperties,
  StackProperties,
} from "@foundry/styled-system/patterns";

type FlexProps = FlexProperties &
  StackProperties & {
    children: React.ReactNode;
    sx?: SystemStyleObject;
  };

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      children,
      wrap,
      direction = "row",
      justify = "start",
      align,
      gap,
      sx = {},
      ...rest
    },
    ref
  ) => {
    const className = css(
      flex.raw({ wrap, direction, justify, align, gap }),
      {
        ...rest,
      },
      sx
    );
    return (
      <div className={className} ref={ref}>
        {children}
      </div>
    );
  }
);

Flex.displayName = "Flex";
