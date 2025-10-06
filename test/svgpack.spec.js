const fs = require('fs');
const { join } = require('path');
const svgpack = require('../src/pack');

const ROOT = join(__dirname, 'assets');
const FILES = ['arrow-right', 'caret-down', 'required', 'search'];
describe('svgpack', () => {
  test('icon examples with SCSS mode', (done) => {
    const expected = fs.readFileSync(join(ROOT, 'expected.scss')).toString();
    const sources = FILES.map((file) => join(ROOT, `icon-${file}.svg`));
    const pack = svgpack({ sass: true })(sources);
    pack.then((result) => {
      expect(result).toEqual(expected);
      done();
    });
  });
});
