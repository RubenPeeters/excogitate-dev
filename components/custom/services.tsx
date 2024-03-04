"use client";
import React from "react";

import { HoverEffect } from "../ui/card-hover-effect";

export const projects = [
  {
    title: "Data Science",
    description: "Use AI models to create value from your data.",
    link: "/data-science",
  },
  {
    title: "Data Engineering",
    description: "Streamline your data pipelines.",
    link: "/data-engineering",
  },
  {
    title: "Data Analytics",
    description: "Extract valuable insights from your data.",
    link: "/data-analytics",
  },
  {
    title: "Data Governance",
    description: "Lower costs through data quality.",
    link: "/data-governance",
  },
  {
    title: "Software Engineering",
    description:
      "Automate your business processes through scripting and software.",
    link: "/software-engineering",
  },
  {
    title: "Web Development",
    description: "Create visibility and traction for your company.",
    link: "/web-development",
  },
];

export function Services() {
  return (
    <div id="services" className="max-w-5xl mx-auto px-8">
      <h1 className="text-4xl font-bold text-center underline underline-offset-4 decoration-blue-600 dark:text-white text-gray-900 relative pb-16 z-20">
        What we offer...
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
}
