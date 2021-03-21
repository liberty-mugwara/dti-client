import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../global-styles";
import theme from "../theme";

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
