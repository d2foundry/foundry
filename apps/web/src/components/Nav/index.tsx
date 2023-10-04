import Link from "next/link";
import { SearchBar } from "../SearchBar";
import { Flex } from "@foundry/ui/components";
import styles from "./Nav.module.scss";
import { css } from "@foundry/styled-system/css";
export function Nav() {
  return (
    <nav
      className={css({
        bg: "gray.3",
        color: "gray.11",
        p: "2",
      })}
    >
      <Flex align="baseline" justify="between" gap="2">
        <Link href="/">Foundry</Link>
        <Link href="/weapons">Weapons</Link>
        <SearchBar />
      </Flex>
    </nav>
  );
}
