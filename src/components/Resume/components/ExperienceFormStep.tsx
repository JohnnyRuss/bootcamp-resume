/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { useResumeStore } from "../../../store/resumeState";
import { useValidate } from "../../../hooks/useValidate";
import objectIncludesValue from "../../../lib/ObjectIncludesValue";

import { InputField, DateSelect, TextField } from "../../Layouts";
import { MultyForm } from "../styles/forms.styles";

import { ExperienceT } from "../../../store/resume.types";
import { ErrorElevatorT } from "../../../hooks/useValidate";
interface ExperienceFormStepType {
  experience: ExperienceT;
  step: number;
  last: boolean;
  validatorsElevator: (params: ErrorElevatorT) => void;
  removeElevatedValidators: (param: number) => void;
}

const ExperienceFormStep: React.FC<ExperienceFormStepType> = ({
  experience,
  step,
  last,
  validatorsElevator,
  removeElevatedValidators,
}) => {
  const {
    setPosition,
    setEmployer,
    setStartDate,
    setEndDate,
    setDescription,
    removeExperienceStep,
  } = useResumeStore();

  const {
    onBlur: onPositionBlur,
    error: positionError,
    lazyValidate: validatePosition,
    resetError: resetPositionError,
  } = useValidate(experience.position, "min2Symbol");

  const {
    onBlur: onEmployerBlur,
    error: employerError,
    lazyValidate: validateEmployer,
    resetError: resetEmployerError,
  } = useValidate(experience.employer, "min2Symbol");

  const {
    onBlur: onStartDateBlur,
    error: startDateError,
    lazyValidate: validateStartDate,
    resetError: resetStartDateError,
  } = useValidate(experience.start_date.toString(), "isDate");

  const {
    onBlur: onEndDateBlur,
    error: endDateError,
    lazyValidate: validateEndDate,
    resetError: resetEndDateError,
  } = useValidate(experience.due_date.toString(), "isDate");

  const {
    onBlur: onDescriptionBlur,
    error: descriptionError,
    lazyValidate: validateDescription,
    resetError: resetDescriptionError,
  } = useValidate(experience.description, "notIsEmpty");

  // elevate validator functions
  useEffect(() => {
    validatorsElevator({
      step,
      target: experience,

      validators: [
        validatePosition,
        validateEmployer,
        validateStartDate,
        validateEndDate,
        validateDescription,
      ],
    });
  }, [experience]);

  // reset errors on extra steps if value does not exists
  useEffect(() => {
    if (step === 0 || (step > 0 && objectIncludesValue(experience))) return;

    [
      resetPositionError,
      resetEmployerError,
      resetStartDateError,
      resetEndDateError,
      resetDescriptionError,
    ].map((reset) => reset());
  }, [experience]);

  // useEffect(() => {
  //   return () => {
  //     removeElevatedValidators(step);
  //   };
  // }, []);

  return (
    <MultyForm className={`multy-form ${last ? "multy-form__last" : ""}`}>
      {step > 0 && (
        <button
          className="close-step--btn"
          onClick={() => {
            removeExperienceStep(step);
            removeElevatedValidators(step);
          }}
        >
          &mdash;
        </button>
      )}
      <InputField
        hasError={positionError.hasError}
        isChecked={positionError.isChecked && !positionError.hasError}
        value={experience.position}
        onChange={(e) => setPosition(step, e.currentTarget.value)}
        onBlur={onPositionBlur}
        message="მინიმუმ 2 სიმბოლო"
        label="თანამდებობა"
        placeholder="თანამდებობა"
        className="col-span-2"
      />

      <InputField
        hasError={employerError.hasError}
        isChecked={employerError.isChecked && !employerError.hasError}
        value={experience.employer}
        onChange={(e) => setEmployer(step, e.currentTarget.value)}
        onBlur={onEmployerBlur}
        message="მინიმუმ 2 სიმბოლო"
        label="დამსაქმებელი"
        placeholder="დამსაქმებელი"
        className="col-span-2"
      />

      <DateSelect
        label="დაწყების რიცხვი"
        hasError={startDateError.hasError}
        isChecked={startDateError.isChecked && !startDateError.hasError}
        value={experience.start_date}
        onChange={(e) => setStartDate(step, e.currentTarget.value)}
        onBlur={onStartDateBlur}
      />

      <DateSelect
        label="დასრულების რიცხვი"
        hasError={endDateError.hasError}
        isChecked={endDateError.isChecked && !endDateError.hasError}
        value={experience.due_date}
        onChange={(e) => setEndDate(step, e.currentTarget.value)}
        onBlur={onEndDateBlur}
      />

      <TextField
        hasError={descriptionError.hasError}
        isChecked={descriptionError.isChecked && !descriptionError.hasError}
        value={experience.description}
        onChange={(e) => setDescription(step, e.currentTarget.value)}
        onBlur={onDescriptionBlur}
        label="აღწერა"
        placeholder="აღწერა"
        className="col-span-2"
      />
    </MultyForm>
  );
};

export default ExperienceFormStep;
