const { NotImplementedError } = require('../extensions/index.js');

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
  const sortArr = arr.filter(el => el !== -1).sort((a,b)=>a-b)
  let index = 0;
  console.log(sortArr);
  let diff = 0
  return arr.map((value, ind) => {
    if (value === -1) {
      return -1;
    }
    return sortArr[diff++];
  });
}
module.exports = {
  sortByHeight
};
