"use client";

import { Contact } from "@/components/custom/contact";
import Steps from "@/components/custom/steps";
import Image from "next/image";

const steps = [
  {
    name: "Requirement Analysis",
    description:
      "Gather and analyze the requirements to understand the project's needs fully.",
  },
  {
    name: "Design",
    description:
      "Create the architecture and design of the application based on the analyzed requirements.",
  },
  {
    name: "Implementation",
    description:
      "Begin coding the application according to the design specifications.",
  },
  {
    name: "Testing",
    description:
      "Test the application to find and fix bugs. Ensure that it meets all requirements.",
  },
  {
    name: "Deployment",
    description:
      "Deploy the application to a production environment where users can access it.",
  },
  {
    name: "Maintenance",
    description:
      "Perform ongoing maintenance and updates to ensure the application remains functional and secure over time.",
  },
];
export default function Applications() {
  return (
    <>
      <div className="relative isolate overflow-hidden pt-14 ">
        <Image
          src="/applications-bg-warm-2.webp"
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover "
          width={2400}
          height={1200}
        />

        <div className="mx-auto pt-24 pb-36 max-w-7xl">
          <div className="text-center backdrop-blur-md px-6 py-16 sm:p-24 dark:backdrop-brightness-50 backdrop-brightness-75  rounded-xl ">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-6xl">
              Application Development
            </h1>
            <p className="mt-6 mx-auto text-lg leading-8 text-gray-200 max-w-3xl">
              Specializing in custom application development, I design and
              develop powerful, user-centric{" "}
              <span className="font-bold text-lime-500">
                web and mobile applications
              </span>{" "}
              that enhance operational efficiency and user engagement.
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
