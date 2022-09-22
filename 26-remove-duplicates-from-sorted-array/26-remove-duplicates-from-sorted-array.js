/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let final = 0;
  for(let i = 0; i < nums.length; i++){
      if(nums[i] == nums[final]){
          continue;
      }
      final++;
      nums[final] = nums[i];
  }
  return final + 1
};