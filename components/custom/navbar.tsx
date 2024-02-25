"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/data-science">Data Science</HoveredLink>
            <HoveredLink href="/data-analytics">Data Analytics</HoveredLink>
            <HoveredLink href="/data-engineering">Data Engineering</HoveredLink>
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/software-engineering">
              Software Engineering
            </HoveredLink>
            <HoveredLink href="/data-governance">Data Governance</HoveredLink>
            <HoveredLink href="/fair-data">FAIR Data</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <HoveredLink href="/about">About</HoveredLink>

        <HoveredLink href="#contact">Contact</HoveredLink>
      </Menu>
    </div>
  );
}
