import React from "react";

import Layout from "./src/components/Layout";

import "./src/styles/reset.css";

import "bootstrap/dist/css/bootstrap.min.css";

import "./src/styles/global.css";

import { ThemeProvider } from "styled-components";

import { theme } from "./theme";

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>{element}</Layout>
    </ThemeProvider>
  );
};
