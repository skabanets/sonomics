import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

import { Icon, SliderWithThumb, TeamMemberCard } from "../../components";

import { slideInWithFade, teamMembers } from "../../constants";
import { useBreakpointValue } from "../../hooks";
import type { TeamMember } from "../../types";
import { images } from "../../assets";

export const Team = () => {
  const [sliderValues, setSliderValues] = useState({ translateValue: 0, totalWidth: 0 });
  const [isTransition, setIsTransition] = useState(true);

  const nodeRef = useRef(null);

  const { teamImages } = images;

  const cardWidth = 340;
  const gap = 20;
  const containerWidth = useBreakpointValue([1280, 736, 355]);
  const itemsCount = teamMembers.length;

  const totalWidth = itemsCount * cardWidth + (itemsCount - 1) * gap;
  const maxTranslateValue = Math.max(totalWidth - containerWidth, 0);

  const handleSliderChange = (values: { translateValue: number; totalWidth: number }) => {
    setSliderValues(values);
  };

  const handleDrag = (_e: DraggableEvent, data: DraggableData) => {
    setIsTransition(false);
    const newTranslateValue = Math.min(
      Math.max(sliderValues.translateValue - data.deltaX, 0),
      maxTranslateValue
    );

    setSliderValues({ ...sliderValues, translateValue: newTranslateValue });
    setTimeout(() => setIsTransition(true), 100);
  };

  return (
    <section className="relative overflow-hidden bg-blackBgColor pb-[60px] pt-[80px] before:absolute before:left-0 before:top-[624px] before:h-[1px] before:w-full before:bg-whiteTextColor before:content-['''']">
      <div className="container">
        <motion.div
          className="relative mb-[80px] flex items-center gap-[230px]"
          {...slideInWithFade}
        >
          <img
            srcSet={`${teamImages.ceo_1x} 1x, ${teamImages.ceo_2x} 2x`}
            src={teamImages.ceo_1x}
            alt="Alexey Chuhaiov"
            width="555"
            height="464"
            loading="lazy"
            className="rounded-[20px]"
          />
          <div className="w-[456px]">
            <h2 className="mb-[14px] text-whiteTextColor">Alexey Chuhaiov</h2>
            <h5 className="mb-[20px] text-whiteTextColor">CEO at Sonomics</h5>
            <p className="big-text mb-[20px] text-secondaryLightTextColor">
              Our team of talented professionals, with their diverse skill sets and unwavering
              commitment to excellence, is the driving force behind our success.
            </p>
            <p className="big-text text-secondaryLightTextColor">
              We hire the best and empower them to continuously learn and grow, ensuring that we
              stay at the forefront of industry trends and emerging technologies.
            </p>
          </div>
          <Icon
            id="quotes"
            className="absolute left-[635px] top-0 h-[97px] w-[99px] fill-accentYellowColor"
          />
        </motion.div>
        <motion.div className="pt-[60px]" {...slideInWithFade}>
          <h2 className="mb-[40px] text-whiteTextColor">Meet the team</h2>
          <Draggable
            nodeRef={nodeRef}
            axis="x"
            bounds={{
              left: -maxTranslateValue,
              right: 0,
            }}
            position={{ x: -sliderValues.translateValue, y: 0 }}
            onDrag={handleDrag}
          >
            <ul
              ref={nodeRef}
              className="mb-[40px] flex cursor-grab gap-[20px]"
              style={{
                width: sliderValues.totalWidth || totalWidth,
                transition: !isTransition ? "none" : "transform 0.15s ease-in",
              }}
            >
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} item={member as TeamMember} index={index} />
              ))}
            </ul>
          </Draggable>

          <SliderWithThumb
            {...{
              itemsCount,
              containerWidth,
              cardWidth,
              gap,
              sliderValues,
              onChange: handleSliderChange,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};
