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
      <section className="pb-[80px] pt-[100px]">
        <div className="container">
          <motion.div
            className="sticky top-[40px] mb-[30px] flex items-start justify-between"
            {...slideInWithFade}
          >
            <div className="max-w-[815px]">
              <h2 className="mb-[20px]">Services</h2>
              {text && <h6>{text}</h6>}
            </div>
            <Button
              label="Let&#8217;s discuss your project"
              width="w-[300px]"
              onClick={toggleModal}
            />
          </motion.div>
          <ul className="flex flex-col gap-[30px]">
            {servicesData.map(({ name, description, link, image, retinaImage }, index) => {
              const itemBgColor = `bg-${caseStudyColors[index % caseStudyColors.length]}`;

              const img = heroImages[image as keyof typeof heroImages];
              const retinaImg = heroImages[retinaImage as keyof typeof heroImages];

              return (
                <li
                  key={index}
                  className={`sticky rounded-[20px] text-whiteTextColor ${itemBgColor}`}
                  style={{ top: ` ${index === 0 ? 290 : 290 + index * 15}px` }}
                >
                  <motion.div
                    className="flex justify-between p-[40px] pr-[50px]"
                    {...slideInWithFade}
                  >
                    <div className="max-w-[630px]">
                      <h3 className="mb-[20px]">{name}</h3>
                      <p className="mb-[20px] max-w-[450px]">{description}</p>
                      <Link to={link} className="view-link inline-block before:bg-whiteTextColor">
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
                      className="h-[320px] rounded-[20px] object-cover"
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
