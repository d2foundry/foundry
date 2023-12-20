import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { Flex, Heading } from "@foundry/ui";
import { css } from "@foundry/styled-system/css";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.url }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.url === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

const PostPage = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.url === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article className={css({ maxW: "prose" })}>
      <Flex direction="column">
        <time dateTime={post.date}>
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <Heading as="h1">{post.title}</Heading>
      </Flex>
      <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </article>
  );
};

export default PostPage;
