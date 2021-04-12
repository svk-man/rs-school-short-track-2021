/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numStr = n.toString();
  const numArr = [];
  for (let i = 0; i < numStr.length; i++) {
    numArr.push(numStr.slice(0, i) + numStr.slice(i + 1, numStr.length));
  }

  let max = 0;
  for (let i = 0; i < numArr.length; i++) {
    const element = parseInt(numArr[i], 10);
    if (max < element) {
      max = element;
    }
  }

  return max;
}

module.exports = deleteDigit;
