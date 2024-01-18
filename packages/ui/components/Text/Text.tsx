import { ReactNode, forwardRef, HTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utils";

interface Props extends HTMLAttributes<HTMLDivElement> { 
  children?: ReactNode;
  asChild?: never;
  size?: "sm" | "md" | "lg";
}

export const Text = forwardRef<HTMLDivElement, Props>(
  ({ children, className, asChild = false, size = "md", ...rest }, ref) => {
    const textStyle = {
      textSmall: size === "sm",
      textRegular: size === "md",
      textLarge: size === "lg",
    };
    return (
      <Slot {...rest} ref={ref} className={cn(textStyle, className)}>
        {asChild ? children : <div>{children}</div>}
      </Slot>
    );
  }
);