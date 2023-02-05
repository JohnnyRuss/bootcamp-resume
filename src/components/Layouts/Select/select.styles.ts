import styled from "styled-components";
import {
  inpFieldContainer,
  fieldLabel,
  requiredField,
} from "../../../styles/helpers";

export const SelectContainer = styled.div<{
  hasError: boolean;
  isChecked: boolean;
}>`
  ${inpFieldContainer};

  .label {
    ${fieldLabel}
  }

  .inp-field {
    ${({ hasError, isChecked }) =>
      requiredField({ hasError, isChecked, isDateField: true })}

    .sel-container {
      border-radius: inherit;

      .sel-control {
        border-radius: inherit;
        min-height: 100%;
        height: 4.8rem;
        outline: none;
        border: none;
        box-shadow: none;
        cursor: pointer;

        .sel-indicator {
          /* height: $inp-h; */

          .sel-indicator__separator {
            display: none;
          }
        }

        .sel-placeholder {
          font-size: ${({ theme }) => theme.size.sm};
        }
      }

      .sel-menu {
        border-radius: 0.5rem;

        .sel-menu__list {
          border-radius: inherit;
          scroll-behavior: smooth;
          padding: 0;

          &::-webkit-scrollbar {
            width: 1rem;
          }

          &::-webkit-scrollbar-thumb {
            border-radius: 0.5rem;
            background: ${({ theme }) => theme.colors.black};
          }

          &::-webkit-scrollbar-track {
            border-radius: 0.5rem;
            background: ${({ theme }) => theme.colors.white_shade};
          }
        }

        .sel-option {
          text-transform: capitalize;
          cursor: pointer;
        }
      }
    }
  }
`;
