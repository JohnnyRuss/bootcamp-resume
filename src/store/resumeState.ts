import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import readFileAsDataUrl from "../lib/readBase64";

import {
  PersonalInfoT,
  ExperienceT,
  EducationT,
  ResumeT,
} from "./resume.types";

interface ResumeStateT {
  // form data
  personalInfo: PersonalInfoT;
  experience: ExperienceT[];
  education: EducationT[];

  // personal-info
  setUserName: (val: string) => void;
  setLastName: (val: string) => void;
  setAvatar: (val: string) => void;
  setAboutMe: (val: string) => void;
  setEmail: (val: string) => void;
  setMobile: (val: string) => void;

  // experience
  createExperienceStep: () => void;
  setPosition: (step: number, val: string) => void;
  setEmployer: (step: number, val: string) => void;
  setStartDate: (step: number, val: string) => void;
  setEndDate: (step: number, val: string) => void;
  setDescription: (step: number, val: string) => void;

  // education
  createEducationStep: () => void;
  setCollage: (step: number, val: string) => void;
  setDegree: (step: number, val: string) => void;
  setEduEndDate: (step: number, val: string) => void;
  setEduDescription: (step: number, val: string) => void;
}

const ResumeState: ResumeT = {
  personalInfo: {
    name: "",
    lastName: "",
    avatar: "",
    aboutMe: "",
    email: "",
    mobile: "",
  },
  experience: [
    {
      position: "",
      description: "",
      employer: "",
      endDate: "",
      startDate: "",
    },
  ],
  education: [
    {
      collage: "",
      degree: "",
      description: "",
      endDate: "",
    },
  ],
};

export const useResumeStore = create<ResumeStateT>()(
  devtools(
    immer(
      persist(
        (set, get) => ({
          ...ResumeState,
          // Personal Info
          setUserName: (val) =>
            set((state) => {
              state.personalInfo.name = val;
            }),
          setLastName: (val) =>
            set((state) => {
              state.personalInfo.lastName = val;
            }),
          setAvatar: (val) =>
            set((state) => {
              state.personalInfo.avatar = val;
            }),
          setAboutMe: (val) =>
            set((state) => {
              state.personalInfo.aboutMe = val;
            }),
          setEmail: (val) =>
            set((state) => {
              state.personalInfo.email = val;
            }),
          setMobile: (val) =>
            set((state) => {
              state.personalInfo.mobile = val;
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
                  endDate: "",
                  startDate: "",
                },
              ];
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
              state.experience[step].startDate = val;
            }),
          setEndDate: (step, val) =>
            set((state) => {
              state.experience[step].endDate = val;
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
                  collage: "",
                  degree: "",
                  description: "",
                  endDate: "",
                },
              ];
            }),
          setCollage: (step, val) =>
            set((state) => {
              state.education[step].collage = val;
            }),
          setDegree: (step, val) =>
            set((state) => {
              state.education[step].degree = val;
            }),
          setEduEndDate: (step, val) =>
            set((state) => {
              state.education[step].endDate = val;
            }),
          setEduDescription: (step, val) =>
            set((state) => {
              state.education[step].description = val;
            }),
        }),
        {
          name: "resume",
        }
      )
    )
  )
);
