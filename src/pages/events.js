import React from "react";

import Banner from "../components/Global/Banner";

import Section from "../components/Global/Section";

import Button from "../components/Global/Button";

import * as styles from "../styles/pages/Events.module.css";

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
        <img
          src={
            "https://static.wixstatic.com/media/9a9c4e_8a75b8ee96014b07b6f667612db866f2~mv2.jpg/v1/fill/w_954,h_465,al_c,q_85,usm_0.66_1.00_0.01/9a9c4e_8a75b8ee96014b07b6f667612db866f2~mv2.webp"
          }
        />

        <div className={styles.infoNightText}>
          <h2>Family Promise Info Night</h2>
          <h3>Third Wednesday of Every Month 6pm - 7pm | Virtual Event</h3>
          <p>
            You're invited to learn more about Family Promise of Spokane and our
            mission to equip families and communities to end the cycle of
            homelessness. You'll receive an overview of our history, mission and
            values before learning about our holistic approach to ending family
            homelessness.
          </p>
          <div>
            <Button>Register Now</Button>
          </div>
        </div>

      </div>
        <Section>
          <div className={styles.getInvolved}>
            <h2>You can always get involved at Family Promise.</h2>
            <Button>Learn More</Button>
          </div>
        </Section>
    </div>
  );
}
