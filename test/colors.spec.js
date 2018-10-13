const detectColors = require("../src/colors");

describe("Colors", () => {
  it("detects colors", () => {
    expect(detectColors("#fff #fafafa #333 #3a3a3a #fFf #FFF")).toEqual({
      "#333": 1,
      "#3A3": 1,
      "#FAF": 1,
      "#FFF": 3
    });
  });
});
