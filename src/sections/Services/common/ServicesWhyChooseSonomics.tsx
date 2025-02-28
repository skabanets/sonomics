import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { CustomSwiper } from "../../../components";

import { slideInWithFade } from "../../../constants";
import { images } from "../../../assets";
import type { WhyChooseSonomicsItem } from "../../../types";

interface ServicesWhyChooseSonomicsProps {
  items: WhyChooseSonomicsItem[];
}

export const ServicesWhyChooseSonomics = ({ items }: ServicesWhyChooseSonomicsProps) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767.98px)" });
  const {
    servicesDetails: { whyChooseSonomics },
  } = images;

  return (
    <>
      <section className="py-[50px] lg:py-[100px]">
        <div className="container relative">
          <motion.div
            className="mb-[50px] flex flex-col gap-y-[20px] md:mb-[40px] lg:flex-row lg:items-center lg:justify-between"
            {...slideInWithFade}
          >
            <h2 className="font-black md:leading-[58px] lg:max-w-[852px]">Why choose Sonomics</h2>
          </motion.div>

          {isMobile && (
            <CustomSwiper
              items={items}
              images={whyChooseSonomics}
              animationProps={slideInWithFade}
              isWhyChooseSonomics
            />
          )}

          <ul className="hidden md:flex md:flex-wrap md:gap-[30px] lg:gap-[40px]">
            {items.map((item, index) => {
              const img = whyChooseSonomics[item.image as keyof typeof whyChooseSonomics];
              const retinaImg =
                whyChooseSonomics[item.retinaImage as keyof typeof whyChooseSonomics];
              return (
                <motion.li
                  key={index}
                  className="flex rounded-[40px] bg-letsTalkBgColor transition md:w-full lg:w-[620px]"
                  {...slideInWithFade}
                >
                  <img
                    srcSet={`${img} 1x, ${retinaImg} 2x`}
                    src={img}
                    alt="Why choose Sonomics image"
                    width="286"
                    height="301"
                    className={`h-full w-[280px] rounded-l-[40px] bg-letsTalkBgColor object-cover lg:h-auto lg:w-auto`}
                    loading="lazy"
                  />
                  <div className="flex flex-col justify-center md:gap-[10px] md:p-[30px]">
                    {" "}
                    <h5>{item.title}</h5>
                    <p className="small-text text-secondaryTextColor">{item.description}</p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};
