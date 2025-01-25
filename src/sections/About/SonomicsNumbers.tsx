import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { AnimatedNumber, Divider } from "../../components";

import { opacityFade, sonomicsNumbers } from "../../constants";

export const SonomicsNumbers = () => {
  const [isVisibleLastItem, setIsVisibleLastItem] = useState(false);
  const lastItemRef = useRef(null);

  useEffect(() => {
    const itemRef = lastItemRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisibleLastItem(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (itemRef) {
      observer.observe(itemRef);
    }

    return () => {
      if (itemRef) {
        observer.unobserve(itemRef);
      }
    };
  }, []);
  return (
    <section className="py-[50px] md:py-[100px]">
      <div className="container">
        <motion.h2
          className={`sticky top-[49px] z-10 before:absolute before:left-0 before:top-[-50px] before:z-[-1] before:block before:h-[140px] before:w-full before:bg-primaryBgColor md:top-[100px] md:w-[300px] md:pt-[20px] md:after:block md:after:h-[500px] ${isVisibleLastItem ? "after:block after:h-[620px]" : ""}`}
          {...opacityFade}
        >
          Sonomics in numbers
        </motion.h2>
        <ul className="overflow-hidden md:ml-auto md:mt-[-628px] md:w-[774px]">
          {sonomicsNumbers.map(({ title, number }, index) => {
            const isLastItem = index === sonomicsNumbers.length - 1;
            return (
              <motion.li
                ref={isLastItem ? lastItemRef : null}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true, amount: 0.7 }}
                key={index}
                className="flex flex-wrap items-center justify-between gap-y-[20px] pt-[20px] first:pt-0 md:gap-y-[4vh] md:pt-[4vh]"
              >
                <AnimatedNumber
                  finalNumber={number}
                  className="text-[120px] font-medium leading-[156px] text-accentRedColor"
                />
                <h4 className="w-[490px]">{title}</h4>

                {index < sonomicsNumbers.length - 1 && <Divider />}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
