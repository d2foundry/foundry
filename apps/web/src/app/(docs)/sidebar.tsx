"use client";
import { Flex, Heading } from "@foundry/ui/components";
import { cn } from "@foundry/ui/utils";
// import { DesignDoc, Doc, allDesignDocs } from "contentlayer/generated";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DESIGN_SIDEBAR_CONFIG } from "./design/[[...slug]]/design-sidebar-config";
import { DOCS_SIDEBAR_CONFIG } from "./docs/[[...slug]]/docs-sidebar-config";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  // icon?: keyof typeof Icons;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}

export function DocsSidebarNav() {
  const pathname = usePathname();
  let items: SidebarNavItem[] = [];
  if (pathname?.includes("design")) {
    items = DESIGN_SIDEBAR_CONFIG;
  }
  if (pathname?.includes("docs")) {
    items = DOCS_SIDEBAR_CONFIG;
  }

  return items?.length ? (
    <Flex direction="column" style={{ padding: "var(--spacing-1" }} gap="2">
      {items.map((item, index) => (
        <div key={index} className={cn("pb-4")}>
          {item.href ? (
            <Link key={index} href={item.href}>
              <Heading as="h3">{item.title}</Heading>
            </Link>
          ) : (
            <Heading as="h3">{item.title}</Heading>
          )}
          {item?.items?.length > 0 && (
            <DocsSidebarNavItems items={item.items} pathname={pathname} />
          )}
        </div>
      ))}
    </Flex>
  ) : null;
}

interface DocsSidebarNavItemsProps {
  items?: SidebarNavItem[];
  pathname: string | null;
}

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  return items?.length ? (
    <Flex direction="column" gap="1">
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
              item.disabled && "cursor-not-allowed opacity-60",
              pathname === item.href
                ? "font-medium text-foreground"
                : "text-muted-foreground"
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </Link>
        ) : (
          <span
            key={index}
            className={cn(
              "flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline",
              item.disabled && "cursor-not-allowed opacity-60"
            )}
          >
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </span>
        )
      )}
    </Flex>
  ) : null;
}
