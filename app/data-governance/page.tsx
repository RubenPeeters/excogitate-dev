"use client";

import { Contact } from "@/components/custom/contact";

import {
  MagnifyingGlassCircleIcon,
  WrenchScrewdriverIcon,
  UserIcon,
  LightBulbIcon,
} from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";
import Image from "next/image";

const features = [
  {
    name: "Data Oversight.",
    description:
      "Manage and ensure the quality, integrity, and security of organizational data assets.",
    icon: LightBulbIcon,
  },
  {
    name: "Policy Development.",
    description:
      "Develop and enforce data governance policies, standards, and procedures to ensure compliance with regulations and best practices.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Data Documentation.",
    description:
      "Document data processes, metadata, and lineage to facilitate understanding and usage across the organization.",
    icon: MagnifyingGlassCircleIcon,
  },
  {
    name: "Stakeholder Education.",
    description:
      "Educate and train stakeholders on FAIR data governance principles and best practices to promote data-driven decision-making.",
    icon: UserIcon,
  },
];

export default function DataGovernance() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="overflow-hidden bg-white dark:bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Data Governance
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Oversee data quality, develop policies, document processes, and
                educate stakeholders to ensure effective data management and
                compliance.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600 dark:text-indigo-500"
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
            src={
              theme == "light"
                ? "https://media.discordapp.net/attachments/1035214140039512137/1211397360182366279/ruben_p_data_analysis_in_the_21st_century_minimalist_clean_simp_ea498bcb-ae6a-4b13-9327-289b5bb5757e.png?ex=65ee0cb5&is=65db97b5&hm=fb4d1625d60ba7223693925b408095bf01add4064807f42e5edbc16d4554f5bf&=&format=webp&quality=lossless&width=810&height=810"
                : "https://media.discordapp.net/attachments/1035214140039512137/1211436856743301140/ruben_p_data_governance_in_the_21st_century_minimalist_clean_ab_0cb8c7fe-7c25-4481-9fb6-5441a1f4b5d6.png?ex=65ee317e&is=65dbbc7e&hm=cea8dfca9fccb366c4025f840cb4278876b6e4bdfb812f9c79c45c2733cecbf3&=&format=webp&quality=lossless&width=810&height=810"
            }
            alt="Product screenshot"
            className="w-[36rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 dark:ring-white/10 sm:w-[48rem] md:-ml-4 lg:-ml-0 z-20"
            width={2432}
            height={1444}
          />
        </div>
      </div>
      <Contact></Contact>
    </div>
  );
}
