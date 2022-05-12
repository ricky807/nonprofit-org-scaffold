import React from "react";

import styled from "styled-components";

import Action from "../components/Global/Action";

import Banner from "../components/Global/Banner";

export default function StaffPortal() {
  return (
    <div>
      <Banner height="20vh" backgroundColor={"darkblue"}>
        <h1>Need help?</h1>
        <h3>Submit your request to the appropriate department below.</h3>
      </Banner>

      <Container>
        <Actions>
          <Action
            heading={"IT Request Form"}
            subheading="Send a slack message in the #techsupport channel stating your problem. "
            onClick={() =>
              window.open(
                "https://familypromisespokane.slack.com/?redir=%2Farchives%2FCSTQ253TL",
                "_blank"
              )
            }
            color="orange"
          />

          <Action
            heading={"FPS SWAG Request Form"}
            subheading="Order a Family Promise T-Shirt, nametag or business cards."
            onClick={() =>
              window.open(
                "https://familypromiseofspokane.typeform.com/to/D6os3RkM",
                "_blank"
              )
            }
            color="lightpurple"
          />
          <Action
            heading={"Item/Supply Request"}
            subheading="Need a specific item for FPS?"
            color="navy"
            onClick={() =>
              window.open(
                "https://familypromiseofspokane.typeform.com/to/XScBXj7w",
                "_blank"
              )
            }
          />

          <Action
            heading={"Facilities Request Form"}
            subheading="Inform the Facilities Team about
            what needs to be fixed."
            color="orange"
            onClick={() =>
              window.open(
                "https://docs.google.com/spreadsheets/d/1-Z63v6nofcKPhymdq6z7CXGFc4FEBiSkFIHgz-gz9Sg/edit?usp=sharing",
                "_blank"
              )
            }
          />

          <Action
            heading={"Reimbursement Request"}
            subheading="If you purchase anything for FPS with your own Money. Click the link to send an email to Jeff to get your reimbursement. "
            color="darkblue"
            onClick={() => {
              window.location.href = "mailto:jeffb@familypromiseofspokane.org";
            }}
          />

          <Action
            heading={"Volunteer Request Form"}
            subheading="If you need Volunteers for any FPS project or event, fill out the linked form. "
            color="lightpurple"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLScXnZRegxMMbEeohSCamHOvslJkINxlGDHLICpv2OWQijRIDg/formrestricted",
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
