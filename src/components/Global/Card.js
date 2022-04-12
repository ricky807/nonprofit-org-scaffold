import React from "react";

import * as styles from "../../styles/Global/Card.module.css";
import translateColors from "../../utils/translateColors";

export default function Card({
  image,
  direction,
  children,
  backgroundColor,
  imageWidth = "100%",
}) {
  let flexDirection = directionToCss(direction);

  let translatedBackgroundColor = translateColors(backgroundColor);

  return (
    <div
      className={styles.container}
      style={{ ...flexDirection, backgroundColor: translatedBackgroundColor }}
    >
      {image && (
        <img src={image} style={{ width: imageWidth, maxHeight: 320 }} />
      )}
      <div style={{ width: "100%" }}>{children}</div>
    </div>
  );
}

const directionToCss = (direction) => {
  switch (direction) {
    case "horizontal":
      return { flexDirection: "row" };
    case "vertical":
      return { flexDirection: "column" };
    default:
      return {};
  }
};
