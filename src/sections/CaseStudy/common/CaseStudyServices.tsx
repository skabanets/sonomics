import { Button, ContactForm, Modal } from "../../../components";

import { caseStudyColors, services } from "../../../constants";
import { useModal } from "../../../hooks";
import { images } from "../../../assets";

export const CaseStudyServices = () => {
  const [isOpen, toggleModal, handleClickOnBackdrop] = useModal();

  const items = services.slice(0, 4).map((item) => {
    return {
      name: item.name,
      image: item.hero.image,
      retinaImage: item.hero.retinaImage,
    };
  });

  const {
    servicesDetails: { heroImages },
  } = images;

  return (
    <>
      <section className="pb-[80px] pt-[100px]">
        <div className="container">
          <div className="mb-[30px] flex items-start justify-between">
            <div className="max-w-[815px]">
              <h2 className="mb-[20px]">Services</h2>
              <h6>
                To address these challenges, Sonomics applied our End-to-End Application Development
                expertise, coupled with Requirement Analysis & Development Planning, Agile
                Methodologies, and Cloud Integration with Leading Providers. Here's how we delivered
                a comprehensive solution:
              </h6>
            </div>
            <Button label="Let’s discuss your project" width="w-[300px]" onClick={toggleModal} />
          </div>
        </div>
        <ul className="flex flex-col gap-[30px]">
          {items.map(({ name, image, retinaImage }, index) => {
            const itemBgColor = `bg-${caseStudyColors[index % caseStudyColors.length]}`;

            const img = heroImages[image as keyof typeof heroImages];
            const retinaImg = heroImages[retinaImage as keyof typeof heroImages];

            return (
              <li
                key={index}
                className={`sticky text-whiteTextColor ${itemBgColor}`}
                style={{ top: `${65 + index * 15}px` }}
              >
                <div className="container">
                  <div className="flex justify-between p-[40px] pr-[50px]">
                    <div className="max-w-[630px]">
                      <h3 className="mb-[20px]">{name}</h3>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis ipsum id
                        aspernatur, non autem aperiam delectus praesentium sequi facere odio
                        voluptate quis incidunt harum ullam, nulla nihil optio. Quidem, sint.
                      </p>
                    </div>
                    <img
                      srcSet={`${img} 1x, ${retinaImg} 2x`}
                      src={img}
                      alt={name}
                      width="492"
                      height="320"
                      className="h-[320px] rounded-[20px] object-cover"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      {isOpen && (
        <Modal {...{ toggleModal, handleClickOnBackdrop }}>
          <ContactForm onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};
