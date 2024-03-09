"use client";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="relative isolate overflow-hidden py-14 ">
        <Image
          src="/warm-background.webp"
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover "
          width={2400}
          height={1200}
        />

        <div className="mx-auto pt-24 pb-36 max-w-7xl">
          <div className="text-center backdrop-blur-md p-24 dark:backdrop-brightness-50 backdrop-brightness-75  rounded-xl ">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-6xl">
              Data-Driven Innovation for Your Business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Unlock growth and efficiency through our unique blend of software
              engineering and data expertise.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#services"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
              >
                Get started
              </a>
              <a
                href="#information"
                className="text-sm font-semibold leading-6 text-gray-200"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
