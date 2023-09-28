"use client";

import React from "react";

import * as ToolbarPrimitive from "@radix-ui/react-toolbar";

import { cn } from "../../utils/cn";
import { buttonVariants } from "../Button";
import styles from "./Toolbar.module.scss";

const Toolbar = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <ToolbarPrimitive.Root
    ref={ref}
    className={cn(styles.toolbar, className)}
    {...props}
  />
));

Toolbar.displayName = ToolbarPrimitive.Root.displayName;

const ToolbarButton = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Button>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Button>
>(({ className, children, ...props }, ref) => (
  <ToolbarPrimitive.Button
    ref={ref}
    className={cn(
      buttonVariants({ variant: "secondary" }),
      styles.toolbarButton,
      className
    )}
    {...props}
  >
    {children}
  </ToolbarPrimitive.Button>
));

ToolbarButton.displayName = ToolbarPrimitive.Button.displayName;

const ToolbarToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.ToggleGroup>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.ToggleGroup>
>(({ className, ...props }, ref) => (
  <ToolbarPrimitive.ToggleGroup
    ref={ref}
    className={cn(styles.toggleGroup, className)}
    {...props}
  />
));

ToolbarToggleGroup.displayName = ToolbarPrimitive.ToggleGroup.displayName;

const ToolbarToggleItem = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.ToggleItem>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.ToggleItem>
>(({ className, children, ...props }, ref) => (
  <ToolbarPrimitive.ToggleItem
    ref={ref}
    className={cn(
      buttonVariants({ variant: "secondary" }),
      styles.toolbarButton,
      className
    )}
    {...props}
  >
    {children}
  </ToolbarPrimitive.ToggleItem>
));

ToolbarToggleItem.displayName = ToolbarPrimitive.ToggleItem.displayName;

const ToolbarSeparator = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ToolbarPrimitive.Separator
    ref={ref}
    className={cn(styles.toolbarSeparator, className)}
    {...props}
  />
));

ToolbarSeparator.displayName = ToolbarPrimitive.Separator.displayName;

export {
  Toolbar,
  ToolbarButton,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
};
