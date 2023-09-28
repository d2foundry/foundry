"use client";

import React from "react";
import * as Toggle from "@radix-ui/react-toggle";
import { IconButton } from "../IconButton";
import type { IconButtonProps } from "../IconButton";
import { cn } from "../../utils/cn";

import styles from "./ToggleButton.module.scss";

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
