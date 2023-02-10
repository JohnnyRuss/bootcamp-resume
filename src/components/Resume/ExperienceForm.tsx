/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  useDescendentValidation,
  useValidateInLoop,
} from "../../hooks/useValidate";
import { ErrorT } from "../../hooks/useValidate";
import { useResumeStore } from "../../store/resumeState";

import { Button } from "../Layouts";
import { MultyFormContainer } from "./styles/forms.styles";
import ExperienceFormStep from "./components/ExperienceFormStep";

export type SetAllValidatorsPropsT = { step: number; validate: () => ErrorT }[];

const Experience: React.FC = () => {
  const navigate = useNavigate();

  const {
    experience,
    createExperienceStep,
    personalInfoIsChecked,
    setFormIsChecked,
  } = useResumeStore();

  const {
    allDescendentValidators,
    validatorsElevator,
    removeElevatedValidators,
  } = useDescendentValidation();

  const initValidateInLoop = useValidateInLoop();

  function navigateToNextForm(e: React.MouseEvent<HTMLFormElement>) {
    e.preventDefault();

    const isError = initValidateInLoop(
      allDescendentValidators.map((executor) => executor.validate)
    );

    setFormIsChecked("experienceIsChecked", !isError);

    if (!isError) navigate("/resume/education");
  }

  // prevent route hack
  useEffect(() => {
    if (!personalInfoIsChecked) navigate("/resume/personal-info");
  }, []);

  return (
    <MultyFormContainer>
      {experience.map((exp, i, arr) => (
        <ExperienceFormStep
          experience={exp}
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
          createExperienceStep();
        }}
      >
        მეტი გამოცდილების დამატება
      </Button>
      <div className="navigate-btns__box">
        <Button
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            navigate("/resume/personal-info");
          }}
        >
          უკან
        </Button>
        <Button onClick={navigateToNextForm}>შემდეგი</Button>
      </div>
    </MultyFormContainer>
  );
};

export default Experience;
