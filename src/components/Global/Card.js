import React from "react";

import * as styles from "../../styles/Global/Card.module.css";

export default function Card({ image, direction, children }) {
  let flexDirection = directionToCss(direction);

  return (
    <div className={styles.container} style={{ ...flexDirection }}>
      <img src={image} style={{ width: "100%", maxHeight: 320 }} />
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
