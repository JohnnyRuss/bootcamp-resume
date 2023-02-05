import styled from "styled-components";

export const HomeContainer = styled.section`
  height: 100vh;
  position: relative;
  background-image: url("/assets/image/pattern-home-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .home-head {
    position: absolute;
    top: 0;
    width: min(100%, ${({ theme }) => theme.container.desktop_w_inset});
    left: 50%;
    transform: translateX(-50%);
    padding: 2.5rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.light_gray};
  }

  .stamp-fig {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-25%);
  }

  .add-resume--btn {
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.8rem 12.6rem;
    border-radius: 0.8rem;
    font-size: ${({ theme }) => theme.size.lg};
  }
`;
