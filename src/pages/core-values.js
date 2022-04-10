import React from "react";
import styled from "styled-components";

import Banner from "../components/Global/Banner";

import { Container } from "../components/Global/Container";

import { Image } from "../components/Global/Image";

import values from "../images/core-values/values.png";

export default function coreValues() {
  return (
    <>
      <Banner backgroundColor={"lightpurple"} textDirection="left">
        <BannerText>Core Values</BannerText>
      </Banner>

      <Container>
        <Image src={values} />
      </Container>
    </>
  );
}

const BannerText = styled.h1`
    font-size: 4rem;
`
