import pallete from "./data/pallete";

const translateColors = (color) => {
  switch (color) {
    case "darkpurple":
      return pallete.darkpurple;
    case "darkblue":
      return pallete.darkblue;
    case "lightblue":
      return pallete.lightblue;
    case "lightpurple":
      return pallete.lightpurple;
    case "yellow":
      return pallete.yellow;
    default:
      return color;
  }
};

export default translateColors;
