"use client";
import React from "react";

export function Contact() {
  return (
    <div className="dark:bg-gradient-to-r bg-gradient-to-l dark:from-blue-800 dark:to-slate-900 dark:from-10%  to-blue-300  from-blue-100">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-white dark:bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 border ">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight dark:text-white sm:text-4xl">
            Caught your interest?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Contact us for a free consultation, and get a pricing estimate for
            your use-case.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-white dark:bg-slate-900 px-3.5 py-2.5 text-sm font-semibold dark:text-white text-gray-900 shadow-sm hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Reach out
            </a>
            <a
              href="/pricing"
              className="text-sm font-semibold leading-6 text-blue-600"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
