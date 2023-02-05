import React from "react";

import { TextFieldContainer } from "./textField.styles";

interface TextFieldType {
  label: string;
  placeholder: string;
  id?: string;
  className?: string;
}

const TextField: React.FC<TextFieldType> = ({
  label,
  placeholder,
  id,
  className,
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
      />
    </TextFieldContainer>
  );
};

export default TextField;
