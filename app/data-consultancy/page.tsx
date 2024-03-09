"use client";

import { Contact } from "@/components/custom/contact";

import { CheckIcon } from "@heroicons/react/20/solid";

import { useTheme } from "next-themes";
import Image from "next/image";

const features = [
  {
    name: "Data Strategy and Governance",
    description:
      "Developing strategies for data acquisition, quality, management, and governance tailored to your organizational needs.",
    icon: CheckIcon,
  },
  {
    name: "Data Stewardship",
    description:
      "Implementing best practices in data stewardship to ensure data integrity, privacy, and accessibility.",
    icon: CheckIcon,
  },
  {
    name: "Data Analytics and Visualization",
    description:
      "Extracting valuable insights through advanced analytics and presenting them through intuitive visualizations.",
    icon: CheckIcon,
  },
  {
    name: "FAIR Data Transformation",
    description:
      "Guiding the transformation of data into FAIR (Findable, Accessible, Interoperable, and Reusable) formats to enhance data value and utility.",
    icon: CheckIcon,
  },
];

export default function DataConsultancy() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <div className="relative isolate overflow-hidden pt-14 ">
        <Image
          src="/data-consultancy-bg-warm.webp"
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          width={2400}
          height={1200}
        />

        <div className="mx-auto pt-24 pb-36 max-w-7xl">
          <div className="text-center backdrop-blur-md p-24 dark:backdrop-brightness-50 backdrop-brightness-75  rounded-xl ">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-6xl">
              Data Consultancy
            </h1>
            <p className="mt-6 mx-auto text-lg text-left leading-8 text-gray-200 max-w-3xl">
              With extensive experience in data engineering, governance, and
              stewardship, I can help you navigate the complexities of data
              analysis, visualization, and strategy, ensuring your data is not
              just big, but
              <span className="font-bold text-blue-500">
                {" "}
                smart and actionable.
              </span>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact"
                className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
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
                      <dt className="inline font-semibold text-blue-600 dark:text-blue-500">
                        <feature.icon
                          className="absolute left-1 top-5 h-5 w-5 p-1 rounded-full text-green-600 bg-green-200 dark:text-green-400 dark:bg-green-700"
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
              src={"/data-consultancy-action.webp"}
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
