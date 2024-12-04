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

  const ToggleIndicator = () => (
    <div className="size-[16px] rounded-full bg-accentYellowColor"></div>
  );

  return (
    <Switch
      className=""
      width={49}
      height={23}
      borderRadius={170}
      onChange={toggleTheme}
      handleDiameter={16}
      checked={theme === ThemeMode.DARK}
      onColor={bgColor}
      offColor={bgColor}
      uncheckedHandleIcon={<ToggleIndicator />}
      checkedHandleIcon={<ToggleIndicator />}
      checkedIcon={
        <div className="flex h-full w-full items-center justify-start py-[4px] pl-[5px]">
          <Icon id="sun" className="size-[16px] fill-[#f3f2f2]" />
        </div>
      }
      uncheckedIcon={
        <div className="flex h-full w-full items-center justify-end py-[4px] pr-[5px]">
          <Icon id="moon" className="size-[16px] fill-secondaryTextColor" />
        </div>
      }
      activeBoxShadow="none"
    />
  );
};
