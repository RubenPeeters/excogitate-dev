"use client";
import React from "react";

import { useTheme } from "next-themes";
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
    <div className="max-w-5xl mx-auto px-8 pt-32">
      <h1 className="text-4xl font-bold text-center text-black dark:text-white relative z-20">
        What we offer...
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
}
