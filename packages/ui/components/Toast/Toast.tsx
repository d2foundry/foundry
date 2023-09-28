"use client";
import React from "react";

import * as ToastPrimitive from "@radix-ui/react-toast";
import styles from "./Toast.module.scss";
import { VariantProps, cva } from "class-variance-authority";
// import { Button } from "@foundry-ui/Button";

import { cn } from "../../utils/cn";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Button } from "../Button";
import { IconButton } from "../IconButton";

const ToastProvider = ToastPrimitive.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={cn(styles.toastViewport, className)}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitive.Viewport.displayName;

const toastVariants = cva(styles.toast, {
  variants: {
    variant: {
      default: "bg-background border",
      destructive:
        "group destructive border-destructive bg-destructive text-destructive-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => (
  <ToastPrimitive.Root
    ref={ref}
    className={cn(toastVariants({ variant }), className)}
    {...props}
  />
));
Toast.displayName = ToastPrimitive.Root.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title
    ref={ref}
    className={cn(styles.toastTitle, className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitive.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description
    ref={ref}
    className={cn(styles.toastDescription, className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitive.Description.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Action
    ref={ref}
    className={cn(styles.toastAction, className)}
    {...props}
    asChild
  >
    <Button>Update</Button>
  </ToastPrimitive.Action>
));
ToastAction.displayName = ToastPrimitive.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Close
    ref={ref}
    className={cn(styles.toastClose, className)}
    toast-close=""
    asChild
    {...props}
  >
    <IconButton label="Close" tooltip={false}>
      <Cross1Icon className="h-4 w-4" />
    </IconButton>
  </ToastPrimitive.Close>
));
ToastClose.displayName = ToastPrimitive.Close.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};

// export const Toast: React.FC<ToastProps> = ({}) => (
//   <ToastPrimitive.Root
//     open={open}
//     onOpenChange={setOpen}
//     className={styles.toast}
//     duration={20000}
//   >
//     <ToastPrimitive.Title className={styles.toastTitle}>Update available</Toast.Title>
//     <ToastPrimitive.Description className={styles.toastDescription}>
//       A newer version of Foundry is available, reload to update?
//     </ToastPrimitive.Description>
//     <ToastPrimitive.Action asChild altText="Update app and reload page">
//       <Button onClick={handleClick} className={styles.toastAction}>
//         Update
//       </Button>
//     </ToastPrimitive.Action>
//   </ToastPrimitive.Root>
// );
