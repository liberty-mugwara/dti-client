import React from "react";
import Grid from "./GridStyles";

export const PublicLayout = ({ children }) => <Grid>{children}</Grid>;

export const usePublicLayout = Component => {
  Component.layout = PublicLayout;
  return Component;
};
