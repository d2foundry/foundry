import React from "react";

import styles from "./ToggleButton.module.scss";
import * as Toggle from "@radix-ui/react-toggle";
import { IconButton } from "@foundry-ui/IconButton";
import { IconButtonProps } from "@foundry-ui/IconButton/IconButton";

import { cn } from "@utils/ui";

interface ToggleButtonProps extends IconButtonProps {
  pressed?: boolean;
}

export const ToggleButton: React.FC<
  React.PropsWithChildren<ToggleButtonProps>
> = ({ label, children, className, pressed, ...rest }) => (
  <Toggle.Root asChild pressed={pressed}>
    <IconButton
      className={cn(className, styles.toggleButton)}
      label={label}
      {...rest}
    >
      {children}
    </IconButton>
  </Toggle.Root>
);
