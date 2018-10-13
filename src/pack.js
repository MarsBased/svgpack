const fp = require("lodash/fp");
const ora = require("ora");
const fs = require("fs");
const util = require("util");
const getEntries = require("./files");
const sass = require("./sass");

const readFile = util.promisify(fs.readFile);

/**
 * Given a list of sources, pack them
 */
module.exports = function packsvg(options = {}) {
  const toSassFunction = sass(options);

  return function packsvg(sources) {
    const joinAll = xs => Promise.all(xs).then(xs => xs.join(" "));
    const entries = getEntries();

    const processFile = name => readFile(name).then(toSassFunction(name));

    return entries(sources)
      .then(fp.map(withSpinners(processFile)))
      .then(joinAll);
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
