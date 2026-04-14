export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email' | 'twitter' | 'instagram' | 'codepen';
  url: string;
  label: string;
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  technologies: string[];
  location?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'Programming Languages' | 'Tools' | 'Languages' | 'Cloud' | 'Other';
  proficiency?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  technologies: string[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  featured?: boolean;
  date?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  expirationDate?: string;
  credentialUrl?: string;
  credentialId?: string;
  skills?: string[];
  image?: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  awards?: string[];
}

export interface PortfolioContent {
  personal: {
    name: string;
    email: string;
    title: string;
    bio: string;
    location: string;
  };
  about: {
    headline: string;
    summary: string;
    highlights: string[];
  };
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  certificates: Certificate[];
  education: Education[];
  social: SocialLink[];
}
