const Colors = require("../src/colors");

describe("Colors", () => {
  const colors = "#fff #fafafa #333 #3a3a3a #fFf #FFF";
  it("detect colors", () => {
    expect(Colors.detect(colors)).toEqual({
      $color1: "#333",
      $color2: "#3A3A3A",
      $color3: "#FAFAFA",
      $color4: "#FFF"
    });
  });

  it("detect only one color", () => {
    expect(Colors.detect("#f00")).toEqual({ $color: "#F00" });
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
