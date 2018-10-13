const detectColors = require("./colors");
const optimizer = require("./optimize");
const sanitize = require("./sanitize");
const toSlugCase = require("to-slug-case");
const { basename } = require("path");

const getColorName = (_, i) => `$color${i ? i : ""}`;

module.exports = function(options) {
  const optimize = optimizer(options);

  return function toSassFunction(filename) {
    const name = toSlugCase(basename(filename));

    return function(svg) {
      const content = svg.toString();
      const colors = detectColors(content);
      const colorNames = Object.keys(colors).map(getColorName);
      return optimize(content).then(optimized =>
        template(name, sanitize(optimized), colorNames)
      );
    };
  };
};

function colorTemplate(name) {
  return `${name}: str-replace(inspect(${name}), '#', '%23'); //fix and replace hexcolor\n`;
}

function template(name, svg, colorNames) {
  return `
@function ${name}(${colorNames.join(", ")}) {
  ${colorNames.map(colorTemplate)}
  @return url("data:image/svg+xml,${svg}");
}\n`;
}
