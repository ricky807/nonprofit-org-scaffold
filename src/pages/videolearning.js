import React from "react";

import Banner from "../components/Global/Banner";
import Button from "../components/Global/Button";

import Card from "../components/Global/Card";

import letter from "../images/learn/letter.webp";

import first from "../images/videolearning/first.webp";

import second from "../images/videolearning/second.webp";

import third from "../images/videolearning/third.webp";

import fourth from "../images/videolearning/fourth.webp";

import fifth from "../images/videolearning/fifth.webp";

import sixth from "../images/videolearning/sixth.webp";

import seventh from "../images/videolearning/seventh.webp";

import eight from "../images/videolearning/eight.webp";

import ninth from "../images/videolearning/ninth.webp";

import tenth from "../images/videolearning/tenth.webp";

import eleventh from "../images/videolearning/eleventh.webp";

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
      <Banner
        color="white"
        backgroundColor="darkblue"
        height={"20vh"}
        textDirection="left"
      >
        <h1>Start Learning</h1>
        <p>with the Stanford Center on Poverty and Inequality</p>
      </Banner>

      <div className={globalStyles.genericContainer}>
        <div className={CardContainerStyles.container}>
          <Card
            imageWidth={width >= 700 ? "50%" : "100%"}
            image={first}
            direction={determineCardDirection()}
          >
            <CardContent className={styles.cardContent}>
              <h1>Course Introduction</h1>
              <h4>N/A</h4>
              <p>An overview of what to expect through this online "class".</p>
              <Buttons>
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/watch?v=qaHjl1KUjyI&list=PLZapTuSHtu-CeejcJGLVBLqNT-ipS0Idh",
                      "_blank"
                    )
                  }
                  color={"gold"}
                >
                  Watch Now
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
              <h1>The Experience of Poverty</h1>
              <h4>N/A</h4>
              <p>
                An intro to the next lessons specifically focused on poverty.
              </p>
              <Buttons>
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/watch?v=I0SJ-lI1zts&list=PLZapTuSHtu-CeejcJGLVBLqNT-ipS0Idh&index=8",
                      "_blank"
                    )
                  }
                  color={"gold"}
                >
                  Watch Now
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
              <h1>U.S. Poverty in Perspective</h1>
              <h4>Sheldon Danziger</h4>
              <p>A history of poverty in the U.S.</p>
              <Buttons>
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/watch?v=dZA_JVAASZQ&list=PLZapTuSHtu-CeejcJGLVBLqNT-ipS0Idh&index=9",
                      "_blank"
                    )
                  }
                  color={"gold"}
                >
                  Watch Now
                </Button>
              </Buttons>
            </CardContent>
          </Card>

          <Card
            imageWidth={width >= 700 ? "50%" : "100%"}
            image={fourth}
            direction={determineCardDirection()}
          >
            <CardContent className={styles.cardContent}>
              <h1>Living in Poverty</h1>
              <h4>Kathryn Edin</h4>
              <p>
                An analysis of exactly how far you can stretch a welfare check
                while in poverty.
              </p>
              <Buttons>
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/watch?v=HycFaUbaoLM&list=PLZapTuSHtu-CeejcJGLVBLqNT-ipS0Idh&index=10",
                      "_blank"
                    )
                  }
                  color={"gold"}
                >
                  Watch Now
                </Button>
              </Buttons>
            </CardContent>
          </Card>

          <Card
            imageWidth={width >= 700 ? "50%" : "100%"}
            image={fifth}
            direction={determineCardDirection()}
          >
            <CardContent className={styles.cardContent}>
              <h1>Poor Neighborhoods</h1>
              <h4>Robert Sampson</h4>
              <p>
                Explore how poverty follows geographical lines within
                neighborhoods.
              </p>
              <Buttons>
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/watch?v=G-w6vi4Q0oM&list=PLZapTuSHtu-CeejcJGLVBLqNT-ipS0Idh&index=11",
                      "_blank"
                    )
                  }
                  color={"gold"}
                >
                  Watch Now
                </Button>
              </Buttons>
            </CardContent>
          </Card>

          <Card
            imageWidth={width >= 700 ? "50%" : "100%"}
            image={sixth}
            direction={determineCardDirection()}
          >
            <CardContent className={styles.cardContent}>
              <h1>Unequal Childhoods</h1>
              <h4>Annette Lareau</h4>
              <p>Learn to acknowledge the impacts of social class.</p>
              <Buttons>
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/watch?v=6HN9ydNktAc&list=PLZapTuSHtu-CeejcJGLVBLqNT-ipS0Idh&index=12",
                      "_blank"
                    )
                  }
                  color={"gold"}
                >
                  Watch Now
                </Button>
              </Buttons>
            </CardContent>
          </Card>

          <Card
            imageWidth={width >= 700 ? "50%" : "100%"}
            image={seventh}
            direction={determineCardDirection()}
          >
            <CardContent className={styles.cardContent}>
              <h1>Unstable Housing</h1>
              <h4>Matthew Desmond</h4>
              <p>Examine the details of America's affordable housing crisis.</p>
              <Buttons>
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/watch?v=NY4Q8XQ0n6E&list=PLZapTuSHtu-CeejcJGLVBLqNT-ipS0Idh&index=13",
                      "_blank"
                    )
                  }
                  color={"gold"}
                >
                  Watch Now
                </Button>
              </Buttons>
            </CardContent>
          </Card>

          <Card
            imageWidth={width >= 700 ? "50%" : "100%"}
            image={eight}
            direction={determineCardDirection()}
          >
            <CardContent className={styles.cardContent}>
              <h1>Having Children in Poverty</h1>
              <h4>Kathryn Edin</h4>
              <p>
                A frontline analysis of raising children in the midst of
                poverty.
              </p>
              <Buttons>
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/watch?v=5KBaVVu46PI&list=PLZapTuSHtu-CeejcJGLVBLqNT-ipS0Idh&index=14",
                      "_blank"
                    )
                  }
                  color={"gold"}
                >
                  Watch Now
                </Button>
              </Buttons>
            </CardContent>
          </Card>

          <Card
            imageWidth={width >= 700 ? "50%" : "100%"}
            image={ninth}
            direction={determineCardDirection()}
          >
            <CardContent className={styles.cardContent}>
              <h1>The Causes of Poverty</h1>
              <h4>N/A</h4>
              <p>Confront assumptions about what causes poverty.</p>
              <Buttons>
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/watch?v=vH6k5nDzgUQ&list=PLZapTuSHtu-CeejcJGLVBLqNT-ipS0Idh&index=15",
                      "_blank"
                    )
                  }
                  color={"gold"}
                >
                  Watch Now
                </Button>
              </Buttons>
            </CardContent>
          </Card>

          <Card
            imageWidth={width >= 700 ? "50%" : "100%"}
            image={tenth}
            direction={determineCardDirection()}
          >
            <CardContent className={styles.cardContent}>
              <h1>Childhood Development</h1>
              <h4>Jack Shonkoff</h4>
              <p>
                Assess the impacts of development for children who grow up in
                poverty.
              </p>
              <Buttons>
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/watch?v=jhWzxvi3tZ4&list=PLZapTuSHtu-CeejcJGLVBLqNT-ipS0Idh&index=16",
                      "_blank"
                    )
                  }
                  color={"gold"}
                >
                  Watch Now
                </Button>
              </Buttons>
            </CardContent>
          </Card>

          <Card
            imageWidth={width >= 700 ? "50%" : "100%"}
            image={eleventh}
            direction={determineCardDirection()}
          >
            <CardContent className={styles.cardContent}>
              <h1>Neighborhoods and Multi-Generational Effects</h1>
              <h4>Patrick Sharkey</h4>
              <p>
                Analyze how poverty and its challenges are often
                multi-generational.
              </p>
              <Buttons>
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/watch?v=8ugiM2F_2BA&list=PLZapTuSHtu-CeejcJGLVBLqNT-ipS0Idh&index=18",
                      "_blank"
                    )
                  }
                  color={"gold"}
                >
                  Watch Now
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
  justify-content: start;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const CardContent = styled.div`
  font-size: larger;

  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

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
