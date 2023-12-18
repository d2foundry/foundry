"use client";
import { css } from "@foundry/styled-system/css";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { forwardRef } from "react";

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: RadixTooltip.TooltipContentProps["side"];
}

export const TooltipProvider = RadixTooltip.TooltipProvider;

export const Tooltip = forwardRef<HTMLButtonElement, TooltipProps>(
  ({ children, content, side }, ref) => (
    <RadixTooltip.Root>
      <RadixTooltip.Trigger asChild ref={ref}>
        {children}
      </RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          collisionPadding={{ top: 64, left: 16, right: 16 }}
          sideOffset={6}
          side={side}
          className={css({
            maxW: "40",
            px: "1.5",
            py: "1",
            zIndex: "999",
            rounded: "2",
            bg: "gray.bg.active",
            color: "gray.text.contrast",
            boxShadow: "2",
            lineHeight: "1",
          })}
        >
          {content}
          <RadixTooltip.Arrow
            className={css({
              stroke: "gray.border",
              fill: "gray.bg.hover",
            })}
            width={12}
            height={6}
          />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  )
);

Tooltip.displayName = "Tooltip";
