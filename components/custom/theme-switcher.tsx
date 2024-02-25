"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "../ui/switch";


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <>
    <Switch onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}></Switch>
    </>
  );
};