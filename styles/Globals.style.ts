import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  body {
    background: ${({ theme }) => theme.colors.body};
    color :${({ theme }) => theme.colors.bodyText};
    font-family: 'Roboto', sans-serif;
    max-height: 1e6em
  }

`
