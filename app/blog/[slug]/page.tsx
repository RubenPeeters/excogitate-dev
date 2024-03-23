import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";

import Table from "@/components/mdx/table";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blog"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("blog", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);
  return {
    frontMatter,
    slug,
    content,
  };
}

export default function Post({ params }: any) {
  const props = getPost(params);

  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate dark:prose-invert mx-auto">
      <h1>{props.frontMatter.title}</h1>
      <MDXRemote source={props.content} components={{ Table }} />
    </article>
  );
}

export async function generateMetadata({ params }: any) {
  const blog = getPost(params);
  return {
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
  };
}
