// https://leetcode.cn/problems/minimum-swaps-to-make-sequences-increasing/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSwap2 = function(nums1, nums2) {
  let changeNum = 0;

  for (let i = 1; i < nums1.length; i++) {
    if (nums1[i] <= nums1[i - 1] || nums2[i] <= nums2[i - 1]) {
      changeNum++;
      nums1[i] = nums2[i];
    }
  }
  return changeNum;
};

var minSwap3 = function(nums1, nums2) {

  const swapI = (nums1, nums2, i) => {
    if (nums1.length === i && nums2.length === i) {
      return 0;
    }

    let change = Infinity;
    let noChange = Infinity;

    if (i === 0 || (nums2[i] > nums1[i - 1] && nums1[i] > nums2[i - 1]) && nums1[i] != nums2[i]) {
      const copyNums1 = [...nums1];
      const copyNums2 = [...nums2];
      [copyNums1[i], copyNums2[i]] = [copyNums2[i], copyNums1[i]];
      change = 1 + swapI([...copyNums1], [...copyNums2], i + 1);
    }

    if (i === 0 || (nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]) || nums1[i] === nums2[i]) {
      noChange = swapI(nums1, nums2, i + 1);
    }

    return Math.min(change, noChange);
  }

  return swapI(nums1, nums2, 0);
};

var minSwap = function(nums1, nums2) {
  let dp0 = 0;
  let dp1 = 1;

  for (let i = 1; i < nums1.length; i++) {
    let a = dp0, b = dp1;
    dp0 = nums1.length;
    dp1 = nums1.length;
    if (nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]) {
      dp0 = a;
      dp1 = b+ 1;
    }

    if (nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]) {
      dp0 = Math.min(dp0, b);
      dp1 = Math.min(dp1, a + 1);
    }
  }

  return Math.min(dp0, dp1)
};

console.log(minSwap([1,3,5,4], [1,2,3,7])); // 1
console.log(minSwap([0,3,5,8,9], [2,1,4,6,9])); // 1
console.log(minSwap([0,4,4,5,9], [0,1,6,8,10])); // 1
console.log(minSwap([3,3,8,9,10], [1,7,4,6,8])); // 1
console.log(minSwap(
  [0,7,8,10,10,11,12,13,19,18],
  [4,4,5,7,11,14,15,16,17,20])); // 4

console.log(minSwap([4,10,13,14,17,19,21,24,26,27,28,29,34,37,38,42,44,46,48,51,52,53,54,57,58,59,64,65,66,67,71,73,75,76,80,81,82,83,86,88,89,90,95,97,98,99,101,105,106,108,109,110,111,112,115,119,121,122,123,124,125,126,127,128,129,130,131,133,136,138,143,145,147,149,150,153,158,160,163,164,165,167,168,169,172,173,174,176,178,179,183,184,186,188,189,192,193,194,198,200], [0,1,3,5,6,7,11,13,15,16,17,21,37,39,41,42,43,45,47,50,53,55,56,57,64,66,67,68,69,70,71,72,74,75,76,77,79,80,87,88,89,95,96,97,98,100,101,105,106,107,108,112,113,115,116,118,119,122,124,125,126,127,128,131,135,136,137,138,139,140,144,145,148,150,151,154,159,160,161,162,163,167,168,170,171,174,176,178,179,180,181,185,187,189,190,191,192,198,199,200]));
