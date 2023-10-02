import { Container, Flex } from "@foundry/ui/components";
import { DocsSidebarNav } from "./sidebar";
import styles from "./layout.module.scss";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Container>
      <Flex>
        <DocsSidebarNav />
        <Flex direction="column">{children}</Flex>
      </Flex>
      {/* <Toc /> */}
    </Container>
  );
}
