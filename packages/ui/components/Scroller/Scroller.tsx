import React from "react";

import * as ScrollArea from "@radix-ui/react-scroll-area";

import styles from "./Scroller.module.scss";
import { cn } from "@utils/ui";

// interface ScrollerProps {}

export const Scroller: React.FC<
  React.PropsWithChildren<ScrollArea.ScrollAreaProps>
> = ({ className, children, ...props }) => (
  <ScrollArea.Root className={cn(styles.scroller, className)} {...props}>
    <ScrollArea.Viewport className={styles.scrollAreaViewport}>
      {children}
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar
      className={styles.scrollAreaScrollbar}
      orientation="vertical"
    >
      <ScrollArea.Thumb className={styles.scrollAreaThumb} />
    </ScrollArea.Scrollbar>
    <ScrollArea.Scrollbar
      className={styles.scrollAreaScrollbar}
      orientation="horizontal"
    >
      <ScrollArea.Thumb className={styles.scrollAreaThumb} />
    </ScrollArea.Scrollbar>
  </ScrollArea.Root>
);
