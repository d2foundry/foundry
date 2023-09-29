"use client";

import { TooltipProvider } from "@foundry/ui/components";

export function Client({ children }: { children: React.ReactNode }) {
  return <TooltipProvider>{children}</TooltipProvider>;
}
