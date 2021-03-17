import React from "react";
import styled from "styled-components";

// Example Layout by Mugs

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "header header"
    "aside main"
    "footer footer";

  header {
    grid-area: header;
  }

  aside {
    grid-area: aside;
  }

  main {
    grid-area: main;
  }

  footer {
    grid-area: footer;
  }
`;

const MainLayout = ({ children }) => <GridLayout>{children}</GridLayout>;

export const useMainLayout = Component => {
  Component.layout = MainLayout;
  return Component;
};
