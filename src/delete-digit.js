const { NotImplementedError } = require('../extensions/index.js');

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
  const number = n.toString().split('')
  let min = number[0]

  if (number[0] < number[1]) {
    return Number(number.splice(1).join(''))
  } else {
    for (let i = 1; i < number.length; i++) {
      if (number[i] < min) {
        min = number[i]
      }
    }

    number.splice(number.indexOf(min), 1);
    return Number(number.join(''))
  }

}
module.exports = {
  deleteDigit
};
