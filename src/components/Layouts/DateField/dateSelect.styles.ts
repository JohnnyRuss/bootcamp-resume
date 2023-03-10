import styled from "styled-components";
import {
  requiredField,
  inpFieldContainer,
  fieldLabel,
} from "../../../styles/helpers";

export const DateSelectContainer = styled.div<{
  hasError: boolean;
  isChecked: boolean;
}>`
  ${inpFieldContainer};

  .label {
    ${({ hasError }) => fieldLabel(hasError)}
  }

  .inp-field {
    ${({ hasError, isChecked }) =>
      requiredField({ hasError, isChecked, isDateField: true })}
  }
`;
