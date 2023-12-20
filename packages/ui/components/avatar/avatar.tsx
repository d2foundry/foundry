"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import styles from "./Avatar.module.scss";

import { cn } from "../../utils/cn";
// const AvatarRoot = styled(AvatarPrimitive.Root, {
//   base: {
//     display: "flex",
//     pos: "relative",
//     w: "5",
//     h: "5",
//     flexShrink: "0",
//     overflow: "hidden",
//     rounded: "circle",
//   },
// });

// const AvatarImage = styled(AvatarPrimitive.Image, {
//   base: {
//     w: "full",
//     h: "full",
//     aspectRatio: "square",
//   },
// });

// const AvatarFallback = styled(AvatarPrimitive.Fallback, {
//   base: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     w: "full",
//     h: "full",
//     aspectRatio: "square",
//     rounded: "circle",
//     bg: "gray.bg",
//   },
// });

const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(styles.avatarRoot, className)}
    {...props}
  />
));
AvatarRoot.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn(styles.avatarImage, className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(styles.avatarFallback, className)}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
interface AvatarProps {
  src?: string;
  fallback: React.ReactNode;
}

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
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
export { Avatar, AvatarImage, AvatarFallback };
