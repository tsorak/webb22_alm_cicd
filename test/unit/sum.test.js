const math = require("../../src/math.js");

describe("math.sum", () => {
  it("should sum two numbers", () => {
    const result = math.sum(1, 2);
    expect(result).toEqual(3);
  });
});
