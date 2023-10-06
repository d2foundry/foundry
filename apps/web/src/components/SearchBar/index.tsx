"use client";
import { css } from "@foundry/styled-system/css";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export function SearchBar() {
  return (
    <button
      className={css({
        maxW: "sm",
        w: "full",
        bg: "gray.1",
        color: "gray.9",
        px: "1.5",
        py: "0.5",
        display: "flex",
        alignItems: "center",
        gap: "1",
        border: "1px solid token(colors.gray.4)",
        // border: "gray.subtle",
        borderRadius: "md",
      })}
    >
      <MagnifyingGlassIcon className={css({ color: "gray.11" })} />
      <div>Search...</div>
    </button>
  );
}
