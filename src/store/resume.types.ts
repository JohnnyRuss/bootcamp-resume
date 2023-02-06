export interface PersonalInfoT {
  name: string;
  lastName: string;
  avatar: string;
  aboutMe: string;
  email: string;
  mobile: string;
}

export interface ExperienceT {
  position: string;
  employer: string;
  startDate: string | Date;
  endDate: string | Date;
  description: string;
}

export interface EducationT {
  collage: string;
  degree: string;
  endDate: Date | string;
  description: string;
}

export interface ResumeT {
  personalInfo: PersonalInfoT;
  experience: ExperienceT[];
  education: EducationT[];
}
