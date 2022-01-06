import React from "react";
import useWindowDimensions from "../utils/hooks/useWindowDimensions";

import Banner from "../components/Global/Banner";

import Button from "../components/Global/Button";

import TextSection from "../components/Global/TextSection";

import bannerimage from "../images/hapbackgroundimage.webp";

import haplogo from "../images/haplogo.webp";

import Accordion from "react-bootstrap/Accordion";

import hapscreenshot from "../images/hap/hapscreenshot.png";

import { FaFacebookF, FaTwitter } from "react-icons/fa";

import * as styles from "../styles/pages/Hap.module.css";

import * as globalStyles from "../styles/Global/Global.module.css";

export default function Hap() {
  const { width } = useWindowDimensions();

  return (
    <div>
      \{" "}
      <Banner
        height={width < 900 ? "10vh" : "30vh"}
        backgroundColor="white"
        backgroundImage={bannerimage}
      >
        <img style={{ height: "auto", width: "100%" }} src={haplogo} />
      </Banner>
      <div className={styles.actionsContainer}>
        <div style={{ marginTop: "2rem" }} className={styles.actions}>
          <Button>Apply for Assistance</Button>
          <Button>Register a New Housing Resource</Button>
        </div>
      </div>
      <TextSection>
        <div className={styles.text}>
          <p>
            When someone is in crisis, the last thing they need is confusion on
            where to find help.
          </p>

          <p>Family Promise of Spokane has created the solution.</p>

          <p>
            The <strong>Housing Assistance Portal</strong> connects applicants
            in need with the housing resources they qualify for, all in one,
            easy-to-use location.
          </p>
        </div>
      </TextSection>
      <div className={globalStyles.genericContainer}>
        <div className={styles.faq}>
          <h3 className={styles.faqHeader}>
            <strong>Frequently Asked Questions</strong>
          </h3>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <span>What is the HAP?</span>
              </Accordion.Header>
              <Accordion.Body>
                The Housing Assistance Portal - or HAP - is a web platform
                designed by Family Promise of Spokane that allows those in need
                of housing assistance (rental assistance, housing deposits,
                utility help, mortgage assistance, etc.) to identify and apply
                for eligible resources. The HAP itself doesn't fulfill housing
                assistance requests, but serves as a bridge between those in
                need and organizations that have the needed resource. For those
                in need, the HAP provides an easy-to-use interface, allowing an
                applicant to fill out a brief snapshot of their need, search for
                community programs they may be eligible for and apply in one
                location. They can even upload needed documentation, communicate
                with organizations or update their need using a secure, personal
                account. For organizations with resources, the HAP presorts
                applicants to ensure that those who are applying are eligable
                for that organization's resources. Additionally, once an
                applicant submits an application, the organization can sort,
                approve requests, communicate directly with applicants, manage
                lists, etc. in one dashboard.
                {<SocialMediaHandles />}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Can a landlord apply for rental assistance?
              </Accordion.Header>
              <Accordion.Body>
                Yes. A landlord who is owed back rent may apply for rental
                assistance through the Housing Assistance Portal, however, an
                application doesn't necessarily mean that there will be
                resources available.
                {<SocialMediaHandles />}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                I've submitted an application, but I haven't heard back from
                anyone. What do I do?
              </Accordion.Header>
              <Accordion.Body>
                Many are in need of housing assistance due to the COVID-19
                pandemic. We are working as quickly as possible to process
                applications and appreciate your patience. To ensure that you've
                completed everything on your end, please make sure that you've
                uploaded all of your requested documenation and that you are
                able to log into your account to see your progress.
                {<SocialMediaHandles />}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                I'm having technical difficulties with the HAP. What do I do?
              </Accordion.Header>
              <Accordion.Body>
                All technical difficulties should be solved directly from the
                HAP landing page by messaging with someone from tech support.
                Our case managers are not equipped to help you resolve technical
                issues, so please message the tech team directly
                <img
                  onClick={() => window.open("https://hap.solutions")}
                  src={hapscreenshot}
                  style={{ width: "100%", cursor: "pointer" }}
                />
                {<SocialMediaHandles />}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>
                I want my organization's resource listed on the HAP. What do I
                do?
              </Accordion.Header>
              <Accordion.Body>
                Please check out the "Add a Housing Resource" button and fill
                out the survey. This will allow our Data Team to connect with
                you.
                {<SocialMediaHandles />}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
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
