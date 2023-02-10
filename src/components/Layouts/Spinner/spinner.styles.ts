import styled, { keyframes } from "styled-components";

const spin_xy = "4rem";

const moveSpin = keyframes`
    100%{
     transform: rotate(360deg);
    }
`;

export const Spin = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);

  ::after,
  ::before {
    content: "";
    position: absolute;
    border-radius: 100%;
    top: calc(50% - ${spin_xy});
    left: calc(50% - ${spin_xy});
    width: ${spin_xy};
    height: ${spin_xy};
  }

  ::after {
    z-index: 1;
    background: transparent;
    border: 4px solid ${({ theme }) => theme.colors.green};
  }

  ::before {
    z-index: 2;
    background: transparent;
    border: 4px solid ${({ theme }) => theme.colors.red};
    border-left-color: transparent;
    border-bottom-color: transparent;
    border-right-color: transparent;
    animation: ${moveSpin} 1s linear infinite;
  }
`;
