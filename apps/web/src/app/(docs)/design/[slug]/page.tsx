import { allDesignDocs } from "contentlayer/generated";
import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { notFound } from "next/navigation";

// Define your custom MDX components.
const mdxComponents: MDXComponents = {
  // Override the default <a> element to use the next/link component.
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  // Add a custom component.
  MyComponent: () => <div>Hello World!</div>,
};

export default async function Page({ params }: { params: { slug: string } }) {
  // Find the post for the current page.
  const doc = allDesignDocs.find(
    (doc) => doc._raw.flattenedPath === params.slug
  );

  // 404 if the doc does not exist.
  if (!doc) {
    notFound();
  }

  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(doc.body.code);

  return (
    <div>
      {/* Some code ... */}
      <MDXContent components={mdxComponents} />{" "}
      {/* <= Include your custom MDX components here */}
    </div>
  );
}
