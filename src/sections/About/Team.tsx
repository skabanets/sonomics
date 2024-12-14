import { useState } from "react";
import ReactSlider from "react-slider";
import { motion } from "framer-motion";

import { Icon, TeamMemberCard } from "../../components";

import { images } from "../../assets";
import { slideInWithFade, teamMembers } from "../../constants";
import { TeamMember } from "../../types";

export const Team = () => {
  const { teamImages } = images;

  const CARD_WIDTH = 340;
  const GAP = 20;
  const CONTAINER_WIDTH = 1350;

  const totalWidth = teamMembers.length * CARD_WIDTH + (teamMembers.length - 1) * GAP;
  const maxTranslateValue = totalWidth - CONTAINER_WIDTH;

  const [translateValue, setTranslateValue] = useState(0);
  const [dragIconName, setDragIconName] = useState("drag-hand");

  const handleSliderChange = (value: number) => {
    setTranslateValue((maxTranslateValue * value) / 100);
  };

  return (
    <section className="relative bg-blackBgColor pb-[60px] pt-[80px] before:absolute before:left-0 before:top-[624px] before:h-[1px] before:w-full before:bg-whiteTextColor before:content-['''']">
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
          <div className="mb-[40px] mr-[-80px] overflow-hidden">
            <ul
              className="flex gap-[20px] transition"
              style={{
                width: totalWidth,
                transform: `translateX(-${translateValue}px)`,
              }}
            >
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} item={member as TeamMember} index={index} />
              ))}
            </ul>
          </div>
          <ReactSlider
            className="group relative h-[49px] cursor-pointer"
            thumbClassName="react-slider-thumb top-1/2 translate-y-[-50%] w-[49px] h-[49px] flex items-center justify-center bg-darkBgColor rounded-full border border-accentYellowColor outline-none hover:h-[59px] hover:w-[59px] focus-visible:h-[59px] focus-visible:w-[59px] cursor-pointer"
            trackClassName="absolute top-1/2 left-0 translate-y-[-50%] h-[3px] rounded-[70px] bg-secondaryDarkBgColor group-hover:bg-accentYellowColor group:focus-visible:bg-accentYellowColor transition"
            onChange={handleSliderChange}
            onBeforeChange={() => setDragIconName("drag-hand-active")}
            onAfterChange={() => setDragIconName("drag-hand")}
            // eslint-disable-next-line
            renderThumb={({ key, ...rest }, state) => (
              <div key={state.index} {...rest}>
                <Icon id={dragIconName} className="size-[25px] fill-whiteTextColor" />
              </div>
            )}
          />
        </motion.div>
      </div>
    </section>
  );
};
