import React, { useEffect } from "react";

import bloomheader from "../images/donate/bloomheader.webp";

import * as globalStyles from "../styles/Global/Global.module.css";

import * as styles from "../styles/pages/Donate.module.css";

import "../styles/bloomerang.css";

export default function Donate() {
  useEffect(() => {
    const bloomContainer = document.getElementById("bloomerangContainer");

    const first = document.createElement("a");

    const second = document.createElement("script");

    const third = document.createElement("script");

    first.setAttribute(
      "href",
      "https://s3-us-west-2.amazonaws.com/bloomerang-public-cdn/familypromisespokane/.widget-js/18868224.js"
    );

    second.setAttribute("type", "text/javascript");

    second.setAttribute("id", "bloomerangForm18868224");

    third.setAttribute(
      "src",
      "https://s3-us-west-2.amazonaws.com/bloomerang-public-cdn/familypromisespokane/.widget-js/18868224.js"
    );

    third.setAttribute("type", "text/javascript");

    bloomContainer.appendChild(first);
    bloomContainer.appendChild(second);
    bloomContainer.appendChild(third);
  }, []);

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

      <div id="bloomerangContainer"></div>
    </div>
  );
}

