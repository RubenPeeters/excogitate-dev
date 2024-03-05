"use client";

import { Contact } from "@/components/custom/contact";
import { Navbar } from "@/components/custom/navbar";

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
    name: "Insights & Predictions.",
    description:
      "Utilize advanced analytics to generate insights and predictive models for informed decision-making.",
    icon: LightBulbIcon,
  },
  {
    name: "Problem Solving & Innovation.",
    description:
      "Address business challenges and drive innovation by uncovering opportunities through data analysis.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Strategic Guidance.",
    description:
      "Offer strategic support by interpreting data on consumer behavior, market trends, and operational efficiency.",
    icon: MagnifyingGlassCircleIcon,
  },
  {
    name: "Collaborative Solutions.",
    description:
      "Work across teams to deploy data-driven solutions, optimizing processes and enhancing decision-making.",
    icon: UserIcon,
  },
];

export default function DataConsultancy() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <div className="overflow-hidden bg-white dark:bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  Data Science
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  Unlock insights, solve problems, get guidance, and collaborate
                  to make smart decisions using data.
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
                  ? "https://media.discordapp.net/attachments/1035214140039512137/1211392385108410440/ruben_p_data_science_in_the_21st_century_minimalist_clean_simpl_fff60e5f-63e3-4713-81e2-9fa29c0b63af.png?ex=65ee0813&is=65db9313&hm=a50f6f699dc89bd207413434a010c04c030d9f29512fa38b22f59d5324eebd35&=&format=webp&quality=lossless&width=905&height=905"
                  : "https://media.discordapp.net/attachments/1035214140039512137/1211435993874563133/ruben_p_data_governance_in_the_21st_century_minimalist_clean_ab_5a79cd1b-5e2d-47e2-8083-661d82edfcf7.png?ex=65ee30b0&is=65dbbbb0&hm=44edb30634e7bdc326f84436731e17bd0bc08c5f1746fea79f606a6e081a833e&=&format=webp&quality=lossless&width=810&height=810"
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
    </div>
  );
}
