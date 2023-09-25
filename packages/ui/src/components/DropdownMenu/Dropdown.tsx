import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, DividerHorizontalIcon } from "@radix-ui/react-icons";

import { cn } from "@utils/ui";

import styles from "./Dropdown.module.scss";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export const DropdownMenuContent = React.forwardRef<
  HTMLDivElement,
  DropdownMenuPrimitive.DropdownMenuContentProps
>(({ children, ...props }, forwardedRef) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      {...props}
      ref={forwardedRef}
      className={styles.dropdown}
      hideWhenDetached
      collisionPadding={{ top: 64, left: 16, right: 16 }}
      // sideOffset={4}
      loop
    >
      {children}
      <DropdownMenuPrimitive.Arrow
        className={styles.dropdownMenuArrow}
        width={12}
        height={6}
      />
    </DropdownMenuPrimitive.Content>
  </DropdownMenuPrimitive.Portal>
));

DropdownMenuContent.displayName = "DropdownMenuContent";

export const DropdownMenuLabel = DropdownMenuPrimitive.Label;
export const DropdownMenuItem = React.forwardRef<
  HTMLDivElement,
  DropdownMenuPrimitive.DropdownMenuItemProps
>(({ children, ...props }, forwardedRef) => (
  <DropdownMenuPrimitive.Item
    {...props}
    ref={forwardedRef}
    className={cn(styles.option, props.className)}
  >
    {children}
  </DropdownMenuPrimitive.Item>
));
DropdownMenuItem.displayName = "DropdownMenuItem";
export const DropdownMenuGroup = DropdownMenuPrimitive.Group;

export const DropdownMenuCheckboxItem = React.forwardRef<
  HTMLDivElement,
  DropdownMenuPrimitive.DropdownMenuCheckboxItemProps
>(({ children, ...props }, forwardedRef) => (
  <DropdownMenuPrimitive.CheckboxItem
    {...props}
    ref={forwardedRef}
    className={cn(styles.option, styles.checkboxOption)}
  >
    <DropdownMenuPrimitive.ItemIndicator className={styles.itemIndicator}>
      {props.checked === "indeterminate" && <DividerHorizontalIcon />}
      {props.checked === true && <CheckIcon />}
    </DropdownMenuPrimitive.ItemIndicator>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));

DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";

export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export const DropdownMenuRadioItem = React.forwardRef<
  HTMLDivElement,
  DropdownMenuPrimitive.DropdownMenuRadioItemProps
>(({ children, ...props }, forwardedRef) => (
  <DropdownMenuPrimitive.RadioItem {...props} ref={forwardedRef}>
    {children}
    <DropdownMenuPrimitive.ItemIndicator>
      <CheckIcon />
    </DropdownMenuPrimitive.ItemIndicator>
  </DropdownMenuPrimitive.RadioItem>
));

DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";
export const DropdownMenuSeparator = React.forwardRef<
  HTMLDivElement,
  DropdownMenuPrimitive.DropdownMenuSeparatorProps
>(({ children, ...props }, forwardedRef) => (
  <DropdownMenuPrimitive.Separator
    {...props}
    ref={forwardedRef}
    className={styles.separator}
  >
    {children}
  </DropdownMenuPrimitive.Separator>
));
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";
// export const DropdownMenuSeparator = DropdownMenuPrimitive.Separator;
