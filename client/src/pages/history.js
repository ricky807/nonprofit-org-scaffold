import React from "react";
import Button from "../components/Global/Button";

import Banner from "../components/Global/Banner";

import Story1 from "../images/history/story1.jpg";
import Story2 from "../images/history/story2.png";
import Story3 from "../images/history/story3.jpg";
import Story4 from "../images/history/story4.jpg";
import Story5 from "../images/history/story5.jpg";
import Story6 from "../images/history/story6.jpg";
import Story7 from "../images/history/story7.jpg";

import * as styles from "../styles/pages/History.module.css";

import * as globalStyles from "../styles/Global/Global.module.css";
import { navigate } from "gatsby";

export default function history() {
  return (
    <div>
      <Banner
        color="white"
        backgroundColor="darkblue"
        textDirection="left"
        height={"30vh"}
      >
        <h1>Our Story</h1>
        <p>
          A simple act of compassion set in motion a national movement <br /> to
          end family homelessness.
        </p>
      </Banner>
      <div className={globalStyles.genericContainer}>
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <img className={styles.img} src={Story1} />
            <div className={styles.text}>
              <h2 className={styles.sectionTitle}>
                1986: THE FIRST NETWORK NATIONWIDE
              </h2>
              <p>
                Karen Olson was rushing to a business meeting when she passed a
                homeless woman on the street. On impulse, Karen bought her a
                sandwich.The woman, Millie, accepted the sandwich but asked for
                something more — a chance to be heard. Karen stayed with Millie
                and listened. What she heard made her understand that
                homelessness brought profound feelings of diminished self-worth
                and disconnection from society. Soon after, Karen and her two
                sons began delivering lunches to homeless people on the streets
                of New York
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <p>
            As word spread, more New Jersey congregations formed a second
            network. Other congregations were inspired to develop similar
            programs. In 1988, we formed the National Interfaith Hospitality
            Network to bring the program nationwide. In addition to shelter,
            meals, housing, and job-seeking support, our Affiliates began
            developing programs for transitional housing, childcare, and
            homelessness prevention. Nationally, we added programs like Just
            Neighbors and Family Mentoring.
          </p>
        </section>

        <section className={`${styles.section} ${styles.alignRight}`}>
          <h2 className={styles.sectionTitle}>
            1997: FAMILY PROMISE MAKES A HOME IN EASTERN WASHINGTON
          </h2>
          <div className={styles.sectionContent}>
            <div className={styles.text}>
              <p>
                Family Promise of Spokane became Family Promise’s 49th affiliate
                in 1998. Linda Barnes, a local church attender, felt compelled
                to spearhead care for local families experiencing homelessness
                after Karen Olson visited Spokane and spoke about the issue.
                Barnes recruited 11 churches which served as the very first
                Interfaith Hospitality Network (IHN) in the area
              </p>
            </div>
            <img className={styles.img} src={Story2} />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2000: HUMBLE BEGINNINGS</h2>
          <div className={styles.sectionContent}>
            <img className={styles.img} src={Story3} />
            <div className={styles.text}>
              <p>
                In its first three years, IHN served an average of 4 families
                each month. Continuing to grow, the network now included 31
                total churches (12 host churches and 19 support congregations).
                With 50 volunteers each week year round, the network needed a
                lot of dedicated church volunteers! ​
              </p>

              <p>
                Although the model of sheltering homeless families in local
                congregations was extremely cost effective, financials were
                difficult during this time. Even throughout the struggle, the
                executive staff opted to cut back their hours in order to free
                up funding for those working directly with families. The goal
                was to "just keep it going for the kiddos," and even though
                money got tight, we were committed to never closing our doors to
                families in need. One board member recalls that she even hosted
                personal fundraisers in her home just to make ends meet!
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            2012-2014: CHANGING THE NAME TO MEET DEMAND
          </h2>
          <div className={styles.sectionContent}>
            <div className={styles.text}>
              <p>
                Following the national name change from Interfaith Hospitality
                Network to Family Promise, we became Family Promise of Spokane.
                The new name sparked a momentum to expand our services to better
                help whole families.
              </p>

              <p>
                Additionally, despite an ever-increasing need for our services,
                we had never been able to purchase our own facility. We had
                rented various properties around town, but in 2014, we purchased
                our Day Center/Administrative Offices located at 904 E. Hartson.
                This stable "home base" became the foundation for future
                expansion
              </p>
            </div>
            <img className={styles.img} src={Story4} />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            2016: OPEN DOORS EMERGENCY SHELTER IS BORN
          </h2>
          <div className={styles.sectionContent}>
            <img className={styles.img} src={Story5} />
            <div className={styles.text}>
              <p>
                As the need in our city continued to rise, the City of Spokane
                reached out to ask Family Promise of Spokane to open the first
                ever 24/7 emergency walk-in shelter for the whole family. Three
                months later, Open Doors was born. We provided so more than just
                a place to sleep; we provided meals, showers, kitchen-access,
                case management and a safe place for kids. On the very first
                day, over 15 family members had sought services.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.alignRight}`}>
          <h2 className={styles.sectionTitle}>
            2018: SIGNIFICANT EXPANSION ON THE HORIZON
          </h2>
          <div className={styles.sectionContent}>
            <div className={styles.text}>
              <p>
                From 2017 to 2018, our capacity to serve homeless families and
                those needing help tripled. We began our Neighbors Prevention
                program and our Village aftercare program. Serving just over
                1,000 people within the time frame, Family Promise continued to
                grow, hiring staff and looking to purchase a building that could
                house Open Doors families and serve as a home-base for future
                expansion
              </p>

              <p>
                In 2019, we purchased the old Cassano's Italian Grocery Store,
                spending 6 months renovating it to best fit our needs. In
                September 2019, 20 families found emergency services at the
                Family Promise Center.
              </p>
            </div>
            <img className={styles.img} src={Story6} />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            2020: A BOLD VISION FOR SPOKANE
          </h2>
          <div className={styles.sectionContent}>
            <img className={styles.img} src={Story7} />
            <div className={styles.text}>
              <p>
                With the issue of family homelessness remaining at crisis
                levels, Family Promise of Spokane has created a strategic plan
                to change the future for 1,000 family members each year by 2024.
              </p>

              <p>
                The next three years will be marked by growth and engagement as
                we increase local partnerships and seek connections that
                integrate families into neighborhoods. With your help, Family
                Promise of Spokane truly believes we can end family
                homelessness—right here in our own community.
              </p>
            </div>
          </div>
        </section>

        <section>
          <Button color='gold' onClick={() => navigate('/')}>JOIN THE MOVEMENT</Button>
        </section>
      </div>
    </div>
  );
}
