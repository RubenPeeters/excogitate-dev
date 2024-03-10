"use client";

import { Contact } from "@/components/custom/contact";

import { CheckIcon } from "@heroicons/react/20/solid";

import { useTheme } from "next-themes";
import Image from "next/image";

const features = [
  {
    name: "Technology Selection",
    description:
      "Advising on the best technologies and tools to meet your project requirements and future scalability needs.",
    icon: CheckIcon,
  },
  {
    name: "Architecture Design",
    description:
      "Designing robust, scalable architectures that support your business processes and data flows efficiently.",
    icon: CheckIcon,
  },
  {
    name: "Performance Optimization",
    description:
      "Identifying bottlenecks and optimizing software performance for better efficiency and user experience.",
    icon: CheckIcon,
  },
  {
    name: "Project Management",
    description:
      "Implementing Agile project management methodologies to ensure projects are delivered on time, within budget, and to the highest quality standards.",
    icon: CheckIcon,
  },
];

export default function SoftwareConsultancy() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <div className="relative isolate overflow-hidden pt-14 ">
        <Image
          src="/software-bg-warm.webp"
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          width={2400}
          height={1200}
        />

        <div className="mx-auto pt-24 pb-36 max-w-7xl">
          <div className="text-center backdrop-blur-md px-6 py-16 sm:p-24 dark:backdrop-brightness-50 backdrop-brightness-75  rounded-xl ">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-6xl">
              Software Consultancy
            </h1>
            <p className="mt-6 mx-auto text-lg text-left leading-8 text-gray-200 max-w-3xl">
              Leveraging years of experience in software development, I offer
              consultancy services that cover technology selection, architecture
              design, performance optimization, and scalability. My aim is to
              ensure your software projects are not only{" "}
              <span className="text-lime-500 font-bold">
                technologically advanced
              </span>{" "}
              but also{" "}
              <span className="text-lime-500 font-bold">
                strategically aligned
              </span>{" "}
              with your business goals.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact"
                className="rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Get started
              </a>
              <a
                href="#process"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden py-24 sm:py-64">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <dl className="mt-10 max-w-xl space-y-8 text-xl leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9 py-4">
                      <dt className="inline font-semibold text-amber-600 dark:text-amber-500">
                        <feature.icon
                          className="absolute left-1 top-5 h-5 w-5 p-1 rounded-full text-lime-700 bg-lime-300 dark:text-lime-400 dark:bg-lime-700"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
              src={"/software-consultancy-action.webp"}
              alt="Product screenshot"
              className="w-[36rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 dark:ring-white/10 sm:w-[48rem] md:-ml-4 lg:-ml-0 z-20"
              width={2432}
              height={1444}
            />
          </div>
        </div>
      </div>
      <Contact></Contact>
    </div>
  );
}
