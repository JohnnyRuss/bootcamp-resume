import React from "react";

import { FieldContainer } from "./input.styles";

interface InputFieldType {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  hasError: boolean;
  isChecked: boolean;
  message: string;
  label: string;
  placeholder: string;
  className?: string;
  id?: string;
}

const InputField: React.FC<InputFieldType> = ({
  value,
  onChange,
  onBlur,
  hasError,
  isChecked,
  message,
  label,
  placeholder,
  className,
  id,
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
          onBlur={() => onBlur && onBlur()}
        />
      </div>
      <span className="message">{message}</span>
    </FieldContainer>
  );
};

export default InputField;
