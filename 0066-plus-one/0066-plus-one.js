/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let lilac = digits.join('')
  lilac = (BigInt(lilac) + 1n).toString().split('')
  return lilac.map(Number)
};