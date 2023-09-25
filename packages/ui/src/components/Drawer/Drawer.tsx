import React, { forwardRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

import { IconButton } from "@foundry-ui/IconButton";
import { cn } from "@utils/ui";

import styles from "./Drawer.module.scss";

export const Drawer = DialogPrimitive.Root;
export const DrawerTrigger = DialogPrimitive.Trigger;

export const DrawerContent = forwardRef<
  HTMLDivElement,
  DialogPrimitive.DialogContentProps &
    Pick<DialogPrimitive.DialogPortalProps, "container">
>(({ children, className, container, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal container={container}>
    <DialogPrimitive.Overlay className={styles.overlay} />
    <DialogPrimitive.Content
      className={cn(styles.content, className)}
      ref={forwardedRef}
      {...props}
    >
      {children}
      <DialogPrimitive.Close asChild>
        <IconButton className={styles.close} label="Close" tooltip={false}>
          <Cross2Icon />
        </IconButton>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));

DrawerContent.displayName = "DrawerContent";
