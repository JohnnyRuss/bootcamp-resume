/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  useValidateInLoop,
  useDescendentValidation,
} from "../../hooks/useValidate";
import { useResumeStore } from "../../store/resumeState";

import { Button } from "../Layouts";
import EducationFormStep from "./components/EducationFormStep";
import { MultyFormContainer } from "./styles/forms.styles";

const Education: React.FC = () => {
  const navigate = useNavigate();

  const {
    education,
    setFormIsChecked,
    experienceIsChecked,
    createEducationStep,
    personalInfoIsChecked,
  } = useResumeStore();

  const {
    allDescendentValidators,
    validatorsElevator,
    removeElevatedValidators,
  } = useDescendentValidation();

  const initValidateInLoop = useValidateInLoop();

  async function submitResume(e: React.MouseEvent<HTMLFormElement>) {
    e.preventDefault();

    const isError = initValidateInLoop(
      allDescendentValidators.map((executor) => executor.validate)
    );

    setFormIsChecked("educationIsChecked", !isError);

    if (isError) return;

    navigate("/user-resume");
  }

  // prevent route hack
  useEffect(() => {
    if (!personalInfoIsChecked) navigate("/resume/personal-info");
    else if (!experienceIsChecked) navigate("/resume/experience");
  }, []);

  return (
    <>
      <MultyFormContainer>
        {education.map((edu, i, arr) => (
          <EducationFormStep
            education={edu}
            step={i}
            last={i === arr.length - 1}
            key={`experience-step--${i}`}
            validatorsElevator={validatorsElevator}
            removeElevatedValidators={removeElevatedValidators}
          />
        ))}
        <Button
          type="secondary"
          className="col-span-2"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            createEducationStep();
          }}
        >
          მეტი სასწავლებლის დამატება
        </Button>
        <div className="navigate-btns__box">
          <Button
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              navigate("/resume/experience");
            }}
          >
            უკან
          </Button>
          <Button onClick={submitResume}>დასრულება</Button>
        </div>
      </MultyFormContainer>
    </>
  );
};

export default Education;
