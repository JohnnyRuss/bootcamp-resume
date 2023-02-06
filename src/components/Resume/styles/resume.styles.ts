import styled from "styled-components";

export const ResumeContainer = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(1, 4fr 3fr);
  position: sticky;
  top: 2rem;

  .inset-container__forms {
    background: ${({ theme }) => theme.colors.white_shade};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 4rem;

    .forms-wrapper {
      width: min(100%, 80rem);
      max-height: calc(100vh - 12.5rem);
      overflow: auto;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .inset-container__resume {
    background: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 2rem 0 4rem 0;

    .logo-small {
      margin-left: 8rem;
      margin-top: 1.5rem;
    }
  }
`;

export const ResumeHeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
  background: ${({ theme }) => theme.colors.white_shade};

  .header-wrapper {
    width: min(100%, 80rem);
    margin: 0 auto;
    padding: 2.5rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.light_gray};
    display: flex;
    justify-content: space-between;
  }

  .progress-title {
    font-size: ${({ theme }) => theme.size.xl};
    font-weight: ${({ theme }) => theme.font.bold};
  }

  .progress-step {
    font-size: ${({ theme }) => theme.size.lg};
  }
`;

export const UserResumeContainer = styled.div`
  padding: 0 7.5rem;

  .personal-details {
    /* min-height: 26.5rem; */

    .user-fig {
      float: right;
      width: 25rem;
      height: 25rem;
      border-radius: 100%;
      overflow: hidden;
      shape-outside: circle(50%);
      margin: 0.5rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    .user-personal--details {
      &::after {
        content: "";
        clear: both;
        display: table;
      }
    }

    .email-phone__container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1.5rem;
    }

    .about-me {
      display: block;
      margin: 3rem 0 1.5rem 0;
    }

    .email,
    .mobile {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;

      figure {
        width: 2rem;
        height: 2rem;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }

  .user-info__section {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .label-date__container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  .user-info__section,
  .personal-details {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray_tint};
    padding-bottom: 3.2rem;
  }

  .user__name {
    color: ${({ theme }) => theme.colors.red};
    font-size: ${({ theme }) => theme.size.xxl};
    font-weight: ${({ theme }) => theme.font.bold};
  }

  .section-head {
    font-size: ${({ theme }) => theme.size.md};
    font-weight: ${({ theme }) => theme.font.bold};
    color: ${({ theme }) => theme.colors.red};
  }

  .section__main-label {
    font-weight: ${({ theme }) => theme.font.medium};
  }

  .section__date-period {
    color: ${({ theme }) => theme.colors.light_gray};
    font-style: italic;
  }

  .section-description {
    /* text-align: justify; */
  }
`;

export const ResumeDoneContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5.5rem 0 12rem 0;

  .resume--wrapper {
    width: min(100%, 80.2rem);
    position: relative;
  }

  .done-resume {
    padding-top: 4.5rem;
    border: 1px solid ${({ theme }) => theme.colors.gray_tint};
  }

  .user-info__section:last-child {
    border: none;
  }

  .success-modal {
    position: absolute;
    top: 0;
    left: calc(100% + 5rem);
    width: 35rem;
    padding: 4rem 3.5rem;
    font-size: ${({ theme }) => theme.size.xl};
    font-weight: ${({ theme }) => theme.font.medium};
    text-align: start;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 0.8rem;

    .close-btn {
      position: absolute;
      top: 1.5rem;
      right: 0.8rem;
      background: none;
      border: none;
    }
  }
`;

export const BackBTN = styled.button`
  position: fixed;
  z-index: 11;
  top: 4.5rem;
  left: 5rem;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  border: none;

  figure {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
