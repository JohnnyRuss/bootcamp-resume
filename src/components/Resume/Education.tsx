import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { InputField, TextField, DateSelect, Select, Button } from "../Layouts";
import { MultyFormContainer, MultyForm } from "./forms.styles";

interface EducationType {}

const Education: React.FC<EducationType> = (props) => {
  const [experienceCount, setExperienceCount] = useState<number[]>([0]);
  const navigate = useNavigate();

  return (
    <MultyFormContainer>
      {experienceCount.map((edu, i, arr) => (
        <MultyForm
          key={`experience-step--${edu}`}
          className={`multy-form ${
            i === arr.length - 1 ? "multy-form__last" : ""
          }`}
        >
          <InputField
            hasError={false}
            isChecked={false}
            message="მინიმუმ 2 სიმბოლო"
            label="სასწავლებელი"
            placeholder="სასწავლებელი"
            className="col-span-2"
          />
          <Select
            hasError={false}
            isChecked={false}
            label="ხარისხი"
            placeholder="აირჩიეთ ხარისხი"
            options={[
              { label: "ბაკალავრი", value: "ბაკალავრი" },
              { label: "მაგისტრი", value: "მაგისტრი" },
              { label: "დოქტორი", value: "დოქტორი" },
            ]}
          />
          <DateSelect
            label="დასრულების რიცხვი"
            hasError={false}
            isChecked={false}
          />
          <TextField
            label="აღწერა"
            placeholder="განათლების აღწერა"
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
