import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Image from "next/image";
import Link from "next/link";

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
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl underline decoration-amber-600 underline-offset-4 decoration-4">
            BLOG
          </h2>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {blogs.map((blog) => (
              <article
                key={blog.meta.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <Image
                    src={blog.meta.previewImage}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-2xl object-cover"
                    width={1000}
                    height={1000}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time
                      dateTime={blog.meta.datetime}
                      className="text-gray-500 dark:text-gray-400"
                    >
                      {blog.meta.date}
                    </time>
                    <a
                      href={blog.meta.category.href}
                      className="relative z-10 rounded-full  px-3 py-1.5 font-medium text-gray-600 dark:text-gray-300 dark:hover:bg-gray-900 hover:bg-gray-100"
                    >
                      {blog.meta.category.title}
                    </a>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600 dark:group-hover:text-gray-400">
                      <Link href={"/blog/" + blog.slug}>
                        <span className="absolute inset-0" />
                        {blog.meta.title}
                      </Link>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-300">
                      {blog.meta.description}
                    </p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                      <Image
                        src={blog.meta.author.imageUrl}
                        alt=""
                        className="h-10 w-10 rounded-full "
                        width={1000}
                        height={1000}
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold ">
                          <Link href={blog.meta.author.href}>
                            <span className="absolute inset-0" />
                            {blog.meta.author.name}
                          </Link>
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          {blog.meta.author.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
