"use client";
import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { NavbarHome } from "./navbar_home";

export default function Hero() {
  return (
    <BackgroundGradientAnimation>
      {/* Added Navbar here, so I could style it */}
      <div className="flex justify-center p-4">
        <NavbarHome></NavbarHome>
      </div>
      <div className="h-screen w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="text-7xl lg:text-8xl font-bold text-center text-white relative z-20">
          PragmiX
        </h1>
        <p className="mt-6 text-lg lg:text-xl leading-8 text-gray-300 text-center max-w-5xl m-6 py-4 z-20">
          Data & Software - Solutions & Strategy
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
