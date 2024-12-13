import { useEffect, useRef, useState } from "react";
import { animate, useInView, useMotionValue, useTransform } from "framer-motion";

interface AnimatedNumberProps {
  finalNumber: number;
  className: string;
}

export const AnimatedNumber = ({ finalNumber, className }: AnimatedNumberProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });

  useEffect(() => {
    if (isInView) {
      const unsubscribe = rounded.on("change", (latest) => {
        setDisplayValue(latest);
      });

      const animation = animate(count, finalNumber, { duration: 1.5 });

      return () => {
        unsubscribe();
        animation.stop();
      };
    }
  }, [isInView, count, finalNumber, rounded]);

  return (
    <p ref={ref} className={`${className} tabular-nums`}>
      {displayValue}+
    </p>
  );
};
