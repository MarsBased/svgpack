const fp = require("lodash/fp");
const ora = require("ora");
const fs = require("fs");
const util = require("util");
const getEntries = require("./files");
const sass = require("./svg-to-sass");

const readFile = util.promisify(fs.readFile);

const shouldAddReplaceFn = options => true;

/**
 * Given a list of sources, pack them
 */
module.exports = function packsvg(options = {}) {
  const toSassFunction = sass(options);
  const addReplaceFn = shouldAddReplaceFn(options);

  return function packsvg(sources) {
    const joinAll = xs => Promise.all(xs).then(xs => xs.join(" "));
    const entries = getEntries();

    const processFile = name => readFile(name).then(toSassFunction(name));

    return entries(sources)
      .then(fp.map(withSpinners(processFile)))
      .then(joinAll)
      .then(all => (addReplaceFn ? REPLACE_FN + all : all));
  };
};

function withSpinners(process) {
  return function(name) {
    const spinner = ora(`Processing ${name}...`).start();
    return process(name).then(value => {
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
