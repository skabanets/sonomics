export interface Hero {
  image: string;
  retinaImage: string;
  text: string[];
  boldText?: string;
}

export interface Offers {
  sectionTitle: string;
  image: string;
  retinaImage: string;
  offersList: OfferDate[];
}

export interface OfferDate {
  offerName: string;
  details: string[];
  keyBenefits?: string[];
}

export interface WhyChooseSonomics {
  sectionTitle: string;
  items: WhyChooseSonomicsItem[];
}

interface WhyChooseSonomicsItem {
  title: string;
  description: string;
  image: string;
  retinaImage: string;
}

export interface Expertise {
  text: string;
  accentWords: string[];
}

export interface Technologies {
  sectionTitle: string;
  cards: TechnologyCard[];
  description?: string;
}

export interface TechnologyCard {
  technologyTitle: string;
  technologyProperties: TechnologyData[];
}

interface TechnologyData {
  name: string;
  text: string | string[];
}

export interface ApproachAndAdvantages {
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
  whyChooseSonomics: WhyChooseSonomics;
  caseStudyId: string;
  expertise?: Expertise;
  technologies?: Technologies;
  approachAndAdvantages?: ApproachAndAdvantages;
}
