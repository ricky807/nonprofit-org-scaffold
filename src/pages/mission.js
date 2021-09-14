import React from "react";
import Button from "../components/Global/Button";

import * as styles from "../styles/pages/Mission.module.css";

import bridge from "../images/mission/bridge.webp";

import ring from "../images/mission/ring.webp";

import Banner from "../components/Global/Banner";

export default function mission() {
  return (
    <div>
      <Banner backgroundColor="lightpurple" textDirection="left">
        <h1>Mission & Vision</h1>
      </Banner>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div
            className={`${styles.sectionContent} ${styles.sectionContentTop}`}
          >
            <img src={bridge} />
            <div className={styles.top}>
              <h4>We envision a future where...</h4>
              <h2>no child experiences homelessness in Spokane County.</h2>
            </div>
          </div>

          <div
            className={`${styles.sectionContent} ${styles.sectionContentBottom}`}
          >
            <div className={styles.bottom}>
              <h4>We are ..</h4>
              <h2>
                equipping families and communities to end the cycle of
                homelessness.
              </h2>
            </div>
            <img src={ring} />
          </div>
          <div className={styles.programs}>
            <p>
              <strong>
                Learn more about how we enact our mission through our holistic,
                wraparound approach.
              </strong>
            </p>

            <Button>Our Programs</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
