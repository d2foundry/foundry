import { Flex } from "@/components/Flex";
import { Nav } from "@/components/Nav";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column">
      <Nav />
      {children}
    </Flex>
  );
}
