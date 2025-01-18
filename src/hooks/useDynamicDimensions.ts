import { useEffect, useState } from "react";

export const useDynamicDimensions = () => {
  const [slideMargin, setSlideMargin] = useState(0);
  const [slideHeight, setSlideHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const calculateDimensions = () => {
      const currentHeight = window.innerHeight;

      setWindowHeight(currentHeight);

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

      setSlideMargin(margin);

      const height = currentHeight - margin * 2 - 56;
      setSlideHeight(height);
    };

    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);

    return () => {
      window.removeEventListener("resize", calculateDimensions);
    };
  }, []);

  return { slideMargin, slideHeight, windowHeight };
};
