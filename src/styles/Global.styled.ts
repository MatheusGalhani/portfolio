import { createGlobalStyle } from 'styled-components';
import { devices } from '../rules/devices';

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
    max-width: 100vw;
    overflow-x: hidden;
  }
  button, a {
    cursor: pointer;
    border: none;
    outline: none;
    &:hover, &:focus {
      outline: none;
    }
  }
  a { 
    text-decoration: none;
  }
  
  #root{
    max-width: ${devices.ultraLargeDesktops};
    margin: 0 auto;
  }
`;
