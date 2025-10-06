const help = require('./help');
const { Readable } = require('stream');

/**
 * Choose what to run depending on options
 *
 * @param {Array<string>} [sources]
 * @param {Object} [options]
 */
function main(sources, options) {
  // parse process.argv if no arguments provided
  if (arguments.length === 0) {
    const minimist = require('minimist');
    const args = minimist(process.argv.slice(2));
    return main(args._, args);
  }

  if (options.v || options.version) {
    help.printVersion();
  } else if (sources.length === 0 || options.h || options.help) {
    help.printHelp();
  } else {
    // don't load unless necessary
    const packsvg = require('./pack')(options);
    packsvg(sources).then(writeResults(options));
  }
}

function writeResults(options) {
  return function (result) {
    const output = options.output || process.stdout;
    getStream(result).pipe(output);
  };
}

function getStream(output) {
  const out = new Readable();
  out._read = () => {};
  out.push(output);
  out.push(null);
  return out;
}

module.exports = main;
