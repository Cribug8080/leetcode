/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let currentArr = [];
  let max = [];

  for(let i = 0; i < nums.length; i++) {
    if (i < k) {
      currentArr.push(nums[i]);
    } else {
      currentArr.shift();
      currentArr.push(nums[i]);
    }

    if (currentArr.length === k) {
      const sorted = [...currentArr].sort((a, b) => a - b);
      max.push(sorted[k-1]);
    }
  }
  return max;
};
// 37 / 51 个通过的测试用例
//nk*ln k

var maxSlidingWindow2 = function(nums, k) {
  let currentArr = [-Infinity, Infinity];
  let max = [];

  function insertSort(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      if (arr[mid] < val) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
    return end;
  }

  for(let i = 0; i < nums.length; i++) {
    if (i >= k) {
      const firstIdx = insertSort(currentArr, nums[i - k]);
      currentArr.splice(firstIdx, 1);
    }

    const insertIdx = insertSort(currentArr, nums[i]);
    currentArr.splice(insertIdx, 0, nums[i]);

    if (currentArr.length === k + 2) {
      max.push(currentArr[k]);
    }
  }
  return max;
};
// n * lnk
// 45 / 51 个通过的测试用例

var maxSlidingWindow3 = function (nums, k) {
  let queue = [];
  let res = [];
  for(let i = 0; i < nums.length; i++) {
    while(queue.length && nums[queue[queue.length - 1]] < nums[i]) {
      queue.pop();
    }
    queue.push(i);

    if (i >= k - 1) {
      while(queue.length && queue[0] <= i - k) {
        queue.shift();
      }
      res.push(nums[queue[0]]);
    }
  }
  return res;
}

var maxSlidingWindow4 = function (nums, k) {
  const prefixMax = new Array(nums.length);
  const postfixMax = new Array(nums.length);

  for(let i = 0; i < nums.length; i++) {
    const currentVal = nums[i];
    let pre = currentVal;
    if (i%k != 0) {
      pre = Math.max(prefixMax[i-1], currentVal);
    }
    prefixMax[i] = pre;
  }

  postfixMax[nums.length - 1] = nums[nums.length - 1];
  for(let i = nums.length - 2; i > -1; i--) {
    const currentVal = nums[i];
    let post = currentVal;
    if (i%k != k-1) {
      post = Math.max(postfixMax[i+1], currentVal);
    }
    postfixMax[i] = post;
  }

  return new Array(nums.length-k + 1).fill(0).map((v, i) => Math.max(prefixMax[i + k - 1], postfixMax[i]));
}


console.log(maxSlidingWindow4([1,3,-1,-3,5,3,6,7], 3)) // [3, 3, 5, 5, 6, 7]
// console.log(maxSlidingWindow1([1,-1], 1)) // On*k*lnk [3, 3, 5, 5, 6, 7]
// console.log(maxSlidingWindow2([1,-1], 1)) // On*lnk[3, 3, 5, 5, 6, 7]
// console.log(maxSlidingWindow3([1,-1], 1)) // On [3, 3, 5, 5, 6, 7]
// console.log(maxSlidingWindow4([1,-1], 1)) // On [3, 3, 5, 5, 6, 7]

