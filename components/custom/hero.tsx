"use client";
import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { Navbar } from "./navbar";

export default function Hero() {
  return (
    <BackgroundGradientAnimation>
      {/* Added Navbar here, so I could style it */}
      <div className="flex justify-center p-4">
        <Navbar></Navbar>
      </div>
      <div className="h-screen w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="text-7xl lg:text-9xl font-bold text-center text-white relative z-20">
          PragmiX
        </h1>
        <p className="mt-6 text-xl lg:text-2xl leading-8 text-gray-300 text-center max-w-5xl m-6">
          Combining Data Mastery with Software Innovation, We engineer tailored
          solutions to meet your unique business challenges and goals.
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
