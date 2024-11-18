/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { useResumeStore } from "../../../store/resumeState";
import { useValidate } from "../../../hooks/useValidate";
import objectIncludesValue from "../../../lib/ObjectIncludesValue";

import { MultyForm } from "../styles/forms.styles";
import { InputField, Select, DateSelect, TextField } from "../../Layouts";

import { EducationT } from "../../../store/resume.types";
import { ErrorElevatorT } from "../../../hooks/useValidate";
interface EducationFormStepType {
  education: EducationT;
  step: number;
  last: boolean;
  validatorsElevator: (params: ErrorElevatorT) => void;
  removeElevatedValidators: (param: number) => void;
}

const EducationFormStep: React.FC<EducationFormStepType> = ({
  education,
  step,
  last,
  validatorsElevator,
  removeElevatedValidators,
}) => {
  const {
    degrees,
    setCollage,
    setDegree,
    setEduEndDate,
    setEduDescription,
    removeEducationStep,
  } = useResumeStore();

  const {
    onBlur: onCollageBlur,
    error: collageError,
    lazyValidate: validateCollage,
    resetError: resetCollageError,
  } = useValidate(education.institute, "min2Symbol");

  const {
    onBlur: onDegreeBlur,
    error: degreeError,
    lazyValidate: validateDegree,
    resetError: resetDegreeError,
  } = useValidate(education.degree.label, "isValidDegree");

  const {
    onBlur: onEndDateBlur,
    error: endDateError,
    lazyValidate: validateEndDate,
    resetError: resetEndDateError,
  } = useValidate(education.due_date.toString(), "isDate");

  const {
    onBlur: onDescriptionBlur,
    error: descriptionError,
    lazyValidate: validateDescription,
    resetError: resetDescriptionError,
  } = useValidate(education.description, "notIsEmpty");

  useEffect(() => {
    validatorsElevator({
      step,
      target: education,

      validators: [
        validateCollage,
        validateDegree,
        validateEndDate,
        validateDescription,
      ],
    });
  }, [education]);

  // reset errors on extra steps if value does not exists
  useEffect(() => {
    if (step === 0 || (step > 0 && objectIncludesValue(education))) return;

    [
      resetCollageError,
      resetDegreeError,
      resetEndDateError,
      resetDescriptionError,
    ].map((reset) => reset());
  }, [education]);

  return (
    <MultyForm className={`multy-form ${last ? "multy-form__last" : ""}`}>
      {step > 0 && (
        <button
          className="close-step--btn"
          onClick={() => {
            removeEducationStep(step);
            removeElevatedValidators(step);
          }}
        >
          &mdash;
        </button>
      )}

      <InputField
        hasError={collageError.hasError}
        isChecked={collageError.isChecked && !collageError.hasError}
        value={education.institute}
        onChange={(e) => setCollage(step, e.currentTarget.value)}
        onBlur={onCollageBlur}
        message="მინიმუმ 2 სიმბოლო"
        label="სასწავლებელი"
        placeholder="სასწავლებელი"
        className="col-span-2"
      />

      <Select
        hasError={degreeError.hasError}
        isChecked={degreeError.isChecked && !degreeError.hasError}
        onSelect={(val) => setDegree(step, val)}
        onBlur={onDegreeBlur}
        options={degrees}
        defaultVal={{
          label: education.degree.label,
          value: education.degree.label,
          _id: education.degree.degree_id,
        }}
        label="ხარისხი"
        placeholder="აირჩიეთ ხარისხი"
      />

      <DateSelect
        hasError={endDateError.hasError}
        isChecked={endDateError.isChecked && !endDateError.hasError}
        value={education.due_date}
        onChange={(e) => setEduEndDate(step, e.currentTarget.value)}
        onBlur={onEndDateBlur}
        label="დასრულების რიცხვი"
      />

      <TextField
        hasError={descriptionError.hasError}
        isChecked={descriptionError.isChecked && !descriptionError.hasError}
        value={education.description}
        onChange={(e) => setEduDescription(step, e.currentTarget.value)}
        onBlur={onDescriptionBlur}
        label="აღწერა"
        placeholder="განათლების აღწერა"
        className="col-span-2"
      />
    </MultyForm>
  );
};

export default EducationFormStep;
