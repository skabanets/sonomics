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
      <li
        className={`py-[80px] odd:bg-letsTalkBgColor even:bg-primaryBgColor ${name === "E-commerce" && "!bg-darkBgColor text-whiteTextColor"}`}
      >
        <div className="scrollbar container flex h-[calc(100dvh-140px)] max-h-[1100px] flex-col justify-between gap-[40px]">
          <div className="flex justify-between">
            <div className="w-[590px]">
              <h2 className="mb-[28px]">{name}</h2>
              {description.map((item, index) => (
                <h6 key={index} className="mb-[54px] last:m-0">
                  {item}
                </h6>
              ))}
            </div>
            <div
              className={`w-[590px] rounded-b-[20px] border-t-[4px] border-t-accentOrangeColor p-[40px] ${index % 2 === 0 ? "bg-formFieldBgColor" : "bg-letsTalkBgColor"} ${name === "E-commerce" && "!bg-secondaryDarkBgColor"}`}
            >
              <h5 className="mb-[10px]">{technologies.title}</h5>
              <p className="small-text mb-[30px]">{technologies.description}</p>
              <h5 className="mb-[10px]">{services.title}</h5>
              <p className="small-text">{services.description}</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-y-[65px]">
            {" "}
            <img
              srcSet={`${img} 1x, ${retinaImg} 2x`}
              src={img}
              alt={name}
              height={319}
              width={625}
              loading="lazy"
              className="h-[319px] rounded-[20px] object-cover"
            />
            <div className="flex w-[590px] flex-col items-start justify-center gap-[15px]">
              <h5>{caseStudy.title}</h5>
              <h2>{caseStudy.description}</h2>
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
      </li>
      {isOpen && (
        <Modal {...{ toggleModal, handleClickOnBackdrop }}>
          <ContactForm onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};
