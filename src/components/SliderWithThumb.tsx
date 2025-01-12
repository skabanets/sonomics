import { useState } from "react";
import ReactSlider from "react-slider";

import { Icon } from "../components";

interface SliderWithThumbProps {
  itemsCount: number;
  containerWidth: number;
  cardWidth: number;
  gap: number;
  onChange: (values: { translateValue: number; totalWidth: number }) => void;
}

export const SliderWithThumb = ({
  itemsCount,
  containerWidth,
  cardWidth,
  gap,
  onChange,
}: SliderWithThumbProps) => {
  const totalWidth = itemsCount * cardWidth + (itemsCount - 1) * gap;
  const maxTranslateValue = Math.max(totalWidth - containerWidth, 0);

  const [translateValue, setTranslateValue] = useState(0);
  const [iconName, setIconName] = useState("drag-hand");

  const handleSliderChange = (value: number) => {
    const newTranslateValue = (maxTranslateValue * value) / 100;
    setTranslateValue(newTranslateValue);

    if (onChange) {
      onChange({ translateValue: newTranslateValue, totalWidth });
    }
  };

  return (
    <div className="group" tabIndex={0}>
      <ReactSlider
        className="relative h-[49px] cursor-pointer"
        thumbClassName="react-slider-thumb top-1/2 translate-y-[-50%] w-[49px] h-[49px] flex items-center justify-center bg-darkBgColor rounded-full border border-accentYellowColor outline-none group-hover:h-[59px] group-hover:w-[59px] group-focus-visible:h-[59px] group-focus-visible:w-[59px] cursor-pointer"
        trackClassName="absolute top-1/2 left-0 translate-y-[-50%] h-[3px] rounded-[70px] bg-secondaryDarkBgColor group-hover:bg-accentYellowColor group-focus-visible:bg-accentYellowColor transition"
        value={(translateValue / maxTranslateValue) * 100 || 0}
        onChange={handleSliderChange}
        onBeforeChange={() => setIconName("drag-hand-active")}
        onAfterChange={() => setIconName("drag-hand")}
        ariaLabel="Slider"
        // eslint-disable-next-line
        renderThumb={({ key, ...rest }, state) => (
          <div key={state.index} aria-label={`Slider thumb ${state.index + 1}`} {...rest}>
            <Icon id={iconName} className="size-[25px] fill-whiteTextColor" />
          </div>
        )}
      />
    </div>
  );
};
