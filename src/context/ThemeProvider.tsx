import React, { createContext, useEffect, useLayoutEffect, useState } from "react";
import { ThemeMode } from "../constants";

export const ThemeContext = createContext<{
  theme: string;
  toggleTheme: () => void;
}>({
  theme: ThemeMode.LIGHT,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getDefaultTheme = (): string => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? ThemeMode.DARK
      : ThemeMode.LIGHT;
  };

  const [theme, setTheme] = useState<string>(getDefaultTheme);

  useEffect(() => {
    document.body.classList.add("transition");
  }, []);

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
