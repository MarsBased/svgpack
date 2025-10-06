/* eslint-disable no-console */
const { version } = require('../package.json');

const HELP = `
  Usage: svgpack [sources] [options]

  Options:

  -h, --help                          output usage information
  -v, --version                       output the version number
  -r, --no-replace                    skip replace-str function from output
  --css, --css-vars                   generate CSS variables (default)
  --sass                              generate SCSS functions instead of CSS variables
  --background [class-name]           generate CSS classes for background usage
  --mask [class-name]                 generate CSS classes for mask usage

  Examples:
    \`svgpack .\`                      pack all svg files in the current folder as CSS variables
    \`svgpack my-icons/ > icons.css\`  output to file
    \`svgpack . --background\`         generate CSS variables with background class
    \`svgpack . --background my-icon\` generate CSS variables with custom background class
    \`svgpack . --mask\`               generate CSS variables with mask class
    \`svgpack . --mask my-mask\`       generate CSS variables with custom mask class
    \`svgpack . --sass\`               pack all svg files as SCSS functions
`;

function printVersion() {
  console.log(`v${version}`);
}

function printHelp() {
  console.log(HELP);
}

module.exports = { printHelp, printVersion };
