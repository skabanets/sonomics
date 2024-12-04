import Switch from "react-switch";
import { useEffect, useState } from "react";

import { Icon } from "../components";

import { useTheme } from "../hooks";
import { ThemeMode } from "../constants";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const [bgColor, setBgColor] = useState(theme === ThemeMode.LIGHT ? "#f3f2f2" : "#323031");

  useEffect(() => {
    const root = document.documentElement;
    const computedColor = getComputedStyle(root).getPropertyValue("--theme-toggle-bg").trim();
    if (computedColor) {
      setBgColor(computedColor);
    }
  }, [theme]);

  return (
    <Switch
      width={49}
      height={23}
      borderRadius={170}
      onChange={toggleTheme}
      handleDiameter={16}
      checked={theme === ThemeMode.DARK}
      onColor={bgColor}
      offColor={bgColor}
      uncheckedHandleIcon={<div className="size-[16px] rounded-full bg-accentYellowColor"></div>}
      checkedHandleIcon={<div className="size-[16px] rounded-full bg-accentYellowColor"></div>}
      checkedIcon={
        <div className="flex h-full w-full items-center justify-center">
          <Icon id="sun" className="h-4 w-4" />
        </div>
      }
      uncheckedIcon={
        <div className="flex h-full w-full items-center justify-center">
          <Icon id="moon" className="h-4 w-4" />
        </div>
      }
      activeBoxShadow="none"
    />
  );
};
