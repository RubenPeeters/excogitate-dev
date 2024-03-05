"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeSwitcher } from "./theme-switcher";
import Image from "next/image";
export const projects = [];
const services: { title: string; href: string; description: string }[] = [
  {
    title: "End-to-end Solutions",
    description: "The Data Lifecycle, start to finish.",
    href: "/data-lifecycle",
  },
  {
    title: "Applications",
    description: "Web or Desktop versions of your idea.",
    href: "/applications",
  },
  {
    title: "Data Consultancy",
    description: "Guidance on any part of the Data Lifecycle.",
    href: "/data-consultancy",
  },
  {
    title: "Software Consultancy",
    description: "Guidance on development best practices.",
    href: "/software-consultancy",
  },
];

export function Navbar() {
  return (
    <div
      className="flex items-center justify-evenly align-baseline p-6 lg:px-8 w-full max-w-7xl"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <a href="/" className="flex justify-center items-center -m-1.5 p-1.5">
          <span className="sr-only">PragmiX</span>
          <Image
            className="h-16 w-auto"
            src="owl-logo-2.svg"
            alt="logo"
            width={1000}
            height={1000}
          />
          <p className="text-3xl font-bold p-4">PragmiX</p>
        </a>
      </div>

      <NavigationMenu className="z-50">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] z-50">
                {services.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/blog" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
