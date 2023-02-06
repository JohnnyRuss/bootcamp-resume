import React from "react";
import { useNavigate } from "react-router-dom";
import { useResumeStore } from "../../store/resumeState";

import readFileAsDataUrl from "../../lib/readBase64";

import { InputField, TextField, Button } from "../Layouts";
import { FormContainer } from "./styles/forms.styles";

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
  } = useResumeStore();

  async function handeAvatar(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const file = e.currentTarget.files?.[0] || null;

    function getURL(url: string) {
      setAvatar(url);
    }

    await readFileAsDataUrl(file, getURL);
  }

  return (
    <FormContainer>
      <InputField
        hasError={false}
        isChecked={false}
        value={personalInfo.name}
        onChange={(e) => setUserName(e.currentTarget.value)}
        message="მინიმუმ 2 ასო, ქართული ასოები"
        label="სახელი"
        placeholder="სახელი"
      />

      <InputField
        hasError={false}
        isChecked={false}
        value={personalInfo.lastName}
        onChange={(e) => setLastName(e.currentTarget.value)}
        message="მინიმუმ 2 ასო, ქართული ასოები"
        label="გვარი"
        placeholder="გვარი"
      />

      <div className="col-span-2 add-img">
        <span>პირადი ფოტოს ატვირთვა</span>
        <label className="add-img__btn" htmlFor="avatar">
          ატვირთვა
        </label>
        <input type="file" hidden id="avatar" onChange={handeAvatar} />
      </div>

      <TextField
        label="ჩემს შესახებ (არასავალდებულო)"
        placeholder="ზოგადი ინფო შენს შესახებ"
        className="col-span-2"
        value={personalInfo.aboutMe}
        onChange={(e) => setAboutMe(e.currentTarget.value)}
      />

      <InputField
        hasError={false}
        isChecked={false}
        value={personalInfo.email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        message="უნდა მთავრდებოდეს @redberry.ge-ით"
        label="ელ.ფოსტა"
        placeholder="ელ.ფოსტა"
        className="col-span-2"
      />

      <InputField
        hasError={false}
        isChecked={false}
        value={personalInfo.mobile}
        onChange={(e) => setMobile(e.currentTarget.value)}
        message="უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს"
        label="მობილურის ნომერი"
        placeholder="მობილური ნომერი"
        className="col-span-2"
      />

      <Button
        onClick={() => navigate("/resume/experience")}
        className="navigate-btn navigate-btn__next"
      >
        შემდეგი
      </Button>
    </FormContainer>
  );
};

export default PersonalInfo;
