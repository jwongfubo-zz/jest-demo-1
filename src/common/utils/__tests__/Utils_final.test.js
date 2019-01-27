import { getSumOfOddNumbers } from "../Utils_final";

describe("Testing Utils.js getSumOfOddNumbers", () => {
  it("Should calculate the Max element given a list of numbers", () => {
    const given = [4, 5, 1, 20, 3, 6, 7];

    const actual = getSumOfOddNumbers(given);

    expect(actual).toBe(16);
  });

  it("Should return 0 if there are no odd numbers to add", () => {
    const given = [2, 4, 6, 8];

    const actual = getSumOfOddNumbers(given);

    expect(actual).toBe(0);
  });
});
