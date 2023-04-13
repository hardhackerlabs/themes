const fs = require('fs').promises;
const getColors = require('./colors');
const getTheme = require('./theme');

const normalTheme = getTheme('Hard Hacker', getColors((color, name) => {
  switch (name) {
    case 'black':
    case 'brightBlack':
      break;
    default:
      color.desaturate(25);
  }
  return color;
}));

fs.writeFile('./themes/normal.json', JSON.stringify(normalTheme, null, 2))
  .catch(() => process.exit(1));

const darkerTheme = getTheme('Hard Hacker Darker', getColors((color, name) => {
  switch (name) {
    case 'black':
    case 'brightBlack':
      color.darken(3);
      break;
    default:
      color.desaturate(25);
  }
  return color;
}));

fs.writeFile('./themes/darker.json', JSON.stringify(darkerTheme, null, 2))
  .catch(() => process.exit(1));
  