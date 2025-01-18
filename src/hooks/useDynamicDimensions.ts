import { useEffect, useState } from "react";

export const useDynamicDimensions = () => {
  const [slidePadding, setSlidePadding] = useState(0);
  const [slideHeight, setSlideHeight] = useState(0);

  useEffect(() => {
    const calculateDimensions = () => {
      const currentHeight = window.innerHeight;

      let margin = 0;
      if (currentHeight < 800) {
        margin = 20;
      } else if (currentHeight < 900) {
        margin = 40;
      } else if (currentHeight < 1000) {
        margin = 60;
      } else if (currentHeight < 1200) {
        margin = 80;
      } else if (currentHeight >= 1400) {
        margin = 100;
      }

      setSlidePadding(margin);

      const height = currentHeight - margin * 2 - 56;
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
