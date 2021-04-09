/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sort = [];
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      sort.push(arr[i]);
    }
  }

  for (let i = 0; i < sort.length; i++) {
    for (let j = sort.length - 1; j > i; j--) {
      if (sort[j - 1] < sort[j]) {
        const tmp = sort[j - 1];
        sort[j - 1] = sort[j];
        sort[j] = tmp;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      res.push(sort.pop());
    } else {
      res.push(-1);
    }
  }

  return res;
}

module.exports = sortByHeight;
