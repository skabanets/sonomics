import { Link } from "react-router-dom";

import { Button, CustomTitle, Modal, ContactForm } from "../components";

import type { Industry } from "../types";
import { useModal } from "../hooks";
import { images } from "../assets";

interface IndustryProps {
  industry: Industry;
  index: number;
}

export const IndustrySliderCard = ({ industry, index }: IndustryProps) => {
  const [isOpen, toggleModal, handleClickOnBackdrop] = useModal();

  const { industriesImages } = images;
  const {
    name,
    description,
    technologies,
    services,
    caseStudy,
    images: imgs,
    buttonText,
  } = industry;
  const img = industriesImages[imgs.image as keyof typeof industriesImages];
  const retinaImg = industriesImages[imgs.retinaImage as keyof typeof industriesImages];

  return (
    <>
      <div
        className={`h-sm:gap-[20px] flex h-full flex-col justify-between gap-[30px] ${index % 2 === 0 ? "bg-letsTalkBgColor" : "bg-primaryBgColor"} ${name === "E-commerce" ? "!bg-darkBgColor text-whiteTextColor" : ""}`}
      >
        <div className="flex justify-between">
          <div className="w-[590px]">
            <h2 className="mb-[28px]">{name}</h2>
            {description.map((item, index) => (
              <h6
                key={index}
                className="h-sm:text-[18px] h-md:mb-[36px] h-lg:mb-[54px] mb-[24px] last:m-0"
              >
                {item}
              </h6>
            ))}
          </div>
          <div
            className={`h-md:p-[40px] w-[590px] rounded-b-[20px] border-t-[4px] border-t-accentOrangeColor p-[30px] ${index % 2 === 0 ? "bg-formFieldBgColor" : "bg-letsTalkBgColor"} ${name === "E-commerce" && "!bg-secondaryDarkBgColor"}`}
          >
            <h5 className="mb-[10px]">{technologies.title}</h5>
            <p className="small-text mb-[30px]">{technologies.description}</p>
            <h5 className="mb-[10px]">{services.title}</h5>
            <p className="small-text">{services.description}</p>
          </div>
        </div>
        <div className="h-sm:gap-y-[20px] h-md:gap-y-[65px] flex flex-wrap justify-between gap-y-[25px]">
          {" "}
          <img
            srcSet={`${img} 1x, ${retinaImg} 2x`}
            src={img}
            alt={name}
            height={319}
            width={625}
            loading="lazy"
            className="h-lg:max-h-[350px] h-lg:h-[33dvh] h-lg:max-w-[660px] h-lg:w-[62dvh] h-md:max-h-[319px] h-sm:h-[225px] h-[30dvh] rounded-[20px] object-cover"
          />
          <div className="flex w-[590px] flex-col items-start justify-center gap-[15px]">
            <h5>{caseStudy.title}</h5>
            <h2 className="h-sm:font-semibold h-sm:text-[24px] text-[30px] leading-[36px]">
              {caseStudy.description}
            </h2>
            <Link to={caseStudy.link} className="view-link before:bg-accentRedColor">
              <CustomTitle
                text="Read more"
                type="h5"
                wrapperStyles="flex items-center gap-[10px] "
                iconColor="fill-accentRedColor"
                titleStyles="text-accentRedColor"
              />
            </Link>
          </div>
          <Button label={buttonText} width="w-[300px]" onClick={toggleModal} />
        </div>
      </div>
      {isOpen && (
        <Modal {...{ toggleModal, handleClickOnBackdrop }}>
          <ContactForm onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};
