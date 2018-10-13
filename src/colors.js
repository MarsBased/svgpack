const fp = require("lodash/fp");
const DETECT_COLORS = /(#[0-9a-f]{3}){1,2}/gi;

const countColors = fp.countBy(name => name.toUpperCase());

function detectColors(string) {
  const found = string.match(DETECT_COLORS);
  return countColors(found);
}

module.exports = detectColors;
