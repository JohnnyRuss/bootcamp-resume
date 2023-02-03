import { createGlobalStyle } from "styled-components";

export const AppStyles = createGlobalStyle`
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
        font-size: 1.6rem;
    }
`;
