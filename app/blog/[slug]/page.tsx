import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

import Table from "@/components/mdx/table";
import Link from "next/link";

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
    <>
      <div className="relative isolate overflow-hidden py-14 ">
        <Image
          src={props.frontMatter.previewImage}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover "
          width={2400}
          height={1200}
        />

        <div className="mx-auto pt-24 pb-36 max-w-7xl">
          <div className="text-center backdrop-blur-md p-24 dark:backdrop-brightness-50 backdrop-brightness-75  rounded-xl ">
            <h1 className="text-3xl font-bold mx-auto tracking-tight text-white sm:text-6xl max-w-xl">
              {props.frontMatter.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              {props.frontMatter.description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Image
                src={props.frontMatter.author.imageUrl}
                alt=""
                className="h-16 w-16 rounded-full "
                width={1000}
                height={1000}
              />
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-50">
                  <Link href={props.frontMatter.author.href}>
                    <span className="absolute inset-0" />
                    {props.frontMatter.author.name}
                  </Link>
                </p>
                <p className="text-gray-300">{props.frontMatter.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate dark:prose-invert mx-auto py-20 p-4">
        <h1>{props.frontMatter.title}</h1>
        <MDXRemote source={props.content} components={{ Table }} />
      </article>
      <div className="">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            Need help with data or software?
            <br />
            Let&apos;s talk about it!
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <a
              href="mailto:ruben@pragmix.io"
              className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
            >
              Reach out
            </a>
            <a href="/blog" className="text-sm font-semibold leading-6 ">
              More of the blog <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export async function generateMetadata({ params }: any) {
  const blog = getPost(params);
  return {
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
  };
}
