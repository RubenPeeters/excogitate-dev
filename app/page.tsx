"use client";
import { Contact } from "@/components/custom/contact";
import Hero from "@/components/custom/hero";
import Services from "@/components/custom/services";
import Image from "next/image";

import { CheckIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";

const software_features = [
  {
    name: "Web interfaces.",
    description: "Create visibility for your data and your company.",
    icon: CheckIcon,
  },
  {
    name: "Desktop applications.",
    description: "Have easy discussions with your data.",
    icon: CheckIcon,
  },
  {
    name: "Refactoring.",
    description: "Efficient updating of applications.",
    icon: CheckIcon,
  },
];

const data_features = [
  {
    name: "System Architecture.",
    description:
      "Determining the overall structure, components, and interactions.",
    icon: CheckIcon,
  },
  {
    name: "Collection and Integration.",
    description:
      "Setting up data pipelines, integrating with external APIs, and connecting to internal databases.",
    icon: CheckIcon,
  },
  {
    name: "Storage and Management.",
    description:
      "Designing databases and data warehouses to store and manage the collected data effectively.",
    icon: CheckIcon,
  },
  {
    name: "Data Processing and Analysis.",
    description:
      "Implementing algorithms and techniques to process and analyze the collected data.",
    icon: CheckIcon,
  },
];

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-screen pb-32">
          <Hero></Hero>
        </div>

        <div id="information" className="overflow-hidden py-48">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center">
                    The Data Lifecycle
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 text-center">
                    To get the most value from your data, all parts of the
                    lifecycle need to be carefully designed and optimized.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none">
                    {data_features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-blue-600 dark:text-blue-500">
                          <feature.icon
                            className="absolute left-1 top-1 h-5 w-5 p-1 rounded-full text-green-600 bg-green-200 dark:text-green-400 dark:bg-green-700"
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
                className="lg:flex w-[24rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 dark:ring-white/10 sm:w-[36rem] md:-ml-4 lg:-ml-0 z-20 hidden"
                width={1444}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center max-w-full bg-gradient-to-r dark:from-blue-800 dark:to-slate-950 to-white  from-blue-100 py-48 rounded-lg">
        <div className="overflow-hidden ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl text-center">
                    Software Engineering
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 text-center">
                    Generate traction for your company through an eye-catching
                    website, or automate complex systems through fit-for-purpose
                    software.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none">
                    {software_features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-blue-600 dark:text-blue-400">
                          <feature.icon
                            className="absolute left-1 top-1 h-5 w-5 p-1 rounded-full text-green-600 bg-green-200 dark:text-green-400 dark:bg-green-700 "
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
              <div className="lg:flex items-start justify-end lg:order-first hidden">
                <Image
                  src={
                    theme == "light"
                      ? "https://media.discordapp.net/attachments/1035214140039512137/1212833674526072942/ruben_p_software_development_professional_web_image_clean_white_b29fbd8e-f2df-4764-981c-1403deb8baaa.png?ex=65f34661&is=65e0d161&hm=da18369904c82931180b816e42d3a0e567105609558735c7c7d3bb2a7698756e&=&format=webp&quality=lossless&width=810&height=810"
                      : "https://media.discordapp.net/attachments/1035214140039512137/1212834333270737026/ruben_p_software_development_professional_web_image_clean_night_8ff0468d-d13d-4a82-829d-8ecf38cfc098.png?ex=65f346fe&is=65e0d1fe&hm=a519c2a047ccc411c65d2e30caaea8fd2974c7358327a820cb3d6974bc40bfa5&=&format=webp&quality=lossless&width=810&height=810"
                  }
                  alt="Product screenshot"
                  className="w-[32rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 dark:ring-white/10 sm:w-[36rem] md:-ml-4 lg:-ml-0 z-20"
                  width={2432}
                  height={1444}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-32">
        <Services></Services>
      </div>
      <div className=" w-full">
        <Contact></Contact>
      </div>
    </>
  );
}
