import React from "react";

import Banner from "../components/Global/Banner";

import Section from "../components/Global/Section";

import * as globalStyles from "../styles/Global/Global.module.css";

import * as styles from "../styles/pages/Provide.module.css";

export default function provide() {
  return (
    <div>
      <Banner backgroundColor="darkpurple" height={"35vh"}>
        <div className={styles.innerBanner}>
          <div className={styles.innerBannerText}>
            <h1>Emergency Shelter</h1>
            <small>
              We provide holistic hospitality... everything a family
              experiencing homelessness needs to get back on their feet.{" "}
            </small>
          </div>
          <div>
            <button>
              <strong>
                Need emergency shelter? <br /> Call 509-747-5487
              </strong>
            </button>
          </div>
        </div>
      </Banner>

      <section className={globalStyles.genericContainer}>
        <div className={styles.sectionA}>
          <img
            src={
              "https://static.wixstatic.com/media/9a9c4e_213a7a30245142019ec1723cd0ba7b38~mv2.jpg/v1/fill/w_635,h_566,al_c,q_80,usm_0.66_1.00_0.01/9a9c4e_213a7a30245142019ec1723cd0ba7b38~mv2.webp"
            }
          />

          <div className={styles.sectionAText}>
            <p>
              Family Promise of Spokane is spearheading an innovative shelter
              model that serves families of all compositions, often providing
              their only shelter option in our area. This model — triaging
              families at a central location before directing them to the
              specific neighborhood shelter that best meets their needs —has
              helped hundreds of families. Working with community resources
              while using volunteers motivated by compassion , Family Promise of
              Spokane provide comprehensive and targeted services, including
              extensive case management, at 1/3 the cost of traditional shelter.
            </p>

            <p>And it works.</p>

            <p>
              On average, 85% of the people served in the shelter program secure
              housing within 8 weeks. Because of the depth of services and
              community support, families stay housed, and Family Promise of
              Spokane provides both prevention and stabilization services to
              increase our impact.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className={styles.text}>
          <h2>HOW IT WORKS</h2>
          <p>
            The resources are already here. Through the help of the Spokane
            community, Family Promise of Spokane purchased an 18,000 square foot
            facility on the corner of Mission & Napa to serve as our Family
            Promise Center, an administrative and triage hub for families. In
            addition, we partner with congregations and businesses that provide
            space in their buildings to serve as Neighborhood Sites. After
            families are assessed at the Family Promise Center and space is
            available, we move a family to a Neighborhood Site where they can
            take showers, receive case management, and look for housing and
            jobs, all in a family-friendly setting. With volunteers giving their
            time, making meals, and sharing hospitality, family homelessness is
            addressed without the creation of expensive shelters.
          </p>

          <p>
            These volunteers are the core of the program. They share food, spend
            the night, play with children and lend their passion and expertise
            to help families get back on their feet. They prove that motivated
            people can solve family homelessness. And, in the process, they
            truly create “home” – and a community – for families who have no
            place left to turn.
          </p>
        </div>
      </Section>

      <img
        className={styles.image}
        src={
          "https://static.wixstatic.com/media/9a9c4e_4859427a49964feebbff5da054d30b8a~mv2.jpg/v1/fill/w_1854,h_520,al_c,q_85,usm_0.66_1.00_0.01/9a9c4e_4859427a49964feebbff5da054d30b8a~mv2.webp"
        }
      />

      <Section>
        <div className={styles.text}>
          <h2>A COMMUNITY RESPONSE</h2>
          <p>
            In every community, these core elements exist. By bringing the
            community together on the issue of family homelessness, Family
            Promise addresses a major social problem in a holistic, effective
            way. Once the community becomes engaged, people understand the root
            causes of family homelessness and take steps to address them. Family
            Promise of Spokane has created more than 90 community connections on
            behalf of families —landlord relationships, non-profit coordination,
            childcare resources and much more—that target the issues of poverty
            and homelessness right here in Spokane.
          </p>

          <h2>A LONG-TERM SOLUTION</h2>
          <p>
            Not only does our 88% success rate mean many more families are
            stably housed, it is also a tremendous cost saving strategy for the
            community. Our approach of keeping families together, identifying
            their strengths, and partnering with the community for solutions
            means that families are at much lower risk of returning to
            homelessness.
          </p>

          <h2>THE BOTTOM LINE</h2>
          <p>
            Family Promise changes lives. We served 1,152 moms, dads and kids
            last year, giving them the ability to realize their true potential.
            We also change the lives of our 894 volunteers, giving them a
            meaningful outreach right in their own community.
          </p>
        </div>
      </Section>
    </div>
  );
}
