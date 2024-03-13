"use client";

import { Contact } from "@/components/custom/contact";
import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

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

const values = [
  {
    name: "Pragmatism.",
    description: "Rooted in realistic solutions that deliver tangible results.",
    icon: CheckIcon,
  },
  {
    name: "Innovation.",
    description: "Committed to pushing boundaries and fostering creativity.",
    icon: CheckIcon,
  },
  {
    name: "Efficiency.",
    description: "Streamlining processes to save time and resources.",
    icon: CheckIcon,
  },
  {
    name: "Collaboration.",
    description: "Working closely with clients to ensure mutual success.",
    icon: CheckIcon,
  },
];
export default function About() {
  return (
    <>
      <div className="relative isolate overflow-hidden py-14 ">
        <Image
          src="/about.webp"
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          width={2400}
          height={1200}
        />

        <div className="mx-auto pt-24 pb-36 max-w-7xl">
          <div className="text-center backdrop-blur-md px-6 py-16 sm:p-24 dark:backdrop-brightness-50 backdrop-brightness-75  rounded-xl ">
            <h1 className="text-7xl font-bold tracking-tight text-white sm:text-8xl">
              PragmiX
            </h1>
            <p className="mt-6 mx-auto text-xl leading-8 text-gray-200 max-w-3xl">
              PragmiX blends software and data consultancy with{" "}
              <span className="font-bold text-lime-600">pragmatism.</span> We
              decode complex technology challenges into{" "}
              <span className="font-bold text-lime-600">
                effective, streamlined solutions
              </span>{" "}
              tailored for you.
            </p>
          </div>
        </div>
      </div>
      <div className="py-14 "></div>
      <div
        id="information"
        className="overflow-hidden py-48 bg-gradient-to-br dark:from-amber-800 dark:to-slate-950 to-white  from-amber-100"
      >
        <div className="flex flex-row mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="flex flex-col m-auto lg:max-w-5xl">
            <p className="mt-2 text-3xl text-left font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our Mission
            </p>
            <p className="mt-6 text-lg text-left leading-8 text-gray-600 dark:text-gray-400">
              To empower businesses by translating complex digital challenges
              into practical, efficient software and data solutions. We aim to
              drive innovation and facilitate growth through our tailored
              consultancy services, making technology accessible and actionable
              for all.
            </p>
          </div>

          <Image
            src="/mission.webp"
            alt="Product screenshot"
            className="lg:flex w-[24rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 dark:ring-white/10 sm:w-[36rem] md:-ml-4 lg:-ml-0 z-20 hidden"
            width={1444}
            height={1000}
          />
        </div>
      </div>
      <div className="flex flex-col items-center max-w-full py-48 rounded-lg">
        <div className="overflow-hidden ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl text-center">
                    Our Values
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 text-center">
                    At PragmiX, we&apos;re more than just consultants;
                    we&apos;re your partners in navigating the digital
                    landscape.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none">
                    {values.map((feature) => (
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
                  src="/values.webp"
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

      <div id="contact">
        <Contact></Contact>
      </div>
    </>
  );
}
