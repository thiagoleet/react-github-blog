import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
   margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors["background"]};
    color: ${({ theme }) => theme["base-text"]};
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
 `;
