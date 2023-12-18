import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { styled } from "@foundry/styled-system/jsx";

import { bleed, BleedProperties } from "@foundry/styled-system/patterns";

export type BleedProps = BleedProperties & {
  children?: React.ReactNode;
  asChild?: boolean;
};

export const Bleed = ({ asChild = false, children, ...props }: BleedProps) => {
  const Comp = asChild ? Slot : styled.div;
  return <Comp className={bleed(props)}>{children}</Comp>;
};
