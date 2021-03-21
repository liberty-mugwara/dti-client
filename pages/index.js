import React, { useContext } from "react";
import Head from "next/head";
import { usePublicLayout } from "../layouts/PublicLayout";
import { ThemeContext } from "styled-components";
import { Header, Footer, Main } from "../components/pages/landing";
import Button from "../components/Button";
// sample code by Mugs

const Home = () => {
  const theme = useContext(ThemeContext);
  return (
    <React.Fragment>
      <Head>
        <title>Example</title>
      </Head>
      <Header>Header</Header>
      <Main>
        <Button paddingY={theme.spacing.sm}>Hello</Button>
      </Main>
      <Footer>Footer</Footer>
    </React.Fragment>
  );
};

// using main layout
export default usePublicLayout(Home);
