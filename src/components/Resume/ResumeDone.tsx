/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useResumeStore } from "../../store/resumeState";

import { ResumeDoneContainer } from "./styles/resume.styles";
import UserResume from "./components/UserResume";
import GoBackBTN from "./components/GoBackBTN";
import PDF from "./PDF/PDF";

const ResumeDone: React.FC = () => {
  const navigate = useNavigate();

  const {
    personalInfo,
    education,
    resetResumeForms,
    experience,
    resetFormChecks,
    educationIsChecked,
    experienceIsChecked,
    personalInfoIsChecked,
  } = useResumeStore();

  const resetState = () => {
    resetFormChecks();
    resetResumeForms();
  };

  function goHome() {
    resetState();
    navigate("/", { replace: true, state: "" });
  }

  // prevent route hack
  useEffect(() => {
    if (!personalInfoIsChecked) navigate("/resume/personal-info");
    else if (!experienceIsChecked) navigate("/resume/experience");
    else if (!educationIsChecked) navigate("/resume/education");
  }, []);

  return (
    <ResumeDoneContainer>
      <GoBackBTN handler={goHome} />
      <div className="resume--wrapper">
        <UserResume
          className="done-resume"
          resume={{ experience, education, personalInfo }}
        />
        <PDF resume={{ personalInfo, education, experience }} />
      </div>
    </ResumeDoneContainer>
  );
};

export default ResumeDone;
