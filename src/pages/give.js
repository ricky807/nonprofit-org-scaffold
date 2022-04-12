import React from "react";

import bannerImg from "../images/give/bannerimg.jpg";

import goods from "../images/give/goods.jpg";

import time from "../images/give/time.jpg";

import encouragement from "../images/give/encouragement.jpg";

import financially from "../images/give/financially.jpg";

import Banner from "../components/Global/Banner";

import { Container } from "../components/Global/Container";

import Button from "../components/Global/Button";

import styled from "styled-components";

import Card from "../components/Global/Card";

import useWindowDimensions from "../utils/hooks/useWindowDimensions";

import { navigate } from "gatsby";

export default function Give() {
  const { width } = useWindowDimensions();

  return (
    <>
      <Banner
        backgroundImage={bannerImg}
        backgroundColor="lightpurple"
        height={"25rem"}
      ></Banner>

      <Container column>
        <Header>
          <h1>Your gift changes a child's future.</h1>
          <Button color={"gold"}>Make a Financial Gift</Button>
        </Header>
      </Container>

      <Container>
        <Section>
          <Cards>
            <Card
              image={financially}
              imageWidth={width > 700 ? "50%" : "100%"}
              direction={width < 700 ? "vertical" : "horizontal"}
            >
              <CardContentContainer>
                <div className={"cardContent"}>
                  <h1>Give Financially</h1>
                  <p>
                    Your monthly gift of $51 provides one day of care for a
                    single mother and her child.
                  </p>
                </div>
                <Button onClick={() => navigate("/donate")} color={"gold"}>
                  Give Now
                </Button>
              </CardContentContainer>
            </Card>

            <Card
              image={goods}
              imageWidth={width > 700 ? "50%" : "100%"}
              direction={width < 700 ? "vertical" : "horizontal"}
            >
              <CardContentContainer>
                <div className={"cardContent"}>
                  <h3>Give</h3>
                  <h1>Goods & Items</h1>
                  <p>
                    Provide the essentials for newly housed or currently
                    homeless families.
                  </p>
                </div>
                <Button onClick={() => navigate("/goods-items")} color={"gold"}>
                  Learn more
                </Button>
              </CardContentContainer>
            </Card>

            <Card
              image={encouragement}
              imageWidth={width > 700 ? "50%" : "100%"}
              direction={width < 700 ? "vertical" : "horizontal"}
            >
              <CardContentContainer>
                <div className={"cardContent"}>
                  <h3>Give</h3>
                  <h1>Encouragement</h1>
                  <p>
                    Send a personal note to encourage a current family in our
                    program.
                  </p>
                </div>
                <Button
                  onClick={() =>
                    window.open(
                      "https://familypromiseofspokane.typeform.com/to/wzANKstf?typeform-source=www.familypromiseofspokane.org",
                      "_blank"
                    )
                  }
                  color={"gold"}
                >
                  Send a Note
                </Button>
              </CardContentContainer>
            </Card>

            <Card
              image={time}
              imageWidth={width > 700 ? "50%" : "100%"}
              direction={width < 700 ? "vertical" : "horizontal"}
            >
              <CardContentContainer>
                <div className={"cardContent"}>
                  <h3>Give</h3>
                  <h1>Time & Talents</h1>
                  <p>
                    Our volunteers are champions the cause of families
                    experiencing homelessness.
                  </p>
                </div>
                <Button onClick={() => navigate("/volunteer")} color={"gold"}>
                  Learn more
                </Button>
              </CardContentContainer>
            </Card>
          </Cards>
        </Section>
      </Container>
    </>
  );
}

const Header = styled.div`
  text-align: center;
  padding: 2rem;

  h1 {
    font-size: 3rem;
  }

  color: ${(props) => props.theme.lightblue};
`;

const Section = styled.section`
  width: 50%;
  padding: 1rem;
  font-size: 1.5rem;
  color: ${(props) => props.theme.darkblue};

  @media (max-width: 1500px) {
    width: 70%;
  }

  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 400px) {
    width: 95%;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .cardContent {
    color: ${(props) => props.theme.darkblue};

    font-size: 1.2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
