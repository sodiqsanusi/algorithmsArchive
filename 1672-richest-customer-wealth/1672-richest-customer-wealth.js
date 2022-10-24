/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let lilac = accounts.map(arr => arr.reduce((a,b) => a+b))
    return Math.max(...lilac)
};