"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@foundry/ui/components";

export function Client({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
}
