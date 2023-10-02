import { allDesignDocs } from "contentlayer/generated";

import { notFound } from "next/navigation";

import { Client } from "./client";
import { DocsPager } from "../../pager";

interface DocPageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join("/") || "";
  const doc = allDesignDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    null;
  }

  return doc;
}

export async function generateStaticParams() {
  return allDesignDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  // Find the post for the current page.
  const doc = await getDocFromParams({ params });

  // 404 if the doc does not exist.
  if (!doc) {
    notFound();
  }

  return (
    <div>
      <Client doc={doc} />
      <DocsPager doc={doc} />
    </div>
  );
}
