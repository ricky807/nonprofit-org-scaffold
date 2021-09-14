import React from "react";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

export default function Index({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
