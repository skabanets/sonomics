import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { Button, ContactForm, CustomSwiper, Modal } from "../../../components";

import { useModal } from "../../../hooks";
import { slideInWithFade } from "../../../constants";
import type { WhyChooseSonomics } from "../../../types";
import { images } from "../../../assets";

interface ServicesWhyChooseSonomicsProps {
  content: WhyChooseSonomics;
}

export const ServicesWhyChooseSonomics = ({ content }: ServicesWhyChooseSonomicsProps) => {
  const [isOpen, toggleModal, handleClickOnBackdrop] = useModal();

  const isMobile = useMediaQuery({ query: "(max-width: 767.98px)" });
  const {
    servicesDetails: { whyChooseSonomics },
  } = images;
  const { sectionTitle, items } = content;

  return (
    <>
      <section className="py-[50px] lg:py-[100px]">
        <div className="container relative">
          <motion.div
            className="mb-[50px] flex flex-col gap-y-[20px] md:mb-[40px] lg:flex-row lg:items-center lg:justify-between"
            {...slideInWithFade}
          >
            <h2 className="font-black md:leading-[58px] lg:max-w-[852px]">{sectionTitle}</h2>
            <Button
              label="Let&#8217;s discuss your project"
              className="w-[300px]"
              onClick={toggleModal}
            />
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
                    alt={sectionTitle}
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
      {isOpen && (
        <Modal {...{ toggleModal, handleClickOnBackdrop }}>
          <ContactForm onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};
