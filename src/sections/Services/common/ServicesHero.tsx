import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { BackLink, Button, ContactForm, Modal } from "../../../components";

import { useModal } from "../../../hooks";
import type { Hero } from "../../../types";
import { routes, slideInWithFade } from "../../../constants";
import { images } from "../../../assets";

interface ServicesHeroProps {
  title: string;
  hero: Hero;
}

export const ServicesHero = ({ title, hero }: ServicesHeroProps) => {
  const { id } = useParams();

  const [isOpen, toggleModal, handleClickOnBackdrop] = useModal();

  const getImageWidth = () => {
    if (id && id === routes.EndToEndApplicationDevelopment.slice(10)) {
      return "540";
    } else if (id === routes.CloudIntegration.slice(10)) {
      return "470";
    } else {
      return "460";
    }
  };

  const imageWidth = getImageWidth();

  const {
    servicesDetails: { heroImages },
  } = images;

  const { boldText, text, image, retinaImage } = hero;
  const img = heroImages[image as keyof typeof heroImages];
  const retinaImg = heroImages[retinaImage as keyof typeof heroImages];

  return (
    <>
      <section className="pb-[50px] pt-[30px] md:pb-[80px] md:pt-[100px]">
        <motion.div className="container" {...slideInWithFade}>
          <BackLink
            to={routes.Services}
            label="Back to services"
            className="mb-[10px] md:mb-[20px]"
          />
          <h1
            className={`mb-[20px] md:mb-[30px] ${id === routes.AgileMethodologies.slice(10) ? "max-w-[1182px]" : "max-w-[918px]"}`}
          >
            {title}
          </h1>
          <div className="flex flex-col gap-y-[30px] md:flex-row md:items-center md:justify-between">
            <div className="md:max-w-[675px]">
              {boldText && <h5 className="mb-[20px]">{boldText}</h5>}
              {text.map((text, index) => (
                <p key={index} className="big-text mb-[20px] first:mb-[30px] md:first:mb-[40px]">
                  {text}
                </p>
              ))}
              <Button
                label="Let&#8217;s discuss your project"
                className="w-[300px]"
                onClick={toggleModal}
              />
            </div>
            <img
              srcSet={`${img} 1x, ${retinaImg} 2x`}
              src={img}
              alt={title}
              width={imageWidth}
              height="406"
              className={`h-[300px] rounded-t-[20px] object-cover md:h-auto ${id !== routes.CloudIntegration.slice(10) ? "rounded-b-[20px]" : ""}`}
            />
          </div>
        </motion.div>
      </section>
      {isOpen && (
        <Modal {...{ toggleModal, handleClickOnBackdrop }}>
          <ContactForm onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};
