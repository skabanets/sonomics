import { useEffect, useState } from "react";

export const useDynamicDimensions = () => {
  const [slidePadding, setSlidePadding] = useState(0);
  const [slideHeight, setSlideHeight] = useState(0);

  useEffect(() => {
    const calculateDimensions = () => {
      const currentHeight = window.innerHeight;

      const getPadding = (height: number) => {
        if (height < 800) return 20;
        // if (height < 900) return 30;
        // if (height < 1000) return 60;
        // if (height < 1400) return 80;
        return 100;
      };

      const padding = getPadding(currentHeight);

      setSlidePadding(padding);
      const height = currentHeight - padding * 2;
      setSlideHeight(height);
    };

    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);

    return () => {
      window.removeEventListener("resize", calculateDimensions);
    };
  }, []);

  return { slidePadding, slideHeight };
};
