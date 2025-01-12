import { BackLink } from "../../../components";

import { routes } from "../../../constants";
import { images } from "../../../assets";

export const CaseStudyHero = () => {
  const {
    caseDetails: { heroImages },
  } = images;

  const items = [
    {
      id: 1,
      title: "Case study 1",
      image: heroImages.case_details_item1_desk_1x,
      retinaImage: heroImages.case_details_item1_desk_2x,
    },
    {
      id: 2,
      title: "Case study 2",
      image: heroImages.case_details_item2_desk_1x,
      retinaImage: heroImages.case_details_item2_desk_2x,
    },
    {
      id: 3,
      title: "Case study 3",
      image: heroImages.case_details_item3_desk_1x,
      retinaImage: heroImages.case_details_item3_desk_2x,
    },
  ];

  return (
    <section className="py-[80px]">
      <div className="container">
        <BackLink to={routes.CaseStudy} label="Back to case studies" className="mb-[20px]" />
        <h1 className="mb-[60px] max-w-[1100px]">Fintech transformation success</h1>
        <ul className="flex h-[260px] gap-[40px]">
          {items.map(({ id, title, image, retinaImage }) => (
            <li key={id} className="even:mt-auto">
              <img
                srcSet={`${image} 1x, ${retinaImage} 2x`}
                src={image}
                alt={title}
                width="400"
                height="210"
                className="h-[210px] rounded-[20px] object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
