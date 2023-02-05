import styled from "styled-components";
import { inpFieldContainer, fieldLabel } from "../../../styles/helpers";

export const TextFieldContainer = styled.div`
  ${inpFieldContainer};

  .label {
    ${fieldLabel}
  }

  .text-field {
    resize: none;
    height: 10rem;
    border-radius: 0.5rem;
    padding: 1.5rem;
  }
`;
