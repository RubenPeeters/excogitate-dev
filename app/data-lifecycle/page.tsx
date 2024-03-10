"use client";

import { Contact } from "@/components/custom/contact";
import Steps from "@/components/custom/steps";
import Image from "next/image";

const steps = [
  {
    name: "Initial Consultation",
    description:
      "Understanding your vision, challenges, and objectives to tailor a strategic approach.",
  },
  {
    name: "Planning and Design",
    description:
      "Crafting a detailed roadmap and design, employing methodologies like Agile for flexibility and efficiency.",
  },
  {
    name: "Development",
    description:
      "Utilizing cutting-edge technologies and best practices in software and data engineering to build robust, scalable solutions.",
  },
  {
    name: "Testing and Validation",
    description:
      "Ensuring high quality and reliability through comprehensive testing and validation techniques.",
  },
  {
    name: "Deployment and Integration",
    description:
      "Seamless implementation into your existing environments with full support for a smooth transition.",
  },
  {
    name: "Maintenance and Support",
    description:
      "Offering ongoing support and maintenance to adapt to evolving needs and ensure long-term success.",
  },
];
export default function DataLifecycle() {
  return (
    <>
      <div className="relative isolate overflow-hidden pt-14 ">
        <Image
          src="/end-to-end-bg-warm.webp"
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover "
          width={2400}
          height={1200}
        />

        <div className="mx-auto pt-24 pb-36 max-w-7xl">
          <div className="text-center backdrop-blur-md px-6 py-16 dark:backdrop-brightness-50 backdrop-brightness-75  rounded-xl ">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-6xl">
              End-To-End Solutions
            </h1>
            <p className="mt-6 mx-auto text-lg leading-8 text-gray-200 max-w-3xl">
              I offer comprehensive end-to-end solutions that cover{" "}
              <span className="text-lime-500 font-bold">
                the full lifecycle of software and data projects.
              </span>{" "}
              From initial concept and strategy through development, deployment,
              and maintenance, my approach ensures a seamless, efficient, and
              effective realization of your technology goals.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact"
                className="rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400"
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
      <div
        id="process"
        className="flex flex-col items-center justify-center mx-auto max-w-7xl py-24"
      >
        <h1 className="text-5xl font-bold pb-16">The Process</h1>
        <Steps steps={steps}></Steps>
      </div>
      <div id="contact">
        <Contact></Contact>
      </div>
    </>
  );
}
