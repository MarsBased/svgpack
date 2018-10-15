const fp = require("lodash/fp");
const DETECT_COLORS = /(#[0-9a-f]{3}){1,2}/gi;

const identity = x => x;
const countColors = fp.countBy(name => name.toUpperCase());

const getColorName = (_, i) => `$color${i ? i : ""}`;

function detect(string, sanitize = identity) {
  const colorValues = fp.keys(frequecy(string));
  const colorNames = colorValues.map(getColorName);
  const colors = fp.zipObject(colorNames, colorValues);
  return fp.mapValues(sanitize, colors);
}

function frequecy(string) {
  const found = string.match(DETECT_COLORS);
  return countColors(found);
}

module.exports = { frequecy, detect };
