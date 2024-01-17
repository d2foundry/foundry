import { ReactNode, forwardRef, HTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utils";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  asChild?: never;
}

export const Heading = forwardRef<HTMLHeadingElement, Props>(
  ({ children, className, asChild = false, as: Tag = "h1", ...rest }, ref) => {
    const headingStyle = {
      heading1: Tag === "h1",
      heading2: Tag === "h2",
      heading3: Tag === "h3",
      heading4: Tag === "h4",
    };
    return (
      <Slot {...rest} ref={ref} className={cn(headingStyle, className)}>
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    );
  }
);
