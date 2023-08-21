// https://leetcode.cn/problems/max-chunks-to-make-sorted/

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  let max = 0;
  let count = 0;

  arr.forEach((v, i) => {
    max = Math.max(max, v);
    if (i === max) {
      count++;
    }
  });
  return count;
};

console.log(maxChunksToSorted([4,3,2,1,0])) // 1
console.log(maxChunksToSorted( [1,0,2,3,4])) // 4
