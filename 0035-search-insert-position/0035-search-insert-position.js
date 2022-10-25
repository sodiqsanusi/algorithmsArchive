/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.includes(target)){
        return nums.lastIndexOf(target)
    }
    let test = nums.concat([target])
    test.sort((a,b) => a - b)
    return test.indexOf(target)
};