import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import throttle from "lodash.throttle";

import { AnimatedNumber, Divider } from "../../components";

import { opacityFade, sonomicsNumbers } from "../../constants";

export const SonomicsNumbers = () => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [isVisibleLastItem, setIsVisibleLastItem] = useState(false);
  const lastItemRef = useRef<HTMLLIElement | null>(null);

  const isMobile = useMediaQuery({ maxWidth: 767.98 });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;
    }, 300);

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;

        if (scrollDirection === "down" && isIntersecting) {
          setIsVisibleLastItem(true);
        } else if (scrollDirection === "up" && isIntersecting && entry.intersectionRatio === 1) {
          setIsVisibleLastItem(false);
        }
      },
      { threshold: 1 }
    );

    const itemRef = lastItemRef.current;

    if (itemRef) {
      observer.observe(itemRef);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (itemRef) {
        observer.unobserve(itemRef);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDirection]);

  return (
    <section className="py-[50px] lg:py-[100px]">
      <div className="container">
        <motion.h2
          className={`sticky top-[49px] z-10 before:absolute before:left-0 before:top-[-50px] before:z-[-1] before:block before:h-[140px] before:w-full before:bg-primaryBgColor md:top-[120px] md:w-[270px] md:before:h-0 md:after:block md:after:h-[500px] lg:top-[100px] lg:w-[300px] lg:pt-[20px] ${isVisibleLastItem && isMobile ? "-translate-y-[150%]" : ""}`}
          {...opacityFade}
        >
          Sonomics in numbers
        </motion.h2>
        <ul className="overflow-hidden md:ml-auto md:mt-[-615px] md:w-[400px] lg:mt-[-628px] lg:w-[774px]">
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
                  className="text-[120px] font-medium leading-[156px] text-accentRedColor tablet:text-[58px] tablet:leading-[86px]"
                />
                <h4 className="md:w-[270px] lg:w-[490px]">{title}</h4>

                {index < sonomicsNumbers.length - 1 && <Divider />}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
