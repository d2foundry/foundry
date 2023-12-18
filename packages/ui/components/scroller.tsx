"use client";

import * as ScrollArea from "@radix-ui/react-scroll-area";
import { css } from "@foundry/styled-system/css";
import { styled } from "@foundry/styled-system/jsx";

const Scrollbar = styled(ScrollArea.Scrollbar, {
  base: {
    display: "flex",
    p: "0.25",
    bg: "transparent",
    userSelect: "none",
    touchAction: "none",
    zIndex: "999",
    _vertical: { flexDir: "column", w: "1.5" },
    _horizontal: { flexDir: "row", h: "1.5" },
    _hover: {
      bg: "gray.base",
    },
  },
});

const Thumb = styled(ScrollArea.Thumb, {
  base: {
    pos: "relative",
    flex: "1",
    rounded: "2",
    bg: "gray.border",
    _groupHover: {
      bg: "gray.solid.hover",
    },
  },
});

export const Scroller: React.FC<
  React.PropsWithChildren<ScrollArea.ScrollAreaProps>
> = ({ className, children, ...props }) => (
  <ScrollArea.Root
    className={css({ h: "full", overflow: "hidden" })}
    {...props}
  >
    <ScrollArea.Viewport
      className={css({
        h: "full",
        w: "full",
        overflow: "scroll",
        rounded: "inherit",
      })}
    >
      {children}
    </ScrollArea.Viewport>
    <Scrollbar orientation="vertical">
      <Thumb />
    </Scrollbar>
    <Scrollbar orientation="horizontal">
      <Thumb />
    </Scrollbar>
  </ScrollArea.Root>
);
