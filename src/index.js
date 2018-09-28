const ora = require("ora");
const minimist = require("minimist");
const { Readable } = require("stream");

const COMMANDS = {
  optimize: "optimize",
  pack: "pack",
  help: "help",
  version: "version"
};

function main() {
  const args = minimist(process.argv.slice(2));
  const request = Request(args);
  const response = Response();
  const command = require("./cmd/" + request.command);
  run(command, request, response);
}

module.exports = main;

/**
 * @private
 * Execute a command.
 *
 * @param {Object} args
 * @param {Function} runner
 */
function run(command, request, response) {
  return Promise.resolve(command(request, response))
    .then(response.done)
    .catch(response.error);
}

/**
 * Create a Response object
 *
 * @private
 * @param {*} args
 */
function Request(args) {
  const command = getCommand(args);
  const arguments = args._.slice(args._[0] === command ? 1 : 0);
  const options = args;
  return { command, arguments, options };
}

function Response() {
  const out = new Readable();
  let spinner = null;

  const start = name => {
    if (spinner) spinner.succeed();
    spinner = ora(name).start();
  };

  const send = data => {
    out.push(data);
  };

  const done = () => {
    if (spinner) spinner.succeed();
    out.push(null);
    out.pipe(process.stdout);
    //process.exit(0);
  };

  const error = err => {
    if (spinner) spinner.fail();
    /* eslint-disable no-console */
    console.error(err);
    process.exit(1);
  };
  return { start, send, done, error };
}

/**
 * @private
 * Get command name from the arguments
 *
 * @param {*} args
 */
function getCommand(args) {
  if (args.version || args.v) {
    return COMMANDS.version;
  } else if (args.help || args.h) {
    return COMMANDS.help;
  } else {
    return COMMANDS[args._[0]] || COMMANDS.pack;
  }
}
