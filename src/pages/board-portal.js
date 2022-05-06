import React from "react";

import PasswordProtected from "../components/Global/PasswordProtected";

import Banner from "../components/Global/Banner";

import styled from "styled-components";
import { Container } from "react-bootstrap";
import Button from "../components/Global/Button";

export default function BoardPortal() {
  return (
    <PasswordProtected tital="Board Portal" password="board2021">
      <Banner height="25vh" backgroundColor={"darkblue"}>
        <h1>Welcome to the Board Portal.</h1>
      </Banner>

      <Container>
        <Section>
          <Card>
            <h2>Board Portal</h2>

            <Button
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/14qSOw3gq2KhgTDjR6O-2k2BWQa_sI6Go",
                  "_blank"
                )
              }
            >
              Link to Portal
            </Button>
          </Card>
        </Section>
      </Container>
    </PasswordProtected>
  );
}

const Card = styled.div`
  width: 100%;

  max-width: 500px;

  height: 300px;

  display: flex;

  justify-content: center;

  align-items: center;

  flex-direction: column;

  color: white;

  background-image: url("https://static.wixstatic.com/media/0de53c25778740ac8bc8eacf453f3fd0.jpg/v1/fill/w_954,h_530,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0de53c25778740ac8bc8eacf453f3fd0.jpg");
`;

const Section = styled.section`
  display: flex;

  justify-content: center;

  padding: 1rem;
`;
