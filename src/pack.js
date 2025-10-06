const fp = require('lodash/fp');
const ora = require('ora');
const fs = require('fs');
const util = require('util');
const getEntries = require('./files');
const sass = require('./svg-to-sass');
const css = require('./svg-to-css');

const readFile = util.promisify(fs.readFile);

const shouldSkipReplace = (options) =>
  options.r === true || options['noreplace'] === true;

/**
 * Given a list of sources, pack them
 */
module.exports = function packsvg(options = {}) {
  const isCssMode =
    options.css === true ||
    options['css-vars'] === true ||
    options.sass !== true;
  const toSassFunction = sass(options);
  const toCssFunction = css(options);
  const skipReplace = shouldSkipReplace(options);

  return function packsvg(sources) {
    const joinAll = (xs) => Promise.all(xs).then((xs) => xs.join(''));
    const entries = getEntries();

    const processFile = (name) =>
      readFile(name).then(
        isCssMode ? toCssFunction(name) : toSassFunction(name)
      );

    return entries(sources)
      .then(fp.map(withSpinners(processFile)))
      .then(joinAll)
      .then((all) => {
        if (isCssMode) {
          const lines = all.split('\n');
          const cssVars = [];
          const cssClasses = [];

          let currentSection = 'vars';
          for (const line of lines) {
            if (line.trim().startsWith('--')) {
              cssVars.push(line);
              currentSection = 'vars';
            } else if (line.trim().startsWith('.')) {
              cssClasses.push(line);
              currentSection = 'classes';
            } else {
              if (currentSection === 'vars') {
                cssVars.push(line);
              } else {
                cssClasses.push(line);
              }
            }
          }
          let result = '';
          if (cssVars.length > 0) {
            result += `:root {\n${cssVars.join('\n')}\n}\n`;
          }

          if (options.background || options.mask) {
            if (options.background) {
              const backgroundClass =
                options.background === true
                  ? 'svgpack-background'
                  : options.background;
              result += `\n.${backgroundClass} {\n`;
              result += `  background: var(--image) center/contain no-repeat;\n`;
              result += `  background-size: 100% 100%;\n`;
              result += `  width: var(--image--width, 1em);\n`;
              result += `  height: var(--image--height, 1em);\n`;
              result += `}\n`;
            }
            if (options.mask) {
              const maskClass =
                options.mask === true ? 'svgpack-mask' : options.mask;
              result += `\n.${maskClass} {\n`;
              result += `  background-color: var(--image--color, currentColor);\n`;
              result += `  mask: var(--image) center/contain no-repeat;\n`;
              result += `  mask-size: 100% 100%;\n`;
              result += `  width: var(--image--width, 1em);\n`;
              result += `  height: var(--image--height, 1em);\n`;
              result += `}\n`;
            }
          }

          return result;
        }
        return skipReplace ? all : REPLACE_FN + all;
      });
  };
};

function withSpinners(process) {
  return function (name) {
    const spinner = ora(`Processing ${name}...`).start();
    return process(name).then((value) => {
      spinner.succeed();
      return value;
    });
  };
}

const REPLACE_FN = `
/// Replace \`$search\` with \`$replace\` in \`$string\`
/// @author Hugo Giraudel
/// @param {String} $string - Initial string
/// @param {String} $search - Substring to replace
/// @param {String} $replace ('') - New value
/// @return {String} - Updated string
@function str-replace($string, $search, $replace: '') {
  $index: str-index($string, $search);

  @if $index {
    @return str-slice($string, 1, $index - 1) + $replace + str-replace(str-slice($string, $index + str-length($search)), $search, $replace);
  }

  @return $string;
}

`;
