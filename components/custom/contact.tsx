"use client";
import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function Contact() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-white relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-700  text-center font-sans font-bold">
          Get in contact.
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Feel free to reach out to discuss any questions you may have.
        </p>
      </div>
      <div className="flex justify-center">
        <Link
          href="mailto:ruben@excogitate.dev"
          className={buttonVariants({ variant: "outline" })}
        >
          Email me
        </Link>
      </div>
    </div>
  );
}
