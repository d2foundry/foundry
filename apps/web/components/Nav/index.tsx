import { Link } from "../link";
import { SearchBar } from "../SearchBar";
import { Container, Flex, Box, Text } from "@foundry/ui";

import { css } from "@foundry/styled-system/css";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" underline="hover">
      <Flex gap="2" align="center">
        <Box flexShrink="0">
          <Image
            src="/foundry_logo_transparent.png"
            className={css({
              border: "gray",
              rounded: "2",
            })}
            height={32}
            width={32}
            alt=""
          />
        </Box>
        <Text size="lg" weight="bold" highContrast>
          Foundry
        </Text>
      </Flex>
    </Link>
  );
}

export function Nav() {
  return (
    <Box bg="gray.bg" py="1">
      <Container>
        <Flex align="center" justify="between" gap="4" asChild>
          <nav>
            <Logo />
            <Link href="/weapons">Weapons</Link>
            <SearchBar />
          </nav>
        </Flex>
      </Container>
    </Box>
  );
}
