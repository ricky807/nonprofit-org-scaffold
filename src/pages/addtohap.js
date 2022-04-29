import React from "react";

import Banner from "../components/Global/Banner";

import hapbackgroundimage from "../images/hapbackgroundimage.webp";

import haplogoonly from "../images/haplogoonly.webp";

import { Image } from "../components/Global/Image";

import Button from "../components/Global/Button";

import styled from "styled-components";
import { Container } from "react-bootstrap";

export default function addtohap() {
  return (
    <div>
      <Banner
        height={"25vh"}
        backgroundImage={hapbackgroundimage}
        backgroundColor="white"
      >
        <BannerContent>
          <Image src={haplogoonly} />
          <h1>
            <strong>Register a New Housing Resource</strong>
          </h1>
        </BannerContent>
      </Banner>

      <Container>
        <Section>
          <p>
            When you register your organization's housing resources with the
            HAP, eligible tenants and landlords can search, connect and apply
            for your organization's resources in one central, community-wide
            data base.
          </p>
        </Section>

        <Section bg="#b1d3bb">
          <Button
            onClick={() =>
              window.open(
                "https://familypromiseofspokane.typeform.com/to/ezK2z12m?typeform-source=www.familypromiseofspokane.org",
                "_blank"
              )
            }
          >
            Learn More About Registering A New Housing Resource
          </Button>
        </Section>
      </Container>
    </div>
  );
}

const BannerContent = styled.div`
  font-weight: 1000;
  font-size: larger;
  color: ${(props) => props.theme.darkblue};

  display: flex;
  align-items: center;

  gap: 1rem;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

const Section = styled.div`
  padding: 1.1rem;

  margin-top: 1rem;

  margin-bottom: 1rem;

  color: ${(props) => props.theme.darkblue};

  background-color: ${(props) => props.theme[props["bg"]] || props["bg"]};

  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: center;

  font-size: 1.7rem;

  @media screen and (max-width: 500px) {
    padding: 0;
  }
`;
