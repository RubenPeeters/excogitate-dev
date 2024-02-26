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
    name: "Data Interpretation.",
    description:
      "Analyze data to uncover patterns, trends, and insights that inform decision-making.",
    icon: LightBulbIcon,
  },
  {
    name: "Report Generation.",
    description:
      "Create clear and concise reports and visualizations to communicate findings to stakeholders.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Performance Monitoring.",
    description:
      "Track key metrics and performance indicators to assess the effectiveness of strategies and initiatives.",
    icon: MagnifyingGlassCircleIcon,
  },
  {
    name: "Insightful Recommendations.",
    description:
      "Provide actionable recommendations based on data analysis to drive business growth and improvement.",
    icon: UserIcon,
  },
];

export default function DataAnalytics() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="overflow-hidden bg-white dark:bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Data Analytics
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Interpret data, generate reports, monitor performance, and offer
                actionable insights to drive business growth and improvement.
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
                ? "https://media.discordapp.net/attachments/1035214140039512137/1211385589824487525/ruben_p_data_analysis_in_the_21st_century_minimalist_clean_simp_fc820099-0859-4dcb-825b-6e27eac6bb26.png?ex=65ee01bf&is=65db8cbf&hm=d4144e15f67194d3cb9729fd7753dc1ebe98c3987149cbe9d9bfb0cb5068cd1a&=&format=webp&quality=lossless&width=905&height=905"
                : "https://media.discordapp.net/attachments/1035214140039512137/1211437045931843614/ruben_p_data_science_in_the_21st_century_minimalist_clean_abstr_24ff5b5c-617a-43a4-b51c-ce81af66ed67.png?ex=65ee31ab&is=65dbbcab&hm=ff0494fd781ac1637c3598acf04f0ca5ff80c226dfd8380668db83602eab9a21&=&format=webp&quality=lossless&width=810&height=810"
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
