import { useEffect, useRef, useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { motion } from "framer-motion";

import { SliderWithThumb } from "../../../components";

import { useBreakpointValue } from "../../../hooks";
import { slideInWithFade } from "../../../constants";
import type { OrdinaryItem } from "../../../types";

interface CaseStudyTechnologiesProps {
  id: string;
  technologies: OrdinaryItem[];
}

export const CaseStudyTechnologies = ({ technologies, id }: CaseStudyTechnologiesProps) => {
  const [translateValue, setTranslateValue] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);
  const [isTransition, setIsTransition] = useState(true);

  const nodeRef = useRef(null);

  const cardWidth = useBreakpointValue([320, 300, 280]);
  const gap = useBreakpointValue([40, 30, 20]);
  const containerWidth = useBreakpointValue([1280, 704, 360]);
  const itemsCount = technologies.length;

  useEffect(() => {
    const calculatedTotalWidth = itemsCount * cardWidth + (itemsCount - 1) * gap;
    setTotalWidth(calculatedTotalWidth);
  }, [itemsCount, cardWidth, gap]);
  const maxTranslateValue = Math.max(totalWidth - containerWidth, 0);

  const handleSliderChange = ({
    translateValue,
  }: {
    translateValue: number;
    totalWidth: number;
  }) => {
    setTranslateValue(translateValue);
  };

  const handleDrag = (_e: DraggableEvent, data: DraggableData) => {
    setIsTransition(false);
    const newTranslateValue = Math.min(
      Math.max(translateValue - data.deltaX, 0),
      maxTranslateValue
    );
    setTranslateValue(newTranslateValue);
  };

  return (
    <section
      className="overflow-hidden bg-blackBgColor py-[50px] lg:py-[80px] lg:pb-[20px]"
      id={id}
    >
      <motion.div className="container" {...slideInWithFade}>
        <h2 className="mb-[40px] text-whiteTextColor lg:mb-[60px]">Technologies used</h2>
        <Draggable
          nodeRef={nodeRef}
          axis="x"
          bounds={{
            left: -maxTranslateValue,
            right: 0,
          }}
          position={{ x: -translateValue, y: 0 }}
          onDrag={handleDrag}
          onStop={() => setIsTransition(true)}
        >
          <ul
            ref={nodeRef}
            className="mb-[40px] flex cursor-grab gap-[20px] transition md:gap-[40px]"
            style={{
              width: totalWidth,
              transition: !isTransition ? "none" : "transform 0.15s ease-in",
            }}
          >
            {technologies.map(({ title, description }, index) => (
              <li
                key={index}
                className="w-[280px] rounded-b-[20px] border-t-[5px] border-t-accentYellowColor bg-darkBgColor p-[30px] transition sm-max:w-[270px] md:w-[300px] lg:w-[320px]"
              >
                <h4 className="mb-[20px] text-whiteTextColor">{title}</h4>
                <p className="small-text text-secondaryLightTextColor">{description}</p>
              </li>
            ))}
          </ul>
        </Draggable>
        <SliderWithThumb
          {...{
            itemsCount,
            containerWidth,
            cardWidth,
            gap,
            sliderValues: { translateValue, totalWidth },
            onChange: handleSliderChange,
          }}
        />
      </motion.div>
    </section>
  );
};
