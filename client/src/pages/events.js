import React from "react";

import Banner from "../components/Global/Banner";

import Section from "../components/Global/Section";

import Button from "../components/Global/Button";

import * as styles from "../styles/pages/Events.module.css";

import people from "../images/events/people.png";

import { navigate } from "gatsby";

export default function Events() {
  return (
    <div>
      <Banner
        textDirection="left"
        backgroundColor="lightpurple"
        height={"25vh"}
      >
        <h1>Events</h1>
        <p>They may be virtual for now, but they're still fun!</p>
      </Banner>

      <Section>
        <p className={styles.text}>
          Family Promise of Spokane hosts several events each year to engage
          support, provide training, raise funds and spread the word about our
          mission to end family homelessness. These events are invaluable
          opportunities to create relationships with people and companies who
          are interested in helping us make a difference in the lives of
          homeless parents and their children.
        </p>
      </Section>

      <div className={styles.infoNight}>
        <img src={people} />

        <div className={styles.infoNightText}>
          <h2>59 Minutes with Family Promise</h2>
          <h3>
            October 28, 2021 <br /> 7:00PM - 7:59PM | Virtual Event
          </h3>
          <p>
            You're invited to learn more about Family Promise of Spokane and our
            mission to equip families and communities to end the cycle of
            homelessness. You'll receive an overview of our history, mission and
            values before learning about our holistic approach to ending family
            homelessness.
          </p>
          <div>
            <Button onClick={() => navigate("/59minutes")} color={"gold"}>
              Register Now
            </Button>
          </div>
        </div>
      </div>
      <Section>
        <div className={styles.getInvolved}>
          <h2>You can always get involved at Family Promise.</h2>
          <Button onClick={() => navigate('/give')} color={"gold"}>Learn More</Button>
        </div>
      </Section>
    </div>
  );
}
