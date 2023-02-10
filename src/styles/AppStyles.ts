import { createGlobalStyle } from "styled-components";

export const AppStyles = createGlobalStyle`
    @font-face {
      font-family: "HelveticaNeue";
      src: url("/HelveticaNeue.ttc");
      font-weight: normal;
      font-size: normal;
    }
    

    html{
      font-size: 62.5%;
    }

    *,
    *::after,
    *::before{
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    body{
      font-family: "HelveticaNeue", sans-serif;
      font-size: 1.6rem;
      color:${({ theme }) => theme.colors.black};
      background: ${({ theme }) => theme.colors.white};
    }

    a{
      text-decoration: none;
    }

    a,
    button{
      cursor: pointer;
    }

    a,
    button,
    input,
    textarea{
      outline: none;
      font-family: inherit;
    }
`;
