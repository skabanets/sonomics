import { motion } from "framer-motion";

import { images } from "../../assets";
import { opacityFade } from "../../constants";

export const OurMission = () => {
  const { commonImages } = images;

  const ourMissionProps = {
    ...opacityFade,
    transition: {
      ...opacityFade.transition,
      delay: 0.6,
    },
  };

  return (
    <section className="bg-ourMisionBgColor">
      <div className="mx-auto flex max-h-[600px]">
        <img
          srcSet={`${commonImages.our_mission_1x} 1x, ${commonImages.our_mission_2x} 2x`}
          src={commonImages.our_mission_1x}
          alt="Illustration of city skyscrapers"
          width="720"
          height="600"
          className="w-1/2 object-cover"
        />
        <motion.div
          className="flex w-1/2 flex-col justify-center pl-[70px] pr-[150px] transition"
          {...ourMissionProps}
        >
          <h2 className="mb-[24px] text-whiteTextColor">Our mission</h2>
          <h4 className="mb-[20px] text-accentYellowColor">End-to-End Application Development</h4>
          <p className="big-text text-whiteTextColor">
            Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod. Ut enim ad minim veniam, quis nostrud. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Ut enim ad minim veniam,
            quis nostrud. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
