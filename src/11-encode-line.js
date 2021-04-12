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
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    const el = str.charAt(i);
    for (let j = 0; j < str.length; j++) {
      if (str.charAt(j) === el) {
        count++;
      }
    }

    if (!result.includes(str.charAt(i))) {
      result += (count + str.charAt(i));
    }
  }

  return result;
}

module.exports = encodeLine;
