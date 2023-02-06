import React from "react";
import { useNavigate } from "react-router-dom";
import { useResumeStore } from "../../store/resumeState";

import { Button } from "../Layouts";
import { MultyFormContainer } from "./styles/forms.styles";
import ExperienceFormStep from "./components/ExperienceFormStep";

const Experience: React.FC = () => {
  const { experience, createExperienceStep } = useResumeStore();
  const navigate = useNavigate();

  return (
    <MultyFormContainer>
      {experience.map((exp, i, arr) => (
        <ExperienceFormStep
          experience={exp}
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
        <Button
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            navigate("/resume/education");
          }}
        >
          შემდეგი
        </Button>
      </div>
    </MultyFormContainer>
  );
};

export default Experience;
