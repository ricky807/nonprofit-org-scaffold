import React from "react";
import Banner from "../components/Global/Banner";
import PassswordProtected from "../components/Global/PasswordProtected";

import styled from "styled-components";
import Button from "../components/Global/Button";
import { navigate } from "gatsby";

export default function GuestPortal() {
  return (
    <div>
      <Banner backgroundColor={"darkblue"} height="20vh" textDirection={"left"}>
        <h1>Welcome.</h1>
      </Banner>

      <Container>
        <Section textAlign="left" color="darkblue">
          <Text>
            Here are Family Promise of Spokane, we want you to thrive. To do
            that, we've put together the essential resources needed for you to
            start your journey of getting back into housing.
          </Text>
        </Section>

        <Section bg="lightpurple" color="gold">
          <div>
            <h2>Apply for the Family Advisory Council</h2>
            <Buttons>
              <Button
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdMWNhzEbWgy66jXihsHBPbDeKi89JAMVv_q0OLfbq8K-guFA/viewform?vc=0&c=0&w=1&flr=0",
                    "_blank"
                  )
                }
                color="gold"
              >
                Fill Out Here
              </Button>
              <Button
                onClick={() =>
                  window.open(
                    "https://fpspokanebucket.s3.us-west-1.amazonaws.com/FAC+Member+Application+(2.14.22)+(1).pdf",
                    "_blank"
                  )
                }
                color="gold"
              >
                Download PDF
              </Button>
            </Buttons>
          </div>
        </Section>

        <Section color="darkblue">
          <div>
            <h2>Fill out a Case Management Inquiry Form.</h2>
            <Buttons>
              <Button
                onClick={() =>
                  window.open(
                    "https://familypromiseofspokane.typeform.com/to/GoDjBb",
                    "_blank"
                  )
                }
                color="gold"
              >
                Fill Out Here
              </Button>
            </Buttons>
          </div>
        </Section>

        <Section color="darkblue" bg="gold" textAlign="center">
          <div>
            <h2>Complete the Top 10 Goals for Every Guest.</h2>

            <p>
              By accomplishing these tasks in order, you will set yourself to
              get housing as quickly as possible.
            </p>

            <Buttons color="purple">
              <Button
                onClick={() => navigate("/guestgoals")}
                color="lightpurple"
              >
                Click Here To Start
              </Button>
            </Buttons>
          </div>
        </Section>

        <Section color="darkblue">
          <div>
            <h2>
              Want to show appreciation, appeal a decision or share a concern?
            </h2>
            <Buttons>
              <Button
                onClick={() =>
                  window.open(
                    "https://familypromiseofspokane.typeform.com/to/g6vFNXPp?typeform-source=www.familypromiseofspokane.org",
                    "_blank"
                  )
                }
                color="gold"
              >
                Fill Out Here
              </Button>
            </Buttons>
          </div>
        </Section>

        <Section bg="blue" color="white">
          <div>
            <h2>Tell Family Promise how to improve!</h2>
            <Buttons>
              <Button
                onClick={() =>
                  window.open(
                    "https://familypromiseofspokane.typeform.com/to/igAPtBij?typeform-source=www.familypromiseofspokane.org",
                    "_blank"
                  )
                }
                color="gold"
              >
                Complete Survey Here
              </Button>
            </Buttons>
          </div>
        </Section>
      </Container>
    </div>
  );
}

const Text = styled.p`
  max-width: 800px;
`;

const Buttons = styled.div`
  display: flex;

  justify-content: center;

  gap: 1rem;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  width: 100%;

  display: flex;

  justify-content: center;

  align-items: center;

  flex-direction: column;
`;

const Section = styled.div`
  padding: 3rem 10px 3rem 10px;

  color: ${(props) => props.theme[props.color] || props.color};

  background-color: ${(props) => props.theme[props["bg"]]};

  display: flex;

  width: 100%;

  flex-direction: column;

  justify-content: center;

  align-items: center;

  text-align: ${(props) => props.textAlign};

  font-size: 1.5rem;
`;
