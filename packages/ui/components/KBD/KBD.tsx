import React, { HTMLAttributes } from "react";
import { cn } from "@utils/ui";
import styles from "./KBD.module.scss";

interface KBDProps extends HTMLAttributes<HTMLDivElement> {
  meta?: boolean;
  shift?: boolean;
  alt?: boolean;
  ctrl?: boolean;
  size?: "sm" | "md";
}

const META = "⌘";
const SHIFT = "⇧";
const ALT = "⌥";
const CTRL = "⌃";

export const KBD = ({
  children,
  className,
  meta,
  shift,
  alt,
  ctrl,
  size = "md",
  ...props
}: KBDProps) => (
  <kbd
    className={cn(styles.kbd, { [styles.small]: size === "sm" }, className)}
    {...props}
  >
    {meta ? <span>{META}</span> : null}
    {shift ? <span>{SHIFT}</span> : null}
    {alt ? <span>{ALT}</span> : null}
    {ctrl ? <span>{CTRL}</span> : null}
    {children ? <span>{children}</span> : null}
  </kbd>
);
