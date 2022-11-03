/** Attempt a TDD/Unit Test in TS
 * String Calculator -  create a method/function that takes in a string containing numbers separated by commas as a parameter and returns their sum.
 * =================
 *  Tests to implement/function Rules:
 *      Passing an empty string should result in zero.
 *      Passing a single number should result in the number itself.
 *      Negative numbers and numbers greater than 1000 should be ignored—e.g., “1, 2, 1000, 1009” should result in 1003.
 */
import { add } from "../src/index";

// first test - Passing an empty string should result in zero.
describe("test index file", () => {
  test("empty string should result in zero", () => {
    expect(add("")).toBe(0);
  });
});

// second test - Passing a single number should result in the number itself.
describe("test index file", () => {
  test("a single number should return that number only", () => {
    expect(add("9")).toBe(9);
  });
});

// third test - Negative numbers and numbers greater than 1000 should be ignored
describe("test index file", () => {
  test("negative numbers and numbers greater than 1000 should be ignored", () => {
    expect(add("1, 2, 1000, 1009")).toBe(1003);
  });
});
