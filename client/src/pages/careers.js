import React from "react";

import Banner from "../components/Global/Banner";

import Button from "../components/Global/Button";

import Section from "../components/Global/Section";

import stacy from "../images/careers/stacy.webp";

import * as styles from "../styles/pages/Careers.module.css";

import BannerImg from "../images/careers/bannerimg.jpg";

import { navigate } from "gatsby";

export default function Careers() {
  return (
    <div>
      <Banner
        backgroundImage={BannerImg}
        textDirection="left"
        height={"45vh"}
        backgroundColor="darkpurple"
      >
        <h1>CAREERS.</h1>
        <p>Where you invest your love, you invest your life. </p>
      </Banner>

      <Section backgroundColor="#fec357">
        <div className={styles.btns}>
          <Button
            onClick={() => navigate("/careeropportunities")}
            color={"lightpurple"}
          >
            Explore Opportunities
          </Button>
          <Button
            onClick={() =>
              window.open(
                "https://familypromiseofspokane.typeform.com/to/HYbBAq?typeform-source=www.familypromiseofspokane.org",
                "_blank"
              )
            }
            color={"lightpurple"}
          >
            Apply Now
          </Button>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className={styles.sectionContent}>
          <h2>BE THE CHANGE YOU WANT TO SEE IN THE WORLD.</h2>
          <p>
            Jobs at Family Promise provide an exciting opportunity to make a
            difference in the lives of families experiencing homelessness. No
            matter if you are supporting our administrative efforts or working
            directly with families, we need your expertise to change our
            community.
          </p>
        </div>
      </Section>

      <Section backgroundColor="lightpurple">
        <div className={styles.sectionContentB}>
          <img src={stacy} />

          <div className={styles.sectionContentBlurbs}>
            <p>
              “I really feel like it’s my calling… Some families just don’t have
              a voice and I have to be their voice. To encourage them. To
              empower them. Let ‘em know that there is a light at the end of the
              tunnel.”
            </p>
            <small>-Stacy, Supervisor at Family Promise of Spokane</small>
          </div>
        </div>
      </Section>
    </div>
  );
}
