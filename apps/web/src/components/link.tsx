import { Link as StyledLink, LinkProps } from "@foundry/ui/components";
import NextLink from "next/link";
import { CSSProperties } from "react";

export function Link({
  href = "",
  ...props
}: LinkProps & {
  href: string;
  children: React.ReactNode;
}) {
  if (href.startsWith("http")) {
    return <StyledLink {...props} href={href} target="_blank" rel="noopener" />;
  }
  return (
    <NextLink href={href} passHref legacyBehavior>
      <StyledLink {...props} />
    </NextLink>
  );
}
