import React from "react";

import Banner from "../components/Global/Banner";
import Button from "../components/Global/Button";

import Card from "../components/Global/Card";

import first from "../images/roundtable/first.webp";

import second from "../images/roundtable/second.webp";

import third from "../images/roundtable/third.webp";

import * as CardContainerStyles from "../styles/Containers/CardContainer.module.css";

import * as globalStyles from "../styles/Global/Global.module.css";

import * as styles from "../styles/pages/Learn.module.css";

import useWindowDimensions from "../utils/hooks/useWindowDimensions";

import DonateOrVolunteer from "../components/Global/DonateOrVolunteer";

import { navigate } from "gatsby";

import styled from "styled-components";
import Donate from "../components/Global/Donate";

export default function Learn() {
  const { width } = useWindowDimensions();

  const determineCardDirection = () => {
    return width <= 700 ? "vertical" : "horizontal";
  };

  return (
    <div>
      <Banner backgroundColor={"#0063be"} textDirection="center">
        <BannerContent>
          <h1>ROUNDTABLE RESOURCES</h1>
          <p>
            Welcome! Thank you for your interest in learning more about problems
            of homelessness. Educating oneself and being open to learning is a
            great way to help end the cycle of homelessness. Listed below are
            Roundtable topics and additional resources to help further your
            learning. Come join us at our Roundtable events by registering via
            our Community Events Calendar!
          </p>

          <Button color={"white"}>Calendar</Button>
        </BannerContent>
      </Banner>
      ;
      <div className={globalStyles.genericContainer}>
        <div className={CardContainerStyles.container}>
          <Card
            imageWidth={width >= 700 ? "50%" : "100%"}
            image={first}
            direction={determineCardDirection()}
          >
            <CardContent className={styles.cardContent}>
              <h1>Developmental Deficits</h1>
              <p>
                Learn more about how trauma such as experiencing homelessness
                affects children's growth and development. Download the PDF for
                additional resources. Click Watch Now to learn about children in
                persistent poverty.
              </p>
              <Buttons>
                <Button
                  onClick={() =>
                    window.open(
                      "https://fpspokanebucket.s3.us-west-1.amazonaws.com/children+%26+homelessness+roundtable+resource.pdf",
                      "_blank"
                    )
                  }
                  color={"gold"}
                >
                  Download
                </Button>

                <Button
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/watch?v=gDkpWwkXkHw&feature=youtu.be",
                      "_blank"
                    )
                  }
                  color={"gold"}
                >
                  Watch
                </Button>
              </Buttons>
            </CardContent>
          </Card>

          <Card
            imageWidth={width >= 700 ? "50%" : "100%"}
            image={second}
            direction={determineCardDirection()}
          >
            <CardContent className={styles.cardContent}>
              <h1>Homelessness in the ER</h1>
              <p>
                Learn more about how problems of homelessness contribute to high
                rates of ER use. Download the PDF for additional resources.
              </p>
              <Buttons>
                <Button
                  onClick={() =>
                    window.open(
                      "https://fpspokanebucket.s3.us-west-1.amazonaws.com/Homelessness+in+the+ER.pdf",
                      "_blank"
                    )
                  }
                  color={"gold"}
                >
                  Download
                </Button>
              </Buttons>
            </CardContent>
          </Card>

          <Card
            imageWidth={width >= 700 ? "50%" : "100%"}
            image={third}
            direction={determineCardDirection()}
          >
            <CardContent className={styles.cardContent}>
              <h1>The Relationship between Drugs and Homelessness</h1>
              <p>
                Learn more about drug use and how it affects individuals
                experiencing homelessness,. Download the PDF for additional
                resources.
              </p>
              <Buttons>
                <Button
                  onClick={() =>
                    window.open(
                      "https://fpspokanebucket.s3.us-west-1.amazonaws.com/drug+use+perception.pdf",
                      "_blank"
                    )
                  }
                  color={"gold"}
                >
                  Download
                </Button>
              </Buttons>
            </CardContent>
          </Card>
        </div>
      </div>
      <Donate />
    </div>
  );
}

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const BannerContent = styled.div`
  max-width: 800px;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: smaller;
  }
`;

const CardContent = styled.div`
  font-size: larger;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.darkblue};

  @media (max-width: 1200px) {
    .cardContent {
      font-size: smaller;
    }
  }

  @media (max-width: 900px) {
    .cardContent {
      font-size: smaller;
    }
  }

  @media (max-width: 600px) {
    .cardContentButtons {
      flex-direction: column;
    }
  }
`;
