/** Attempt a TDD/Unit Test in TS
 * String Calculator -  create a method/function that takes in a string containing numbers separated by commas as a parameter and returns their sum.
 * =================
 *  Tests to implement/function Rules:
 *      Passing an empty string should result in zero.
 *      Passing a single number should result in the number itself.
 *      Negative numbers and numbers greater than 1000 should be ignored—e.g., “1, 2, 1000, 1009” should result in 1003.
 */

export function add(strNumbers: string): number {
  // first test - Passing an empty string should result in zero.
  if (!strNumbers) {
    return 0;
  } else if (strNumbers) {
    let numbers: number[] = strNumbers.split(",").map((x) => parseInt(x));
    // second test - Passing a single positive number less than 1001 should result in the number itself.
    if (numbers.length >= 1 && numbers.length < 2 && numbers[0] >= 0 && numbers[0] < 1001) {
      return numbers[0];
    } else if (numbers.length >= 1) {
      let sum: number = 0;
      for (let i = 0; i < numbers.length; i++) {
        // Negative numbers and numbers greater than 1000 should be ignored
        if (numbers[i] < 1001 && numbers[i] >= 0) {
          sum += numbers[i];
        }
      }
      return sum;
    }
  }
  return -1;
}
