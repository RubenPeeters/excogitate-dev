"use client";
import { Contact } from "@/components/custom/contact";
import Hero from "@/components/custom/hero";
import Services from "@/components/custom/services";
import Image from "next/image";

import { CheckIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";

const software_features = [
  {
    name: "Custom Software.",
    description:
      "Tailored solutions that align with your goals, built for impact.",
    icon: CheckIcon,
  },
  {
    name: "AI & ML Innovations.",
    description:
      "Harness AI and ML for deeper insights, automation, and improved decision-making.",
    icon: CheckIcon,
  },
  {
    name: "Web Development.",
    description:
      "Secure, scalable web applications designed for engagement and performance.",
    icon: CheckIcon,
  },
  {
    name: "Tools & Automation.",
    description:
      "Streamline operations with custom tools for data management and analysis, enhancing efficiency.",
    icon: CheckIcon,
  },
];

const data_features = [
  {
    name: "Data Engineering.",
    description:
      "Optimize your data processes for superior performance and scalability.",
    icon: CheckIcon,
  },
  {
    name: "Governance & Compliance.",
    description:
      "Align data practices with industry standards through strategic governance.",
    icon: CheckIcon,
  },
  {
    name: "FAIR Data.",
    description:
      "Enhance data's value with FAIR principles, making it more usable and valuable.",
    icon: CheckIcon,
  },
  {
    name: "Empowerment through Knowledge.",
    description: "Elevate data literacy with tailored workshops and training.",
    icon: CheckIcon,
  },
];

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-screen pb-32">
          <Hero></Hero>
        </div>

        <div id="information" className="overflow-hidden py-48">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center">
                    Elevate Your Data
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 text-center">
                    Improve efficiency and insights with expert data services.
                    With data engineering, governance, and FAIR principles, we
                    turn your data into a strategic asset, together.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none">
                    {data_features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-amber-600 dark:text-amber-500">
                          <feature.icon
                            className="absolute left-1 top-1 h-5 w-5 p-1 rounded-full text-lime-700 bg-lime-300 dark:text-lime-400 dark:bg-lime-700"
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
                src="/data-engineering-front.webp"
                alt="Product screenshot"
                className="lg:flex w-[24rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 dark:ring-white/10 sm:w-[36rem] md:-ml-4 lg:-ml-0 z-20 hidden"
                width={1444}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center max-w-full bg-gradient-to-br dark:from-amber-800 dark:to-slate-950 to-white  from-amber-100 py-48 rounded-lg">
        <div className="overflow-hidden ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl text-center">
                    Tailored Software Solutions
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 text-center">
                    Boost your business with bespoke software, leveraging AI/ML
                    and engineering for significant and enduring impact.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none">
                    {software_features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-amber-600 dark:text-amber-400">
                          <feature.icon
                            className="absolute left-1 top-1 h-5 w-5 p-1 rounded-full text-lime-700 bg-lime-300 dark:text-lime-400 dark:bg-lime-700 "
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
              <div className="lg:flex items-start justify-end lg:order-first hidden">
                <Image
                  src="/software-engineering-front.webp"
                  alt="Product screenshot"
                  className="w-[32rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 dark:ring-white/10 sm:w-[36rem] md:-ml-4 lg:-ml-0 z-20"
                  width={2432}
                  height={1444}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-32">
        <Services></Services>
      </div>
      <div className=" w-full">
        <Contact></Contact>
      </div>
    </>
  );
}
