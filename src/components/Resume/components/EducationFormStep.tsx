import React from "react";
import { useResumeStore } from "../../../store/resumeState";

import { MultyForm } from "../styles/forms.styles";
import { InputField, Select, DateSelect, TextField } from "../../Layouts";

import { EducationT } from "../../../store/resume.types";
interface EducationFormStepType {
  education: EducationT;
  step: number;
  last: boolean;
}

const EducationFormStep: React.FC<EducationFormStepType> = ({
  education,
  step,
  last,
}) => {
  const { setCollage, setDegree, setEduEndDate, setEduDescription } =
    useResumeStore();

  return (
    <MultyForm className={`multy-form ${last ? "multy-form__last" : ""}`}>
      <InputField
        hasError={false}
        isChecked={false}
        message="მინიმუმ 2 სიმბოლო"
        label="სასწავლებელი"
        placeholder="სასწავლებელი"
        className="col-span-2"
        value={education.collage}
        onChange={(e) => setCollage(step, e.currentTarget.value)}
      />

      <Select
        hasError={false}
        isChecked={false}
        label="ხარისხი"
        placeholder="აირჩიეთ ხარისხი"
        onSelect={(val) => setDegree(step, val)}
        defaultVal={{
          label: education.degree,
          value: education.degree,
        }}
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
        value={education.endDate}
        onChange={(e) => setEduEndDate(step, e.currentTarget.value)}
      />

      <TextField
        label="აღწერა"
        placeholder="განათლების აღწერა"
        className="col-span-2"
        value={education.description}
        onChange={(e) => setEduDescription(step, e.currentTarget.value)}
      />
    </MultyForm>
  );
};

export default EducationFormStep;
