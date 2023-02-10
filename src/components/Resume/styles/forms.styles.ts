import styled, { css } from "styled-components";

const form = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4.5rem 5.6rem;

  .col-span-2 {
    grid-column: span 2;
  }

  .navigate-btn__next {
    grid-column: 2;
    justify-self: end;
  }
`;

export const FormContainer = styled.form`
  ${form};
  padding: 6.5rem 0;
`;

export const FileField = styled.div<{
  hasError: boolean;
  isChecked: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: max-content;
  font-size: ${({ theme }) => theme.size.md};
  font-weight: ${({ theme }) => theme.font.medium};
  color: ${({ hasError, theme }) => (hasError ? theme.colors.red : "")};

  .add-img__btn {
    padding: 0.5rem 2rem;
    font-size: ${({ theme }) => theme.size.sm};
    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 0.5rem;
    cursor: pointer;
  }

  &::after {
    content: "";
    width: 3rem;
    height: 3rem;
    background: ${({ hasError, isChecked }) =>
      hasError
        ? "url('/assets/icons/error.svg')"
        : isChecked
        ? "url('/assets/icons/check.svg')"
        : ""};
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const MultyFormContainer = styled.form`
  display: flex;
  flex-direction: column;

  .multy-form__last {
    margin-bottom: 3rem;
  }

  .navigate-btns__box {
    display: flex;
    justify-content: space-between;
    margin-top: 6rem;
  }
`;

export const MultyForm = styled.div`
  ${form}
  padding: 3rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_tint};
  position: relative;

  .close-step--btn {
    position: absolute;
    right: 1rem;
    top: 1rem;
    padding: 0.5rem;
    border-radius: 100%;
    border: 1px solid ${({ theme }) => theme.colors.light_gray};
    color: ${({ theme }) => theme.colors.red};
  }
`;
