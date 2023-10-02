import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utils";

import styles from "./Heading.module.scss";

interface Props {
  children?: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  asChild?: never;
}

export const Heading = React.forwardRef<
  HTMLHeadingElement,
  Props & React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, asChild = false, as: Tag = "h1", ...rest }, ref) => {
  return (
    <Slot {...rest} ref={ref} className={cn(styles.Heading, className)}>
      {asChild ? children : <Tag>{children}</Tag>}
    </Slot>
  );
});
