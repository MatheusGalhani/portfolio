import { createGlobalStyle, DefaultTheme } from "styled-components";

interface GlobalProps {
  theme: DefaultTheme;
}
export const GlobalStyle = createGlobalStyle<GlobalProps>`
  * {
    font-family: 'Sen', sans-serif;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
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
