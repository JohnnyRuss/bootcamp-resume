import { useState } from "react";
import SelectEl, { ActionMeta, OnChangeValue, PropsValue } from "react-select";
import { SelectContainer } from "./select.styles";

type OptionT = {
  value: string;
  label: string;
  _id: number;
} | null;

type SelectedValuleT = PropsValue<OptionT> | undefined;

interface SelectT {
  options: OptionT[];
  defaultVal: SelectedValuleT;
  hasError: boolean;
  isChecked: boolean;
  label: string;
  placeholder?: string;
  onBlur?: () => void;
  onSelect: ({
    label,
    degree_id,
  }: {
    label: string;
    degree_id: number;
  }) => void;
}

const Select: React.FC<SelectT> = ({
  options,
  label,
  hasError,
  isChecked,
  placeholder,
  onSelect,
  defaultVal,
  onBlur,
}) => {
  const [selectedOption, setSelectedOption] =
    useState<SelectedValuleT>(defaultVal);

  const onChange = (
    value: OnChangeValue<OptionT, false>,
    action: ActionMeta<OptionT>
  ) => {
    onSelect({ label: value?.value || "", degree_id: value?._id || NaN });
    setSelectedOption(value);
  };

  return (
    <SelectContainer hasError={hasError} isChecked={isChecked}>
      <label className="label">{label}</label>
      <div className="inp-field">
        <SelectEl
          isMulti={false}
          options={options}
          value={selectedOption}
          onChange={onChange}
          onBlur={onBlur}
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
