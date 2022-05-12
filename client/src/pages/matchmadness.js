import React from "react";
import TextSection from "../components/Global/TextSection";

import BackgroundVideo from "../images/match/background.mp4";

import MatchImg from "../images/match/matchbanner.png";

import match1 from "../images/match/match1.jpg";
import match2 from "../images/match/match2.jpg";
import match3 from "../images/match/match3.jpg";
import basketball from "../images/match/basketball.jpg";

import * as styles from "../styles/pages/Match.module.css";

import * as globalStyles from "../styles/Global/Global.module.css";

import { FaFacebookF, FaTwitter } from "react-icons/fa";

import { Accordion } from "react-bootstrap";

import { navigate } from "gatsby";

import sponsors from "../utils/data/sponsors";
import Button from "../components/Global/Button";

export default function matchmadness() {
  return (
    <div>
      <div className={styles.videoContainer}>
        <div className={styles.videoOverlay}>
          <img src={MatchImg} />
        </div>
        <video
          style={{ objectFit: "fill" }}
          width="100%"
          height="370"
          autoPlay
          muted
        >
          <source src={BackgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <TextSection>
        <div className={styles.donation}>
          <Button onClick={() => navigate('/donate')} color={'lightpurple'}>DONATE</Button>
          <h3>It's time to address family homelessness. </h3>
          <h4>Your donation is multiplied...</h4>
          <h2>$1 - $249 = x2 impact</h2>
          <h2>$250+ = x3 impact</h2>
          <h4>Thanks to our corporate sponsors.</h4>
        </div>
      </TextSection>

      <TextSection>
        <div className={styles.text}>
          <p>
            ​ Estimates reveal as many as{" "}
            <strong>74% of North Spokane residents</strong> fear that they may
            lose their home. With the statewide eviction moratorium officially
            over, the need for homeless prevention support is greater than ever.
          </p>

          <p>
            Donate between <strong>$1 - $249 to drain a two pointer</strong> and
            have your individual donation <strong>doubled</strong> by our
            corporate sponsors. Donate{" "}
            <strong>$250+ to swish a three pointer</strong> and have your
            individual donation <strong>tripled</strong>.
          </p>
        </div>
      </TextSection>

      <TextSection>
        <div style={{ textAlign: "center" }} className={styles.text}>
          <h1>
            Your donation -- matched by corporate sponsors -- will make the
            difference in the lives of children all over Spokane County.
          </h1>
        </div>
      </TextSection>

      <div className={styles.imagesContainer}>
        <div className={styles.images}>
          <img src={match1} />
          <img src={match2} />
          <img src={match3} />
        </div>
      </div>

      <div className={globalStyles.genericContainer} style={{marginTop: '1rem'}}>
        <Button color={'lightpurple'}>DONATE</Button>
      </div>

      <TextSection>
        <div style={{ textAlign: "center" }} className={styles.text}>
          <h1>
            A homeless individual on the streets{" "}
            <strong>will cost $31K in taxpayer dollars</strong> a year, but
            preventing an entire family from becoming homeless is a{" "}
            <strong>one time payment of $10,100</strong>.
          </h1>
        </div>
      </TextSection>

      <section className={styles.section}>
        <div className={styles.text} style={{ textAlign: "center" }}>
          <p>Every donation will be entered to</p>
          <h2>
            <strong>win one of two basketballs</strong>
          </h2>
          <p>signed by the Gonzaga Men or Women's basketball teams and</p>
          <h3>
            <strong>
              two tickets to a Gonzaga Men's <br /> '22 - '23 home game.
            </strong>
          </h3>
          <small>Drawing will occur on Facebook Live on 4/15 at 12pm.</small>
        </div>
        <img src={basketball} />
      </section>

      <div className={globalStyles.genericContainer}>
        <h4 className={styles.sponsorsHeader}>
          Match Madness is made possible through generous contributions from...{" "}
        </h4>
        <div className={styles.sponsors}>
          {sponsors.map((sponsor) => (
            <img src={sponsor} />
          ))}
        </div>
      </div>

      <div className={globalStyles.genericContainer}>
        <div className={styles.faq}>
          <h3 className={styles.faqHeader}>
            <strong>Frequently Asked Questions</strong>
          </h3>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <span>What will the funds raised be used for?</span>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  100% of the funds raised in the Match Madness Campaign will go
                  to support Family Promise of Spokane programs. For every
                  dollar donated, 92 cents goes directly to programs that
                  support families at risk of, or currently experiencing
                  homelessness
                </p>

                <p>
                  FPS defines a family as any adult(s) caring for a child under
                  18 or anyone that is pregnant.
                </p>
                {<SocialMediaHandles />}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                How will my donation be matched?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Donations made to the Match Madness Campaign will be matched
                  according to the tiers below by our cooperate sponsors. Here
                  is how it works.
                </p>
                <p>
                  Donations between $1-$249 will be doubled (your gift x 2).{" "}
                  <br />
                  Donations $500 and above will be tripled (your gift x3).
                </p>
                {<SocialMediaHandles />}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                What happens if the matching money is used up?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Donations made after the matching money is used up will still
                  be a donation to Family Promise.
                </p>
                <p>
                  Note: More matching funds may become available as community
                  partners contribute to the Match Madness campaign.
                </p>
                {<SocialMediaHandles />}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                What happens if I start a recurring donation?
              </Accordion.Header>
              <Accordion.Body>
                Any gift given during the Match Madness campaign (March 1 -
                April 8) will be put entirely towards Match Madness multiplied
                according to the tiered approach. After the Match Madness
                campaign ends, all recurring donations will continue as regular
                donations to Family Promise of Spokane to be used in the area of
                greatest need until the donor cancels their recurring gift. The
                only portion of the donation that will be multiplied according
                to the tiered approach is the amount given between March 1 and
                April 5.
                {<SocialMediaHandles />}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>
                Where did you get the statistics used in your videos?
              </Accordion.Header>
              <Accordion.Body>
                220,000 renters late on their rent payments statistic came from{" "}
                <a
                  href="https://www.seattletimes.com/seattle-news/homeless/washington-lawmakers-mull-ways-to-exit-the-eviction-moratorium-and-prevent-the-fallout/"
                  target="_blank"
                >
                  The Seattle Times
                </a>
                . 74% of renter families in Spokane worried about eviction came
                from a survey done in Northeast Spokane found at{" "}
                <a
                  href="https://drive.google.com/file/d/1WYT0L13v1TZoRb-x3OYYuj-i6N00AJbU/view?usp=sharing"
                  target="_blank"
                >
                  ZoNE NE Housing Stability Survey Results & Insights
                </a>
                . 1 in 4 renters late on their rent payments in Spokane came
                from the{" "}
                <a href="http://www.slihc.org/" target={"_blank"}>
                  Spokane Low Income Housing Consortium.
                  {<SocialMediaHandles />}
                </a>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>
                How do I apply for rental assistance?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Family Promise of Spokane only provides rental assistances to
                  adult(s) caring for children or pregnant. Prevention funds are
                  limited.
                </p>
                <p>
                  A rental assistance portal is located on the Family Promise of
                  Spokane website.
                </p>

                {<SocialMediaHandles />}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>

      <section className={styles.questions}>
        <h1>Questions</h1>
        <p>
          Contact Craig Howard at <br />
          <a href="mailto:choward@familypromiseofspokane.org">
            choward@familypromiseofspokane.org
          </a>
        </p>
      </section>
    </div>
  );
}

const SocialMediaHandles = () => {
  return (
    <div className={styles.social}>
      <FaFacebookF />
      <FaTwitter />
    </div>
  );
};
