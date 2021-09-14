import React from "react";

import Banner from "../components/Global/Banner";

import Button from "../components/Global/Button";

import DonateOrVolunteer from "../components/Global/DonateOrVolunteer";

import * as styles from "../styles/pages/Contact.module.css";

export default function contact() {
  return (
    <div className={styles.contactContainer}>
      <Banner
        color="white"
        backgroundColor="darkblue"
        height={"22vh"}
        textDirection={"left"}
      >
        <h1>Contact Us</h1>
        <h3>We'd love to connect.</h3>
      </Banner>

      <section className={styles.contact}>
        <div className={styles.contactInfo}>
          <h2>Family Promise Main Office</h2>
          <p>
            904 E. Hartson Ave <br /> Spokane, WA 99202
          </p>
          <p>
            509-747-5487 <br /> Fax: 509-747-5537
          </p>
          <p>office@familypromiseofspokane.org</p>
        </div>

        <div className={styles.contactInfo}>
          <h2>Family Promise Emergency Shelter</h2>
          <p>
            2002 E. Mission Avenue <br /> Spokane, WA 99202 ​
          </p>
          <p>
            509-747-5487 <br /> Fax: 509-747-5537
          </p>
          <p>509-723-4663 (HOME)</p>
        </div>
      </section>

      <section className={styles.formerGuest}>
        <h2>
          Are you a former guest <br /> appealing a decision?{" "}
        </h2>
        <Button>Apply here</Button>
      </section>

      <DonateOrVolunteer />
    </div>
  );
}
