import React from "react";

import video from "../videos/nightwithoutabed/headervideo.mp4";
import logo from "../images/nightwithoutabed/logo.webp";

import * as globalStyles from "../styles/Global/Global.module.css";

import Button from "../components/Global/Button";

import { navigate } from "gatsby";

import styled from "styled-components";

import { Container } from "react-bootstrap";

import { Image } from "../components/Global/Image";

import goal from "../images/nightwithoutabed/goal.webp";

import { Accordion } from "react-bootstrap";

import * as styles from "../styles/pages/Hap.module.css";

import { FaTwitter, FaFacebookF } from "react-icons/fa";

export default function nightwithoutabed() {
  return (
    <div>
      <VideoContainer>
        <VideoOverlay>
          <img src={logo} />
        </VideoOverlay>
        <Video autoPlay muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </VideoContainer>

      <Container>
        <Section color="lightpurple">
          <h2>
            Fundraise to end family homelessness between now and June 25th.
          </h2>

          <Buttons>
            <Button
              onClick={() =>
                window.open(
                  "https://familypromisespokane-bloom.kindful.com/nwob22",
                  "_blank"
                )
              }
              color="lightpurple"
            >
              CREATE YOUR TEAM
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://familypromisespokane-bloom.kindful.com/campaigns/1194302?cause_id=13610",
                  "_blank"
                )
              }
              color="lightpurple"
            >
              DONATE DIRECTLY
            </Button>
          </Buttons>
        </Section>

        <Section color="darkpurple">
          <h1 style={{ textAlign: "" }}>
            Just because you can't see them on the streets, doesn't mean they're
            not there.
          </h1>
          <p>
            These are stories of families across the nation who spend every
            night without a bed.
          </p>

          <Videos>
            <div>
              <iframe
                width={"100%"}
                height={250}
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
              <p>
                Meet Danielle and her daughter from Santa Barbara, California.
              </p>
            </div>

            <div>
              <iframe
                width={"100%"}
                height={250}
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>

              <p>Meet Cheryl and her children from San Diego, California.</p>
            </div>
          </Videos>
        </Section>

        <Section color="darkpurple">
          <Image src={goal} />

          <h3>
            Since December 4, 2021, Family Promise of Spokane hasn't turned away
            a single family for lack of room or resources. No child has been
            forced to return to the street.
          </h3>

          <p>
            Families facing homelessness make up about 35% of those experiencing
            homelessness nationwide. In Spokane County, about 1 in 25 students
            will experience homelessness every year. Despite these staggering
            statistics, many community members don't often imagine or see
            families on the street. Why not? Because it's not safe for children.
            Instead, families will rent a room at a motel, stay in a car or
            sleep on a friend's floor. In this way, they will keep their family
            together, but are unable to break the cycle of homelessness
            themselves. This survival cycle is broken when a family seeks
            services at Family Promise of Spokane.
          </p>

          <p>
            Through Night Without a Bed, we challenge you - your church, your
            business, your friend group - to host a peer-to-peer fundraiser
            benefitting Family Promise and spread the word about the challenges
            of families facing homelessness.
          </p>

          <Buttons>
            <Button
              onClick={() =>
                window.open(
                  "https://familypromisespokane-bloom.kindful.com/nwob22",
                  "_blank"
                )
              }
              color="lightpurple"
            >
              CREATE YOUR TEAM
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://familypromisespokane-bloom.kindful.com/campaigns/1194302?cause_id=13610",
                  "_blank"
                )
              }
              color="lightpurple"
            >
              DONATE DIRECTLY
            </Button>
          </Buttons>
        </Section>

        <h3 className={styles.faqHeader}>
          <strong>Frequently Asked Questions</strong>
        </h3>

        <Accordion style={{ width: "100%" }}>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How do I get involved?</Accordion.Header>
            <Accordion.Body>
              <p>There are 3 main ways to get involved.</p>
              <p>
                1. Lead a team to fundraise on behalf of Family Promise. Gather
                your church group, company or book club to spread the word and
                raise money for Family Promise of Spokane. You will have access
                to an easy to use, online platform for fundraising as well as
                How To Guides.
              </p>

              <p>
                2. Donate towards the goal. Every $43 provides 24 hours of
                holistic support for a family experiencing homelessness.
              </p>

              <p>
                3. Spend June 25th anywhere but your bed to gain empathy for the
                plight of families experiencing homelessness. We will host a
                hybrid in-person/live streamed kick-off event on June 25th at
                7pm to learn more together.
              </p>
              {<SocialMediaHandles />}
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Is it easy to lead a team?</Accordion.Header>
            <Accordion.Body>
              <p>
                Yes! We've revamped the online platform to be simple and easy to
                use. All you need to do is...
              </p>

              <ol>
                <li>
                  Create your team. Gather friends & family or invite your
                  company, church or book group!
                </li>
                <li>
                  Fill out some basic information as well as your fundraising
                  goal. The default goal for teams is set at $1,500.{" "}
                </li>
                <li>
                  A Family Promise staff person will reach out to brainstorm
                  ways to fundraise, share how-to-guides and answer any
                  questions you have.{" "}
                </li>
                <li>
                  Get fundraising! Share your link & invite friends to donate
                  using your unique fundraising link. Any money donated through
                  your link will get credited towards your fundraising
                  mini-goal!
                </li>
                <li>
                  Consider hosting a SleepOut event on June 25th with the people
                  on your team. Maybe you decide to encourage your donors to
                  pitch a tent in their own backyards or, as a church, rally
                  your cars in the church parking lot.{" "}
                </li>
              </ol>
              {<SocialMediaHandles />}
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              How does me giving up my bed for a night mean a homeless child
              won't experience bed-lessness?
            </Accordion.Header>
            <Accordion.Body>
              The SleepOut on June 25th serves as a culmination of the
              fundraising efforts of each Night Without a Bed Team. Although the
              SleepOut itself doesn't raise money, it encourages you to put
              yourself in homeless family members' shoes. Our hope is that you
              are better able to relate to these families and thus, are
              empowered to create a solution to end family homelessness in our
              city. Ultimately, through an engaged, educated community, no child
              will have to experience homelessness in the years to come.
              {<SocialMediaHandles />}
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>
              Is it free to participate in the SleepOut on June 25?
            </Accordion.Header>
            <Accordion.Body>
              Yes! It's entirely free to participate although we do encourage
              you to create or connect with a fundraising team to ensure the
              best experience.
              {<SocialMediaHandles />}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
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

const Videos = styled.div`
  display: flex;

  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Video = styled.video`
  width: 100%;

  object-fit: cover;

  height: 35rem;

  @media (max-width: 1400px) {
    height: 30rem;
  }

  @media (max-width: 830px) {
    height: 25rem;
  }

  @media (max-width: 500px) {
    height: 20rem;
  }
`;

const Section = styled.section`
  display: flex;

  padding: 2rem 0 2rem 0;

  text-align: center;

  flex-direction: column;

  justify-content: center;

  align-items: center;

  gap: 3rem;

  color: ${(props) => props.theme[props.color] || "black"};
`;

const Buttons = styled.div`
  display: flex;

  gap: 1rem;

  @media screen and (max-width: 780px) {
    flex-direction: column;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  position: relative;

  video {
    z-index: 0;
  }
`;

const VideoOverlay = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  display: flex;

  justify-content: center;

  transform: translate(-50%, -50%);

  z-index: 1;

  img {
    width: 100%;
    max-width: 500px;

    height: auto;
  }

  @media (max-width: 1000px) {
    .images {
      display: none;
    }

    .faq {
      width: 70%;
    }

    .sponsors {
      width: 70%;
    }
  }

  @media (max-width: 500px) {
    .videoOverlay img {
      width: 300px;
      height: 200px;
    }
  }
`;

{
  /* <Section>
<h2>
  Just because you can't see them on the streets, doesn't mean they're
  not there.
  <small>
    These are stories of families across the nation who spend every
    night without a bed.
  </small>
</h2>
</Section> */
}
