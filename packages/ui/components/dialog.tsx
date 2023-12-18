"use client";

import React from "react";

import * as DialogPrimitive from "@radix-ui/react-dialog";

import { Cross1Icon } from "@radix-ui/react-icons";

import { IconButton } from "./icon-button";
import { css } from "@foundry/styled-system/css";
import { styled } from "@foundry/styled-system/jsx";
import { Heading } from "./heading";
import { Text } from "./text";
import {
  dialogClose,
  dialogContent,
  dialogOverlay,
} from "@foundry/styled-system/recipes";
import { Box } from "./box";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogOverlay = styled(DialogPrimitive.Overlay, dialogOverlay);

const Content = styled(DialogPrimitive.Content, dialogContent);

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    size?: "md" | "lg";
  }
>(({ className, children, size, ...props }, ref) => {
  return (
    <DialogPortal>
      <DialogOverlay>
        <Content {...props} ref={ref}>
          {children}
          <Box className={dialogClose()}>
            <DialogPrimitive.Close asChild>
              <IconButton variant="ghost">
                <Cross1Icon />
              </IconButton>
            </DialogPrimitive.Close>
          </Box>
        </Content>
      </DialogOverlay>
    </DialogPortal>
  );
});

DialogContent.displayName = DialogPrimitive.Content.displayName;

export const DialogHeader = styled("div", {
  base: {
    display: "flex",
    flexDir: "column",
    textAlign: "center",
    md: {
      textAlign: "left",
    },
  },
});

export const DialogFooter = styled("div", {
  base: {
    display: "flex",
    flexDir: "column-reverse",
    md: {
      flexDir: "row",
      justifyContent: "flex-end",
    },
  },
});

export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof Heading>,
  React.ComponentPropsWithoutRef<typeof Heading>
>(({ children, ...props }, ref) => (
  <DialogPrimitive.Title ref={ref} asChild>
    <Heading {...props} trim="start" size="3xl">
      {children}
    </Heading>
  </DialogPrimitive.Title>
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof Text>,
  React.ComponentPropsWithoutRef<typeof Text>
>(({ children, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} asChild>
    <Text {...props} size={"md"}>
      {children}
    </Text>
  </DialogPrimitive.Description>
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export const DialogBody = styled("div", {
  base: {
    py: "3",
  },
});
