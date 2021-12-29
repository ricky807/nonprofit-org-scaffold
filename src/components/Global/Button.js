import React from "react";

import * as styles from "../../styles/Global/Button.module.css";

export default function Button({ children, onClick, color }) {
  let buttonStyles = translateColors(color);

  return (
    <button
      className={styles.btn}
      style={{ ...buttonStyles }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

const translateColors = (color) => {
  switch (color) {
    case "blue":
      return { backgroundColor: "#0063be", color: "white" };

    default:
      return { backgroundColor: "#0063be", color: "white" };
  }
};
