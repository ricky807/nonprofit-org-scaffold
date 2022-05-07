import React from "react";

import Banner from "../components/Global/Banner";

import bannerImg from "../images/whatwedo/bannerimg.jpg";

import styled from "styled-components";

import { Container } from "../components/Global/Container";

import Card from "../components/Global/Card";

import useWindowDimensions from "../utils/hooks/useWindowDimensions";

import prevention from "../images/whatwedo/prevention.jpg";

import emergency from "../images/whatwedo/emergency.jpg";

import preparation from "../images/whatwedo/preparation.jpg";

import Button from "../components/Global/Button";

import { navigate } from "gatsby";

export default function Whatwedo() {
  const { width } = useWindowDimensions();

  return (
    <>
      <Banner
        backgroundImage={bannerImg}
        textDirection="left"
      >
        <h1>What We Do</h1>
        <h3>Prevent.Provide.Prepare</h3>
      </Banner>

      <Container>
        <Section>
          <p>
            Family Promise helps local communities coordinate their compassion
            to address the root causes of family homelessness. We tap existing
            local resources to empower families towards economic stability.
            Families come to us in crisis; we help them rebuild their lives with
            new skills and ongoing support.
          </p>

          <p>
            We address the issue holistically, providing prevention services
            before families reach crisis, shelter and case management when they
            become homeless, and stabilization programs once they have secured
            housing to ensure they remain independent.
          </p>
        </Section>
      </Container>

      <Container>
        <Section>
          <Cards>
            <Card
              image={prevention}
              imageWidth={width > 700 ? "50%" : "100%"}
              direction={width < 700 ? "vertical" : "horizontal"}
            >
              <CardContentContainer>
                <div className={"cardContent"}>
                  <h1>Prevention</h1>
                  <p>
                    Preventing families from becoming homeless through rental
                    assistance and targeted case-management is essential to what
                    we do.
                  </p>
                </div>
                <Button onClick={() => navigate('/prevent')} color={"gold"}>Learn more</Button>
              </CardContentContainer>
            </Card>

            <Card
              image={emergency}
              imageWidth={width > 700 ? "50%" : "100%"}
              direction={width < 700 ? "vertical" : "horizontal"}
            >
              <CardContentContainer>
                <div className={"cardContent"}>
                  <h1>Emergency Shelter</h1>
                  <p>
                    For those who need emergency shelter, we provide holistic
                    hospitality... everything a homeless family needs to get
                    back on their feet.
                  </p>
                </div>
                <Button onClick={() => navigate('/provide')} color={"gold"}>Learn more</Button>
              </CardContentContainer>
            </Card>

            <Card
              image={preparation}
              imageWidth={width > 700 ? "50%" : "100%"}
              direction={width < 700 ? "vertical" : "horizontal"}
            >
              <CardContentContainer>
                <div className={"cardContent"}>
                  <h1>Preparation</h1>
                  <p>
                    Helping the families we serve not only succeed today but
                    remain stable in their housing, financial capability and
                    career paths tomorrow.
                  </p>
                </div>
                <Button onClick={() => navigate('/prepare')} color={"gold"}>Learn more</Button>
              </CardContentContainer>
            </Card>
          </Cards>
        </Section>
      </Container>

      <DonationContainer>
        <h1>Want to support Family Promise?</h1>
        <Button onClick={() => navigate('/donate')} color='gold'>DONATE</Button>
      </DonationContainer>
    </>
  );
}

const DonationContainer = styled.div`
  min-height: 30vh;
  background-color: ${props => props.theme.blue};


  text-align: center;
  padding: 5px;

  color: white;

  display: flex;
  flex-direction: column;

  justify-content: center;

  align-items: center;

  h1 {
    margin-bottom: 2rem;
  }

`

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
