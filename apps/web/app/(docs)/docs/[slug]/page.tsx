import { format, parseISO } from "date-fns";
import { allDocs } from "contentlayer/generated";

export const generateStaticParams = async () =>
  allDocs.map((post) => ({ slug: post.url }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allDocs.find((post) => post.url === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

const PostPage = ({ params }: { params: { slug: string } }) => {
  const post = allDocs.find((post) => post.url === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <div
        className="[&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  );
};

export default PostPage;
