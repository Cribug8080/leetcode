// https://leetcode.cn/problems/check-if-binary-string-has-at-most-one-segment-of-ones/


/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
  const r = s.replace(/^1*/, '');
  return !r.includes('1');
};

console.log(checkOnesSegment('10111000'))