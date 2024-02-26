"use client";

import { Contact } from "@/components/custom/contact";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Meteors } from "@/components/ui/meteors";
import { TracingBeam } from "@/components/ui/tracing-beam";

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
    name: "Software Development.",
    description:
      "Design, develop, and maintain software applications to meet specific user needs and business requirements.",
    icon: LightBulbIcon,
  },
  {
    name: "Code Implementation.",
    description:
      "Write clean, efficient, and maintainable code using programming languages and frameworks.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Testing & Debugging.",
    description:
      "Conduct thorough testing and debugging to ensure software reliability, functionality, and security.",
    icon: MagnifyingGlassCircleIcon,
  },
  {
    name: "Continuous Improvement.",
    description:
      "Continuously update and improve software to adapt to changing technologies and user feedback.",
    icon: UserIcon,
  },
];

export default function SoftwareEngineer() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="overflow-hidden bg-white dark:bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Software Engineering
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Software engineers design, develop, test, and improve software
                applications to meet user needs and ensure reliability and
                security.
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
                ? "https://media.discordapp.net/attachments/1035214140039512137/1211393906516697229/ruben_p_data_governance_in_the_21st_century_minimalist_clean_si_2fdd998b-bf5a-460b-a749-3b33f7588d63.png?ex=65ee097d&is=65db947d&hm=dd318536813af5f6b7d3c101d21fd7f573997b386189e75a40d7fda565454422&=&format=webp&quality=lossless&width=905&height=905"
                : "https://media.discordapp.net/attachments/1035214140039512137/1211440166116532235/ruben_p_data_science_in_the_21st_century_minimalist_clean_abstr_c62935a2-abb0-4c95-9ca6-143a3a88a92a.png?ex=65ee3493&is=65dbbf93&hm=5684727c422f0ac1a3b4d4a1841298926d0d995c6a5a8ce62ff24decc578b777&=&format=webp&quality=lossless&width=810&height=810"
            }
            alt="Product screenshot"
            className="w-[36rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 dark:ring-white/10 sm:w-[48rem] md:-ml-4 lg:-ml-0 z-20"
            width={2432}
            height={1444}
          />
        </div>
        <Contact></Contact>
      </div>
      <BackgroundBeams />
      <Meteors number={50} />
    </div>
  );
}
