"use client";
import React from "react";

import * as LabelPrimitive from "@radix-ui/react-label";
import { VariantProps, cva } from "class-variance-authority";
import styles from "./Label.module.scss";

import { cn } from "../../utils/cn";

const labelVariants = cva(styles.label, {
  variants: {
    size: {
      sm: styles.sm,
    },
  },
});

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
