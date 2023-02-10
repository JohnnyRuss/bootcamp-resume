import { css } from "styled-components";

export const inpFieldContainer = () => css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const requiredField = ({
  isChecked,
  hasError,
  isDateField,
}: {
  isChecked: boolean;
  hasError: boolean;
  isDateField?: boolean;
}) => css`
  height: 5rem;
  border-radius: 0.5rem;
  position: relative;
  border: 1px solid
    ${({ theme }) =>
      isChecked
        ? theme.colors.green
        : hasError
        ? theme.colors.red
        : theme.colors.light_gray};

  input {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    padding: 0 1.6rem;
    border: none;
  }

  ::after {
    content: "";
    position: absolute;
    z-index: 9;
    right: 0;
    top: 50%;
    transform: ${() =>
      hasError || isDateField ? "translate(120%,-50%)" : "translate(0,-50%)"};
    width: 3rem;
    height: 3rem;
    background-image: ${() =>
      isChecked
        ? "url('/assets/icons/check.svg')"
        : hasError
        ? "url('/assets/icons/error.svg')"
        : ""};
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const fieldLabel = (hasError: boolean) => css`
  font-weight: ${({ theme }) => theme.font.medium};
  color: ${({ theme }) => (hasError ? theme.colors.red : "")} !important;
`;
