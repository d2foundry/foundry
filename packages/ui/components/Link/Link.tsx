import { ReactNode, forwardRef, HTMLAttributes } from "react";
import NextLink from "next/link";

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children?: ReactNode;
  // next/link props https://nextjs.org/docs/app/api-reference/components/link
  replace?: boolean;
  scroll?: boolean;
  prefetch?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, Props>(
  (
    {
      href,
      children,
      className,
      replace = false,
      scroll = true,
      prefetch = true,
      ...rest
    },
    ref
  ) => {
    return (
      <NextLink
        href={href}
        replace={replace}
        scroll={scroll}
        prefetch={prefetch}
        ref={ref}
        {...rest}
      >
        {children}
      </NextLink>
    );
  }
);
