"use client";
import { DesignDoc } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

import { mdxComponents } from "./mdxComponents";

export function Client({ doc }: { doc: DesignDoc }) {
  const MDXContent = useMDXComponent(doc.body.code);

  return (
    <div>
      <MDXContent components={mdxComponents} />
    </div>
  );
}
