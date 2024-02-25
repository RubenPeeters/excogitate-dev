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
    <div className="px-4 pt-1"><Switch onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}></Switch></div>
    </>
  );
};