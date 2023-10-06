import Link from "next/link";
import { SearchBar } from "../SearchBar";
import { Flex } from "@foundry/ui/components";

import { css } from "@foundry/styled-system/css";
import Image from "next/image";

export function Nav() {
  return (
    <nav
      className={css({
        bg: "gray.2",
        color: "gray.11",
        py: "1",
        px: "2",
      })}
    >
      <Flex align="center" justify="between" gap="2">
        <Link
          href="/"
          className={css({
            display: "inline-flex",
            fontWeight: "medium",
            fontSize: "body.lg",
            alignItems: "center",
            gap: "1",
            color: "gray.12",
          })}
        >
          <div className={css({ flex: "1 0 auto" })}>
            <Image
              src="/foundry_logo_transparent.png"
              className={css({
                borderRadius: "sm",
                border: "1px solid token(colors.gray.7)",
              })}
              height={32}
              width={32}
              alt=""
            />
          </div>
          <div>Foundry</div>
        </Link>
        <Link href="/weapons">Weapons</Link>
        <SearchBar />
      </Flex>
    </nav>
  );
}
