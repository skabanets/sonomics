import { useEffect, useState } from "react";

export const useDynamicDimensions = () => {
  const [slidePadding, setSlidePadding] = useState(0);
  const [slideHeight, setSlideHeight] = useState(0);

  useEffect(() => {
    const calculateDimensions = () => {
      const currentHeight = window.innerHeight;
      let padding = 0;

      if (currentHeight < 800) {
        padding = 20;
      } else if (currentHeight < 900) {
        padding = 40;
      } else if (currentHeight < 1000) {
        padding = 60;
      } else if (currentHeight < 1200) {
        padding = 80;
      } else if (currentHeight >= 1400) {
        padding = 100;
      }

      setSlidePadding(padding);

      const height = currentHeight - padding * 2 - 56;
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
