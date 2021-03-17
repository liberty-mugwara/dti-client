import React from "react";
import Head from "next/head";
import { useMainLayout } from "../layouts/MainLayout";
import styled from "styled-components";

// sample code by Mugs

const generateStyles = (height, color) => `
  height: ${height};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color};
`;

const Header = styled.header`
  ${generateStyles("10vh", "#f00")}
`;

const Aside = styled.aside`
  ${generateStyles("80vh", "#aaff00")}
`;

const Main = styled.main`
  ${generateStyles("80vh", "#cc00ff")}
`;

const Footer = styled.footer`
  ${generateStyles("10vh", "#ff0")}
`;

const Home = () => (
  <React.Fragment>
    <Head>
      <title>Example</title>
    </Head>
    <Header>Header</Header>
    <Aside>Aside</Aside>
    <Main>Main</Main>
    <Footer>Footer</Footer>
  </React.Fragment>
);

// using main layout
export default useMainLayout(Home);
