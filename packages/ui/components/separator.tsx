"use client";
import { MarginProps } from "./helpers/margin-props";
import { styled } from "@foundry/styled-system/jsx";
import { separator } from "@foundry/styled-system/recipes";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import type { SeparatorProps as SeparatorPrimitiveProps } from "@radix-ui/react-separator";

const Root = styled(SeparatorPrimitive.Root, separator);

export type SeparatorProps = SeparatorPrimitiveProps & MarginProps;

export const Separator = (props: SeparatorProps) => {
  return <Root {...props} />;
};
