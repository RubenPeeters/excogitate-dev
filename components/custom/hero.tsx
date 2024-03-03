"use client";
import React from "react";

export default function Hero() {
  return (
    <>
      <svg
        id="patternId"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-300 dark:stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            id="a"
            patternUnits="userSpaceOnUse"
            width="90"
            height="130"
            patternTransform="scale(1) rotate(25)"
          >
            <rect x="0" y="0" width="100%" height="100%" fill="transparent" />
          </pattern>
        </defs>
        <rect
          width="800%"
          height="800%"
          transform="translate(0,0)"
          fill="url(#a)"
        />
      </svg>

      <div className="h-screen w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="text-7xl lg:text-8xl font-bold text-center dark:text-white relative z-20 underline  decoration-blue-500">
          PragmiX
        </h1>
        <p className="mt-6 text-lg lg:text-xl leading-8 text-gray-600 dark:text-gray-300 text-center max-w-5xl m-6 py-4 z-20">
          Data & Software - Solutions & Strategy
        </p>
      </div>
    </>
  );
}
