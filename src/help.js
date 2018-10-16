/* eslint-disable no-console */
const { version } = require("../package.json");

const HELP = `
  Usage: svgpack [sources] [options]

  Options:

  -h, --help                          output usage information
  -v, --version                       output the version number
  -r, --no-replace                    skip replace-str function from output

  Example: \`svgpack .\` to pack all svg files in the current folder
`;

function printVersion() {
  console.log(`v${version}`);
}

function printHelp() {
  console.log(HELP);
}

module.exports = { printHelp, printVersion };
