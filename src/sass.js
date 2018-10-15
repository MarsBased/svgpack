const fp = require("lodash/fp");
const Colors = require("./colors");
const optimizer = require("./optimizer");
const sanitizer = require("./sanitizer");
const toSlugCase = require("to-slug-case");
const { basename } = require("path");

module.exports = function(options = {}) {
  const optimize = optimizer(options.optimizer);
  const sanitize = options.sanitize === false ? x => x : sanitizer();

  return function toSassFunction(filename) {
    const name = toSlugCase(basename(filename, ".svg"));

    return function(svg) {
      const content = svg.toString();
      const colors = Colors.detect(content);
      const sanitizedColors = fp.mapValues(sanitize, colors);
      const postProcess = svg => replaceColors(sanitize(svg), sanitizedColors);
      return optimize(content).then(optimized =>
        template(name, postProcess(optimized), colors)
      );
    };
  };
};

function replaceColors(string, colors) {
  const names = fp.keys(colors);
  return names.reduce((svg, name) => {
    return replaceAll(svg, colors[name], `"+${name}+"`);
  }, string);
}

function replaceAll(string, target, replacement) {
  target = target.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(target, "g");
  return string.replace(regex, replacement);
}

function colorTemplate(name) {
  return `${name}: str-replace(inspect(${name}), '#', '%23'); //fix and replace hexcolor`;
}

function template(name, svg, colors) {
  return `
@function ${name}(${getFunctionParameters(colors)}) {
  ${fp
    .keys(colors)
    .map(colorTemplate)
    .join("\n  ")}
  @return url("data:image/svg+xml,${svg}");
}\n`;
}

function getFunctionParameters(colors) {
  return fp.map(key => `${key}: ${colors[key]}`, fp.keys(colors)).join(", ");
}
