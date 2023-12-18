import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import {
  allPosts,
  Post,
  allChangelogs,
  Changelog,
} from "contentlayer/generated";
import { Flex, Heading } from "@foundry/ui/components";

function PostCard(post: Post) {
  return (
    <Flex direction={"column"} shrink="0">
      <Heading as="h2" size="2xl">
        <Link href={`/posts/${post.url}`}>{post.title}</Link>
      </Heading>
      <time dateTime={post.date}>
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </Flex>
  );
}

export function BlogSection() {
  const posts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 3);

  return (
    <Flex direction="column" gap="4">
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </Flex>
  );
}

function ChangelogCard(post: Changelog) {
  return (
    <div>
      <Heading as="h3" size="xl">
        <Link href={`/changelog/${post.url}`}>{post.title}</Link>
      </Heading>
      <time dateTime={post.date}>
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </div>
  );
}
export function ChangelogSection() {
  const posts = allChangelogs
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 3);

  return (
    <Flex direction={"column"} gap="2">
      {posts.map((post, idx) => (
        <ChangelogCard key={idx} {...post} />
      ))}
    </Flex>
  );
}
