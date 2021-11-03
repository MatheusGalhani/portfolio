import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Sen', sans-serif;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
    min-height: 100%;
  }
  body {
    background: ${({ theme }) => theme.base.background};
    overflow-x: hidden;
    font-size: 1rem;
  }
  button {
    cursor: pointer;
  }
`;
