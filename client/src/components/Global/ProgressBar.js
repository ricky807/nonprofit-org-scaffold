import React from "react";
import translateColors from "../../utils/translateColors";

const ProgressBar = (props) => {

  const { bgcolor, completed } = props;

  const color = translateColors(bgcolor)

  const containerStyles = {
    height: 8,
    width: "100%",
    backgroundColor: "#e0e0de",
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: color,
    borderRadius: "inherit",
    textAlign: "right",

  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
};

export default ProgressBar;
