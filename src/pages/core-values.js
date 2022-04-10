import React from "react";

import Banner from "../components/Global/Banner";

import { Container } from "../components/Global/Container";

import values from "../images/core-values/values.png";

export default function coreValues() {
  return (
    <div>
      <Banner backgroundColor={"lightpurple"} textDirection="left">
        <h1 style={{ fontSize: "4rem" }}>Core Values</h1>
      </Banner>

      <Container>
        <img style={{ maxWidth: '100%', maxHeight: '100%', height: 'auto' }} src={values} />
      </Container>
    </div>
  );
}
