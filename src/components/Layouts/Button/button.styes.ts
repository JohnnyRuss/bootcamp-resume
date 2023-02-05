import styled from "styled-components";

import { BTN_T } from "./Button";

export const BTN = styled.button<{ btnType: BTN_T }>`
  border-radius: 0.5rem;
  border: none;
  width: max-content;
  padding: ${({ btnType }) =>
    btnType === "primary"
      ? "1.5rem 3.5rem"
      : btnType === "secondary"
      ? "1.5rem 2rem"
      : ""};
  background: ${({ btnType, theme }) =>
    btnType === "primary"
      ? theme.colors.purple
      : btnType === "secondary"
      ? theme.colors.blue
      : ""};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.font.medium};
`;
