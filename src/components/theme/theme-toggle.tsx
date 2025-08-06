"use client";

import { useTheme } from "next-themes";
import { IconSun, IconMoon } from "@tabler/icons-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="h-full w-full flex items-center justify-center absolute inset-0 cursor-pointer bg-transparent border-none outline-none"
    >
      <IconSun className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200 pointer-events-none" />
      <IconMoon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200 pointer-events-none" />
    </button>
  );
}
