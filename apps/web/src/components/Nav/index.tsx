import Link from "next/link";
import { SearchBar } from "../SearchBar";
import { Flex } from "@foundry/ui/components";
import styles from "./Nav.module.scss";

export function Nav() {
  return (
    <nav className={styles.Nav}>
      <Flex align="baseline" justify="between" gap="2">
        <Link href="/">Foundry</Link>
        <Link href="/weapons">Weapons</Link>
        <SearchBar />
      </Flex>
    </nav>
  );
}
