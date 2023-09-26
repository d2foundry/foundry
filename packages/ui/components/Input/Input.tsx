import React, { InputHTMLAttributes } from "react";

import { cn } from "@utils/ui";

import styles from "./Input.module.scss";

type InputProps = {
  size?: "sm" | "md" | "lg";
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export const Input: React.FC<InputProps> = ({ size, className, ...rest }) => (
  <input
    className={cn(
      styles.input,
      { [styles.small]: size === "sm" },
      { [styles.large]: size === "lg" },
      className
    )}
    {...rest}
  />
);
