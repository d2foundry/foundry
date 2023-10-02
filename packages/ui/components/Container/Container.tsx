import React from "react";
import styles from "./Container.module.scss";
import { cva } from "class-variance-authority";
import { cn } from "../../utils";
const sizes = ["1", "2", "3", "4"] as const;
const displayValues = ["none", "block"] as const;

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: (typeof sizes)[number];
  display?: (typeof displayValues)[number];
}
export const containerPropDefs = cva(styles.Container, {
  variants: {
    size: {
      default: styles["size-4"],
      "1": styles["size-1"],
      "2": styles["size-2"],
      "3": styles["size-3"],
      "4": styles["size-4"],
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, size = "4", className, display, ...rest }, ref) => {
    return (
      <div
        {...rest}
        ref={ref}
        className={cn(containerPropDefs({ size, className }))}
        style={{
          ...(rest.style || {}),
          display: display,
        }}
      >
        <div className={styles.ContainerInner}>{children}</div>
      </div>
    );
  }
);

Container.displayName = "Container";
