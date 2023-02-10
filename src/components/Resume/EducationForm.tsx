/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  useValidateInLoop,
  useDescendentValidation,
} from "../../hooks/useValidate";
import { useResumeStore } from "../../store/resumeState";
import { convertBase64ToFile } from "../../lib/readBase64";
import { axioFormDataQuery } from "../../store/axiosConfig";

import { Button, Spinner } from "../Layouts";
import EducationFormStep from "./components/EducationFormStep";
import { MultyFormContainer } from "./styles/forms.styles";

const Education: React.FC = () => {
  const navigate = useNavigate();

  const {
    personalInfo,
    education,
    experience,
    createEducationStep,
    personalInfoIsChecked,
    experienceIsChecked,
    setFormIsChecked,
    resetResumeForms,
  } = useResumeStore();

  const {
    allDescendentValidators,
    validatorsElevator,
    removeElevatedValidators,
  } = useDescendentValidation();

  const initValidateInLoop = useValidateInLoop();

  const [loading, setIsLoading] = useState<boolean>(false);

  async function submitResume(e: React.MouseEvent<HTMLFormElement>) {
    e.preventDefault();

    const isError = initValidateInLoop(
      allDescendentValidators.map((executor) => executor.validate)
    );

    setFormIsChecked("educationIsChecked", !isError);

    const file = await convertBase64ToFile(personalInfo.image);
    const resumeCredentials = {
      ...personalInfo,
      image: file,
      experiences: experience,
      educations: [...education].map((edu) => ({
        degree_id: edu.degree.degree_id,
        institute: edu.institute,
        due_date: edu.due_date,
        description: edu.description,
      })),
    };

    try {
      if (isError) return;

      setIsLoading(true);
      const { data } = await axioFormDataQuery.post("/cvs", resumeCredentials);
      // 1. resetResume in state
      resetResumeForms();
      // 2. navigate to /user-resume and pass response to route
      navigate("/user-resume", { state: { userResume: data } });
    } catch (err) {
      // console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  // prevent route hack
  useEffect(() => {
    if (!personalInfoIsChecked) navigate("/resume/personal-info");
    else if (!experienceIsChecked) navigate("/resume/experience");
  }, []);

  return (
    <>
      {loading && <Spinner />}
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
