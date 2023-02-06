import React from "react";
import { useResumeStore } from "../../../store/resumeState";

import { InputField, DateSelect, TextField } from "../../Layouts";
import { MultyForm } from "../styles/forms.styles";

import { ExperienceT } from "../../../store/resume.types";
interface ExperienceFormStepType {
  experience: ExperienceT;
  step: number;
  last: boolean;
}

const ExperienceFormStep: React.FC<ExperienceFormStepType> = ({
  experience,
  step,
  last
}) => {
  const { setPosition, setEmployer, setStartDate, setEndDate, setDescription } =
    useResumeStore();

  return (
    <MultyForm
      className={`multy-form ${last ? "multy-form__last" : ""}`}
    >
      <InputField
        hasError={false}
        isChecked={false}
        message="მინიმუმ 2 სიმბოლო"
        label="თანამდებობა"
        placeholder="თანამდებობა"
        className="col-span-2"
        value={experience.position}
        onChange={(e) => setPosition(step, e.currentTarget.value)}
      />

      <InputField
        hasError={false}
        isChecked={false}
        message="მინიმუმ 2 სიმბოლო"
        label="დამსაქმებელი"
        placeholder="დამსაქმებელი"
        className="col-span-2"
        value={experience.employer}
        onChange={(e) => setEmployer(step, e.currentTarget.value)}
      />

      <DateSelect
        label="დაწყების რიცხვი"
        hasError={false}
        isChecked={false}
        value={experience.startDate}
        onChange={(e) => setStartDate(step, e.currentTarget.value)}
      />

      <DateSelect
        label="დასრულების რიცხვი"
        hasError={false}
        isChecked={false}
        value={experience.endDate}
        onChange={(e) => setEndDate(step, e.currentTarget.value)}
      />

      <TextField
        label="აღწერა"
        placeholder="აღწერა"
        className="col-span-2"
        value={experience.description}
        onChange={(e) => setDescription(step, e.currentTarget.value)}
      />
    </MultyForm>
  );
};

export default ExperienceFormStep;
