import React from "react";

import * as styles from "../../styles/Global/Section.module.css";

import translateColors from "../../utils/translateColors";

export default function Section({ backgroundColor, children }) {
  let translatedBackgroundColor = translateColors(backgroundColor);

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: translatedBackgroundColor }}
    >
      {children}
    </div>
  );
}
