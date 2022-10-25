/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let test = s.toLowerCase().split(/\W|\_/g)
    let reverse = test.map(word => word.split('').reverse().join('')).reverse()
    return(reverse.join('') == test.join(''))
    
};