export interface PersonalInfoT {
  name: string;
  surname: string;
  email: string;
  phone_number: string;
  image: string;
  about_me: string;
}

export interface ExperienceT {
  position: string;
  employer: string;
  start_date: string | Date;
  due_date: string | Date;
  description: string;
}

export interface EducationT {
  institute: string;
  degree: { label: string; degree_id: number };
  due_date: Date | string;
  description: string;
}

export interface ResumeT {
  personalInfo: PersonalInfoT;
  experience: ExperienceT[];
  education: EducationT[];
}

export interface ResumeResponseT {
  name: string;
  surname: string;
  email: string;
  phone_number: string;
  experiences: ExperienceT[];
  educations: EducationResT[];
  image: string;
  about_me: string;
}

interface EducationResT extends Omit<EducationT, "degree"> {
  degree: string;
}
