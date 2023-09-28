"use client";

import React from "react";

import * as DialogPrimitive from "@radix-ui/react-dialog";

import styles from "./Dialog.module.scss";
// import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Cross1Icon } from "@radix-ui/react-icons";
import { cn } from "../../utils/cn";
import { IconButton } from "../IconButton";

// interface DialogProps {
//   trigger: React.ReactNode;
//   title: string;
//   content: React.ReactNode;
// }

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = ({
  className,
  children,
  ...props
}: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal className={cn(className)} {...props}>
    <div className={styles.portalInner}>{children}</div>
  </DialogPrimitive.Portal>
);
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(styles.overlay, className)}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    size?: "md" | "lg";
  }
>(({ className, children, size, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      {...props}
      ref={ref}
      className={cn(styles.content, { [styles.lg]: size === "lg" }, className)}
    >
      {children}
      <DialogPrimitive.Close className={styles.close} asChild>
        <IconButton label="Close" tooltip={false}>
          <Cross1Icon />
        </IconButton>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));

DialogContent.displayName = DialogPrimitive.Content.displayName;

export const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(styles.header, className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

export const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(styles.footer, className)} {...props} />
);
DialogFooter.displayName = "DialogFooter";

export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(styles.title, className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(styles.description, className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export const DialogBody = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(styles.body, className)} {...props} />
);
DialogBody.displayName = "DialogBody";

// export const Dialog: React.FC<DialogProps> = ({ trigger, title, content }) => (
//   <DialogPrimitive.Root>
//     <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
//     <DialogPrimitive.Portal>
//       <DialogPrimitive.Overlay className={styles.overlay} />
//       <DialogPrimitive.Content className={styles.content}>
//         <VisuallyHidden asChild>
//           <DialogPrimitive.Title>{title}</DialogPrimitive.Title>
//         </VisuallyHidden>
//         <div className={styles.contentBody}>{content}</div>
//         <DialogPrimitive.Close className={styles.close}>
//           <Cross1Icon />
//         </DialogPrimitive.Close>
//       </DialogPrimitive.Content>
//     </DialogPrimitive.Portal>
//   </DialogPrimitive.Root>
// );
