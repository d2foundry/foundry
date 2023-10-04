import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
// import { cn } from "../../utils";

// import styles from "./Heading.module.scss";
import { css, cva, type RecipeVariantProps } from "@foundry/styled-system/css";
import { styled } from "@foundry/styled-system/jsx";

const headingRecipe = cva({
  base: {
    display: "block",
    textStyle: "heading.2",
  },
  variants: {
    size: {
      "1": { textStyle: "heading.1" },
      "2": { textStyle: "heading.2" },
      "3": { textStyle: "heading.3" },
      "4": { textStyle: "heading.4" },
    },
  },
});

export type HeadingVariants = RecipeVariantProps<typeof headingRecipe>;
interface HeadingProps {
  children?: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  asChild?: never;
}

export const Heading = React.forwardRef<
  HTMLHeadingElement,
  HeadingProps & HeadingVariants
>(({ children, asChild = false, as: Tag = "h1", size, ...rest }, ref) => {
  const styledClassName = css(
    headingRecipe.raw(
      { size }
      // sx
    )
  );
  return (
    <Slot {...rest} ref={ref} className={styledClassName}>
      {asChild ? children : <Tag>{children}</Tag>}
    </Slot>
  );
});
