/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Validator } from "../lib/validators";
import objectIncludesValue from "../lib/ObjectIncludesValue";

const validationInit = new Validator();

export type ValueT = string | undefined | null;
export type ErrorT = {
  hasError: boolean;
  isChecked: boolean;
  message: string;
};

type ValidatorKeysT =
  | "validate2letterAndGeorgian"
  | "validEmail"
  | "isGeorgiasPhoneNumber"
  | "min2Symbol"
  | "isDate"
  | "notIsEmpty"
  | "isValidDegree";

const validators = {
  validate2letterAndGeorgian: validationInit.validate2letterAndGeorgian,
  validEmail: validationInit.validEmail,
  isGeorgiasPhoneNumber: validationInit.isGeorgiasPhoneNumber,
  isFile: validationInit.isFile,
  min2Symbol: validationInit.min2Symbol,
  isDate: validationInit.isDate,
  notIsEmpty: validationInit.notIsEmpty,
  isValidDegree: validationInit.isValidDegree,
};

export function useValidate(value: ValueT, validate: ValidatorKeysT) {
  const [wasTouched, setWasTouched] = useState<boolean>(false);

  const [error, setError] = useState<ErrorT>({
    hasError: false,
    isChecked: false,
    message: "",
  });

  const onBlur = () => setWasTouched(true);

  const resetError = () =>
    setError({
      hasError: false,
      isChecked: false,
      message: "",
    });

  // used for manual validation
  function lazyValidate(): ErrorT {
    const err = validators[validate](value);
    setError(err);

    return err;
  }

  // run on change after blur
  useEffect(() => {
    if (!wasTouched) return;

    const err = validators[validate](value);
    setError(err);
  }, [value, wasTouched]);

  // runs on mount if persisted value exists
  useEffect(() => {
    if (!value) return;

    const err = validators[validate](value);
    setError(err);
  }, []);

  return { onBlur, error, lazyValidate, resetError, wasTouched };
}

export function useFileValidation(value: ValueT) {
  const [wasTouched, setWasTouched] = useState<boolean>(false);

  const [error, setError] = useState<ErrorT>({
    hasError: false,
    isChecked: false,
    message: "",
  });

  const onBlur = () => setWasTouched(true);

  async function lazyValidate(): Promise<ErrorT> {
    const err = await validationInit.isFile(value);
    setError(err);

    return err;
  }

  useEffect(() => {
    if (!wasTouched && !value) return;

    async function validateFile() {
      const err = await validationInit.isFile(value);
      setError(err);
    }

    validateFile();
  }, [value, wasTouched]);

  return { error, onBlur, wasTouched, lazyValidate };
}

type ValidatorFnT = () => ErrorT;
export type SetAllValidatorsPropsT = { step: number; validate: ValidatorFnT }[];

export interface ErrorElevatorT {
  step: number;
  validators: ValidatorFnT[];
  target: any;
}

/* 
elevates validators from child to parent during navigation to the next form page. 
used for multy step forms 
*/
export function useDescendentValidation() {
  const [allDescendentValidators, setAllDescendentValidators] =
    useState<SetAllValidatorsPropsT>([
      {
        step: NaN,
        validate: () => ({ hasError: false, isChecked: false, message: "" }),
      },
    ]);

  function validatorsElevator({ step, validators, target }: ErrorElevatorT) {
    if (step === 0) {
      setAllDescendentValidators(() =>
        validators.map((ex) => ({ step, validate: ex }))
      );
    } else if (step > 0 && objectIncludesValue(target)) {
      setAllDescendentValidators((prev) => {
        const newStepValidators = validators.map((ex) => ({
          step,
          validate: ex,
        }));

        return [...prev.filter((ex) => ex.step !== step), ...newStepValidators];
      });
    } else if (step > 0 && !objectIncludesValue(target)) {
      setAllDescendentValidators((prev) =>
        prev.filter((ex) => ex.step !== step)
      );
    }
  }

  function removeElevatedValidators(step: number) {
    setAllDescendentValidators((prev) => prev.filter((ex) => ex.step !== step));
  }

  return {
    allDescendentValidators,
    validatorsElevator,
    removeElevatedValidators,
  };
}

export function useValidateInLoop(): (validators: ValidatorFnT[]) => boolean {
  function initValidateInLoop(validators: ValidatorFnT[]): boolean {
    return validators
      .map((executor) => executor())
      .map((err) => err.hasError)
      .some((err) => err === true);
  }

  return initValidateInLoop;
}
