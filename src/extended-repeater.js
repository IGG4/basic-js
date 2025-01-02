const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRING PLUS 00 PLUS 00 PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let addition = "addition" in options ? options.addition : ''
  let additionStr = addition
  let separator = options.separator ? options.separator : "+"
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|'
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  for (let i = 0; i < additionRepeatTimes - 1; i++) {
    additionStr += additionSeparator + addition
  }
  let result = str + additionStr;
  for (let i = 0; i < repeatTimes - 1; i++) {
    result += separator + str + additionStr
  }
  return result
}

module.exports = {
  repeater
};
