const fs = require("fs");
const { join } = require("path");
const svgpack = require("../src/pack");

const ROOT = join(__dirname, "assets");
const FILES = ["arrow", "caret", "required", "search"];
describe("svgpack", () => {
  // not yet here
  test.skip("icon examples", done => {
    const expected = fs.readFileSync(join(ROOT, "expected.scss")).toString();
    const sources = FILES.map(file => join(ROOT, `icon-${file}.svg`));
    const pack = svgpack()(sources);
    pack.then(result => {
      expect(result).toEqual(expected);
      done();
    });
  });
});
