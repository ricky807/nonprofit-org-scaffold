import React from "react";

import translateColors from "../../utils/translateColors";

import * as styles from "../../styles/Global/TextSection.module.css";

import * as globalStyles from "../../styles/Global/Global.module.css";

export default function TextSection({ children, color }) {
  const translatedColor = translateColors(color);

  return (
    <div
      className={globalStyles.genericContainer}
      style={{
        color: translatedColor,
      }}
    >
      <section className={styles.textContainer}>{children}</section>
    </div>
  );
}
