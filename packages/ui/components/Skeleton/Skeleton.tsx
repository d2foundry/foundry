import React from "react";
import styles from "./Skeleton.module.scss";
import { cn } from "@utils/ui";
import { VariantProps, cva } from "class-variance-authority";
export const skeletonVariants = cva(styles.skeleton, {
  variants: {
    variant: {
      default: styles.skeleton,
      text: styles.text,
    },
    size: {
      default: "",
      sm: styles.small,
      lg: styles.large,
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
function Skeleton({
  className,
  variant,
  height,
  width,
  size,
  ...props
}: React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof skeletonVariants> & { height?: string; width?: string }) {
  return (
    <div
      style={{
        height,
        width,
      }}
      className={cn(skeletonVariants({ className, variant, size }))}
      {...props}
    />
  );
}

export { Skeleton };
