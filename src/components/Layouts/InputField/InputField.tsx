import React from "react";

import { FieldContainer } from "./input.styles";

interface InputFieldType {
  hasError: boolean;
  message: string;
  isChecked: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
  id?: string;
  className?: string;
}

const InputField: React.FC<InputFieldType> = ({
  hasError,
  message,
  isChecked,
  value,
  onChange,
  label,
  placeholder,
  id,
  className,
}) => {
  return (
    <FieldContainer
      hasError={hasError}
      isChecked={isChecked}
      className={className || ""}
    >
      <label className="inp-label" htmlFor={id || ""}>
        {label}
      </label>
      <div className="inp-field">
        <input
          type="text"
          placeholder={placeholder}
          id={id || ""}
          onChange={onChange}
          value={value}
        />
      </div>
      <span className="message">{message}</span>
    </FieldContainer>
  );
};

export default InputField;
