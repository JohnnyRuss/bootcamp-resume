import React from "react";

import { DateSelectContainer } from "./dateSelect.styles";

interface DateSelectType {
  label: string;
  hasError: boolean;
  isChecked: boolean;
}

const DateSelect: React.FC<DateSelectType> = ({
  label,
  hasError,
  isChecked,
}) => {
  return (
    <DateSelectContainer hasError={hasError} isChecked={isChecked}>
      <label className="label">{label}</label>
      <div className="inp-field">
        <input type="date" />
      </div>
    </DateSelectContainer>
  );
};

export default DateSelect;
