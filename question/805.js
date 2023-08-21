// https://leetcode.cn/problems/split-array-with-same-average/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var splitArraySameAverage = function(nums) {
  const sum = nums.reduce((p, v) => p + v, 0);

  const fn = () => {
    
  }

  return sum;
};

console.log(splitArraySameAverage([1,2,3,4,5,6,7,8])) // true
console.log(splitArraySameAverage([1,3])); // false