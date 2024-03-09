"use client";
import React from "react";

import {
  LightBulbIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

export const actions = [
  {
    title: "End-to-end Solutions",
    description: "The Data Lifecycle, start to finish.",
    href: "/data-lifecycle",
    icon: LightBulbIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
  {
    title: "Application Development",
    description: "Web or desktop versions of your idea.",
    href: "/applications",
    icon: Cog6ToothIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
  {
    title: "Data Consultancy",
    description: "Guidance on any part of the Data Lifecycle.",
    href: "/data-consultancy",
    icon: ChartBarIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
  {
    title: "Software Consultancy",
    description: "Guidance on development best practices.",
    href: "/software-consultancy",
    icon: BookOpenIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Services() {
  return (
    <div className="overflow-hidden rounded-lg mx-auto  sm:grid sm:grid-cols-2 sm:gap-8 max-w-5xl">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            "group text-center relative shadow bg-white dark:bg-slate-950 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-400"
          )}
        >
          <div>
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                "inline-flex rounded-lg p-3 ring-4 ring-white dark:ring-slate-950 bg-lime-200 text-lime-600 dark:bg-lime-700 dark:text-lime-100"
              )}
            >
              <action.icon className="h-6 w-6 " aria-hidden="true" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-center font-semibold leading-6 text-gray-900 dark:text-white">
              <a href={action.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
              </a>
            </h3>
            <p className="mt-2 text-center text-sm dark:text-gray-400 text-gray-500">
              {action.description}
            </p>
          </div>
          <span
            className="pointer-events-none absolute right-6 top-6 dark:text-gray-700 text-gray-300 group-hover:text-gray-400"
            aria-hidden="true"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
}
