import { motion } from "framer-motion";

import { Accordion } from "../../../components";

import { slideInWithFade } from "../../../constants";
import { images } from "../../../assets";
import type { Offers } from "../../../types";

interface ServicesWhatWeOfferProps {
  offers: Offers;
}

export const ServicesWhatWeOffer = ({ offers }: ServicesWhatWeOfferProps) => {
  const { sectionTitle, image, retinaImage, offersList } = offers;
  const {
    servicesDetails: { offersImages },
  } = images;

  const img = offersImages[image as keyof typeof offersImages];
  const retinaImg = offersImages[retinaImage as keyof typeof offersImages];

  return (
    <>
      <section className="bg-letsTalkBgColor py-[50px] lg:py-[80px]">
        <motion.div className="container" {...slideInWithFade}>
          <h2>{sectionTitle}</h2>
          <div className="flex flex-col items-start gap-[57px] pt-[40px] lg:flex-row lg:justify-between">
            <img
              srcSet={`${img} 1x, ${retinaImg} 2x`}
              src={img}
              alt={sectionTitle}
              width={530}
              height={510}
              loading="lazy"
              className="h-[300px] w-full rounded-[15px] object-cover md:h-[510px]"
            />
            <Accordion offersList={offersList} />
          </div>
        </motion.div>
      </section>
    </>
  );
};
