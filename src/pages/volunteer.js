import React from "react";

import Banner from "../components/Global/Banner";

import * as styles from "../styles/pages/Volunteer.module.css";

import TextSection from "../components/Global/TextSection";
import Button from "../components/Global/Button";

import bannerimage from "../images/volunteer/bannerimage.webp";
import welcome from "../images/volunteer/welcome.webp";
import person from "../images/volunteer/person.webp";

import * as globalStyles from "../styles/Global/Global.module.css";

export default function Volunteer() {
  return (
    <div>
      <Banner
        height={"40vh"}
        backgroundColor="lightpurple"
        backgroundImage={bannerimage}
      >
        <h1>VOLUNTEER.</h1>
        <p>
          Organize a supply drive. Do art projects with kids. Teach a financial{" "}
          <br />
          literacy class. Help a family move in to their new home.{" "}
        </p>
      </Banner>

      <div className={styles.sectionAContainer}>
        <div className={styles.sectionAContent}>
          <img src={welcome} />

          <div className={styles.sectionAContentText}>
            <h2>Featured Volunteer Opportunity</h2>
            <p>
              You can literally move a family from homelessness to housed. Sign
              up for your shifts now... no application required!
            </p>
            <Button>Sign Up Now</Button>
          </div>
        </div>
      </div>

      <div className={styles.sectionB}>
        <div className={styles.actions}>
          <Button>Apply Online Now</Button>
          <Button>Download Print Application Here</Button>
        </div>
      </div>

      <TextSection>
        <div className={styles.sectionC}>
          <h2>
            YOUR ACT OF COMPASSION HAS THE POWER TO CHANGE THE LIVES OF HOMELESS
            FAMILIES.
          </h2>

          <p>
            Discover the wide range of volunteer opportunities at Family Promise
            of Spokane - from serving meals to painting walls to providing
            enriching kids' activities. There is something for everyone!
          </p>

          <p>
            Volunteers play an essential role in empowering families to end the
            cycle of homelessness
          </p>
        </div>
      </TextSection>

      <div className={styles.sectionD}>
        <div className={globalStyles.genericContainer}>
          <div className={styles.sectionDContent}>
            <img src={person} />

            <div className={styles.sectionDText}>
              <p>
                “[Through volunteering], I’ve seen the human side of
                homelessness. I knew the statistics, kind of... but now I know
                the families and their stories and their children. We’ve had
                talks about anything from princesses to the deep dark parts of
                their lives...I just get to see that human aspect of
                homelessness and build those relationships, which has been
                really cool.” ​
              </p>

              <small>-Megan, Volunteer at Family Promise of Spokane</small>
            </div>
          </div>
        </div>
      </div>

      <div className={globalStyles.genericContainer}>
        <iframe
          className={styles.video}
          height={400}
          width={"50%"}
          src="https://www.youtube.com/watch?v=t00OrliSlW8&t=1s"
        ></iframe>
      </div>

      <h1>Volunteer</h1>
    </div>
  );
}
