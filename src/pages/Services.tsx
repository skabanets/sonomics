import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { Divider } from "../components";

import { sonomicsNumbers } from "../constants";
import { AboutSonomics, LetsTalk, OurMission, SuccessfulStories, Team } from "../sections";

interface AnimatedNumberProps {
  finalNumber: number;
  className: string;
}

const AnimatedNumber = ({ finalNumber, className }: AnimatedNumberProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });

  useEffect(() => {
    if (isInView) {
      const unsubscribe = rounded.onChange((latest) => {
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

const Services = () => {
  return (
    <>
      <AboutSonomics />
      <OurMission />
      <section className="py-[100px]">
        <div className="container relative">
          <h2 className="sticky top-[100px] z-10 w-[300px] pt-[20px]">Sonomics in numbers</h2>
          <ul className="ml-auto w-[774px] overflow-hidden">
            {sonomicsNumbers.map(({ title, number }, index) => (
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true, amount: 0.7 }}
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
      </section>
      <Team />
      <SuccessfulStories />
      <LetsTalk />
    </>
  );
};

export default Services;
