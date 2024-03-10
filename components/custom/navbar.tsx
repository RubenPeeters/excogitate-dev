"use client";

import * as React from "react";

import { ThemeSwitcher } from "./theme-switcher";
import Image from "next/image";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  PencilIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid";
import { Theme } from "@tsparticles/engine";

export const projects = [];
const products: {
  name: string;
  href: string;
  description: string;
  icon: any;
}[] = [
  {
    name: "End-to-end Solutions",
    description: "The Data Lifecycle, start to finish.",
    href: "/data-lifecycle",
    icon: ChartPieIcon,
  },
  {
    name: "Applications",
    description: "Web or Desktop versions of your idea.",
    href: "/applications",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Data Consultancy",
    description: "Guidance on any part of the Data Lifecycle.",
    href: "/data-consultancy",
    icon: FingerPrintIcon,
  },
  {
    name: "Software Consultancy",
    description: "Guidance on development best practices.",
    href: "/software-consultancy",
    icon: SquaresPlusIcon,
  },
];

const callsToAction = [
  { name: "Read our blog", href: "/blog", icon: PencilIcon },
  { name: "Reach out", href: "mailto:ruben@pragmix.io", icon: PhoneIcon },
  {
    name: "About the company",
    href: "/about",
    icon: RectangleGroupIcon,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative isolate z-10 w-full">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className="h-8 w-auto"
              src="/owl-logo-2.svg"
              alt=""
              width={2400}
              height={2400}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover>
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
              Services
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400 dark:text-gray-700"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-white dark:bg-slate-950 pt-14  ring-gray-900/5">
                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-slate-900"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-lime-100 group-hover:bg-lime-200">
                        <item.icon
                          className="h-6 w-6  text-lime-600 group-hover:text-lime-600"
                          aria-hidden="true"
                        />
                      </div>
                      <a
                        href={item.href}
                        className="mt-6 block font-semibold text-gray-900 dark:text-gray-100"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 dark:bg-slate-900">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900"
                        >
                          <item.icon
                            className="h-5 w-5 flex-none text-amber-500 dark:text-amber-600 "
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a
            href="/blog"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
          >
            Blog
          </a>
          <a
            href="/about"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
          >
            About
          </a>
          <a
            href="mailto:ruben@pragmix.io"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
          >
            Contact
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ThemeSwitcher />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-slate-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                className="h-8 w-auto"
                src="/owl-logo-2.svg"
                alt=""
                width={2400}
                height={2400}
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-950">
                        Services
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-950"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-950"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-950"
                >
                  About
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-950"
                >
                  Contact
                </a>
              </div>
              <div className="py-6">
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
