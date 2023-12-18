"use client";
import React from "react";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import { css } from "@foundry/styled-system/css";
import { flex } from "@foundry/styled-system/patterns";

// const Tabs = TabsPrimitive.Root;

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    className={css({
      display: "flex",
      flexDir: "column",
      _vertical: {
        md: {
          flexDir: "row",
        },
      },
    })}
    {...props}
  />
));
Tabs.displayName = TabsPrimitive.Root.displayName;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={css({
      display: "flex",
      flexWrap: "nowrap",
      w: "full",
      _horizontal: {
        h: "5",
        px: "1",
        borderBottom: "gray.subtle",
      },
      _vertical: {
        maxW: "40",
        p: "1",
        borderRight: "gray.subtle",
      },
    })}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={flex({
      align: "center",
      position: "relative",
      justify: "center",
      px: "2",
      rounded: "1",
      _hover: {
        color: "gray.text.contrast",
        bg: "gray.bg.hover",
      },
      "&[data-state=active]": {
        color: "gray.text.contrast",
        _before: {
          content: "''",
          position: "absolute",
          h: "2px",
          bottom: "-1px",
          left: "0",
          right: "0",
          bg: "gray.text.contrast",
        },
      },
    })}
    {...props}
  >
    {children}
  </TabsPrimitive.Trigger>
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    tabIndex={-1}
    className={css({
      _horizontal: {
        pt: "2",
      },
      _vertical: {
        md: {
          w: "full",
          flex: "1 0 auto",
          px: "1",
        },
      },
    })}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
