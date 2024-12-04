import { useLayoutEffect, useState } from "react";

import { ThemeMode } from "../constants";

export const useTheme = () => {
  const savedTheme = localStorage.getItem("theme") ?? ThemeMode.LIGHT;
  const initialTheme = ThemeMode.DARK === savedTheme ? savedTheme : ThemeMode.LIGHT;

  const [theme, setTheme] = useState(initialTheme);

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT);
  };

  return { theme, toggleTheme };
};
