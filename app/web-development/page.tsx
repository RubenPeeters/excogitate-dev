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
    name: "Website Creation.",
    description:
      "Develop and maintain websites, ensuring they are functional, user-friendly, and visually appealing.",
    icon: LightBulbIcon,
  },
  {
    name: "Code Implementation.",
    description:
      "Write code using various programming languages such as HTML, CSS, and JavaScript to bring designs to life.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Optimization.",
    description:
      "Offer strategic support by interpreting data on consumer behavior, market trends, and operational efficiency.",
    icon: MagnifyingGlassCircleIcon,
  },
  {
    name: "Collaborative Development.",
    description:
      "Work across teams to deploy data-driven solutions, optimizing processes and enhancing decision-making.",
    icon: UserIcon,
  },
];

export default function WebDev() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="overflow-hidden bg-white dark:bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Web Development
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Create and optimize websites, implement code, and collaborate to
                deliver user-friendly and visually appealing web solutions.
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
                ? "https://media.discordapp.net/attachments/1035214140039512137/1211413442867503134/ruben_p_data_analysis_in_the_21st_century_minimalist_clean_simp_b155915c-b52d-4f5f-8573-37f035649b62.png?ex=65ee1baf&is=65dba6af&hm=55480d5f394aa86586ce9997be81289afead5ef117f2ff53f44861ae07320daf&=&format=webp&quality=lossless&width=810&height=810"
                : "https://media.discordapp.net/attachments/1035214140039512137/1211437072024338523/ruben_p_data_science_in_the_21st_century_minimalist_clean_abstr_9d27c86b-074e-4986-90a5-5d7eacff8fca.png?ex=65ee31b1&is=65dbbcb1&hm=3466c7fe3f6a7ece8b3a3ff3e8937b0704261e1c3252e237c17e42fa12fa84a6&=&format=webp&quality=lossless&width=810&height=810"
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
