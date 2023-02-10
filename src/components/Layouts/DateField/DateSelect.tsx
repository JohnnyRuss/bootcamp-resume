import React from "react";

import { DateSelectContainer } from "./dateSelect.styles";

interface DateSelectType {
  label: string;
  hasError: boolean;
  isChecked: boolean;
  value?: string | Date;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}

const DateSelect: React.FC<DateSelectType> = ({
  label,
  hasError,
  isChecked,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <DateSelectContainer hasError={hasError} isChecked={isChecked}>
      <label className="label">{label}</label>
      <div className="inp-field">
        <input
          type="date"
          onChange={onChange}
          value={value?.toString()}
          onBlur={onBlur}
        />
      </div>
    </DateSelectContainer>
  );
};

export default DateSelect;
