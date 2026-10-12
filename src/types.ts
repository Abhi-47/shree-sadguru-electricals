export type ServiceCategory =
  | 'residential'
  | 'commercial'
  | 'agriculture'
  | 'inverter'
  | 'repairRewinding'
  | 'emergency'
  | 'smart_home'
  | 'ev_chargers';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  shortDesc: string;
  fullDesc: string;
  startingPrice: string;
  estimatedDuration: string;
  keyFeatures: string[];
  codeStandard: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: ServiceCategory;
  location: string;
  completionDate: string;
  summary: string;
  challenge: string;
  solution: string;
  specifications: { label: string; value: string }[];
  tags: string[];
  svgType: string;
  hasBeforeAfter?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  projectType: string;
  date: string;
  content: string;
  verified: boolean;
}
