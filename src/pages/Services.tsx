import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

import { Divider } from "../components";

import { sonomicsNumbers } from "../constants";

const Services = () => {
  return (
    <div>
      <ul className="mx-auto w-[774px] overflow-hidden">
        {sonomicsNumbers.map(({ title, number }, index) => (
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.35 }}
            key={index}
            className="flex flex-wrap items-center justify-between gap-y-[4vh] pt-[4vh] first:pt-0"
          >
            <AnimatedNumber
              finalNumber={number}
              className="text-[120px] font-medium leading-[156px] text-accentRedColor"
            />
            <h4 className="w-[490px]">{title}</h4>

            {index < sonomicsNumbers.length - 1 && <Divider />}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Services;

interface AnimatedNumberProps {
  finalNumber: number;
  className: string;
}

const AnimatedNumber = ({ finalNumber, className }: AnimatedNumberProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.onChange((latest) => {
      setDisplayValue(latest);
    });

    const animation = animate(count, finalNumber, { duration: 1.5 });

    return () => {
      unsubscribe();
      animation.stop();
    };
  }, [count, finalNumber, rounded]);

  return <p className={`${className} tabular-nums`}>{displayValue}+</p>;
};
