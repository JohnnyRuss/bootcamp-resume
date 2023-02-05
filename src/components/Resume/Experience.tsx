import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { InputField, TextField, DateSelect, Button } from "../Layouts";
import { MultyFormContainer, MultyForm } from "./forms.styles";

interface ExperienceType {}

const Experience: React.FC<ExperienceType> = (props) => {
  const [experienceCount, setExperienceCount] = useState<number[]>([0]);
  const navigate = useNavigate();

  return (
    <MultyFormContainer>
      {experienceCount.map((exp, i, arr) => (
        <MultyForm
          key={`experience-step--${exp}`}
          className={`multy-form ${
            i === arr.length - 1 ? "multy-form__last" : ""
          }`}
        >
          <InputField
            hasError={false}
            isChecked={false}
            message="მინიმუმ 2 სიმბოლო"
            label="თანამდებობა"
            placeholder="თანამდებობა"
            className="col-span-2"
          />
          <InputField
            hasError={false}
            isChecked={false}
            message="მინიმუმ 2 სიმბოლო"
            label="დამსაქმებელი"
            placeholder="დამსაქმებელი"
            className="col-span-2"
          />
          <DateSelect
            label="დაწყების რიცხვი"
            hasError={false}
            isChecked={false}
          />
          <DateSelect
            label="დასრულების რიცხვი"
            hasError={false}
            isChecked={false}
          />
          <TextField
            label="აღწერა"
            placeholder="აღწერა"
            className="col-span-2"
          />
        </MultyForm>
      ))}
      <Button
        type="secondary"
        className="col-span-2"
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          setExperienceCount((prev) => [...prev, (prev[prev.length - 1] += 1)]);
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
