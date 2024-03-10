"use client";
import React from "react";

export function Contact() {
  return (
    <div className="bg-gradient-to-tl dark:from-amber-800 dark:to-slate-950 to-white  from-amber-100">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-white dark:bg-slate-950 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 border ">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight dark:text-white sm:text-4xl">
            Let&apos;s work together!
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Contact us for a free consultation, and get a pricing estimate for
            your use-case.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-800"
            >
              Reach out
            </a>
            <a
              href="/about"
              className="text-sm font-semibold leading-6 text-lime-600"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
