// https://leetcode.cn/problems/number-of-subarrays-with-bounded-maximum/

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax2 = function(nums, left, right) {
  const cuts = [];

  let flag = -1;
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= right) {
      if (flag === -1) {
        flag = i;
      }
      if (nums[i] > max) {
        max = nums[i];
      }
    } else {
      if (flag > -1 && max >= left) {
        cuts.push(i - flag);
        flag = -1;
        max = -Infinity;
      }
    }
  }

  if (flag > -1 && max >= left) {
    cuts.push(nums.length - flag);
  }


  return cuts.reduce((p, v) => {
    return p + (1 + v) * v / 2;
  }, 0)
};

var numSubarrayBoundedMax = function(nums, left, right) {
  let scope = [];
  let lastScope = -1;
  let lastLeft = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > right) {
      scope[i] = 0;
      lastScope = -1;
      lastLeft = -1;
    }

    const lastScopeNum = lastScope === -1 ? 0 : scope[lastScope];
    if (nums[i] < left) {
      scope[i] = lastScopeNum;
      if (lastLeft === -1) {
        lastLeft = i;
      }
    }

    if (nums[i] <= right && nums[i] >= left) {
      if (lastScope > -1) {
        scope[i] = lastScopeNum + (i - lastScope)
      } else {
        scope[i] = lastLeft === -1 ? 1 : i - lastLeft + 1;
      }
      lastScope = i
      lastLeft = -1
    }
  }
  return scope.reduce((p, v) => p + v, 0);
};

console.log(numSubarrayBoundedMax([2,1,4,3], 2, 3)); // 3
console.log(numSubarrayBoundedMax([2,9,2,5,6], 2, 8)); // 7
console.log(numSubarrayBoundedMax([7,3,6,7,1],
  1,
  4,)); // 2
console.log(numSubarrayBoundedMax([73,55,36,5,55,14,9,7,72,52],
  32,
  69,)); // [55, 36] [55] [52], 22
console.log(numSubarrayBoundedMax([876,880,482,260,132,421,732,703,795,420,871,445,400,291,358,589,617,202,755,810,227,813,549,791,418,528,835,401,526,584,873,662,13,314,988,101,299,816,833,224,160,852,179,769,646,558,661,808,651,982,878,918,406,551,467,87,139,387,16,531,307,389,939,551,613,36,528,460,404,314,66,111,458,531,944,461,951,419,82,896,467,353,704,905,705,760,61,422,395,298,127,516,153,299,801,341,668,598,98,241],
  658,
  719)); // 19
