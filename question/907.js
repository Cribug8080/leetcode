// https://leetcode.cn/problems/sum-of-subarray-minimums/

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
  let upMins = [];
  let sum = 0;
  arr.forEach(v => {
    upMins.push(v);
    for (let i = 0; i < upMins.length; i++) {
      const val = Math.min(v, upMins[i]);
      sum = (sum + val) % (10**9 + 7);
      upMins[i] = val;
    }
  })

  return sum;
};

console.log(sumSubarrayMins([3,1,2,4])); // 17
console.log(sumSubarrayMins([11,81,94,43,3])); // 444