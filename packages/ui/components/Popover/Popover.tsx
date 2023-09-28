"use client";
import React, { forwardRef } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Cross2Icon } from "@radix-ui/react-icons";

import { IconButton } from "../IconButton";
import { cn } from "../../utils/cn";

import styles from "./Popover.module.scss";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;

export const PopoverContent = forwardRef<
  HTMLDivElement,
  PopoverPrimitive.PopoverContentProps &
    Pick<PopoverPrimitive.PopoverPortalProps, "container">
>(({ children, className, container, ...props }, forwardedRef) => (
  <PopoverPrimitive.Portal container={container}>
    <PopoverPrimitive.Content
      className={cn(styles.content, className)}
      sideOffset={6}
      ref={forwardedRef}
      {...props}
    >
      {children}
      <PopoverPrimitive.Close asChild>
        <IconButton className={styles.close} label="Close" tooltip={false}>
          <Cross2Icon />
        </IconButton>
      </PopoverPrimitive.Close>
      <PopoverPrimitive.Arrow className={styles.arrow} width={12} height={8} />
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
));

PopoverContent.displayName = "PopoverContent";

export const PopoverTitle = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn(styles.popoverHeader, className)} {...props}>
    {children}
  </h3>
);
PopoverTitle.displayName = "PopoverTitle";
