const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0 || isNaN(date.getTime())) {
    throw new Error('Invalid date!');
  }
  const season = date.getMonth()
  if (season < 2 || season === 11) {
    return 'winter'
  }
  else if (season < 5) {
    return 'spring'
  }
  else if (season < 8) {
    return 'summer'
  }
  else {
    return 'autumn'
  }
}

module.exports = {
  getSeason
};
