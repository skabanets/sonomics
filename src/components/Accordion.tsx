import { Divider, Icon } from "../components";

import { OfferDate } from "../types";

interface AccordionProps {
  offersList: OfferDate[];
}

export const Accordion = ({ offersList }: AccordionProps) => {
  return (
    <ul className="w-[680px] pt-[45px]">
      <Divider />
      {offersList.map((offer) => (
        <li key={offer.offerName}>
          <details name="offer" className="accordion-details px-[10px] py-[25px] transition">
            <summary className="relative flex cursor-pointer items-center justify-between">
              <h4 className="w-[610px]">{offer.offerName}</h4>
              <Icon
                id="plus"
                className="accordion-icon accordion-icon-plus absolute right-0 top-1/2 size-5 -translate-y-1/2 fill-mainTextColor"
              />
              <Icon
                id="minus"
                className="accordion-icon accordion-icon-minus size-5 fill-mainTextColor"
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
          </div>
          <Divider />
        </li>
      ))}
    </ul>
  );
};
