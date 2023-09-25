import React from "react";

import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@utils/ui";

import styles from "./Switch.module.scss";

// type SwitchProps = SwitchPrimitive.SwitchProps;

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    className={cn(styles.switchRoot, className)}
    {...props}
    ref={ref}
  >
    <SwitchPrimitive.Thumb className={styles.switchThumb} />
  </SwitchPrimitive.Root>
));

Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };
