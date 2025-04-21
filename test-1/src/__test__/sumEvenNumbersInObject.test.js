const sumEvenNumbersInObject = require("../sumEvenNumbersInObject");

describe("sumEvenNumbersInObject", () => {
  it("should return 6 for nested objects with three even numbers", () => {
    const input = {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup",
        },
      },
    };

    expect(sumEvenNumbersInObject(input)).toBe(6);
  });

  it("should return 12 for nested objects with five even numbers", () => {
    const input = {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: "ball", ccc: 5 },
      d: 1,
      e: { e: { e: 4 }, ee: "car" },
    };

    expect(sumEvenNumbersInObject(input)).toBe(12);
  });
});
