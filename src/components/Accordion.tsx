import { useEffect, useState, useRef } from "react";

import { Divider, Icon } from "../components";

import type { OfferDate } from "../types";

interface AccordionProps {
  offersList: OfferDate[];
}

export const Accordion = ({ offersList }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const intervalIdRef = useRef<number | null>(null);
  const accordionRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const startInterval = () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
      intervalIdRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % offersList.length);
      }, 3500);
    };

    const stopInterval = () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
    };

    const accordion = accordionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startInterval();
        } else {
          stopInterval();
        }
      },
      { threshold: 0.3 }
    );

    if (accordion) {
      observer.observe(accordion);
    }

    return () => {
      if (accordion) {
        observer.unobserve(accordion);
      }
      stopInterval();
    };
  }, [offersList.length]);

  return (
    <ul ref={accordionRef} className="w-full lg:w-[680px] lg:pt-[45px]">
      <Divider />
      {offersList.map((offer, index) => (
        <li key={offer.offerName}>
          <details
            name="offer"
            className="accordion-details px-[10px] py-[25px] transition"
            open={activeIndex === index}
          >
            <summary
              className="group relative flex cursor-pointer items-center justify-between"
              onClick={() => {
                intervalIdRef.current && clearInterval(intervalIdRef.current);
                intervalIdRef.current = null;
              }}
            >
              <h4 className="w-[610px]">{offer.offerName}</h4>
              <Icon
                id="plus"
                className="accordion-icon accordion-icon-plus absolute right-0 top-1/2 size-5 -translate-y-1/2 fill-mainTextColor group-hover:fill-themeAccentColor group-focus-visible:fill-themeAccentColor"
              />
              <Icon
                id="minus"
                className="accordion-icon accordion-icon-minus size-5 fill-mainTextColor group-hover:fill-themeAccentColor group-focus-visible:fill-themeAccentColor"
              />
            </summary>
          </details>
          <div className={`accordion-content big-text px-[10px] transition`}>
            <div className="overflow-hidden">
              <ul>
                {offer.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
          <Divider />
        </li>
      ))}
    </ul>
  );
};
