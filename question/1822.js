// https://leetcode.cn/problems/sign-of-the-product-of-an-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
  return nums.reduce((p, v) => (v > 0 ? 1 : v < 0 ? -1 : 0) * p, 1);
};
