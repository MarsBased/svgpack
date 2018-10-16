const fp = require("lodash/fp");
const DETECT_COLORS = /(#[0-9A-F]{6}|#[0-9A-F]{3})/gi;

const countColors = fp.countBy(name => name.toUpperCase());

const getColorName = (_, i) => `$color${i + 1}`;

function detect(string) {
  const colorValues = fp.keys(frequecy(string)).sort();
  const colorNames =
    colorValues.length === 1 ? ["$color"] : colorValues.map(getColorName);
  return fp.zipObject(colorNames, colorValues);
}

function frequecy(string) {
  const found = string.match(DETECT_COLORS);
  return countColors(found);
}

module.exports = { frequecy, detect };
