import { format, parseISO } from "date-fns";
import { allChangelogs } from "contentlayer/generated";

export const generateStaticParams = async () =>
  allChangelogs.map((post) => ({ slug: post.url }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allChangelogs.find((post) => post.url === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

const ChangelogPage = ({ params }: { params: { slug: string } }) => {
  const post = allChangelogs.find((post) => post.url === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <div
        className="[&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  );
};

export default ChangelogPage;
