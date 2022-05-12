import React from "react";

import * as styles from "../../styles/Global/InternshipCard.module.css";

import pdf from "../../images/internships/pdf.webp";

export default function InternshipCard({ title, blurb, image, pdfLink }) {
  const openPdf = () => window.open(pdfLink);

  return (
    <div className={styles.container}>
      <div className={styles.data}>
        <h2 className={styles.title}>{title}</h2>
        <hr />
        <p className={styles.blurb}>{blurb}</p>
      </div>

      <div className={styles.image}>
        <div className={styles.pdfLinkContainer}>
          <small>Internship Description</small>
          <img src={pdf} onClick={openPdf} className={styles.pdfLink} />
        </div>

        <img src={image} />
      </div>
    </div>
  );
}
