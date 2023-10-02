"use client";
import { Flex, buttonVariants } from "@foundry/ui/components";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { DesignDoc, Doc } from "contentlayer/generated";
import Link from "next/link";
import { DESIGN_SIDEBAR_CONFIG } from "./design/[[...slug]]/design-sidebar-config";
import { NavItem, NavItemWithChildren } from "./sidebar";

interface DocsPagerProps {
  doc: Doc | DesignDoc;
}

export function DocsPager({ doc }: DocsPagerProps) {
  const { prev, next } = getPagerForDoc(doc);

  if (!prev && !next) {
    return null;
  }

  return (
    <Flex justify="between">
      {prev?.href ? (
        <Link
          href={prev.href}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          <ChevronLeftIcon />
          {prev.title}
        </Link>
      ) : (
        <div></div>
      )}
      {next?.href && (
        <Link
          href={next.href}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          {next.title}
          <ChevronRightIcon />
        </Link>
      )}
    </Flex>
  );
}

export function getPagerForDoc(doc: Doc | DesignDoc) {
  const flattenedLinks = [null, ...flatten(DESIGN_SIDEBAR_CONFIG), null];
  const activeIndex = flattenedLinks.findIndex(
    (link) => doc.slug === link?.href
  );
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null;
  return {
    prev,
    next,
  };
}

export function flatten(links: NavItemWithChildren[]): NavItem[] {
  return links
    .reduce<NavItem[]>((flat, link) => {
      return flat.concat(link.items?.length ? flatten(link.items) : link);
    }, [])
    .filter((link) => !link?.disabled);
}
