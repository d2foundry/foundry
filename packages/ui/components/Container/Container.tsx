import React from "react";
import styles from "./Container.module.scss";
import { cva } from "class-variance-authority";
import { css } from "@foundry/styled-system/css";
const sizes = ["1", "2", "3", "4"] as const;
const displayValues = ["none", "block"] as const;
import {
  container,
  ContainerProperties,
} from "@foundry/styled-system/patterns";
interface ContainerProps extends ContainerProperties {
  children: React.ReactNode;
  className?: string;
}
export const containerPropDefs = cva(styles.Container, {
  variants: {
    size: {
      default: styles["size-4"],
      "1": styles["size-1"],
      "2": styles["size-2"],
      "3": styles["size-3"],
      "4": styles["size-4"],
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div
        {...rest}
        ref={ref}
        className={css(container.raw({}), rest)}
        // style={{
        //   ...(rest.style || {}),
        //   display: display,
        // }}
      >
        <div className={styles.ContainerInner}>{children}</div>
      </div>
    );
  }
);

Container.displayName = "Container";
