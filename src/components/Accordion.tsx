import { useState } from "react";

import { Divider, Icon } from "../components";

import { OfferDate } from "../types";

interface AccordionProps {
  offersList: OfferDate[];
}

export const Accordion = ({ offersList }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ul className="w-[680px] pt-[45px]">
      <Divider />
      {offersList.map((offer, index) => (
        <li key={offer.offerName}>
          <details
            name="offer"
            open={openIndex === index}
            className="px-[10px] py-[25px] transition"
          >
            <summary
              className="flex cursor-pointer items-center justify-between"
              onClick={(e) => {
                e.preventDefault();
                toggleAccordion(index);
              }}
            >
              <h4 className="w-[610px]">{offer.offerName}</h4>
              <Icon
                id={openIndex === index ? "minus" : "plus"}
                className="size-5 fill-mainTextColor"
              />
            </summary>
            <div
              className={`big-text mt-[10px] overflow-hidden transition ${
                openIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <ul>
                {offer.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>

              {offer?.keyBenefits && (
                <div className="mt-[10px]">
                  <p className="font-semibold">Key Benefits:</p>
                  <ul className="pl-[12px]">
                    {offer.keyBenefits?.map((benefit, index) => (
                      <li
                        key={index}
                        className="relative pl-[12px] before:absolute before:left-0 before:top-[13.5px] before:h-[3px] before:w-[3px] before:rounded-full before:bg-mainTextColor"
                      >
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </details>
          <Divider />
        </li>
      ))}
    </ul>
  );
};
