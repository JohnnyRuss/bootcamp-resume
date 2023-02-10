import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import {
  PersonalInfoT,
  ExperienceT,
  EducationT,
  ResumeT,
} from "./resume.types";

import { axiosQuery } from "./axiosConfig";

interface ResumeStateT {
  // Forms Data
  personalInfo: PersonalInfoT;
  experience: ExperienceT[];
  education: EducationT[];
  degrees: { label: string; value: string; _id: number }[];

  personalInfoIsChecked: boolean;
  experienceIsChecked: boolean;
  educationIsChecked: boolean;

  // Personal-Info
  setUserName: (val: string) => void;
  setLastName: (val: string) => void;
  setAvatar: (val: string) => void;
  setAboutMe: (val: string) => void;
  setEmail: (val: string) => void;
  setMobile: (val: string) => void;

  // Experience
  createExperienceStep: () => void;
  removeExperienceStep: (step: number) => void;
  setPosition: (step: number, val: string) => void;
  setEmployer: (step: number, val: string) => void;
  setStartDate: (step: number, val: string) => void;
  setEndDate: (step: number, val: string) => void;
  setDescription: (step: number, val: string) => void;

  // Education
  createEducationStep: () => void;
  removeEducationStep: (step: number) => void;
  setCollage: (step: number, val: string) => void;
  setDegree: (step: number, val: { label: string; degree_id: number }) => void;
  setEduEndDate: (step: number, val: string) => void;
  setEduDescription: (step: number, val: string) => void;

  // Reset Resume Forms
  resetResumeForms: () => void;
  setFormIsChecked: (
    form:
      | "personalInfoIsChecked"
      | "experienceIsChecked"
      | "educationIsChecked",
    check: boolean
  ) => void;
  resetFormChecks: () => void;

  // Fetch Degrees
  getDegrees: () => Promise<void>;
}

const ResumeState: ResumeT = {
  personalInfo: {
    name: "",
    surname: "",
    image: "",
    about_me: "",
    email: "",
    phone_number: "",
  },
  experience: [
    {
      position: "",
      description: "",
      employer: "",
      due_date: "",
      start_date: "",
    },
  ],
  education: [
    {
      institute: "",
      degree: {
        label: "",
        degree_id: NaN,
      },
      description: "",
      due_date: "",
    },
  ],
};

export const useResumeStore = create<ResumeStateT>()(
  devtools(
    immer(
      persist(
        (set, get) => ({
          ...ResumeState,

          degrees: [],

          personalInfoIsChecked: false,
          experienceIsChecked: false,
          educationIsChecked: false,

          // Personal Info
          setUserName: (val) =>
            set((state) => {
              state.personalInfo.name = val;
            }),
          setLastName: (val) =>
            set((state) => {
              state.personalInfo.surname = val;
            }),
          setAvatar: (val) =>
            set((state) => {
              state.personalInfo.image = val;
            }),
          setAboutMe: (val) =>
            set((state) => {
              state.personalInfo.about_me = val;
            }),
          setEmail: (val) =>
            set((state) => {
              state.personalInfo.email = val;
            }),
          setMobile: (val) =>
            set((state) => {
              state.personalInfo.phone_number = val;
            }),

          // Experience
          createExperienceStep: () =>
            set((state) => {
              state.experience = [
                ...state.experience,
                {
                  position: "",
                  description: "",
                  employer: "",
                  due_date: "",
                  start_date: "",
                },
              ];
            }),
          removeExperienceStep: (step) =>
            set((state) => {
              state.experience = state.experience.filter((ex, i) => i !== step);
            }),
          setPosition: (step, val) =>
            set((state) => {
              state.experience[step].position = val;
            }),
          setEmployer: (step, val) =>
            set((state) => {
              state.experience[step].employer = val;
            }),
          setStartDate: (step, val) =>
            set((state) => {
              state.experience[step].start_date = val;
            }),
          setEndDate: (step, val) =>
            set((state) => {
              state.experience[step].due_date = val;
            }),
          setDescription: (step, val) =>
            set((state) => {
              state.experience[step].description = val;
            }),

          // Education
          createEducationStep: () =>
            set((state) => {
              state.education = [
                ...state.education,
                {
                  institute: "",
                  degree: {
                    label: "",
                    degree_id: NaN,
                  },
                  description: "",
                  due_date: "",
                },
              ];
            }),
          removeEducationStep: (step) =>
            set((state) => {
              state.education = state.education.filter((ex, i) => i !== step);
            }),
          setCollage: (step, val) =>
            set((state) => {
              state.education[step].institute = val;
            }),
          setDegree: (step, val) =>
            set((state) => {
              state.education[step].degree = {
                label: val.label,
                degree_id: val.degree_id,
              };
            }),
          setEduEndDate: (step, val) =>
            set((state) => {
              state.education[step].due_date = val;
            }),
          setEduDescription: (step, val) =>
            set((state) => {
              state.education[step].description = val;
            }),

          // Reset Resume Forms
          resetResumeForms: () =>
            set((state) => {
              state.personalInfo = ResumeState.personalInfo;
              state.experience = ResumeState.experience;
              state.education = ResumeState.education;
            }),

          setFormIsChecked: (form, check) =>
            set((state) => {
              state[form] = check;
            }),

          resetFormChecks: () => {
            set({
              personalInfoIsChecked: false,
              experienceIsChecked: false,
              educationIsChecked: false,
            });
          },

          // Fetch Degrees
          getDegrees: async () => {
            try {
              const { data }: { data: { id: number; title: string }[] } =
                await axiosQuery("/degrees");

              set({
                degrees: data.map((deg) => ({
                  label: deg.title,
                  value: deg.title,
                  _id: deg.id,
                })),
              });
            } catch (error) {}
          },
        }),
        {
          name: "resume",
        }
      )
    )
  )
);
