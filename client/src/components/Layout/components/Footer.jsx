// styling
import * as styles from "../../../styles/footer.module.css";

// assets
import FPLogo from "../../../images/familypromiselogo.png";
// components
import HelpShareThePromise from "../../Global/HelpShareThePromise";
import JoinTheFamily from "../../Global/JoinTheFamily";
import React from "react";
// navigation
import { navigate } from "gatsby";

// footer data
const footerData = [
  {
    title: "WHO WE ARE",
    links: [
      { linkName: "Mission & Vision", link: "/mission" },
      { linkName: "Programs", link: "/" },
      { linkName: "History", link: "/history" },
      { linkName: "Staff", link: "/staff" },
      { linkName: "Board", link: "/board" },
      { linkName: "Financials", link: "/financials" },
    ],
  },
  {
    title: "WHAT WE DO",
    links: [
      { linkName: "Prevent", link: "/prevent" },
      { linkName: "Provide", link: "/provide" },
      { linkName: "Prepare", link: "/prepare" },
    ],
  },
  {
    title: "GET INVOLVED",
    links: [
      { linkName: "Need Help?", link: "/needHelp" },
      { linkName: "Advocate", link: "/learn" },
      { linkName: "Volunteer", link: "/volunteer" },
      { linkName: "Internships", link: "/internships" },
      { linkName: "Careers", link: "/careers" },
      { linkName: "Contact us", link: "/contact" },
    ],
  },
  {
    title: "GIVE",
    links: [
      { linkName: "Financial Gifts", link: "/donate" },
      { linkName: "Welcome Home Kits", link: "/give" },
      { linkName: "Wishlist Items", link: "/give" },
    ],
  },
];

export default function Footer() {
  return (
    <div>
      <HelpShareThePromise />
      <JoinTheFamily />
      <footer>
        <div className={styles.container}>
          <section className={styles.linksContainer}>
            {footerData.map((linkSection) => {
              return (
                <div className={styles.linkContainer}>
                  <h3>{linkSection.title}</h3>
                  <div className={styles.links}>
                    {linkSection.links.map((link) => {
                      return (
                        <a
                          href={link.link}
                          onClick={() => navigate(link.link)}
                          alt={link.linkName}
                        >
                          {link.linkName}
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            <div className={styles.linkContainer}>
              <button
                className={styles.donateButton}
                onClick={() => navigate("/donate")}
              >
                <a
                  href="/donate"
                  style={{
                    textDecoration: "none",
                    color: "#3a283c",
                  }}
                >
                  DONATE
                </a>
              </button>
            </div>
          </section>

          <section className={styles.legalsContainer}>
            <img src={FPLogo} className={styles.lowerLogo} />
            <div className={styles.officeButtonContainer}>
              <button
                className={styles.officeButton}
                onClick={() =>
                  window.open("https://familypromise.org/", "_blank")
                }
              >
                Family Promise National Office
              </button>
            </div>
            <div className={styles.copyright}>
              &copy; Family Promise 2021. All Rights Reserved.
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}
