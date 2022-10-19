/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lilac = s.trim().split(' ')
    return lilac[lilac.length - 1].length
};