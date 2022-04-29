import React from "react";

import Banner from "../components/Global/Banner";
import Button from "../components/Global/Button";

import Card from "../components/Global/Card";

import letter from "../images/learn/letter.webp";

import brain from "../images/learn/brain.webp";

import families from "../images/learn/families.webp";

import roundtable from "../images/learn/roundtable.webp";

import video from "../images/learn/video.webp";

import * as CardContainerStyles from "../styles/Containers/CardContainer.module.css";

import * as globalStyles from "../styles/Global/Global.module.css";

import * as styles from "../styles/pages/Learn.module.css";

import useWindowDimensions from "../utils/hooks/useWindowDimensions";

import DonateOrVolunteer from "../components/Global/DonateOrVolunteer";

import { navigate } from "gatsby";

export default function Learn() {
  const { width } = useWindowDimensions();

  const determineCardDirection = () => {
    return width <= 700 ? "vertical" : "horizontal";
  };

  return (
    <div>
      <Banner color="white" backgroundColor="darkblue" height={"20vh"}>
        <h1>LEARN MORE</h1>
        <p>
          BY developing a holistic understanding of poverty, you begin to change
          the world.
        </p>
      </Banner>

      <div className={globalStyles.genericContainer}>
        <div className={CardContainerStyles.container}>
          <Card imageWidth={width >= 700 ? '50%' : '100%'} image={letter} direction={determineCardDirection()}>
            <div className={styles.cardContent}>
              <h1>Congregational Info</h1>
              <p>
                If you or someone you know is interested in getting their church
                or congregation involved, contact Shawn Ewart:
              </p>
              <h4>Phone: (509) - 724 - 7299</h4>
              <div className={styles.cardContentButtons}>
                <Button onClick={() => window.open('mailto:sewart@familypromiseofspokane.org', '_blank')} color={'gold'}>Send Shawn An Email</Button>
              </div>
            </div>
          </Card>

          <Card imageWidth={width >= 700 ? '50%' : '100%'} image={brain} direction={determineCardDirection()}>
            <div className={styles.cardContent}>
              <h1>Trauma & the Brain</h1>
              <p>
                Download a helpful resource for understanding trauma and the
                brain or watch a quick video.
              </p>
              <div className={styles.cardContentButtons}>
                <Button onClick={() => window.open('https://fpspokanebucket.s3.us-west-1.amazonaws.com/FlippingLid+Handout.pdf', '_blank')} color={'gold'}>Download</Button>
                <Button onClick={() => window.open('https://www.youtube.com/watch?v=4-tcKYx24aA', '_blank')} color={'gold'}>View</Button>
              </div>
            </div>
          </Card>
          <Card imageWidth={width >= 700 ? '50%' : '100%'} image={video} direction={determineCardDirection()}>
            <div className={styles.cardContent}>
              <h1>Video Curriculum</h1>
              <p>
                Build a robust framework on poverty in America through these
                Stanford Center on Poverty and Inequality trainings.
              </p>
              <div className={styles.cardContentButtons}>
                <Button onClick={() => navigate('/videolearning')} color={'gold'}>Watch Now</Button>
              </div>
            </div>
          </Card>
          <Card imageWidth={width >= 700 ? '50%' : '100%'} image={roundtable} direction={determineCardDirection()}>
            <div className={styles.cardContent}>
              <h1>Roundtable Resources</h1>
              <p>
                Grow your framework for understanding poverty, family
                homelessness & how you can help support the cause.
              </p>
              <div className={styles.cardContentButtons}>
                <Button onClick={() => navigate('/roundtable')} color={'gold'}>Start Learning</Button>
              </div>
            </div>
          </Card>

          <Card imageWidth={width >= 700 ? '50%' : '100%'} image={families} direction={determineCardDirection()}>
            <div className={styles.cardContent}>
              <h1>Meet our Families</h1>
              <p>When a stereotype becomes a story, everything changes.</p>
              <div className={styles.cardContentButtons}>
                <Button onClick={() => navigate('/stories')} color={'gold'}>Meet Them</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <DonateOrVolunteer />
    </div>
  );
}
