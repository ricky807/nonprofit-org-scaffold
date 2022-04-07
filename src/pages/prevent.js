import React from "react";

import * as styles from "../styles/pages/Prevent.module.css";

import * as globalStyles from "../styles/Global/Global.module.css";

import Banner from "../components/Global/Banner";

import haplogoonly from "../images/haplogoonly.webp";

import Bed from "../images/prevent/bed.webp";

import { FaHome } from "react-icons/fa";

import { GiPiggyBank } from "react-icons/gi";

import { AiFillDollarCircle } from "react-icons/ai";

import { BiHappyAlt } from "react-icons/bi";
import Button from "../components/Global/Button";

export default function Prevent() {
  const openHap = () => window.open("https://hap.solutions");

  return (
    <div>
      <Banner color="white" backgroundColor="darkblue" height={"18vh"}>
        <div className={styles.bannerContent}>
          <div>
            <h1>Prevention</h1>
            <small>
              Preventing families from becoming homeless through rental
              assistance <br /> and targeted case-management is essential to
              what we do.
            </small>
          </div>

          <Button
            style={{
              padding: "1rem 2rem",
            }}

            color='gold'
          >
            Need prevention help? <br /> Call 509-747-5487
          </Button>
        </div>
      </Banner>

      <div className={styles.sectionA}>
        <div className={styles.sectionAContent}>
          <div>
            <p>
              The Housing Assistance Portal (HAP) connects tenants and landlords
              in need with resources they qualify for. All in one, easy-to-use
              dashboard.
            </p>
            <Button color={'gold'} onClick={openHap}>Apply Now</Button>
          </div>
          <img
            src={haplogoonly}
            style={{ cursor: "pointer" }}
            onClick={openHap}
          />
        </div>
      </div>

      <div className={globalStyles.genericContainer}>
        <div className={styles.sectionB}>
          <img src={Bed} />
          <div className={styles.sectionBText}>
            <p>
              Since the COVID-19 pandemic, more families face the possibility of
              homelessness today than in any time in the recent past.
            </p>
            <p>
              As of November 2020, 1 in 5 Spokane county renters were unable to
              pay their full rent.
            </p>
          </div>
        </div>
      </div>

      <section className={styles.sectionC}>
        <h3>PREVENTION FAST FACTS</h3>
        <p>FOR 2019</p>

        <div className={styles.analytics}>
          <Analytic
            statistic={"69%"}
            description={"of Americans couldn't cover a $1,000 emergency"}
          >
            <GiPiggyBank fontSize={"2.5rem"} />
          </Analytic>

          <Analytic
            statistic={"$340"}
            description={"prevents an entire family from becoming homeless"}
          >
            <AiFillDollarCircle fontSize={"2.5rem"} />
          </Analytic>

          <Analytic
            statistic={"67"}
            description={"families prevented from homelessness"}
          >
            <FaHome fontSize={"2.5rem"} />
          </Analytic>

          <Analytic
            statistic={"94%"}
            description={"had maintained their housing after 12 months"}
          >
            <BiHappyAlt fontSize={"2.5rem"} />
          </Analytic>
        </div>
      </section>
    </div>
  );
}

const Analytic = ({ statistic, description, children }) => {
  return (
    <div className={styles.analytic}>
      <div className={styles.analyticCircle}>
        <div className={styles.analyticIcon}>{children}</div>
        <h2>{statistic}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
};
