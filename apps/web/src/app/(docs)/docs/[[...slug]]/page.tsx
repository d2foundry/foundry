import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { DocsPager } from "../../pager";


interface DocPageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join("/") || "";
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    null;
  }

  return doc;
}

export async function generateStaticParams() {
  return allDocs.map((doc) => ({
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
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">{doc.title}</h1>
      </div>
      <div
        className="[&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: doc.body.html }}
      />
    </article>
  );
}

