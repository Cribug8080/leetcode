
// https://leetcode.cn/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/

/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations2 = function(boxes) {
  const len = boxes.length;
  const res = new Array(len).fill(0);

  for (let i = 0; i < len; i++) {
    let step = 0;
    for (let j = 0; j < len; j++) {
      const item = boxes[j];
      if (+item) {
        step += Math.abs(j - i);
      }
    }
    res[i] = step;
  }
  return res;
};

var minOperations = function(boxes) {
  const len = boxes.length;
  const res = new Array(len).fill(0);

  let left = 0;
  let right = 0;

  for (let i = 0; i < len; i++) {
    const item = boxes[i];
    if (+item) {
      right++;
      res[0] += i;
    }
  }
  right -= (+boxes[0]);
  left += (+boxes[0]);

  for (let i = 1; i < len; i++) {
    const item = boxes[i];
    res[i] = res[i - 1] - right + left;
    if (+item) {
      left++;
      right--;
    }
  }

  return res;
};

console.log(minOperations("110")) // [1,1,3]
console.log(minOperations("001011")) // [11,8,5,4,3,4]
// console.log(minOperations()) // 
// console.log(minOperations()) // 