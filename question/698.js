/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  const sum = nums.reduce((p, c) => p + c, 0);
  if (sum % k !== 0) {
    return false;
  }
  const target = sum / k;
  const bucket = new Array(k).fill(0);
  const endMap = {};
  nums.sort((a,b) => b-a)
  return backTrack(nums, 0, bucket, k, target, endMap);
};
function backTrack(nums, idx, bucket, k, target, endMap) {
  if (idx === nums.length) {
    return bucket.every(v => v === target)
  }
  const hasBig = bucket.some(v => v > target);
  if (hasBig) {
    return false;
  }
  // bucket.sort((a,b) => a-b)
  for(let i = 0;i < k; i++) {
    if (bucket[i] === bucket[i-1]) {
      continue;
    }
    if (bucket[i] + nums[idx] > target) {
      continue;
    }
    bucket[i] += nums[idx];
    let res = backTrack(nums, idx + 1, bucket, k, target, endMap);
    if (res) {
      return true;
    }
    bucket[i] -= nums[idx];
  }
  return false;
}

// console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4)) // true
// console.log(canPartitionKSubsets([1,2,3,4], 3)) // false
// console.log(canPartitionKSubsets([2,2,2,2,3,4,5], 4)) // false
console.log(canPartitionKSubsets([7628,3147,7137,2578,7742,2746,4264,7704,9532,9679,8963,3223,2133,7792,5911,3979], 6)) // false
console.log(times)