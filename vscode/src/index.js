const fs = require('fs').promises;
const getColors = require('./colors');
const getTheme = require('./theme');

console.log('Generating theme: normal');
const normalTheme = getTheme('Hard Hacker', getColors((color, name) => {
  return color;
}));

fs.writeFile('./themes/normal.json', JSON.stringify(normalTheme, null, 2)).catch(() => process.exit(1));

console.log('Generating theme: darker');
const darkerTheme = getTheme('Hard Hacker Darker', getColors((color, name) => {
  switch (name) {
    case 'black':
    case 'brightBlack':
      color.darken(3);
      break;
    default:
      break;
  }
  return color;
}));

fs.writeFile('./themes/darker.json', JSON.stringify(darkerTheme, null, 2)).catch(() => process.exit(1));
