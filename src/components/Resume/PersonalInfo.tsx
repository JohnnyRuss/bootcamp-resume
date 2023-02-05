import React from "react";
import { useNavigate } from "react-router-dom";

import { InputField, TextField, Button } from "../Layouts";
import { FormContainer } from "./forms.styles";

interface PersonalInfoType {}

const PersonalInfo: React.FC<PersonalInfoType> = (props) => {
  const navigate = useNavigate();

  return (
    <FormContainer>
      <InputField
        hasError={false}
        isChecked={false}
        message="მინიმუმ 2 ასო, ქართული ასოები"
        label="სახელი"
        placeholder="სახელი"
      />
      <InputField
        hasError={false}
        isChecked={false}
        message="მინიმუმ 2 ასო, ქართული ასოები"
        label="გვარი"
        placeholder="გვარი"
      />
      <div className="col-span-2 add-img">
        <span>პირადი ფოტოს ატვირთვა</span>
        <Button onClick={() => {}} type="secondary" className="add-img__btn">
          ატვირთვა
        </Button>
      </div>
      <TextField
        label="ჩემს შესახებ (არასავალდებულო)"
        placeholder="ზოგადი ინფო შენს შესახებ"
        className="col-span-2"
      />
      <InputField
        hasError={false}
        isChecked={false}
        message="უნდა მთავრდებოდეს @redberry.ge-ით"
        label="ელ.ფოსტა"
        placeholder="ელ.ფოსტა"
        className="col-span-2"
      />
      <InputField
        hasError={false}
        isChecked={false}
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
