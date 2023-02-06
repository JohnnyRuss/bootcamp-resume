import { useState } from "react";
import SelectEl, { ActionMeta, OnChangeValue, PropsValue } from "react-select";
import { SelectContainer } from "./select.styles";

type OptionT = {
  value: string;
  label: string;
} | null;

type SelectedValuleT = PropsValue<OptionT> | undefined;

interface SelectT {
  options: OptionT[];
  defaultVal: SelectedValuleT;
  label: string;
  hasError: boolean;
  isChecked: boolean;
  placeholder?: string;
  onSelect: (val: string) => void;
}

const Select: React.FC<SelectT> = ({
  options,
  label,
  hasError,
  isChecked,
  placeholder,
  onSelect,
  defaultVal,
}) => {
  const [selectedOption, setSelectedOption] =
    useState<SelectedValuleT>(defaultVal);

  const onChange = (
    value: OnChangeValue<OptionT, false>,
    action: ActionMeta<OptionT>
  ) => {
    onSelect(value?.value || "");
    setSelectedOption(value);
  };

  return (
    <SelectContainer hasError={hasError} isChecked={isChecked}>
      <label className="label">{label}</label>
      <div className="inp-field">
        <SelectEl
          value={selectedOption}
          onChange={onChange}
          isMulti={false}
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
