import { useState } from "react";
import SelectEl, { ActionMeta } from "react-select";
import { SelectContainer } from "./select.styles";

type OptionT = {
  value: string;
  label: string;
} | null;

interface SelectT {
  options: OptionT[];
  label: string;
  hasError: boolean;
  isChecked: boolean;
  placeholder?: string;
}

const Select: React.FC<SelectT> = ({
  options,
  label,
  hasError,
  isChecked,
  placeholder,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const onChange = (
    option: OptionT | null,
    actionMeta: ActionMeta<OptionT>
  ) => {};

  return (
    <SelectContainer hasError={hasError} isChecked={isChecked}>
      <label className="label">{label}</label>
      <div className="inp-field">
        <SelectEl
          defaultValue={selectedOption}
          onChange={onChange}
          options={options}
          placeholder={placeholder || ""}
          classNames={{
            container: () => "sel-container",
            control: () => "sel-control",
            placeholder: () => "sel-placeholder",
            indicatorsContainer: () => "sel-indicator",
            indicatorSeparator: () => "sel-indicator__separator",
            menu: () => "sel-menu",
            menuList: () => "sel-menu__list",
            option: () => "sel-option",
          }}
        />
      </div>
    </SelectContainer>
  );
};

export default Select;
