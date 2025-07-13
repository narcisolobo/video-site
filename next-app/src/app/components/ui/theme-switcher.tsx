"use client";

import { useEffect, useState } from "react";
import { HiOutlineMoon, HiSun } from "react-icons/hi";

function ThemeSwitcher() {
  const [theme, setTheme] = useState<"acid" | "synthwave" | undefined>("acid");
  const isValidTheme = (value: unknown): value is "acid" | "synthwave" =>
    value === "acid" || value === "synthwave";

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const fallback = prefersDark ? "synthwave" : "acid";
    const initial = isValidTheme(stored) ? stored : fallback;

    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "acid" ? "synthwave" : "acid";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="theme-controller"
        checked={theme === "synthwave"}
        onChange={toggleTheme}
      />
      <HiSun className="swap-on h-8 w-8 fill-current" />
      <HiOutlineMoon className="swap-off h-8 w-8 fill-current" />
    </label>
  );
}

export default ThemeSwitcher;
