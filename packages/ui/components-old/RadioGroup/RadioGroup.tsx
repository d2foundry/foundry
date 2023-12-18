"use client";
import React, { PropsWithChildren } from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import styles from "./RadioGroup.module.scss";

// interface RadioGroupProps {}

interface RadioGroupItemProps extends RadioGroupPrimitive.RadioGroupItemProps {
  label: string | React.ReactNode;
}

export const RadioGroupItem: React.FC<RadioGroupItemProps> = ({
  id,
  value,
  label,
  ...rest
}) => (
  <label htmlFor={id} className={styles.radioGroupItemLabel}>
    <RadioGroupPrimitive.Item
      className={styles.radioGroupItem}
      id={id}
      value={value}
      {...rest}
    >
      <RadioGroupPrimitive.Indicator className={styles.radioGroupIndicator} />
    </RadioGroupPrimitive.Item>
    {label}
  </label>
);

export const RadioGroup: React.FC<
  PropsWithChildren<RadioGroupPrimitive.RadioGroupProps>
> = ({ children, ...rest }) => (
  <RadioGroupPrimitive.Root className={styles.radioGroupRoot} {...rest}>
    {children}
  </RadioGroupPrimitive.Root>
);
