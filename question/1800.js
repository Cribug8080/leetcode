
// https://leetcode.cn/problems/maximum-ascending-subarray-sum/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
  let res = 0;
  let tempSum = 0;
  nums.forEach((v, i) => {
    if (i === 0) {
      tempSum = v;
    } else {
      if (nums[i - 1] < v) {
        tempSum += v;
      } else {
        if (res < tempSum) {
          res = tempSum;
        }
        tempSum = v;
      }
    }
  });

  return Math.max(res, tempSum);
};

console.log(maxAscendingSum([10,20,30,5,10,50]))
