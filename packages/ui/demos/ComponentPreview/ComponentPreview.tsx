"use client";
import { cn } from "../../utils";
import React, { PropsWithChildren } from "react";
import styles from "./ComponentPreview.module.scss";
interface ComponentPreviewProps {
  align?: "center" | "start" | "end";
  gradient?: boolean;
}
export const ComponentPreview: React.FC<
  PropsWithChildren<ComponentPreviewProps>
> = ({ children, align, gradient }) => (
  <div
    className={cn(styles.container, "not-prose", {
      [styles.gradient]: gradient,
    })}
    style={{
      alignItems: align ?? "center",
    }}
  >
    {children}
  </div>
);
