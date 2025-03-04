import type { TechnologyCard } from "../types";

interface TechnologyCardItemProps {
  card: TechnologyCard;
  cardHeight: string;
}

export const TechnologyCardItem = ({ card, cardHeight }: TechnologyCardItemProps) => {
  return (
    <div
      className={`flex w-[360px] md:w-[342px] lg:w-[400px] ${cardHeight} flex-col items-start gap-[20px] rounded-bl-[20px] rounded-br-[20px] border-t-[5px] border-solid border-accentYellowColor bg-darkBgColor p-[30px] md:p-[20px] lg:p-[30px]`}
    >
      <h4 className="text-whiteTextColor">{card.technologyTitle}</h4>
      <ul className="flex flex-col gap-[10px]">
        {card.technologyProperties.map((technology, index) => (
          <li
            key={technology.name || index}
            className="relative pl-[16px] before:absolute before:left-0 before:top-[10px] before:h-[6px] before:w-[6px] before:rounded-full before:bg-accentYellowColor"
          >
            {typeof technology.text === "string" ? (
              <p className="small-text text-secondaryLightTextColor">
                <span className="bold-text text-whiteTextColor">{technology.name}</span>{" "}
                {technology.text}
              </p>
            ) : (
              <>
                <p className="bold-text text-whiteTextColor">{technology.name}</p>
                <ul>
                  {technology.text.map((info, index) => (
                    <li
                      key={index}
                      className="small-text relative pl-[12px] text-secondaryLightTextColor before:absolute before:left-0 before:top-[10.5px] before:h-[3px] before:w-[3px] before:rounded-full before:bg-secondaryLightTextColor"
                    >
                      {info}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
