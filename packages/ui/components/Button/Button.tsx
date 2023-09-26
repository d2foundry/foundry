import React, { PropsWithChildren } from "react";

import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@utils/ui";

import styles from "./Button.module.scss";

export const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      default: "",
      destructive: styles.destructive,
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

export const Button = React.forwardRef<
  HTMLButtonElement,
  PropsWithChildren<
    React.ButtonHTMLAttributes<HTMLButtonElement> &
      VariantProps<typeof buttonVariants>
  >
>(({ children, onClick, className, variant, size, ...rest }, ref) => (
  <button
    className={cn(buttonVariants({ className, variant, size }))}
    onClick={onClick}
    ref={ref}
    {...rest}
  >
    {children}
  </button>
));

Button.displayName = "Button";

export const SecondaryButton = React.forwardRef<
  HTMLButtonElement,
  PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>
>(({ children, onClick, className, ...rest }, ref) => (
  <button
    className={cn(styles.button, styles.secondary, className)}
    onClick={onClick}
    ref={ref}
    {...rest}
  >
    {children}
  </button>
));

SecondaryButton.displayName = "SecondaryButton";
