import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

import Banner from "../components/Global/Banner";

import banner from "../images/furniture/banner.webp";
import supplies from "../images/furniture/supplies.webp";

import { Image } from "../components/Global/Image";
import Button from "../components/Global/Button";

export default function furniture() {
  return (
    <div>
      <Banner
        backgroundImage={banner}
        backgroundColor="lightpurple"
        textDirection={"left"}
      >
        <h1>Furniture & Supplies</h1>
      </Banner>

      <Container>
        <Section>
          <h2>
            The goods & supplies you give today equip families to build home
            tomorrow.
          </h2>

          <p>
            Newly-housed families are encouraged and empowered to personalize
            their home with items they find themselves. To give the dignity of
            independence to our guests - both current and newly-housed - we
            accept only donations on the following list.
          </p>
        </Section>

        <Section bg="lightgrey">
          <h1>Curious what we need right now? Check out our inventory.</h1>
          <Button
            onClick={() =>
              window.open(
                "https://docs.google.com/spreadsheets/d/1VchgjHu644t5nCLVwSL_KIIDcetwBNlcbklvvSDcb8M/edit#gid=1038125846",
                "_blank"
              )
            }
            color="gold"
          >
            See What We Need
          </Button>
        </Section>

        <Section>
          <h1>What can Family Promise accept?</h1>
          <Image src={supplies} />
        </Section>

        <Section bg="gold">
          <h1>Don't see your item on the list?</h1>
          <h2>For Furniture Call Shawn at 509-828-3532</h2>
          <h2>For Supplies Call Jax at 509-723-4663</h2>
        </Section>
      </Container>
    </div>
  );
}

const Section = styled.div`
  padding: 0.5rem;

  color: ${(props) => props.theme.darkblue};

  background-color: ${(props) => props.theme[props["bg"]]};

  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: center;

  text-align: center;

  font-size: larger;
`;
