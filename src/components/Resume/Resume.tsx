import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useResumeStore } from "../../store/resumeState";

import { ResumeContainer as Resume } from "./styles/resume.styles";
import Head from "./Head";
import UserResume from "./components/UserResume";
import GoBackBTN from "./components/GoBackBTN";

interface ResumeContainerType {
  children: React.ReactNode;
}

const ResumeContainer: React.FC<ResumeContainerType> = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const location: { title: string; page: number; backPath: string } =
    pathname.endsWith("/personal-info")
      ? { title: "პირადი ინფო", page: 1, backPath: "/resume/personal-info" }
      : pathname.endsWith("/experience")
      ? { title: "გამოცდილება", page: 2, backPath: "/resume/personal-info" }
      : pathname.endsWith("/education")
      ? { title: "განათლება", page: 3, backPath: "/resume/experience" }
      : { title: "", page: NaN, backPath: "/" };

  const handleBack = () => navigate(location.backPath);

  const resume = useResumeStore((state) => ({
    personalInfo: state.personalInfo,
    experience: state.experience,
    education: state.education,
  }));

  return (
    <Resume>
      <GoBackBTN handler={handleBack} />

      <div className="inset-container__forms">
        <Head location={location} />
        <div className="forms-wrapper">{children}</div>
      </div>

      <div className="inset-container__resume">
        <UserResume resume={resume} />
        <figure className="logo-small">
          <img src="/assets/icons/logo-small.svg" alt="redberry logo" />
        </figure>
      </div>
    </Resume>
  );
};

export default ResumeContainer;
