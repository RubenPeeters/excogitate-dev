"use client";

import { Contact } from "@/components/custom/contact";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Meteors } from "@/components/ui/meteors";
import { TracingBeam } from "@/components/ui/tracing-beam";

import {
  BuildingOffice2Icon,
  ArrowRightCircleIcon,
  CircleStackIcon,
} from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";
import Image from "next/image";

const features = [
  {
    name: "Pipelines.",
    description:
      "Develop pipelines to collect, transform and store data from various sources, ensuring its quality, reliability and accessability.",
    icon: ArrowRightCircleIcon,
  },
  {
    name: "Data Architecture.",
    description:
      "Design, construct, and maintain the data architecture necessary for efficient data processing and analysis.",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Databases.",
    description:
      "Optimize databases and infrastructure, to enable faster and more accurate decision-making for businesses.",
    icon: CircleStackIcon,
  },
];

export default function DataEngineering() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="overflow-hidden bg-white dark:bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Data Engineering
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Build and optimize systems to organize, process, and make data
                accessible for smart decision-making in collaboration with
                teams.
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
                ? "https://media.discordapp.net/attachments/1035214140039512137/1211395424947277945/ruben_p_data_governance_in_the_21st_century_minimalist_clean_si_c13b2669-b968-4d84-b491-13c34cd6931f.png?ex=65ee0ae7&is=65db95e7&hm=0d9394bdc1140837d706e5a953669a7310c2ae2e37a8a741ffef968ef222d361&=&format=webp&quality=lossless&width=810&height=810"
                : "https://media.discordapp.net/attachments/1035214140039512137/1211438433046757406/ruben_p_data_science_in_the_21st_century_minimalist_clean_abstr_863ea171-53c1-4e15-a082-5707c1cf0645.png?ex=65ee32f5&is=65dbbdf5&hm=6186fdfd073a011087046f85abb8b6a18734737c16b6bede3fca50126a05d650&=&format=webp&quality=lossless&width=810&height=810"
            }
            alt="Product screenshot"
            className="w-[36rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 dark:ring-white/10 sm:w-[48rem] md:-ml-4 lg:-ml-0 z-20"
            width={2432}
            height={1444}
          />
        </div>
        <Contact></Contact>
      </div>
      <Meteors number={50} />
    </div>
  );
}
