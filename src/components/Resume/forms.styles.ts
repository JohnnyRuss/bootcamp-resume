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
    margin-top: 11rem;
  }
`;

export const FormContainer = styled.form`
  ${form};
  padding: 6.5rem 0;

  .add-img {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: ${({ theme }) => theme.size.md};
    font-weight: ${({ theme }) => theme.font.medium};

    .add-img__btn {
      padding: 0.5rem 2rem;
      font-size: ${({ theme }) => theme.size.sm};
    }
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
    margin-top: 11rem;
  }
`;

export const MultyForm = styled.div`
  ${form}
  padding: 3rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_tint};
`;
