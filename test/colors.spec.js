const Colors = require("../src/colors");

describe("Colors", () => {
  const colors = "#fff #fafafa #333 #3a3a3a #fFf #FFF";
  it("detect colors", () => {
    expect(Colors.detect(colors)).toEqual({
      $color: "#FFF",
      $color1: "#FAFAFA",
      $color2: "#333",
      $color3: "#3A3A3A"
    });
  });

  it("get color frequency", () => {
    expect(Colors.frequecy(colors)).toEqual({
      "#333": 1,
      "#3A3A3A": 1,
      "#FAFAFA": 1,
      "#FFF": 3
    });
  });
});
