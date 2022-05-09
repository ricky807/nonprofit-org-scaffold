import React from "react";

import Banner from "../components/Global/Banner";

import Button from "../components/Global/Button";

import * as globalStyles from "../styles/Global/Global.module.css";

import * as styles from "../styles/pages/Help.module.css";

import { navigate } from 'gatsby'

export default function needHelp() {
  return (
    <div>
      <Banner
        color="white"
        backgroundColor="darkblue"
        height={"18vh"}
        textDirection={"left"}
      >
        <h1>WELCOME.</h1>
        <h2>We're here to help.</h2>
      </Banner>
      <div className={globalStyles.genericContainer}>
        <section className={styles.section}>
          <div>
            <h2>DO I QUALIFY FOR THE FAMILY PROMISE PROGRAM?</h2>
            <p>
              If you are a homeless adult caring for a child or who is pregnant,
              then yes! We accept all sorts of families. Single fathers,
              grandchildren, LGBTQIA+ couples, extended family caregivers are
              all welcome!
            </p>
          </div>
          <div>
            <h2>I AM AT RISK OF BECOMING HOMELESS. WHAT DO I DO?</h2>
            <p>
              Among other housing programs and services, Family Promise offers
              services including eviction prevention and emergency rental
              assistance. This program is limited and subject to available
              funding. If you are in need of assistance, please begin your
              application using our Housing Assistance Portal.
            </p>
          </div>

          <Button color='gold' onClick={() => navigate('/hap')}>Apply on the HAP</Button>

          <div>
            <h2>I AM ALREADY HOMELESS. WHAT DO I DO?</h2>
            <p>
              Our Family Promise Emergency Shelter at 2002 E. Mission Avenue
              will help give you a welcoming, warm place to start your journey
              towards getting back into a home. We are a first-come, first-
              serve shelter so please call our office any time at 509-723-4663
              to connect with a staff member who can help get you in for an
              intake.
            </p>
          </div>
          
          <div>
            <h2>QUESTIONS?</h2>
            <p>
              From 9am-5pm, please call 509-747-5487. For after hours needs,
              please call 509-723-4663.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
