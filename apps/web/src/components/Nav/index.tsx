import Link from "next/link";
import { SearchBar } from "../SearchBar";
import { Flex } from "../Flex";

export function Nav() {
  return (
    <nav>
      <Flex align="baseline" justify="between" gap="2">
        <Link href="/">Foundry</Link>
        <Link href="/weapons">Weapons</Link>
        <SearchBar />
      </Flex>
    </nav>
  );
}
