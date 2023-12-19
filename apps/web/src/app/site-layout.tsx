import { Container, Flex } from "@foundry/ui/components";
import { Nav } from "@/components/Nav";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" justify={"stretch"}>
      <Nav />
      <Container>{children}</Container>
    </Flex>
  );
}
