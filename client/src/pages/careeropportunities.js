import React from "react";
import styled from "styled-components";
import Banner from "../components/Global/Banner";
import Button from "../components/Global/Button";
import { useCareersQuery } from "../hooks/useCareersQuery";

export default function Careeropportunities() {

  const careers = []

  return (
    <div>
      <Banner height={"20vh"} backgroundColor={"darkblue"}>
        <BannerContent>
          <h1>Career Opportunities</h1>

          <Button
            onClick={() =>
              window.open(
                "https://familypromiseofspokane.typeform.com/to/HYbBAq?typeform-source=www.familypromiseofspokane.org",
                "_blank"
              )
            }
            color={"gold"}
          >
            Apply Now
          </Button>
        </BannerContent>
      </Banner>

      <Careers>
        {
          careers.map(career => <Career {...career} />)
        }
      </Careers>

      <Section>
        <h2>Thanks for your interest in a career at Family Promise.</h2>

        <h4>
          The options listed above are our available openings. <br /> If nothing is
          listed, check back in regularly!
        </h4>
      </Section>
    </div>
  );
}


const Career = ({ link, title }) => {
  return (
    <CareerStyles>
      <h3>{title}</h3>
      <Button onClick={() => window.open(link, '_blank')}>Learn more</Button>
    </CareerStyles>
  )
}

const CareerStyles = styled.div`
  width: 100%;

  background-color: lightgrey;

  color: ${props => props.theme.darkblue};

  display: flex;

  justify-content: center;

  flex-direction: column;

  align-items: center;

  padding: 3rem;



`

const Careers = styled.section`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;

  gap: 1rem;

  padding: 1rem;

  @media (max-width: 1150px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 757px) {
    grid-template-columns: 1fr;
  }
`


const Section = styled.div`
  padding: 0.5rem;

  background-color: ${(props) => props.theme.gold};

  color: ${(props) => props.theme.darkblue};

  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: center;

  text-align: center;

  height: 30vh;

  font-size: larger;
`;

const BannerContent = styled.div`
  display: flex;

  justify-content: space-between;

  align-items: center;

  font-size: larger;

  gap: 3rem;

  @media (max-width: 672px) {
    flex-direction: column;

    gap: 1rem;
  }
`;
