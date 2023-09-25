import React, { PropsWithChildren } from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import styles from "./Tooltip.module.scss";

interface TooltipProps {
  content: string | React.ReactNode;
  side?: RadixTooltip.TooltipContentProps["side"];
  textAlign?: "center" | "left";
}

export const Tooltip = React.forwardRef<
  HTMLButtonElement,
  PropsWithChildren<TooltipProps>
>(({ children, content, side, textAlign }, ref) => (
  <RadixTooltip.Root>
    <RadixTooltip.Trigger asChild ref={ref}>
      <span className={styles.childWrapper}>{children}</span>
    </RadixTooltip.Trigger>
    <RadixTooltip.Portal className={styles.tooltipPortal}>
      <RadixTooltip.Content
        collisionPadding={{ top: 64, left: 16, right: 16 }}
        sideOffset={6}
        side={side}
        style={{ textAlign }}
        className={styles.tooltipContent}
      >
        {content}
        <RadixTooltip.Arrow
          className={styles.tooltipArrow}
          width={12}
          height={6}
        />
      </RadixTooltip.Content>
    </RadixTooltip.Portal>
  </RadixTooltip.Root>
));

Tooltip.displayName = "Tooltip";
