const tinycolor = require('tinycolor2');
const _ = require('lodash');

function getColors(painter) {
  const originColors = _.mapValues({
    black: tinycolor("#282433"),
    brightBlack: tinycolor("#655980"),
    red: tinycolor("#e965a5"),
    green: tinycolor("#b1f2a7"), // color blind safe, avoid conflict with yellow
    yellow: tinycolor("#ebde76"),
    blue: tinycolor("#b1baf4"),
    purple: tinycolor("#e192ef"),
    cyan: tinycolor("#b3f4f3"),
    orange: tinycolor("#ea7e6c"), // for git conflict status
    white: tinycolor("#eee9fc"),
  }, painter);
  
  console.log('Origin colors:');
  let colors = _.mapValues(originColors, (color, name) => {
    const colorStr = color.toHex8String();
    console.log(`  ${name}: "${colorStr}" - ${color.toHslString()}`);
    return colorStr;
  });
  
  colors = Object.assign(colors, {
    transparent: "#00000000",
  
    background: colors.black,
    highlightBackground: originColors.black.lighten(10).toHex8String(),
    text: colors.white,
    string: colors.green,
    number: colors.yellow,
    method: colors.red,
    keyword: colors.blue,
    operator: colors.white,
    class: colors.cyan,
    variable: colors.purple,
    secondaryText: tinycolor.mix(colors.white, colors.black, 60).toHex8String(),
    comment: tinycolor.mix(colors.white, colors.black, 60).toHex8String(),
    highlight: colors.red,
    themePrimary: colors.red,
  });

  return { originColors, colors };
}

module.exports = getColors;

//   // hard hacker dog logo
//   // black: "#1D1F2B",
//   // brightBlack: "#301A26",
//   // red: "#F28585",
//   // green: "#C2FF5C", // this is not pick from logo
//   // yellow: "#FEFB44",
//   // blue: "#2AAECC",
//   // purple: "#AD48D9",
//   // cyan: "#86E7E4",
//   // white: "#ECF9EB",
//   // orange: "#FF6F57",

//   // black: "#222533",
//   // brightBlack: "#3C4159",
//   // red: "#FF248E",
//   // green: "#95FF5C",
//   // yellow: "#FEE93D",
//   // blue: "#8F9EFF",
//   // purple: "#E863FF",
//   // cyan: "#94FFFD",
//   // white: "#E8E0FF",

//   black: "#282433",
//   brightBlack: "#655980",
//   red: "#FF4FA4",
//   green: "#AAFF7D",
//   yellow: "#FFED63",
//   blue: "#A6B2FF",
//   purple: "#EC82FF",
//   cyan: "#A8FFFE",
//   white: "#ECE6FF",
//   orange: "#FF6F57",

//   // black: "#121A25",
//   // brightBlack: "#4C535B",
//   // red: "#9E3F70",
//   // green: "#9C639B",
//   // yellow: "#A48EC2",
//   // blue: "#304EA6",
//   // purple: "#5D59A7",
//   // cyan: "#5882BE",
//   // white: "#C3C5C8",
//   // orange: "#FF6F57",
