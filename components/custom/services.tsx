"use client";
import React from "react";

import { HoverEffect } from "../ui/card-hover-effect";

export const projects = [
  {
    title: "End-to-end Solutions",
    description: "The Data Lifecycle, start to finish.",
    link: "/data-lifecycle",
  },
  {
    title: "Applications",
    description: "Web or Desktop versions of your idea.",
    link: "/applications",
  },
  {
    title: "Data Consultancy",
    description: "Guidance on any part of the Data Lifecycle.",
    link: "/data-consultancy",
  },
  {
    title: "Software Consultancy",
    description: "Guidance on development best practices.",
    link: "/software-consultancy",
  },
];

export function Services() {
  return (
    <div id="services" className="max-w-3xl mx-auto px-24">
      <h1 className="text-4xl font-bold text-center dark:text-white text-gray-900 relative pb-16 z-20">
        What we offer...
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
}
