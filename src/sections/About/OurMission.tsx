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
    <section className="bg-ourMisionBgColor pb-[50px] md:pb-0">
      <div className="mx-auto md:flex md:max-h-[600px]">
        <img
          srcSet={`${commonImages.our_mission_1x} 1x, ${commonImages.our_mission_2x} 2x`}
          src={commonImages.our_mission_1x}
          alt="Illustration of city skyscrapers"
          width="720"
          height="600"
          className="mb-[50px] h-[260px] w-full object-cover md:mb-0 md:h-auto md:w-1/2"
        />
        <motion.div
          className="mx-auto flex max-w-[390px] flex-col justify-center px-[15px] transition md:w-1/2 md:max-w-[768px] md:pl-[70px] md:pr-[150px] lg:max-w-none"
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
