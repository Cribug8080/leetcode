// https://leetcode.cn/problems/minimum-changes-to-make-alternating-binary-string/



/**
 * @param {string} s
 * @return {number}
 */
 var minOperations = function(s) {
  let step = 0;
  for (let i = 0; i < s.length; i++) {
      if ((+s[i]) === i % 2) {
          step++;
      }
  }
  return Math.min(step, s.length - step);
};

console.log(minOperations("0100")) // 1
console.log(minOperations("10")) // 0
console.log(minOperations("1111")) // 2
// console.log(minOperations())
// console.log(minOperations())
