import { Slot } from "@radix-ui/react-slot";
import { styled } from "@foundry/styled-system/jsx";
import { css, cx } from "@foundry/styled-system/css";
import { HTMLStyledProps, splitCssProps } from "@foundry/styled-system/jsx";

import type { JsxStyleProps } from "@foundry/styled-system/types";
import { flex } from "@foundry/styled-system/patterns";
import { MarginProps } from "./helpers/margin-props";
import { forwardRef, HTMLAttributes } from "react";
import { SystemStyleObject } from "@foundry/styled-system/types";

interface FlexProperties {
  align?: SystemStyleObject["alignItems"];
  justify?: SystemStyleObject["justifyContent"];
  direction?: SystemStyleObject["flexDirection"];
  wrap?: SystemStyleObject["flexWrap"];
  basis?: SystemStyleObject["flexBasis"];
  grow?: SystemStyleObject["flexGrow"];
  shrink?: SystemStyleObject["flexShrink"];
  gap?: SystemStyleObject["gap"];
}

export type FlexProps = FlexProperties &
  MarginProps & {
    children?: React.ReactNode;
    asChild?: boolean;
  };

export const Flex = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & FlexProps
>(({ asChild = false, children, className, ...props }, ref) => {
  // const [cssPropsWithFlex, restProps] = splitCssProps(props);

  const {
    direction,
    align,
    wrap,
    basis,
    justify,
    grow,
    shrink,
    gap,
    ...restProps
  } = props;

  const flexStyles = css.raw(
    { display: "flex", gap },
    flex.raw({ direction, align, wrap, basis, justify, grow, shrink })
  );

  const Comp = asChild ? Slot : "div";
  return (
    <Comp ref={ref} className={cx(css(flexStyles), className)} {...restProps}>
      {children}
    </Comp>
  );
});
