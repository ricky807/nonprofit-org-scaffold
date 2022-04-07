import React from "react";

import Card from "../components/Global/Card";

import Button from "../components/Global/Button";

import useWindowDimensions from "../utils/hooks/useWindowDimensions";

import updates from "../images/covid/updates.webp";

import plan from "../images/covid/plan.webp";

import press from "../images/covid/press.webp";

import signature from "../images/covid/signature.webp";

import * as globalStyles from "../styles/Global/Global.module.css";

import * as CardContainerStyles from "../styles/Containers/CardContainer.module.css";

import * as styles from "../styles/pages/Covid19Response.module.css";

export default function Covid19response() {
  const { width } = useWindowDimensions();

  const determineCardDirection = () => {
    return width <= 580 ? "vertical" : "horizontal";
  };

  return (
    <div className={globalStyles.genericContainer}>
      <section className={globalStyles.genericContainer}>
        <div className={styles.sectionA}>
          <img src={updates} className={styles.covidBannerImage} />
          <div>
            <p>
              Dear Family Promise Family,
              <p className={styles.indent}>April 1, 2021</p>
            </p>
            <p>2:00pm</p>
            <p>
              2:00pm Family Promise continues to take COVID-19 seriously,
              adhering to all CDC recommendations and closely monitoring for any
              symptoms by anyone involved at FPS.{" "}
            </p>
            <p>
              Whenever a guest, staff or volunteer suspects exposure to COVID-19
              or receives a positive COVID-19 result, they are immediately
              isolated from groups and placed in a SRHD isolation
              location/required to stay home. The SRHD arrives on site to
              complete rapid testing for all exposed. In this way, we've been
              able to control exposure to and contraction of COVID-19.{" "}
            </p>
            <p>
              Please keep our guests and staff in your thoughts and prayers.
            </p>
            <img src={signature} />
            <p>
              Joe Ader <br /> Executive Director
            </p>
          </div>
        </div>
      </section>

      <div className={globalStyles.genericContainer}>
        <div className={CardContainerStyles.container}>
          <Card image={press} direction={determineCardDirection()}>
            <div className={styles.cardContent}>
              <h1>Press Release</h1>
              <p>
                On November 9th, 2020, Family Promise released the following
                statement regarding COVID-19.
              </p>
              <div className={styles.cardContentButtons}>
                <Button color={'gold'}>Read Here</Button>
              </div>
            </div>
          </Card>
          <Card image={plan} direction={determineCardDirection()}>
            <div className={styles.cardContent}>
              <h1>Read the Full Plan</h1>
              <p>
                Our precautions are to protect our guests, volunteers and staff.
              </p>
              <div className={styles.cardContentButtons}>
                <Button color={'gold'}>Read Here</Button>
              </div>
            </div>
          </Card>

          <Card direction={determineCardDirection()}>
            <div className={styles.cardContent}>
              <h1>
                Modified operations will be in place until further notice.
              </h1>
              <div className={styles.cardContentButtons}>
                <Button color={'gold'}>Ways to Help Right Now</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className={styles.financialSupportNeeded}>
        <Card
          direction={determineCardDirection()}
          backgroundColor="lightpurple"
        >
          <div
            className={`${styles.cardContent} ${styles.financialSupportNeededText}`}
          >
            <h2>Your financial support is needed.</h2>
            <p>
              Your monthly gift of $24.50 provides one day of care for a
              vulnerable child.
            </p>
            <div className={styles.cardContentButtons}>
              <Button color={'gold'}>Give Now</Button>
            </div>
          </div>
        </Card>
      </div>

      <iframe
        width="100%"
        height={750}
        src="https://www.youtube.com/watch?v=f8gWrAK2X9s"
      ></iframe>
    </div>
  );
}
