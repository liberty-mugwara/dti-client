import { createGlobalStyle } from "styled-components";
import theme from "../theme";

export default createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  body {
    font-size: ${theme.font.base};
    font-family: ${theme.font.family}
  }
`;
