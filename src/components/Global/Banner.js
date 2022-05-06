import React from "react";

import * as styles from "../../styles/Global/Banner.module.css";

import translateColors from "../../utils/translateColors";

export default function Banner({
  backgroundColor,
  color,
  children,
  backgroundImage,
  textDirection,
  height,
}) {
  let bannerTextStartingPosition = textDirectionToCss(textDirection);

  let translatedBackgroundColor = translateColors(backgroundColor);

  let translatedColor = translateColors(color);

  let normalStyles = {
    backgroundColor: translatedBackgroundColor,
    color: translatedColor,
    minHeight: height,
  };

  let stylesWithImage = {
    backgroundImage: `${generateGradiant(
      backgroundColor
    )} url(${backgroundImage})`,

    backgroundRepeat: "no-repeat",

      backgroundPosition: 'center',

    backgroundSize: "cover",
    color: translatedColor,

    minHeight: height,
  };

  // backgroundImage ? stylesWithImage : normal1Styles

  return (
    <div
      className={styles.container}
      style={backgroundImage ? stylesWithImage : normalStyles}
    >
      <div className={`${styles.bannerText} ${bannerTextStartingPosition}`}>
        {children}
      </div>
    </div>
  );
}

const generateGradiant = (color) => {
  switch (color) {
    case "darkblue":
      return "linear-gradient(to right bottom, rgba(0, 68, 119, 0.4),  rgba(0, 68, 119, 0.4)),";
    case "lightblue":
      return "linear-gradient(to right bottom, rgba(0, 99, 190, 0.164),  rgba(0, 99, 190, 0.164)),";
    case "darkpurple":
      return "linear-gradient(to right bottom, rgba(71, 45, 91, 0.8),  rgba(71, 45, 91, 0.8)),";
    case 'white':
      return "linear-gradient(to right bottom, rgba(255, 255, 255, 0.6),  rgba(255, 255, 255, 0.6)),";
    case 'black':
      return "linear-gradient(to right bottom, rgba(0, 0, 0, 0.4),  rgba(0, 0, 0, 0.4)),";

    case "lightpurple":
      return "linear-gradient(to right bottom, rgba(141, 73, 130, 0.8),  rgba(141, 73, 130, 0.8)),";
    
    default:
      return ''
  }
};

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
