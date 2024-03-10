import { CheckIcon } from "@heroicons/react/20/solid";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  PromiseLikeOfReactNode,
  Key,
} from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const steps = [
  {
    name: "Create account",
    description: "Vitae sed mi luctus laoreet.",
    href: "#",
    status: "complete",
  },
  {
    name: "Profile information",
    description: "Cursus semper viverra facilisis et et some more.",
    href: "#",
    status: "current",
  },
  {
    name: "Business information",
    description: "Penatibus eu quis ante.",
    href: "#",
    status: "upcoming",
  },
  {
    name: "Theme",
    description: "Faucibus nec enim leo et.",
    href: "#",
    status: "upcoming",
  },
  {
    name: "Preview",
    description: "Iusto et officia maiores porro ad non quas.",
    href: "#",
    status: "upcoming",
  },
];

interface stepsType {
  name: string;
  description: string;
}

interface ComponentProps {
  steps: stepsType[];
}

export default function Steps({ steps }: ComponentProps) {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="overflow-hidden px-4">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={classNames(
              stepIdx !== steps.length - 1 ? "pb-10" : "",
              "relative"
            )}
          >
            <>
              {stepIdx !== steps.length - 1 ? (
                <div
                  className="absolute left-8 top-8 -ml-px mt-0.5 h-full w-0.5 bg-lime-700"
                  aria-hidden="true"
                />
              ) : null}
              <div className="group relative flex items-start">
                <span className="flex h-20 items-center">
                  <span className="relative z-10 flex h-16 w-16 border border-lime-500 text-3xl font-medium items-center justify-center rounded-full bg-lime-200 text-lime-600">
                    {stepIdx + 1}
                  </span>
                </span>
                <span className="ml-4 py-1 flex min-w-0 flex-col max-w-lg">
                  <span className="text-lg font-medium">{step.name}</span>
                  <span className="text-lg text-gray-500">
                    {step.description}
                  </span>
                </span>
              </div>
            </>
          </li>
        ))}
      </ol>
    </nav>
  );
}
