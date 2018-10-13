const fs = require("fs");
const { join } = require("path");
const svgpack = require("../src/pack");

const ROOT = join(__dirname, "icons");

describe("svgpack", () => {
  test("icon examples", done => {
    const expected = fs.readFileSync(join(ROOT, "expected.scss")).toString();
    const sources = [ROOT];
    const pack = svgpack()(sources);
    pack.then(result => {
      expect(result).toEqual(expected);
      done();
    });
  });
});
