import React from "react";

import bloomheader from "../images/donate/bloomheader.webp";

import * as globalStyles from "../styles/Global/Global.module.css";

import * as styles from "../styles/pages/Donate.module.css";

export default function Donate() {
  return (
    <div className={globalStyles.genericContainer}>
      <section className={styles.section}>
        <img src={bloomheader} className={styles.image} />
        <h1>
          Your gift today is changing the future for homeless families tomorrow.
        </h1>
        <p>
          Since 1997, Family Promise of Spokane has worked tirelessly to break
          the cycle of family homelessness. Made possible your help, thousands
          of families have learned life skills, received the encouragement to
          keep pushing and ultimately, have found home again.
        </p>
        <p>
          <strong>
            Yes! I want to provide shelter, food and comprehensive support for
            families experiencing homelessness during this critical time.
          </strong>
        </p>
      </section>
    </div>
  );
}
