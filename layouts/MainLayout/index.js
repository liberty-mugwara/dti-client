import React from "react";
import Grid from "./GridStyles";

export const MainLayout = ({ children }) => <Grid>{children}</Grid>;

export const useMainLayout = Component => {
  Component.layout = MainLayout;
  return Component;
};
