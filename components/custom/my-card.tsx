"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export function MyCard({
  title = "Default title",
  description = "Default description",
  src = "https://media.discordapp.net/attachments/1035214140039512137/1211385589824487525/ruben_p_data_analysis_in_the_21st_century_minimalist_clean_simp_fc820099-0859-4dcb-825b-6e27eac6bb26.png?ex=65ee01bf&is=65db8cbf&hm=d4144e15f67194d3cb9729fd7753dc1ebe98c3987149cbe9d9bfb0cb5068cd1a&=&format=webp&quality=lossless&width=905&height=905",
  size = 500,
  alt = "Default",
  link = "#",
}: {
  title?: string;
  description?: string;
  src?: string;
  size?: number;
  alt?: string;
  animate?: boolean;
  link?: string;
}) {
  return (
    <>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-2">
        <Card>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <a href={link}>
              <Image src={src} width={size} height={size} alt={alt}></Image>{" "}
            </a>
          </CardContent>
          <CardFooter>
            <Button asChild variant="link">
              <Link className="text-zinc-700 dark:text-zinc-200" href={link}>
                Read more...
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </BackgroundGradient>
    </>
  );
}
