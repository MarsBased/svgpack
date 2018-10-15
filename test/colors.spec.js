const Colors = require("../src/colors");

describe("Colors", () => {
  const colors = "#fff #fafafa #333 #3a3a3a #fFf #FFF";
  it("detect colors", () => {
    expect(Colors.detect(colors)).toEqual({
      $color: "#FFF",
      $color1: "#FAF",
      $color2: "#333",
      $color3: "#3A3"
    });
  });
  it("detect colors with sanitizer", () => {
    const sanitizer = x => "STR:" + x;
    expect(Colors.detect(colors, sanitizer)).toEqual({
      $color: "STR:#FFF",
      $color1: "STR:#FAF",
      $color2: "STR:#333",
      $color3: "STR:#3A3"
    });
  });

  it("get color frequency", () => {
    expect(Colors.frequecy(colors)).toEqual({
      "#333": 1,
      "#3A3": 1,
      "#FAF": 1,
      "#FFF": 3
    });
  });
});
