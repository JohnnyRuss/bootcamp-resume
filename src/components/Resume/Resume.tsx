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

  const resume = useResumeStore((state) => ({
    personalInfo: state.personalInfo,
    experience: state.experience,
    education: state.education,
    resetResumeForms: state.resetResumeForms,
  }));

  const location: { title: string; page: number } = pathname.endsWith(
    "/personal-info"
  )
    ? { title: "პირადი ინფო", page: 1 }
    : pathname.endsWith("/experience")
    ? { title: "გამოცდილება", page: 2 }
    : pathname.endsWith("/education")
    ? { title: "განათლება", page: 3 }
    : { title: "", page: NaN };

  const handleBack = () => {
    resume.resetResumeForms();
    navigate("/", { replace: true });
  };

  return (
    <Resume>
      <GoBackBTN handler={handleBack} />

      <div className="inset-container__forms">
        <Head location={location} />
        <div className="forms-wrapper">{children}</div>
      </div>

      <div className="inset-container__resume">
        <UserResume resume={resume} />
      </div>
    </Resume>
  );
};

export default ResumeContainer;
