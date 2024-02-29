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
  GlobeEuropeAfricaIcon,
  ComputerDesktopIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";

const software_features = [
  {
    name: "Custom websites.",
    description: "Development of the website of your dreams.",
    icon: GlobeEuropeAfricaIcon,
  },
  {
    name: "Desktop applications.",
    description:
      "Transforming visions into powerful desktop applications: intuitive, efficient, empowering.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Refactoring.",
    description: "Old code that needs refactoring? Sign us up.",
    icon: AdjustmentsHorizontalIcon,
  },
];

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
        <div className="w-screen h-screen">
          <Hero></Hero>
        </div>

        <div className="overflow-hidden bg-white dark:bg-black py-48">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center">
                    Data Consultancy
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
                            className="absolute left-1 top-1 h-5 w-5 text-blue-600 dark:text-blue-500"
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
      </div>
      <div className="flex flex-col items-center max-w-full">
        <div className="overflow-hidden bg-gradient-to-l dark:bg-gradient-to-r dark:from-blue-700 from-50% dark:to-blue-500 to-blue-500  from-blue-300 py-48 rounded-lg">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl text-center">
                    Software Engineering
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 text-center">
                    Generate traction for your company through an eye-catching
                    website, or automate complex systems through fit-for-purpose
                    software.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none">
                    {software_features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900 dark:text-white">
                          <feature.icon
                            className="absolute left-1 top-1 h-5 w-5 text-blue-600 dark:text-blue-500"
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
              <div className="flex items-start justify-end lg:order-first">
                <Image
                  src={
                    theme == "light"
                      ? "https://media.discordapp.net/attachments/1035214140039512137/1212833674526072942/ruben_p_software_development_professional_web_image_clean_white_b29fbd8e-f2df-4764-981c-1403deb8baaa.png?ex=65f34661&is=65e0d161&hm=da18369904c82931180b816e42d3a0e567105609558735c7c7d3bb2a7698756e&=&format=webp&quality=lossless&width=810&height=810"
                      : "https://media.discordapp.net/attachments/1035214140039512137/1212834333270737026/ruben_p_software_development_professional_web_image_clean_night_8ff0468d-d13d-4a82-829d-8ecf38cfc098.png?ex=65f346fe&is=65e0d1fe&hm=a519c2a047ccc411c65d2e30caaea8fd2974c7358327a820cb3d6974bc40bfa5&=&format=webp&quality=lossless&width=810&height=810"
                  }
                  alt="Product screenshot"
                  className="w-[36rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 dark:ring-white/10 sm:w-[48rem] md:-ml-4 lg:-ml-0 z-20"
                  width={2432}
                  height={1444}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-2xl py-64">
          <Services></Services>
        </div>
        <div className=" w-full">
          <Contact></Contact>
        </div>
        <div className=" w-full py-40">
          <Testimonials></Testimonials>
        </div>

        <div className=" w-full"></div>
      </div>
    </>
  );
}
