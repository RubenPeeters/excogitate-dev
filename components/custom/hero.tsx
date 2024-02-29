"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { useTheme } from "next-themes";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

export default function Hero() {
  return (
    <BackgroundGradientAnimation>
      <div className="h-screen w-full flex flex-col items-center justify-center overflow-hidden rounded-md py-32">
        <h1 className="text-7xl lg:text-9xl font-bold text-center text-white relative z-20">
          PragmiX
        </h1>
        <p className="mt-6 text-xl lg:text-2xl leading-8 text-gray-300 text-center max-w-5xl">
          Combining Data Mastery with Software Innovation, We engineer tailored
          solutions to meet your unique business challenges and goals.
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
