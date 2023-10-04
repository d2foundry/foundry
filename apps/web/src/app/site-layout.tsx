import { Container, Flex } from "@foundry/ui/components";
import { Nav } from "@/components/Nav";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" sx={{ bg: "gray.1", color: "gray.11" }}>
      <Nav />
      <Container>{children}</Container>
    </Flex>
  );
}
