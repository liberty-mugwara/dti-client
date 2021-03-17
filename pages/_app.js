import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
    font-size: 1.6rem;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
  }
`;

const theme = {
  colors: {
    // example colors
    primary: "#0070f3",
    secondary: "#bbff00",
  },
};

export default function App({ Component, pageProps }) {
  const Layout = Component.layout || React.Fragment;
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
