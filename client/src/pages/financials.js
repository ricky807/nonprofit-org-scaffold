import React from "react";

import Banner from "../components/Global/Banner";

import Card from "../components/Global/Card";

import Button from "../components/Global/Button";

import first from "../images/financials/2020.webp";
import second from "../images/financials/2019.webp";
import third from "../images/financials/2018.webp";
import fourth from "../images/financials/2017.webp";
import fifth from "../images/financials/2016.webp";

import * as globalStyles from "../styles/Global/Global.module.css";

import * as cardContainer from "../styles/Containers/CardContainer.module.css";

import * as styles from "../styles/pages/Financials.module.css";

import useWindowDimensions from "../utils/hooks/useWindowDimensions";

export default function Financials() {
  const { width } = useWindowDimensions();

  function calculateCardType(width) {
    if (width <= 800) return "vertical";

    return "horizontal";
  }

  return (
    <div>
      <Banner
        color="white"
        backgroundColor="darkblue"
        height={"18vh"}
        textDirection={"left"}
      >
        <h1>Financials</h1>
        <small>Transparency matters.</small>
      </Banner>

      <div className={globalStyles.genericContainer}>
        <div className={cardContainer.container}>
          <Card image={first} direction={calculateCardType(width)}>
            <div className={styles.cardContent}>
            <div className={styles.cardContent}>
              <div className={styles.cardContentInner}>
                <h2>Form 990</h2>
                <Button onClick={() => window.open('https://fpspokanebucket.s3.us-west-1.amazonaws.com/2020+-+990.pdf', '_blank')}>View</Button>
              </div>

              <div className={styles.cardContentInner}>
                <h2>Audit</h2>
                <Button onClick={() => window.open('https://fpspokanebucket.s3.us-west-1.amazonaws.com/2020+-+audit.pdf', '_blank')}>View</Button>
              </div>
            </div>
            </div>
          </Card>

          <Card image={second} direction={calculateCardType(width)}>
            <div className={styles.cardContent}>
              <div className={styles.cardContentInner}>
                <h2>Form 990</h2>
                <Button onClick={() => window.open('https://fpspokanebucket.s3.us-west-1.amazonaws.com/2019-financials.pdf', '_blank')}>View</Button>
              </div>

              <div className={styles.cardContentInner}>
                <h2>Audit</h2>
                <Button onClick={() => window.open('https://fpspokanebucket.s3.us-west-1.amazonaws.com/2019+-+Audit.pdf', '_blank')}>View</Button>
              </div>
            </div>
          </Card>


          <Card image={third} direction={calculateCardType(width)}>
            <div className={styles.cardContent}>
              <div className={styles.cardContentInner}>
                <h2>Form 990</h2>
                <Button onClick={() => window.open('https://fpspokanebucket.s3.us-west-1.amazonaws.com/2018+-+990.pdf', '_blank')}>View</Button>
              </div>

            </div>
          </Card>


          <Card image={fourth} direction={calculateCardType(width)}>
            <div className={styles.cardContent}>
              <div className={styles.cardContentInner}>
                <h2>Form 990</h2>
                <Button onClick={() => window.open('https://fpspokanebucket.s3.us-west-1.amazonaws.com/2017+-+990.pdf', '_blank')}>View</Button>
              </div>

          
            </div>
          </Card>
          <Card image={fifth} direction={calculateCardType(width)}>
            <div className={styles.cardContent}>
              <div className={styles.cardContentInner}>
                <h2>Form 990</h2>
                <Button onClick={() => window.open('https://fpspokanebucket.s3.us-west-1.amazonaws.com/2016+-+990.pdf', '_blank')}>View</Button>
              </div>

            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
