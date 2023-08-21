// https://leetcode.cn/problems/permutations/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var res = [];
  const n = nums.length;
  let output = [...nums];

  const backTrack = (start, arr) => {
    if (start === n - 1) {
      res.push(arr.join());
    }
    for (let i = start; i < n; i++) {
      const element = nums[i];
      [arr[start], arr[i]] = [arr[i], arr[start]];
      backTrack(start + 1, arr);
      [arr[i], arr[start]] = [arr[start], arr[i]];
    }
  }

  backTrack(0, output);
  return res;
};

console.log(permute([1,2,3]));