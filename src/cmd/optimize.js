const fs = require("fs");
const util = require("util");
const svg = require("../svg");

const readFile = util.promisify(fs.readFile);

const isSvg = name => /\.svg$/.test(name);

async function optimize(req, res) {
  const [name] = req.arguments;
  res.start(`Optimizing ${name}...`);
  const optimize = svg.optimize();
  const content = await readFile(name);
  const optimized = await optimize(content.toString());
  res.send(optimized.data);
}

module.exports = optimize;
