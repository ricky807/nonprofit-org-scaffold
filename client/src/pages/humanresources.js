import React from "react";

import PasswordProtected from "../components/Global/PasswordProtected";

import styled from "styled-components";

import Action from "../components/Global/Action";

import { navigate } from "gatsby";

import Banner from "../components/Global/Banner";

export default function StaffPortal() {
  return (
    <div>
      <Banner textDirection={'left'} height="20vh" backgroundColor={"darkblue"}>
        <h1>Human Resources</h1>
      </Banner>

      <Container>
        <Actions>
          <Action
            heading={"Payroll Advancement"}
            subheading={
              "To request an advance, please fill out the form below."
            }
            btnText="Submit Request"
            onClick={() =>
              window.open(
                "https://docs.google.com/spreadsheets/d/1FjljqP3mK7EtjYo1dILgImOIj-Gql8XZO0_3WOByu6s/edit#gid=19965740",
                "_blank"
              )
            }
            color="orange"
          />

          <Action
            heading={"Time Off Request"}
            subheading="To request time off, please fill out the form below."
            btnText="Submit Request"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSfQ3qyjzjCOG84bTeot_6NyhgbGlaQTqkNtzR7MYv5el3MmlQ/formrestricted",
                "_blank"
              )
            }
            color="lightpurple"
          />

          <Action
            heading={"FP Team Member Recognition"}
            subheading="Brag about your fellow Family Promise staff members!"
            btnText="Nominate Staff"
            color="navy"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLScSmb_gayByfo_pTcE4ETrLKsunuExeIbgRhhvtFGToQcD1CQ/formrestricted",
                "_blank"
              )
            }
          />
        </Actions>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 100%;

  display: flex;

  justify-content: center;
`;

const Actions = styled.div`
  padding: 10px;

  display: grid;

  max-width: 1100px;

  grid-template-columns: 1fr 1fr;

  gap: 1rem;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;
