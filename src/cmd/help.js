const MESSAGES = {
  main: `
  Usage: svgpack [command] [flags]

  Options:

  -h, --help                          output usage information
  -v, --version                       output the version number

  Example: \`svgpack .\` to pack all svg files in the current folderb
`
};

function help(command) {
  console.log(MESSAGES[command] || MESSAGES.main);
}

module.exports = args => {
  const cmd = args._[0] === "help" ? args._[1] : args._[0];
  help(cmd);
};
