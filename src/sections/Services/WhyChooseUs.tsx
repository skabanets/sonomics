import { motion } from "framer-motion";

import { images } from "../../assets";
import { useTheme } from "../../hooks";
import { ThemeMode, slideInWithFade, whyChooseUsPoints } from "../../constants";

export const WhyChooseUs = () => {
  const { whyChooseUsImages } = images;
  const { theme } = useTheme();

  return (
    <section className="bg-secondaryBgColor py-[50px] md:pb-[70px] lg:pb-[130px] lg:pt-[100px]">
      <motion.div className="container" {...slideInWithFade}>
        <h2 className="mb-[60px] tablet:mb-[40px]">Why choose us</h2>
        <ul className="flex flex-col gap-y-[30px] md:flex-row md:flex-wrap md:justify-between md:gap-x-[20px] md:gap-y-[40px]">
          {whyChooseUsPoints.map((item, index) => {
            const imageTheme = theme === ThemeMode.DARK ? item.images.dark : item.images.light;

            return (
              <li key={index} className="md:w-[342px] lg:w-[250px]">
                <img
                  srcSet={`${whyChooseUsImages[imageTheme[0] as keyof typeof whyChooseUsImages]} 1x, ${whyChooseUsImages[imageTheme[1] as keyof typeof whyChooseUsImages]} 2x`}
                  src={whyChooseUsImages[imageTheme[0] as keyof typeof whyChooseUsImages]}
                  alt={item.title}
                  width={item.images.imageWidth}
                  height="170"
                  loading="lazy"
                  className={`mx-auto mb-[40px] w-[${item.images.imageWidth}] h-[170px] object-cover md:w-auto`}
                />
                <h4 className="mb-[10px]">{item.title}</h4>
                <p className="small-text text-secondaryTextColor">{item.description}</p>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
};
