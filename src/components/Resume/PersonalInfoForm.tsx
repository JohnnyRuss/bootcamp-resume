import React from "react";
import { useNavigate } from "react-router-dom";

import {
  useValidate,
  useFileValidation,
  useValidateInLoop,
} from "../../hooks/useValidate";
import { useResumeStore } from "../../store/resumeState";
import { readFileAsDataUrl } from "../../lib/readBase64";

import { InputField, TextField, Button } from "../Layouts";
import { FormContainer, FileField } from "./styles/forms.styles";

const PersonalInfo: React.FC = () => {
  const navigate = useNavigate();

  const {
    personalInfo,
    setUserName,
    setLastName,
    setAvatar,
    setAboutMe,
    setEmail,
    setMobile,
    setFormIsChecked,
  } = useResumeStore();

  async function handleAvatar(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const file = e.currentTarget.files?.[0] || null;

    function getURL(url: string) {
      setAvatar(url);
    }

    await readFileAsDataUrl(file, getURL);
  }

  const {
    onBlur: onNameBlur,
    error: nameError,
    lazyValidate: validateName,
  } = useValidate(personalInfo.name, "validate2letterAndGeorgian");

  const {
    onBlur: onLastNameBlur,
    error: lastNameError,
    lazyValidate: validateLastName,
  } = useValidate(personalInfo.surname, "validate2letterAndGeorgian");

  const {
    onBlur: onEmailBlur,
    error: emailError,
    lazyValidate: validateEmail,
  } = useValidate(personalInfo.email, "validEmail");

  const {
    onBlur: onMobileBlur,
    error: mobileError,
    lazyValidate: validateMobile,
  } = useValidate(personalInfo.phone_number, "isGeorgiasPhoneNumber");

  const {
    onBlur: onFileBlur,
    wasToched,
    error: fileError,
    lazyValidate: validateFile,
  } = useFileValidation(personalInfo.image);

  const validForm =
    nameError.hasError ||
    lastNameError.hasError ||
    fileError.hasError ||
    emailError.hasError ||
    mobileError.hasError;

  const initValidateInLoop = useValidateInLoop();

  async function navigateToNextForm(e: React.MouseEvent<HTMLFormElement>) {
    e.preventDefault();

    const isError = initValidateInLoop([
      validateName,
      validateLastName,
      validateEmail,
      validateMobile,
    ]);

    const { hasError: fileErr } = await validateFile();

    setFormIsChecked("personalInfoIsChecked", !isError && !fileErr);

    !isError && !fileErr && navigate("/resume/experience");
  }

  return (
    <FormContainer>
      <InputField
        hasError={nameError.hasError}
        isChecked={nameError.isChecked && !nameError.hasError}
        value={personalInfo.name}
        onChange={(e) => setUserName(e.currentTarget.value)}
        onBlur={onNameBlur}
        message="????????????????????? 2 ?????????, ????????????????????? ??????????????????"
        label="??????????????????"
        placeholder="??????????????????"
      />

      <InputField
        hasError={lastNameError.hasError}
        isChecked={lastNameError.isChecked && !lastNameError.hasError}
        value={personalInfo.surname}
        onChange={(e) => setLastName(e.currentTarget.value)}
        onBlur={onLastNameBlur}
        message="????????????????????? 2 ?????????, ????????????????????? ??????????????????"
        label="???????????????"
        placeholder="???????????????"
      />

      <FileField
        className="col-span-2"
        hasError={fileError.hasError}
        isChecked={fileError.isChecked && !fileError.hasError}
      >
        <span>?????????????????? ??????????????? ????????????????????????</span>
        <label
          className="add-img__btn"
          htmlFor="avatar"
          onClick={() => !wasToched && onFileBlur()}
        >
          ????????????????????????
        </label>
        <input type="file" hidden id="avatar" onChange={handleAvatar} />
      </FileField>

      <TextField
        label="???????????? ????????????????????? (??????????????????????????????????????????)"
        placeholder="?????????????????? ???????????? ???????????? ?????????????????????"
        className="col-span-2"
        value={personalInfo.about_me}
        onChange={(e) => setAboutMe(e.currentTarget.value)}
      />

      <InputField
        hasError={emailError.hasError}
        isChecked={emailError.isChecked && !emailError.hasError}
        value={personalInfo.email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        onBlur={onEmailBlur}
        message="???????????? ???????????????????????????????????? @redberry.ge-??????"
        label="??????.???????????????"
        placeholder="??????.???????????????"
        className="col-span-2"
      />

      <InputField
        hasError={mobileError.hasError}
        isChecked={mobileError.isChecked && !mobileError.hasError}
        value={personalInfo.phone_number}
        onChange={(e) => setMobile(e.currentTarget.value)}
        onBlur={onMobileBlur}
        message="???????????? ?????????????????????????????????????????? ????????????????????? ???????????????????????? ?????????????????? ?????????????????????"
        label="??????????????????????????? ??????????????????"
        placeholder="???????????????????????? ??????????????????"
        className="col-span-2"
      />

      <Button
        onClick={navigateToNextForm}
        className="navigate-btn navigate-btn__next"
        disabled={validForm}
      >
        ?????????????????????
      </Button>
    </FormContainer>
  );
};

export default PersonalInfo;
