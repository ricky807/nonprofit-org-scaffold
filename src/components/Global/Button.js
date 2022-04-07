import React from "react";

import * as styles from "../../styles/Global/Button.module.css";

export default function Button({ children, onClick, color, style }) {
  let buttonStyles = translateColors(color);

  return (
    <button
      className={styles.btn}
      style={{ ...buttonStyles, ...style }}
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
    case 'gold':
      return { backgroundColor: "#fec357", color: "black" };
    case 'lightpurple':
      return { backgroundColor: '#8d4982', color: 'white' }
    default:
      return { backgroundColor: "#0063be", color: "white" };
  }
};
