import React from "react";

import { TextFieldContainer } from "./textField.styles";

interface TextFieldType {
  hasError?: boolean;
  isChecked?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: () => void;
  label: string;
  placeholder: string;
  id?: string;
  className?: string;
}

const TextField: React.FC<TextFieldType> = ({
  value,
  onChange,
  hasError,
  isChecked,
  onBlur,
  label,
  placeholder,
  id,
  className,
}) => {
  return (
    <TextFieldContainer
      className={className || ""}
      hasError={hasError}
      isChecked={isChecked}
    >
      <label className="label" htmlFor={id || ""}>
        {label}
      </label>
      <div className="text-field">
        <textarea
          placeholder={placeholder}
          id={id || ""}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    </TextFieldContainer>
  );
};

export default TextField;
