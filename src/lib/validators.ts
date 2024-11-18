import { ValueT, ErrorT } from "../hooks/useValidate";
import { convertBase64ToFile } from "./readBase64";

const regs = {
  min2AndGeorgianLetters: /^([ა-ჰ]{2,})*$/,
  onlyNumbers: /^[0-9]*$/,
  isEmail:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};
const validDegrees = [
  "საშუალო სკოლის დიპლომი",
  "ზოგადსაგანმანათლებლო დიპლომი",
  "ბაკალავრი",
  "მაგისტრი",
  "დოქტორი",
  "ასოცირებული ხარისხი",
  "სტუდენტი",
  "კოლეჯი(ხარისიხს გარეშე)",
  "სხვა",
];

export class Validator {
  validate2letterAndGeorgian(value: ValueT): ErrorT {
    const valid = value ? regs.min2AndGeorgianLetters.test(value) : false;

    return {
      hasError: !valid,
      isChecked: valid,
      message: "",
    };
  }

  validEmail(value: ValueT): ErrorT {
    const isEmail = value ? regs.isEmail.test(value) : false;
    // const endsWithRedberry = value ? value.endsWith("@redberry.ge") : false;

    let error = false;
    if (!isEmail) error = true;
    // if (!isEmail || !endsWithRedberry) error = true;

    return {
      hasError: error,
      isChecked: !error,
      message: "",
    };
  }

  isGeorgiasPhoneNumber(value: ValueT): ErrorT {
    let err = false;

    if (!value) err = true;
    else if (!regs.onlyNumbers.test(value.slice(1))) err = true;
    else if (!value.startsWith("+9955")) err = true;
    else if (value.length !== 13) err = true;

    return {
      hasError: err,
      isChecked: !err,
      message: "",
    };
  }

  async isFile(value: ValueT): Promise<ErrorT> {
    const file = value ? await convertBase64ToFile(value) : null;
    const isValid = typeof file === "object" && file?.size > 0;

    return {
      hasError: !isValid,
      isChecked: isValid,
      message: "",
    };
  }

  min2Symbol(value: ValueT): ErrorT {
    const isMoreThen2Symbol = value ? value.length >= 2 : false;
    return {
      hasError: !isMoreThen2Symbol,
      isChecked: isMoreThen2Symbol,
      message: "",
    };
  }

  isDate(value: ValueT): ErrorT {
    const isValidDate = value ? Date.parse(value) : NaN;

    let isValid = true;

    if (isNaN(isValidDate)) isValid = false;
    else isValid = true;

    return {
      hasError: !isValid,
      isChecked: isValid,
      message: "",
    };
  }

  notIsEmpty(value: ValueT): ErrorT {
    const isValid = value ? value.trim().length >= 1 : false;

    return {
      hasError: !isValid,
      isChecked: isValid,
      message: "",
    };
  }

  isValidDegree(value: ValueT): ErrorT {
    const isValid = value ? validDegrees.includes(value) : false;

    return {
      hasError: !isValid,
      isChecked: isValid,
      message: "",
    };
  }
}
