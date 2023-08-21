// https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const getNumIdx = (nums, targe, s, e, f) => {
    const tt = Math.floor((s + e) / 2);
    if (tt < 0 || tt >= nums.length) {
      return -1;
    }
    const next = tt + f;
    if (nums[tt] === target && (nums[next] === undefined || nums[next] !== target)) {
      return tt;
    }
    if (nums[tt] > target || (nums[tt] === target && f === -1)) {
      if (s <= tt - 1) {
        return getNumIdx(nums, targe, s, tt - 1, f)
      } else {
        return -1;
      }
    }
    if (nums[tt] < target || (nums[tt] === target && f === 1)) {
      if (e >= tt + 1) {
        return getNumIdx(nums, targe, tt + 1, e, f)
      } else {
        return -1;
      }
    }
  }

  return [getNumIdx(nums, target, 0, nums.length - 1, -1), getNumIdx(nums, target, 0, nums.length - 1, 1)];
};
console.log(searchRange([],9))


