import React from "react";
import Banner from "../components/Global/Banner";

import bannerimg from "../images/guestgoals/bannerimg.webp";

import styled from "styled-components";
import Button from "../components/Global/Button";

export default function guestgoals() {
  return (
    <div>
      <Banner
        textDirection={"left"}
        backgroundImage={bannerimg}
        backgroundColor="black"
      >
        <h1>Top 10 Goals for Every Guest</h1>

        <p>Begin your journey to housing here.</p>
      </Banner>

      <Container>
        <Section color="darkpurple" row={true} bg="lightgrey">
          <Number>1</Number>
          <div>
            <h3>
              Schedule a Case Management session with Family Promise staff.{" "}
            </h3>
            <Button
              onClick={() =>
                window.open(
                  "https://familypromiseofspokane.typeform.com/to/GoDjBb?typeform-source=www.familypromiseofspokane.org",
                  "_blank"
                )
              }
              color="lightpurple"
            >
              Schedule Here
            </Button>
          </div>
        </Section>

        <Section color="darkpurple" row={true}>
          <Number>2</Number>
          <div>
            <h3>
              Complete Homeless Families Coordinated Assessment (HFCA) to
              qualify for community resources.
            </h3>
            <p>
              You can either call Catholic Charities directly to schedule your
              appointment or schedule an appointment with Family Promise Case
              Manager (Amy Robinson).
            </p>

            <Buttons>
              <Button
                onClick={() =>
                  window.open(
                    "https://www.cceasternwa.org/homeless-resources",
                    "_blank"
                  )
                }
                color="lightpurple"
              >
                Call 509-325-5005
              </Button>
              <Button
                onClick={() => {
                  window.location.href =
                    "mailto:arobinson@familypromiseofspokane.org";
                }}
                color="lightpurple"
              >
                Email Amy
              </Button>
            </Buttons>
          </div>
        </Section>

        <Section color="darkpurple" row={true} bg="lightgrey">
          <Number>3</Number>
          <div>
            <h3>Obtain Driver's License or State Identification.</h3>
            <p>
              Make sure that your identification is up-to-date and accurate.
              This will open doors in the housing journey.
            </p>
            <Button
              onClick={() =>
                window.open("https://www.dol.wa.gov/driverslicense/", "_blank")
              }
              color="lightpurple"
            >
              Schedule Here
            </Button>
          </div>
        </Section>

        <Section color="darkpurple" row={true}>
          <Number>4</Number>
          <div>
            <h3>Order social security cards for everyone in your household.</h3>
            <p>
              Make sure that your identification is up-to-date and accurate.
              This will open doors in the housing journey.
            </p>

            <Buttons>
              <Button color="lightpurple">Call 1-866-331-5532</Button>
              <Button
                onClick={() =>
                  window.open("https://www.ssa.gov/ssnumber/", "_blank")
                }
                color="lightpurple"
              >
                Apply Online Here
              </Button>
            </Buttons>
          </div>
        </Section>

        <Section color="darkpurple" row={true} bg="lightgrey">
          <Number>5</Number>
          <div>
            <h3>Order birth certificates for minors/children only.</h3>

            <Buttons>
              <Button
                onClick={() =>
                  window.open(
                    "https://www.vitalchek.com/v/birth-certificates?ScenarioName=ScenarioWebPlatformRedirect",
                    "_blank"
                  )
                }
                color="lightpurple"
              >
                Apply Online Here
              </Button>
            </Buttons>
          </div>
        </Section>

        <Section color="darkpurple" row={true}>
          <Number>6</Number>
          <div>
            <h3>Sign up for benefits through DSHS.</h3>

            <p>
              DSHS can relieve some of your monthly expenses by providing cash
              assistance, receive EBT & food assistance to qualifying families.
            </p>

            <Buttons>
              <Button
                onClick={() =>
                  window.open(
                    "https://www.washingtonconnection.org/home/",
                    "_blank"
                  )
                }
                color="lightpurple"
              >
                Apply Here
              </Button>
            </Buttons>
          </div>
        </Section>

        <Section color="darkpurple" row={true} bg="lightgrey">
          <Number>7</Number>
          <div>
            <h3>Enroll children in school if not already enrolled.</h3>

            <p>
              School provides stability for children and time to get things done
              for adults.
            </p>

            <Buttons>
              <Button
                // onClick={() =>
                //   window.open(
                //     "https://www.washingtonconnection.org/home/",
                //     "_blank"
                //   )
                // }
                color="lightpurple"
              >
                Apply Here
              </Button>
            </Buttons>
          </div>
        </Section>

        <Section color="darkpurple" row={true}>
          <Number>8</Number>
          <div>
            <h3>Find childcare for non-school aged children.</h3>

            <p>
              Childcare provides stability for children and time to get things
              done for adults.
            </p>

            <Buttons>
              <Button
                onClick={() =>
                  window.open("https://www.childcareaware.org/", "_blank")
                }
                color="lightpurple"
              >
                Find Providers Here
              </Button>
            </Buttons>
          </div>
        </Section>

        <Section color="darkpurple" row={true} bg="lightgrey">
          <Number>9</Number>
          <div>
            <h3>Obtain your credit report.</h3>

            <p>
              Knowing your credit score is an important part of knowing where
              you may qualify for housing.
            </p>

            <Buttons>
              <Button
                onClick={() =>
                  window.open(
                    "https://www.annualcreditreport.com/index.action",
                    "_blank"
                  )
                }
                color="lightpurple"
              >
                Use Annual Credit Report
              </Button>
              <Button
                onClick={() =>
                  window.open("https://www.creditkarma.com/", "_blank")
                }
                color="lightpurple"
              >
                Use Credit Karma
              </Button>
            </Buttons>
          </div>
        </Section>

        <Section color="darkpurple" row={true}>
          <Number>10</Number>
          <div>
            <h3>Attend job or education readiness and life skills programs.</h3>

            <p>
              Don't have a job? Not sure how to maintain a household budget?
              Make sure that you have the best chance at getting a job.
            </p>

            <Buttons>
              <Button
                onClick={() =>
                  window.open("https://www.worksourcewa.com/", "_blank")
                }
                color="lightpurple"
              >
                Check Our Worksource
              </Button>
              <Button
                onClick={() =>
                  window.open("https://pioneerhumanservices.org/", "_blank")
                }
                color="lightpurple"
              >
                Check out Pioneer Human Services{" "}
              </Button>
              <Button
                onClick={() =>
                  window.open("https://nextgenzone.org/", "_blank")
                }
                color="lightpurple"
              >
                Check out NextGen{" "}
              </Button>
            </Buttons>
          </div>
        </Section>
      </Container>
    </div>
  );
}

const Buttons = styled.div`
  display: flex;

  gap: 1rem;

  @media (max-width: 1100px) {
    justify-content: center;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Number = styled.div`
  min-width: 150px;

  min-height: 150px;

  margin-bottom: 2rem;

  display: flex;

  justify-content: center;

  align-items: center;

  border: 5px solid #0063be;

  background-color: #004477;

  color: white;

  font-size: 5rem;

  border-radius: 15%;

  margin-right: 1rem;
`;

const Section = styled.div`
  padding: 3rem 10px 3rem 10px;

  width: 1100px;

  color: ${(props) => props.theme[props.color] || props.color};

  background-color: ${(props) => props.theme[props["bg"]]};

  display: flex;

  flex-direction: ${(props) => (props.row ? "row" : "column")};

  align-items: center;

  text-align: ${(props) => props.textAlign};

  @media (max-width: 1100px) {
    flex-direction: column;

    text-align: center;

    width: 100%;
  }
`;

const Container = styled.div`
  width: 100%;

  display: flex;

  justify-content: center;

  align-items: center;

  flex-direction: column;
`;
