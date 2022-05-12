import React from "react";

import PasswordProtected from "../components/Global/PasswordProtected";

import styled from "styled-components";

import Action from "../components/Global/Action";

import { navigate } from "gatsby";

import Banner from "../components/Global/Banner";

export default function StaffPortal() {
  return (
    <PasswordProtected title="Staff Portal" password={"WorldChanger20"}>
      <Banner height="20vh" backgroundColor={"darkblue"}>
        <h1>Welcome to the Staff Portal.</h1>
      </Banner>

      <Container>
        <Actions>
          <Action
            heading={"Help Request Forms"}
            subheading="Need help with IT, facilities or maintenance, obtaining an item, recruiting a volunteer, requesting a name tag or t-shirt."
            btnText="Submit Request"
            onClick={() => navigate("/requestforms")}
            color="gold"
          />

          <Action
            heading={"Guest Exit Form"}
            subheading="Please ask all of the questions in this form to guests that are exiting Family Promise. Do NOT allow Guests to take survey on their own."
            btnText="Exit Guest"
            onClick={() =>
              window.open(
                "https://familypromiseofspokane.typeform.com/to/gVkPA3lG?typeform-source=www.familypromiseofspokane.org",
                "_blank"
              )
            }
            color="lightpurple"
          />
          <Action
            heading={"Human Resources"}
            subheading="All things related to workplace trainings, staff documentation and time-off requests."
            btnText="Submit Request"
            color="lightblue"
            onClick={() => navigate("/humanresources")}
          />
          <Action
            heading={"Donation Receipt Form"}
            subheading="Created for donors to fill out an online version of our donation  acknowledgement form."
            btnText="Submit Request"
            color="hapblue"
            onClick={() =>
              window.open(
                "https://familypromiseofspokane.typeform.com/to/bQgzvlvA?typeform-source=www.familypromiseofspokane.org",
                "_blank"
              )
            }
          />

          <Action
            heading={"Reimbursement"}
            subheading="if you purchase anything for Family Promise with your personal money -- Fill out  the form below, print it out, and take it to your supervisor for their signature."
            btnText="Fill out Here"
            color="darkpurple"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1ntwdfYaiFHhTI6fsNZPE6jJLdyZRexRh/view",
                "_blank"
              )
            }
          />
          <Action
            heading={"Staff Directory"}
            subheading="This document has the phone numbers, emails, and titles of all current employees."
            btnText="Click Here"
            color="orange"
            onClick={() =>
              window.open(
                "https://fpspokanebucket.s3.us-west-1.amazonaws.com/Staff+Directory+(2)(1).ods",
                "_blank"
              )
            }
          />
        </Actions>
      </Container>
    </PasswordProtected>
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
