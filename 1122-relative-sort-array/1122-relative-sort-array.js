/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let lilac = arr1.filter(a => arr2.indexOf(a) == -1)
    let violet = arr1.filter(a => arr2.indexOf(a) != -1)
    violet.sort((a,b) => arr2.indexOf(a) - arr2.indexOf(b))
    lilac.sort((a,b) => a - b)
    return violet.concat(lilac)
};