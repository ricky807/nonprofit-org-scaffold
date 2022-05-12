import pallete from "./data/pallete";

const translateColors = (color) => {
  switch (color) {
    case "darkpurple":
      return pallete.darkpurple;
    case "lightpurple":
      return pallete.lightpurple;
    case "hapblue":
      return pallete.hapblue;
    case "darkblue":
      return pallete.darkblue;
    case "lightblue":
      return pallete.lightblue;
    case 'orange':
      return pallete.orange
    case 'navy':
      return pallete.navy
    case "gold":
      return pallete.yellow;
    default:
      return color;
  }
};

export default translateColors;
