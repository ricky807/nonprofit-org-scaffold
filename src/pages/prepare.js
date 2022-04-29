import React from "react";

import Banner from "../components/Global/Banner";

import Button from "../components/Global/Button";
import TextSection from "../components/Global/TextSection";

import * as styles from "../styles/pages/Prepare.module.css";

export default function prepare() {
  return (
    <div>
      <Banner textDirection="center" backgroundColor="darkblue" height={"25vh"}>
        <div className={styles.bannerContent}>
          <div>
            <h1>
              Skills for <br /> life after homelessness
            </h1>

            <small>
              Equipping the families we serve to not only succeed today but
              remain stable tomorrow.
            </small>
          </div>

          <Button
            style={{
              padding: "2rem",
            }}

            color='gold'
          >
            Former guest looking for help? <br /> Call 509-795-9619
          </Button>
        </div>
      </Banner>

      <TextSection>
        <p>
          Workforce development. Partners in Housing. Financial capability.
          Health and wellness. Homelessness has many causes and housing
          stability involves many solutions, all personalized to fit the needs
          of each family.
        </p>

        <p>
          No matter what, we get to the heart of core needs. Any challenge that
          a family faces that may deter from self-sufficiency, we are there to
          help. We may match the strengths of local volunteers and the interests
          of local corporations with the needs of our guests, like financial
          literacy and mentoring. Similarly, much of what we do builds off core
          tenets of the foundational shelter program itself, leading to efforts
          like food assistance, furniture and clothing donation, and health and
          wellness programs. ​
        </p>

        <p>
          And, even more importantly, through the redemption of community that
          families possess after finding housing, Family Promise of Spokane
          creates the network for security and stability that encourages parents
          and their children to aspire to the future every child deserves.
        </p>

        <h3>
          Our goal is not simply getting families into housing; it is keeping
          them in housing.
        </h3>

        <p>
          Key to this is identifying needs specific to those in our community
          and tapping into the diverse resources our volunteer pool and
          partnerships provide. The result is families no longer at risk of
          homelessness.
        </p>

        <p>
          And, even more importantly, through the redemption of community that
          families possess after finding housing, Family Promise of Spokane
          creates the network for security and stability that encourages parents
          and their children to aspire to the future every child deserves.
        </p>
      </TextSection>
      <iframe
        width="100%"
        style={{
          minHeight: '70vh'
        }}
        src="https://www.youtube.com/watch?v=f8gWrAK2X9s"
      ></iframe>
    </div>
  );
}
