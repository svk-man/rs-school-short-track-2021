/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const el = str.charAt(i);
    if (i + 1 < str.length && el === str.charAt(i + 1)) {
      count++;
    } else {
      result += ((count > 1 ? count : '') + el);
      count = 1;
    }
  }

  return result;
}

module.exports = encodeLine;
