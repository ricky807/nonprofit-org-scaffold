import React from "react";

import Banner from "../components/Global/Banner";
import InternshipCard from "../components/Global/InternshipCard";
import TextSection from "../components/Global/TextSection";

import Button from "../components/Global/Button";

import * as styles from "../styles/pages/Internships.module.css";

import * as globalStyles from "../styles/Global/Global.module.css";

import shelter from "../images/internships/shelter.webp";

import kids from "../images/internships/kids.webp";

import caseManagement from "../images/internships/case.webp";

import social from "../images/internships/social.webp";

import marketing from "../images/internships/marketing.webp";

import volunteer from "../images/internships/volunteer.webp";

import accounting from "../images/internships/accounting.webp";

import it from "../images/internships/it.webp";

import human from "../images/internships/human.webp";

import {
  SHELTER,
  ACCOUNTING,
  CASE_MANAGEMENT,
  HUMAN_RESOURCES,
  TECHNICIAN,
  KIDS_CREW_COORDINATOR,
  SOCIAL_MEDIA_COORDINATOR,
  VOLUNTEER_COORDINATOR,
  STORY_TELLING,
  SUPPORT_SPECIALIST,
} from "../utils/data/internshipPdfs";

export default function internships() {
  return (
    <div>
      <Banner color="white" backgroundColor="darkblue" height={"18vh"}>
        <div className={styles.bannerContent}>
          <div>
            <h1>INTERNSHIPS</h1>
            <h2>Where your education becomes real.</h2>
          </div>

          <button
            style={{
              padding: "2rem 5rem",
            }}
          >
            Apply Now
          </button>
        </div>
      </Banner>

      <TextSection>
        <div className={styles.text}>
          <h1>What can I expect?</h1>
          <hr />
          <ul className={styles.bullet}>
            <li>An educational, formative work experience</li>
            <li>Ongoing mentorship & support from on-site staff</li>
            <li>Completing real projects; interns aren't doing busy work!</li>
            <li>10 hours per week for a minimum of 3 months</li>
            <li>
              Not to be paid... however, we like to hire interns after their
              internships!
            </li>
          </ul>
          <h1>What sort of internships are there?</h1>
          <hr />
        </div>
      </TextSection>

      <div className={globalStyles.genericContainer}>
        <div className={styles.cards}>
          <InternshipCard
            title={"Shelter Support "}
            blurb={
              "Participate in the daily tasks of running 24/7 Emergency Shelter and get to know families! Provide practical resource referral, emotional support and conflict resolution. Perfect for those seeking a career in the helping field or who are interested in this population. "
            }
            image={shelter}
            pdfLink={SHELTER}
          />
          <InternshipCard
            title={"Kid's Crew Coordinator"}
            blurb={
              "Work exclusively with homeless children providing engaging, educational programming focused on healthy coping skills and emotional regulation. Develop genuine relationships that mentor kids! Perfect for those seeking a career in child development or education."
            }
            image={kids}
            pdfLink={KIDS_CREW_COORDINATOR}
          />
          <InternshipCard
            title={"Case-Management Assistant "}
            blurb={
              "Partner with our case-management team to empower families to overcome barriers keeping them from housing. Encourage active problem-solving and provide basic resource referral in a structured environment. Perfect for those seeking a career in social work or counseling."
            }
            image={caseManagement}
            pdfLink={CASE_MANAGEMENT}
          />

          <InternshipCard
            title={"Social Media Coordinator"}
            blurb={
              "Brainstorm and create social media and marketing materials focused on telling the story of Family Promise families. Construct engaging content and participate in developing the marketing department at a non-profit. Perfect for those seeking a career in business marketing/management and communication. "
            }
            image={social}
            pdfLink={SOCIAL_MEDIA_COORDINATOR}
          />
          <InternshipCard
            title={"Marketing & Story-Teller"}
            blurb={
              "Develop compassionate connections with partners and families at Family Promise before preparing their stories, editing the content and publishing interviews online and in print. Perfect for those seeking a career in journalism or communication. Job description to right."
            }
            image={marketing}
            pdfLink={STORY_TELLING}
          />

          <InternshipCard
            title={"Volunteer Coordinator"}
            blurb={
              "Welcome all new volunteers into Family Promise providing administrative and emotional support. Developing ongoing relationships with volunteers so that families feel supported during their time at Family Promise. Perfect for those seeking a career in human resources, communication and business. "
            }
            image={volunteer}
            pdfLink={VOLUNTEER_COORDINATOR}
          />

          <InternshipCard
            title={"Accounting Assistant"}
            blurb={
              "Partner with Director of Finance to prepare basic budgeting, reconcile accounts and help with data entry. Lead a budgeting workshop for homeless families! Perfect for those seeking a career in business and/or finance."
            }
            image={accounting}
            pdfLink={ACCOUNTING}
          />

          <InternshipCard
            title={"IT & Data Technician"}
            blurb={
              "Ensure data quality while also analyzing and creating systems that enable staff to gain insights into the daily operations of all programs. Install hardware and work to develop the data management for non-profit. Perfect for those seeking a career in data science. "
            }
            image={it}
            pdfLink={TECHNICIAN}
          />

          <InternshipCard
            title={"Human Resources"}
            blurb={
              "The Human Resources Intern is responsible for helping Family Promise strengthen its Human Resources Department by assisting with HR office administrative tasks including the development of policies and procedures. "
            }
            image={human}
            pdfLink={HUMAN_RESOURCES}
          />
        </div>
      </div>

      <div className={globalStyles.genericContainer}>
        <Button>Apply Now</Button>
      </div>
    </div>
  );
}
