const fs = require('fs').promises;
const getTheme = require('./theme');

const theme = getTheme();

// write theme
fs.writeFile('./themes/HardHacker Theme-color-theme.json', JSON.stringify(theme, null, 2))
  .catch(() => process.exit(1));
