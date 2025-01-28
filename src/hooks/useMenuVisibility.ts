import { useEffect, useRef, useState } from "react";

export const useMenuVisibility = (industriesLength: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isUserScrolling = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isUserScrolling.current) return;

        let firstSectionVisible = false;
        let lastSectionVisible = false;

        let maxVisibleRatio = 0;
        let maxVisibleIndex = currentIndex;

        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);

          if (index === 0) {
            firstSectionVisible = entry.isIntersecting && entry.intersectionRatio > 0.6;
          }

          if (index === sectionRefs.current.length - 1) {
            lastSectionVisible = entry.isIntersecting && entry.intersectionRatio > 0.6;
          }

          if (entry.isIntersecting && entry.intersectionRatio > maxVisibleRatio) {
            maxVisibleRatio = entry.intersectionRatio;
            maxVisibleIndex = index;
          }
        });

        setIsMenuVisible(
          firstSectionVisible ||
            lastSectionVisible ||
            (maxVisibleIndex > 0 && maxVisibleIndex < sectionRefs.current.length - 1)
        );

        setCurrentIndex(maxVisibleIndex);
      },
      {
        threshold: [0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [currentIndex, industriesLength]);

  return { isMenuVisible, sectionRefs, isUserScrolling, currentIndex, setCurrentIndex };
};
