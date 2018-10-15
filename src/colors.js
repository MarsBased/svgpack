const fp = require("lodash/fp");
const DETECT_COLORS = /(#[0-9A-F]{6}|#[0-9A-F]{3})/gi;

const countColors = fp.countBy(name => name.toUpperCase());

const getColorName = (_, i) => `$color${i ? i : ""}`;

function detect(string) {
  const colorValues = fp.keys(frequecy(string));
  const colorNames = colorValues.map(getColorName);
  return fp.zipObject(colorNames, colorValues);
}

function frequecy(string) {
  const found = string.match(DETECT_COLORS);
  return countColors(found);
}

module.exports = { frequecy, detect };
