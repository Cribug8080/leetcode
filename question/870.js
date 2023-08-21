// https://leetcode.cn/problems/advantage-shuffle/



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//  执行用时：
//  8956 ms
//  , 在所有 JavaScript 提交中击败了
//  5.29%
//  的用户
//  内存消耗：
//  68.4 MB
//  , 在所有 JavaScript 提交中击败了
//  24.67%
//  的用户
var advantageCount2 = function(nums1, nums2) {
  const arr1 = [...nums1].sort((a, b) => a - b);
  const arr2 = [...nums2].sort((a, b) => a - b);

  const map = {};
  const ad = [];
  let currentNums1Idx = 0;
  for (let j = 0; j < arr2.length; j++) {
    for (let i = currentNums1Idx; i < arr1.length; i++) {
      if (arr2[j] < arr1[i]) {
        currentNums1Idx = i + 1;
        ad.push(arr1[i]);

        const val2 = map[arr2[j]]
        if (val2) {
          val2.push(arr1[i]);
        } else {
          map[arr2[j]] = [arr1[i]];
        }
        break;
      }
    }
  }

  const noAd = [...arr1];
  ad.forEach(v => {
    const idx = noAd.indexOf(v);
    if (idx > -1) {
      noAd.splice(idx, 1);
    }
  })


  return nums2.map(v => {
    if (map[v] && map[v].length > 0) {
      return map[v].pop();
    } else {
      return noAd.pop();
    }
  });
};

var advantageCount = function(nums1, nums2) {
  const arr1 = [...nums1].sort((a, b) => a - b);
  const arr2 = [...nums2].sort((a, b) => a - b);

  const map = {};
  const ad = [];
  let currentNums1Idx = 0;
  for (let j = 0; j < arr2.length; j++) {
    for (let i = currentNums1Idx; i < arr1.length; i++) {
      if (arr2[j] < arr1[i]) {
        currentNums1Idx = i + 1;
        ad.push(arr1[i]);

        const val2 = map[arr2[j]]
        if (val2) {
          val2.push(arr1[i]);
        } else {
          map[arr2[j]] = [arr1[i]];
        }
        break;
      }
    }
  }

  const noAd = [...arr1];
  ad.forEach(v => {
    const idx = noAd.indexOf(v);
    if (idx > -1) {
      noAd.splice(idx, 1);
    }
  })


  return nums2.map(v => {
    if (map[v] && map[v].length > 0) {
      return map[v].pop();
    } else {
      return noAd.pop();
    }
  });
};

console.log(advantageCount([2,7,11,15], [1,10,4,11])) // [2,11,7,15]
console.log(advantageCount( [12,24,8,32], [13,25,32,11])) // [24,32,8,12]
console.log(advantageCount([2,0,4,1,2], [1,3,0,0,2])) // [2,0,2,1,4]
// console.log(advantageCount(, )) // 




