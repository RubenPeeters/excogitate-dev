import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const blogDir = "blog";

  const files = fs.readdirSync(path.join(blogDir));

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");
    const { data: frontMatter } = matter(fileContent);

    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how we create value for your business.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.slug}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <Image
                src={blog.meta.previewImage}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                width={1000}
                height={1000}
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime={blog.meta.datetime} className="mr-8">
                  {blog.meta.date}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    <Image
                      src={blog.meta.previewImage}
                      alt=""
                      className="h-6 w-6 flex-none rounded-full bg-white/10"
                      width={1000}
                      height={1000}
                    />
                    {blog.meta.title}
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <Link href={`/blog/` + blog.slug}>
                  <span className="absolute inset-0" />
                  {blog.meta.title}
                </Link>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
