"use client";
import React, { useEffect, useState } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import {
  CaretSortIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

import { cn } from "../../utils/cn";

import styles from "./Select.module.scss";

interface SelectProps extends SelectPrimitive.SelectProps {
  placeholder?: string;
  selectValue?: React.ReactNode;
  id?: string;
  triggerClassName?: string;
  size?: "sm" | "md" | "lg";
}

const Overlay = ({ open }: { open: boolean }) => {
  const [visible, setVisible] = useState(open);
  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 200);
      return () => {
        clearTimeout(timer);
      };
    }
    setVisible(true);
    return () => undefined;
  }, [open]);

  return visible ? (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={styles.selectOverlay}
      onClick={(e) => e.stopPropagation()}
    />
  ) : null;
};

export const Select = React.forwardRef<
  HTMLButtonElement,
  SelectPrimitive.SelectProps & SelectProps
>(
  (
    {
      children,
      selectValue,
      size,
      placeholder,
      id,
      triggerClassName,
      ...props
    },
    forwardedRef
  ) => {
    const [open, setOpen] = useState(false);

    return (
      <SelectPrimitive.Root {...props} open={open} onOpenChange={setOpen}>
        <SelectPrimitive.Trigger
          className={cn(
            styles.selectTrigger,
            { [styles.small]: size === "sm" },
            { [styles.large]: size === "lg" },
            triggerClassName
          )}
          id={id}
          ref={forwardedRef}
        >
          <SelectPrimitive.Value
            placeholder={placeholder}
            className={styles.selectValue}
          >
            {selectValue}
          </SelectPrimitive.Value>
          <SelectPrimitive.Icon className={styles.selectIcon}>
            <CaretSortIcon />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal
          // container={container}
          className={styles.selectPortal}
        >
          <>
            <Overlay open={open} />
            <SelectPrimitive.Content
              // onTouchEnd={(e) => e.stopPropagation()}
              onClickCapture={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
              // position="popper"
              className={styles.selectContent}
            >
              <SelectPrimitive.ScrollUpButton className={styles.scrollButton}>
                <ChevronUpIcon />
              </SelectPrimitive.ScrollUpButton>
              <SelectPrimitive.Viewport className={styles.selectViewport}>
                {children}
              </SelectPrimitive.Viewport>
              <SelectPrimitive.ScrollDownButton className={styles.scrollButton}>
                <ChevronDownIcon />
              </SelectPrimitive.ScrollDownButton>
            </SelectPrimitive.Content>
          </>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    );
  }
);

Select.displayName = "Select";

export const SelectItem = React.forwardRef<
  HTMLDivElement,
  SelectPrimitive.SelectItemProps
>(({ children, ...props }, forwardedRef) => (
  <SelectPrimitive.Item
    {...props}
    ref={forwardedRef}
    className={styles.selectItem}
  >
    <SelectPrimitive.ItemIndicator className={styles.selectItemIndicator}>
      <CheckIcon />
    </SelectPrimitive.ItemIndicator>
    <SelectPrimitive.ItemText asChild>
      <div className={styles.selectValue}>{children}</div>
    </SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));

SelectItem.displayName = "SelectItem";

export const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(styles.selectLabel, className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

export const SelectGroup = SelectPrimitive.Group;

export const SelectValue = SelectPrimitive.Value;

export const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn(styles.selectSeparator, className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
