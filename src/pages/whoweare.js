import React from "react";

import Banner from "../components/Global/Banner";

import banner from "../images/whoweare/banner.jpg";

import { Container } from "../components/Global/Container";

import Button from "../components/Global/Button";

import { Image } from "../components/Global/Image";

import cycle from "../images/whoweare/cycle.jpg";

import styled from "styled-components";

import { FaPlusCircle } from "react-icons/fa";

import Analytic, { Analytics } from "../components/Global/Analytic";

export default function whoweare() {
  return (
    <>
      <Banner
        backgroundImage={banner}
        backgroundColor="lightpurple"
        textDirection="left"
      >
        <h1>Who we Are</h1>
        <h3>We imagine a future where no child experiences homelessness.</h3>
      </Banner>

      <Container>
        <Section>
          <p>
            Contrary to common knowledge, family homelessness is the fastest
            growing segment of the homeless population in the United States
            today. Spokane County is no exception.
          </p>

          <p>
            That's why Family Promise specializes in connecting homeless
            families with those in their own neighborhood, increasing support
            networks and re-enforcing the skills needed to maintain housing.
          </p>
          <Button color={"gold"}>See How We Do It</Button>
        </Section>
      </Container>

      <Container>
        <Section>
          <p>
            When Family Promise of Spokane began, it was a small, but
            comprehensive program for three homeless families at a time. Today,
            we serve over 1,100 family members each year as the only wraparound
            program for homeless families in Eastern Washington.
          </p>

          <Button color={"gold"}>Read More</Button>
        </Section>
      </Container>

      <Container>
        <Image src={cycle} />
      </Container>

      <Container>
        <VideoSection>
          <iframe
            width={"100%"}
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
          <div>
            <p>
              Spearheaded by invested volunteers and talented staff, we prevent
              families from becoming homeless, provide for families experiencing
              homelessness and prepare families for life beyond homelessness.
            </p>
            <Button color="gold">Get Involved</Button>
          </div>
        </VideoSection>
      </Container>
    </>
  );
}

const Section = styled.section`
  width: 50%;
  padding: 1rem;
  color: ${(props) => props.theme.darkpurple};

  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 400px) {
    width: 95%;
  }
`;

const VideoSection = styled.section`
  width: 50%;
  padding: 1rem;
  color: ${(props) => props.theme.darkpurple};

  display: flex;

  iframe {
    margin-right: 2rem;
  }

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 800px) {
    width: 95%;

    flex-direction: column;
  }
`;
