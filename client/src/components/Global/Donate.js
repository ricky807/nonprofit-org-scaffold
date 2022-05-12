import { navigate } from "gatsby";
import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { Container } from "./Container";

export default function Donate() {
  return (
    <Container column>
      <DonationContainer>
        <h1>Donate</h1>
        <p>
          The problem of homelessness is complex. You can make a difference in
          the lives of our families by making a donation.{" "}
        </p>
        <Button color={"gold"} onClick={() => navigate('/donate')}>Give Now</Button>
      </DonationContainer>
    </Container>
  );
}

const DonationContainer = styled.div`
  width: 50%;

  text-align: center;

  padding: 2rem;

  font-size: 1.5rem;

  color: ${(props) => props.theme.darkblue};

  h1 {
    color: ${(props) => props.theme.lightblue};
  }

  @media (max-width: 1000px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }

  @media (max-width: 600px) {
    width: 95%;
  }
`;
