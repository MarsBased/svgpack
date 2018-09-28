const fs = require("fs");
const { basename } = require("path");
const util = require("util");
const svg = require("../svg");
const toSlugCase = require("to-slug-case");

//const readDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);

//const isSvg = name => /\.svg$/.test(name);

async function pack(req, res) {
  const [file] = req.arguments;
  res.start(`Packing ${file}...`);
  const optimize = svg.optimize();
  const sanitize = svg.sanitize();
  const content = await readFile(file);
  const { data } = await optimize(content);
  const name = basename(file);
  const result = toSassFunction(toSlugCase(name), sanitize(data));
  res.send(result);
}

module.exports = pack;

function toSassFunction(name, svg) {
  return `
function ${name}($color) {
  $color: str-replace(inspect($color), '#', '%23'); //fix and replace hexcolor
  @return url(${svg})
}
`;
}
