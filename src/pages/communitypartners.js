import React from "react";

import Banner from "../components/Global/Banner";

import bannerimage from "../images/community/bannerimage.webp";

import TextSection from "../components/Global/TextSection";

import Button from "../components/Global/Button";

import internet from "../images/community/internet.webp";

import people from "../images/community/people.webp";

import comcast from "../images/community/comcast.webp";

import windermere from "../images/community/windermere.webp";

import * as styles from "../styles/pages/CommunityPartners.module.css";

import * as globalStyles from "../styles/Global/Global.module.css";

export default function communitypartners() {
  return (
    <div>
      <Banner
        textDirection="left"
        height={"30vh"}
        backgroundColor="darkblue"
        backgroundImage={bannerimage}
      >
        <h1>COMMUNITY PARTNERS.</h1>
        <p>It takes a village to be a human being.</p>
      </Banner>

      <TextSection color="hapblue">
        <h2>
          COMMUNITY PARTNERSHIPS ARE THE BACKBONE TO ENDING FAMILY HOMELESSNESS.
        </h2>

        <p>
          As volunteers and donors engage in the Family Promise program, they
          realize if they can address the challenges of families, they can serve
          more people more effectively. These champions take the next step to
          getting involved: building bridges between local organizations with a
          heart for service and Family Promise families.
        </p>

        <p>
          All of the groups and organizations listed below have made a huge
          contribution In ending family homelessness through their partnership
          with Family Promise of Spokane.
        </p>
      </TextSection>

      <section className={globalStyles.genericContainer}>
        <Partner
          image={internet}
          logo={comcast}
          blurb={
            "Through Comcast's Internet Essentials program, Family Promise families have access to top notch internet and, when they move into a new home, a new computer and six months of free internet. "
          }
          link={
            "https://www.kxly.com/family-promise-helps-previously-homeless-families-find-back-to-school-success/?linkId=100320714"
          }
        />

        <Partner
          image={people}
          logo={windermere}
          blurb={
            "Windermere Spokane has championed homeless families through Windermere Service Day and generous financial investments."
          }
          link={"https://windermerespokane.com/csd"}
        />
      </section>
    </div>
  );
}

const Partner = ({ image, logo, blurb, link }) => {
  const openLink = () => window.open(link);

  return (
    <div className={styles.partnerContainer}>
      <img src={image} className={styles.cardImage} />

      <div className={styles.partnerInfoContainer}>
        <div className={styles.partnerInfo}>
          <img src={logo} />
          <p>{blurb}</p>
          <Button color="gold" onClick={openLink}>
            LEARN MORE
          </Button>
        </div>
      </div>
    </div>
  );
};
