export interface Institution {
  id: string;
  slug: string;
  name: string;
  nameAr: string;
  type: "school" | "early-childhood";
  location: string;
  locationAr: string;
  ageRange: string;
  ageRangeAr: string;
  curriculum: string;
  curriculumAr: string;
  established: number;
  website: string;
  description: string;
  descriptionAr: string;
  fullOverview: string;
  highlights: string[];
  image: string;
  gallery: string[];
  stats: { label: string; value: string }[];
  contact: {
    phone: string;
    email: string;
    address: string;
  };
}

export interface LeadershipMember {
  name: string;
  nameAr: string;
  title: string;
  titleAr: string;
  role: string;
  bio: string;
  bioAr: string;
  image?: string;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  date: string;
  category: string;
  categoryAr: string;
  readTime: string;
  summary: string;
  summaryAr: string;
  content: string[];
  image: string;
}

export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  institution: string;
  location: string;
  type: "Full-Time" | "Part-Time";
  experience: string;
  description: string;
  requirements: string[];
}
