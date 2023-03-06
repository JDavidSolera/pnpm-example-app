import { createGlobalStyle } from "styled-components";
import normalize from "./normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize}

  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: ${({ theme }) => theme.fonts.main}, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
      "Open Sans", "Helvetica Neue", sans-serif;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default GlobalStyles;
