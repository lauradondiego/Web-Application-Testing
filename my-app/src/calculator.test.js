import { add, subtract } from "./calculator";

describe("calculator.js", () => {
  describe("add()", () => {
    it("should return the sum of numbers passed in", () => {
      //expect
      expect(add(2, 2)).toBe(4);
      expect(add(2, 3)).toBe(5);
      expect(add(8)).toBe(8);
      // add(8) will return NaN (not a number) unless you go into calculator.js
      // and set the num=0 in case you only want to use one single number like this
    });
  });

  describe("subtract()", () => {
    it("should return the difference of numbers passed in", () => {
      expect(subtract(3, 2)).toBe(1);
    });
  });
});
