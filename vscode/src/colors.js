function transparent(color, trans) {
  if (color.length === 9) {
    return color.slice(0, 7) + trans;
  } else {
    return color + trans;
  }
}

const tools = {
  transparent,
};

let colors = {
  // hard hacker dog logo
  black: "#1D1F2B",
  brightBlack: "#301A26",
  red: "#F28585",
  green: "#C2FF5C", // this is not pick from logo
  yellow: "#FEFB44",
  blue: "#2AAECC",
  magenta: "#AD48D9",
  cyan: "#86E7E4",
  white: "#ECF9EB",


  black: "#130B26",
  brightBlack: "#25154D",
  red: "#FF248E",
  green: "#95FF5C",
  yellow: "#FEE93D",
  blue: "#8F9EFF",
  magenta: "#E863FF",
  cyan: "#94FFFD",
  white: "#E8E0FF",
  
  // black: "#1D1F2B",
  // brightBlack: "#301A26",
  // red: "#F9265F",
  // green: "#C2FF5C", // this is not pick from logo
  // yellow: "#E7D25B",
  // blue: "#2EDAF7",
  // magenta: "#8C54FE",
  // cyan: "#25C5C2",
  // white: "#FFFFFF",

  transparent: "#00000000",
};

colors = Object.assign(colors, {
  background: colors.black,
  text: colors.white,
  string: colors.green,
  number: colors.yellow,
  method: colors.red,
  keyword: colors.magenta,
  operator: colors.white,
  class: colors.cyan,
  variable: colors.yellow,
  comment: tools.transparent(colors.white, "60"),
  highlight: colors.red,
  themePrimary: colors.red,
  placeholderText: tools.transparent(colors.white, "60"),
});

module.exports = {colors, tools};
