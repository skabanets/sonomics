interface Hero {
  image: string;
  retinaImage: string;
  text: string[];
  boldText?: string;
}

interface Offers {
  sectionTitle: string;
  image: string;
  retinaImage: string;
  offersList: OfferDate[];
}

interface OfferDate {
  offerName: string;
  details: string[];
  keyBenefits?: string[];
}

interface WhyChooseUs {
  sectionTitle: string;
  items: WhyChooseUsItem[];
}

interface WhyChooseUsItem {
  title: string;
  description: string;
  image: string;
  retinaImage: string;
}

interface Expertise {
  text: string;
  accentWords: string[];
}

interface Technologies {
  sectionTitle: string;
  cards: TechnologyCard[];
  description?: string;
}

interface TechnologyCard {
  technologyTitle: string;
  technologyProperties: TechnologyData[];
}

interface TechnologyData {
  name: string;
  text: string | string[];
}

interface ApproachAndAdvantages {
  sectionTitle: string;
  items: ApproachAndAdvantagesItem[];
}

interface ApproachAndAdvantagesItem {
  description: string | string[];
  icon: string;
  name?: string;
}

export interface Service {
  id: string;
  name: string;
  title: string;
  link: string;
  features: string[];
  hero: Hero;
  offers: Offers;
  whyChooseUs: WhyChooseUs;
  caseStudyId: number;
  expertise?: Expertise;
  technologies?: Technologies;
  approachAndAdvantages?: ApproachAndAdvantages;
}
