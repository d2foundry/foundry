import React from "react";

import { VariantProps, cva } from "class-variance-authority";

import { cn } from "../../utils/cn";

import styles from "./Badge.module.scss";
import { Slot } from "@radix-ui/react-slot";

const badgeVariants = cva(
  styles.badge,

  {
    variants: {
      variant: {
        success: {},
        secondary: {},
        destructive: {},
      },
      size: {
        sm: {},
        md: {},
        lg: {},
      },
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

function Badge({ className, variant, size, asChild, ...props }: BadgeProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
