import React from "react";

import { TextFieldContainer } from "./textField.styles";

interface TextFieldType {
  label: string;
  placeholder: string;
  id?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextField: React.FC<TextFieldType> = ({
  label,
  placeholder,
  id,
  className,
  value,
  onChange,
}) => {
  return (
    <TextFieldContainer className={className || ""}>
      <label className="label" htmlFor={id || ""}>
        {label}
      </label>
      <textarea
        className="text-field"
        placeholder={placeholder}
        id={id || ""}
        value={value}
        onChange={onChange}
      />
    </TextFieldContainer>
  );
};

export default TextField;
