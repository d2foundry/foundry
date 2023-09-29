import { Flex } from "@foundry/ui/components";
import { DocsSidebarNav } from "./sidebar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Flex>
      <DocsSidebarNav />
      <Flex direction="column">{children}</Flex>
      {/* <Toc /> */}
    </Flex>
  );
}
