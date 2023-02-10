import styled from "styled-components";
import {
  inpFieldContainer,
  requiredField,
  fieldLabel,
} from "../../../styles/helpers";

export const FieldContainer = styled.div<{
  hasError: boolean;
  isChecked: boolean;
}>`
  ${inpFieldContainer};

  .inp-label {
    ${({ hasError }) => fieldLabel(hasError)}
  }

  .inp-field {
    ${({ hasError, isChecked }) => requiredField({ hasError, isChecked })}
  }

  .message {
    font-size: ${({ theme }) => theme.size.sm};
    color: ${({ theme }) => theme.colors.gray_tint};
  }
`;
