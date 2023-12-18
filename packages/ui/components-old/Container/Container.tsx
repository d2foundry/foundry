import React from "react";
import styles from "./Container.module.scss";
import { css } from "@foundry/styled-system/css";

import {
  container,
  ContainerProperties,
} from "@foundry/styled-system/patterns";
import { SxProp } from "../sharedProps";
import { cn } from "../../utils";

interface ContainerProps extends ContainerProperties, SxProp {
  children: React.ReactNode;
  className?: string;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, sx, ...rest }, ref) => {
    return (
      <div
        {...rest}
        ref={ref}
        className={cn(css(container.raw({}), sx), className)}
      >
        <div className={styles.ContainerInner}>{children}</div>
      </div>
    );
  }
);

Container.displayName = "Container";
