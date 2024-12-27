export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  github?: string;
  linkedin?: string;
  logoUrl?: string;
  profilePictureUrl?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  year: string;
}