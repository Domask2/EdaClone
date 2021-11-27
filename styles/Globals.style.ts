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
  }

  a {
    color :${({ theme }) => theme.colors.nav};
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  li {
    list-style-type: none;
  }
`
