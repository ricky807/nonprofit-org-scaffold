import React from "react";

import Button from "./Button";

import * as styles from "../../styles/Global/Donate.module.css";
import { navigate } from "gatsby";

export default function DonateOrVolunteer() {
  return (
    <section className={styles.sectionE}>
      <div className={styles.sectionEContent}>
        <h1>Donate or Volunteer</h1>
        <p>
          The problem of homelessness is complex. You can make a difference in
          the lives of our families by making a donation or by becoming a
          volunteer.
        </p>
        <Button onClick={() => navigate("/")} color={"gold"}>
          Learn more
        </Button>
      </div>
    </section>
  );
}
