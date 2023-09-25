import React, { PropsWithChildren } from "react";
import { VariantProps, cva } from "class-variance-authority";

import styles from "./IconButton.module.scss";
import { Tooltip } from "@foundry-ui/Tooltip";
import { cn } from "@utils/ui";

export interface IconButtonProps
  extends PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  label: string;
  tooltipContent?: string;
  tooltip?: boolean;
}

export const iconButtonVariants = cva(styles.button, {
  variants: {
    variant: {
      default: "",
      destructive: styles.destructive,
      warning: styles.warning,
      outline: styles.outline,
      secondary: styles.secondary,
      ghost: styles.ghost,
      link: "underline-offset-4 hover:underline text-primary",
    },
    size: {
      default: "h-10 py-2 px-4",
      sm: styles.small,
      lg: styles.large,
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export const IconButton = React.forwardRef<
  HTMLButtonElement,
  IconButtonProps & VariantProps<typeof iconButtonVariants>
>(
  (
    {
      children,
      onClick,
      variant,
      size,
      // noPortal,
      tooltip = true,
      className,
      label,
      tooltipContent,
      ...rest
    },
    ref
  ) =>
    tooltip ? (
      <Tooltip content={tooltipContent ?? label}>
        <button
          className={cn(styles.button, className)}
          onClick={onClick}
          aria-label={label}
          ref={ref}
          {...rest}
        >
          {children}
        </button>
      </Tooltip>
    ) : (
      <button
        className={cn(iconButtonVariants({ className, variant, size }))}
        onClick={onClick}
        aria-label={label}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    )
);

IconButton.displayName = "IconButton";
