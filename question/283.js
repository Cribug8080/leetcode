
// https://leetcode.cn/problems/move-zeroes/




/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  let start0 = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element !== 0) {
      if (nums[start0] === 0) {
        nums[start0] = element;
        nums[i] = 0;
        start0++;
      } else {
        start0++;
      }
    } else {

    }
  }
};

const arr = [1,2,0,5,9,0,4,0]
moveZeroes(arr);
console.log(arr);
