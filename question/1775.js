// https://leetcode.cn/problems/equal-sum-arrays-with-minimum-number-of-operations/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function(nums1, nums2) {
  const sum1 = nums1.reduce((p, v) => p + v, 0);
  const sum2 = nums2.reduce((p, v) => p + v, 0);

  let len1 = nums1.length;
  let len2 = nums2.length;

  let i1 = 0, i2 = 0, copyArr1, copyArr2;
  let average1 = sum1 / len1;
  let average2 = sum2 / len2;

  if (average1 > average2) {
    copyArr1 = nums1;
    copyArr2 = nums2;
  } else {
    copyArr1 = nums2;
    copyArr2 = nums1;
  }

  copyArr1.sort((a, b) => b - a); // 大的，大到小排序
  copyArr2.sort((a, b) => a - b); // 小的，小到大排序
  len1 = nums1.length;
  len2 = nums2.length;

  let step = 0;
  [average1, average2] = average1 > average2 ? [average1, average2] : [average2 , average1];
  let diff = average1 - average2;

  while (diff > 0 && i1 < len1 && i2 < len2) {
    let range1 = (copyArr1[i1] - 1) / len1;
    let range2 = (6 - copyArr2[i2]) / len2;

    if (range1 > range2 && diff > range2) {
      average1 -= range1;
      i1++;
    }

    if (range1 < diff && range2 < diff) {
      if (range1 > range2) {
        average1 -= range1;
        i1++;
      } else {
        average2 += range2;
        i2++;
      }
      step++;
    }

    if (range1 === diff) {
      average1 -= range1;
      i1++;
      step++;
    }

    if (range2 === diff) {
      average2 += range2;
      i2++;
      step++;
    }

    if (range1 < diff && diff < range2) {
      let d2 = Math.floor(diff * len2);
      average2 += (d2 / len2);
      i2++;
      step++;
    }

    if (range1 > diff && range2 < diff) {
      let d1 = Math.floor(diff * len1);
      average1 += (d1 / len1);
      i1++;
      step++;
    }

    if (range1 > diff && range2 > diff) {
      let d1 = Math.floor(diff * len1);
      average1 -= (d1 / len1);
      let d2 = Math.floor(diff * len2);
      average2 += (d2 / len2);
      step += 2;
      break;
    }

    diff = average1 - average2;
  }

  return average2 === average1 ? step : -1;
};

console.log(minOperations([1,2,3,4,5,6], [1,1,2,2,2,2])) // 
// console.log(minOperations([1,1,1,1,1,1,1], [6])) // 
// console.log(minOperations([1,2,3,4,5,6], [1,1,2,2,2,2])) //