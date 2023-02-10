import styled from "styled-components";
import {
  inpFieldContainer,
  fieldLabel,
  requiredField,
} from "../../../styles/helpers";

export const TextFieldContainer = styled.div<{
  hasError?: boolean;
  isChecked?: boolean;
}>`
  ${inpFieldContainer};

  .label {
    ${({ hasError }) => fieldLabel(hasError || false)}
  }

  .text-field {
    ${({ hasError, isChecked }) =>
      requiredField({
        isChecked: isChecked || false,
        hasError: hasError || false,
        isDateField: true,
      })};

    height: 10rem;

    textarea {
      resize: none;
      height: 100%;
      width: 100%;
      border: none;
      border-radius: 0.5rem;
      padding: 1.5rem;
    }
  }
`;
