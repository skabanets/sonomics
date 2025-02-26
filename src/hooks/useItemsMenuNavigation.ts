import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

import type { CaseStudyMenuItem } from "../types";

interface UseItemsMenuNavigationProps {
  menuOptions: CaseStudyMenuItem[];
}

export const useItemsMenuNavigation = ({ menuOptions }: UseItemsMenuNavigationProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManualScroll, setIsManualScroll] = useState(false);

  const location = useLocation();
  const activeIndex = location.state?.activeIndex;

  useEffect(() => {
    if (!activeIndex) return;

    setIsManualScroll(true);
    setCurrentIndex(activeIndex);

    const sectionId = menuOptions[activeIndex].id;
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState({}, document.title, location.pathname);
      setTimeout(() => {
        setIsManualScroll(false);
      }, 500);
    }
  }, [activeIndex]);

  const handleMenuClick = (index: number) => {
    setIsManualScroll(true);
    setCurrentIndex(index);

    const sectionId = menuOptions[index].id;

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });

      setTimeout(() => {
        setIsManualScroll(false);
      }, 500);
    }
  };

  const handleScroll = useCallback(() => {
    if (isManualScroll) return;

    const windowHeight = window.innerHeight;
    let newIndex = currentIndex;

    menuOptions.forEach((option, index) => {
      const element = document.getElementById(option.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementHeight = rect.height;
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);

        if (visibleHeight >= elementHeight * 0.45) {
          newIndex = index;
        }
      }
    });

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  }, [menuOptions, currentIndex, isManualScroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return { currentIndex, handleMenuClick };
};
