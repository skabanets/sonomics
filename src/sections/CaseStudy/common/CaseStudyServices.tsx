import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Button, ContactForm, CustomTitle, Modal } from "../../../components";

import { caseStudyColors, slideInWithFade } from "../../../constants";
import { useModal } from "../../../hooks";
import { images } from "../../../assets";
import type { CaseStudyServicesType } from "../../../types";

interface CaseStudyServicesProps {
  services: CaseStudyServicesType;
}

export const CaseStudyServices = ({ services }: CaseStudyServicesProps) => {
  const [isOpen, toggleModal, handleClickOnBackdrop] = useModal();

  const { text, servicesData } = services;

  const {
    servicesDetails: { heroImages },
  } = images;

  return (
    <>
      <section className="py-[50px] lg:pb-[80px] lg:pt-[100px]">
        <div className="container">
          <motion.div
            className="mb-[30px] md:flex md:flex-wrap md:items-start md:justify-between md:gap-y-[20px] lg:sticky lg:top-[40px]"
            {...slideInWithFade}
          >
            <h2 className="mb-[30px] md:mb-0 md:max-w-[815px]">Services</h2>
            <Button
              label="Let&#8217;s discuss your project"
              className="mb-[20px] w-[300px] md:mb-0"
              onClick={toggleModal}
            />
            {text && <h6 className="">{text}</h6>}
          </motion.div>
          <ul className="flex flex-col gap-[30px]">
            {servicesData.map(({ name, description, link, image, retinaImage }, index) => {
              const itemBgColor = `bg-${caseStudyColors[index % caseStudyColors.length]}`;

              const img = heroImages[image as keyof typeof heroImages];
              const retinaImg = heroImages[retinaImage as keyof typeof heroImages];

              return (
                <li
                  key={index}
                  className={`rounded-[20px] text-whiteTextColor lg:sticky ${itemBgColor}`}
                  style={{ top: ` ${index === 0 ? 290 : 290 + index * 15}px` }}
                >
                  <motion.div
                    className="px-[15px] py-[30px] md:p-[40px] md:pr-[50px] lg:flex lg:justify-between"
                    {...slideInWithFade}
                  >
                    <div className="md:max-w-[630px]">
                      <h3 className="mb-[20px]">{name}</h3>
                      <h6 className="mb-[20px] !text-[20px] !leading-[36px] lg:max-w-[450px]">
                        {description}
                      </h6>
                      <Link
                        to={link}
                        className="view-link mb-[30px] inline-block before:bg-whiteTextColor lg:mb-0"
                      >
                        <CustomTitle
                          text="Read more"
                          type="h5"
                          wrapperStyles="flex items-center gap-[10px] "
                          iconColor="fill-whiteTextColor"
                          titleStyles="text-whiteTextColor"
                        />
                      </Link>
                    </div>
                    <img
                      srcSet={`${img} 1x, ${retinaImg} 2x`}
                      src={img}
                      alt={name}
                      width="492"
                      height="320"
                      className="h-[300px] rounded-[20px] object-cover md:w-full lg:h-[320px] lg:w-[492px]"
                      loading="lazy"
                    />
                  </motion.div>
                </li>
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
