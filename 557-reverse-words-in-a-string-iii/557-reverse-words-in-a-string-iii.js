/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let lilac = s.split(' ').map(word => {
        return word.split('').reverse().join('')
    })
    return lilac.join(' ')
};