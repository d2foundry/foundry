"use client";

import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { css } from "@foundry/styled-system/css";
import { square } from "@foundry/styled-system/patterns";

const indicatorStyles = css({
  display: "inline-flex",
  color: "gray.text",
  "&[data-state=checked]": {
    color: "accent.text.contrast",
  },
});
// const rootStyles = css(square.raw({size: "2"}))
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={square({
      size: "2",
      rounded: "2",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bg: "gray.bg",
      border: "gray",
      _hover: {
        border: "gray.hover",
        bg: "gray.bg.hover",
      },
      _focusVisible: {
        shadow: "focusRing",
      },
      "&[data-state=checked]": {
        border: "accent",
        bg: "accent.solid",
        _hover: {
          border: "accent.hover",
          bg: "accent.solid.hover",
        },
      },
    })}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={indicatorStyles}>
      <CheckIcon />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
