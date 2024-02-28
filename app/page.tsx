"use client";
import { Contact } from "@/components/custom/contact";
import Hero from "@/components/custom/hero";
import { Services } from "@/components/custom/services";
import { Testimonials } from "@/components/custom/testimonies";
import Image from "next/image";

import {
  MagnifyingGlassCircleIcon,
  WrenchScrewdriverIcon,
  UserIcon,
  LightBulbIcon,
} from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";

const data_features = [
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

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="max-w-7xl h-screen">
          <Hero></Hero>
        </div>

        <div className="overflow-hidden bg-white dark:bg-black py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center">
                    Data & Software
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 text-center">
                    Unlock insights, solve problems, get guidance, and
                    collaborate to make smart decisions using data.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none">
                    {data_features.map((feature) => (
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
                    ? "https://media.discordapp.net/attachments/1035214140039512137/1212519476633935912/ruben_p_data_professional_web_image_clean_aad98243-4055-4947-b198-5577aa4f180d.png?ex=65f221c2&is=65dfacc2&hm=81224d6acf4e846798e3f5ba085dda1da7b8435921bb8cf4b638727452e28abb&=&format=webp&quality=lossless&width=700&height=700"
                    : "https://media.discordapp.net/attachments/1035214140039512137/1212519457629536307/ruben_p_data_professional_web_image_clean_e5c073b1-5599-4a7c-a5fa-074af3b171a9.png?ex=65f221be&is=65dfacbe&hm=050e84a084454fc3370f289deaa835325cfc08a9bb9fb4e847bfaadced9a5e30&=&format=webp&quality=lossless&width=700&height=700"
                }
                alt="Product screenshot"
                className="w-[36rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 dark:ring-white/10 sm:w-[48rem] md:-ml-4 lg:-ml-0 z-20"
                width={2432}
                height={1444}
              />
            </div>
          </div>
        </div>
        <div className="max-w-screen-2xl pb-48">
          <Services></Services>
        </div>
        <div className=" w-full">
          <Testimonials></Testimonials>
        </div>
        <div className=" w-full py-48">
          <Contact></Contact>
        </div>
        <div className=" w-full"></div>
      </div>
    </>
  );
}
