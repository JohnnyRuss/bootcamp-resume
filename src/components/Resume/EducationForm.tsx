import React from "react";
import { useNavigate } from "react-router-dom";
import { useResumeStore } from "../../store/resumeState";

import { Button } from "../Layouts";
import EducationFormStep from "./components/EducationFormStep";
import { MultyFormContainer } from "./styles/forms.styles";

const Education: React.FC = () => {
  const { education, createEducationStep } = useResumeStore();
  const navigate = useNavigate();

  return (
    <MultyFormContainer>
      {education.map((edu, i, arr) => (
        <EducationFormStep
          education={edu}
          step={i}
          last={i === arr.length - 1}
          key={`experience-step--${i}`}
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
        <Button
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            navigate("/user-resume");
          }}
        >
          დასრულება
        </Button>
      </div>
    </MultyFormContainer>
  );
};

export default Education;
