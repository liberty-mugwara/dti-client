import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  *,*::before,*::after{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }
  body {
    font-size: 1.6rem;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
  }

  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(-10rem);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes fadeInRightExtra {
    0% {
      opacity: 0;
      transform: translateX(-10rem);
    }
    80% {
      transform: translateX(0.5rem);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(10rem);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes fadeInLeftExtra {
    0% {
      opacity: 0;
      transform: translateX(10rem);
    }
    80% {
      transform: translateX(-0.5rem);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes fadeInBottom {
    0% {
      opacity: 0;
      transform: translateY(3rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
