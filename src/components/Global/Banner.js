import React from "react";

import * as styles from "../../styles/Global/Banner.module.css";

import translateColors from "../../utils/translateColors";

export default function Banner({
  backgroundColor,
  color,
  children,
  description,
  textDirection,
  height,
}) {
  let bannerTextStartingPosition = textDirectionToCss(textDirection);

  let translatedBackgroundColor = translateColors(backgroundColor);

  let translatedColor = translateColors(color);

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: translatedBackgroundColor,
        color: translatedColor,
        minHeight: height,
      }}
    >
      <div className={`${styles.bannerText} ${bannerTextStartingPosition}`}>
        {children}
      </div>
    </div>
  );
}

const textDirectionToCss = (textDirection) => {
  switch (textDirection) {
    case "left":
      return styles.moveLeft;
    case "right":
      return styles.moveRight;
    default:
      return "";
  }
};
