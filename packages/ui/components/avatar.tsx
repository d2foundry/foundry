"use client";

import { styled } from "@foundry/styled-system/jsx";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { forwardRef } from "react";

const AvatarRoot = styled(AvatarPrimitive.Root, {
  base: {
    display: "flex",
    pos: "relative",
    w: "5",
    h: "5",
    flexShrink: "0",
    overflow: "hidden",
    rounded: "circle",
  },
});

const AvatarImage = styled(AvatarPrimitive.Image, {
  base: {
    w: "full",
    h: "full",
    aspectRatio: "square",
  },
});

const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    w: "full",
    h: "full",
    aspectRatio: "square",
    rounded: "circle",
    bg: "gray.bg",
  },
});

interface AvatarProps {
  src?: string;
  fallback: React.ReactNode;
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ src, fallback }, ref) => {
    return (
      <AvatarRoot ref={ref}>
        {src ? <AvatarImage src={src} /> : null}
        <AvatarFallback>{fallback}</AvatarFallback>
      </AvatarRoot>
    );
  }
);

Avatar.displayName = "Avatar";
