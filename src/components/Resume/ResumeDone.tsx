/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useResumeStore } from "../../store/resumeState";

import { ResumeDoneContainer } from "./styles/resume.styles";
import UserResume from "./components/UserResume";
import GoBackBTN from "./components/GoBackBTN";

import { ResumeResponseT } from "../../store/resume.types";

const ResumeDone: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const {
    personalInfoIsChecked,
    experienceIsChecked,
    educationIsChecked,
    resetFormChecks,
  } = useResumeStore();

  const userResume: ResumeResponseT = state.userResume;

  const [openSuccess, setOpenSuccess] = useState<boolean>(true);

  function goHome() {
    resetFormChecks();
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
          resume={{
            personalInfo: {
              about_me: userResume.about_me,
              email: userResume.email,
              image: userResume.image,
              name: userResume.name,
              phone_number: userResume.phone_number,
              surname: userResume.surname,
            },
            education: userResume.educations.map((edu) => ({
              degree: {
                label: edu.degree,
                degree_id: NaN,
              },
              description: edu.description,
              due_date: edu.due_date,
              institute: edu.institute,
            })),
            experience: userResume.experiences,
          }}
        />
        {openSuccess && (
          <div className="success-modal">
            <span>რეზიუმე წარმატებით გაიგზავნა 🎉</span>
            <button className="close-btn" onClick={() => setOpenSuccess(false)}>
              <figure>
                <img src="/assets/icons/close.svg" alt="" />
              </figure>
            </button>
          </div>
        )}
      </div>
    </ResumeDoneContainer>
  );
};

export default ResumeDone;
