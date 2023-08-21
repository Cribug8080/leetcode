// https://leetcode.cn/problems/minimum-add-to-make-parentheses-valid/




/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
  let temp = 0;
  let need = 0;
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element === '(') {
      temp++;
    }
    if (element === ')') {
      temp--;
    }
    if (temp < 0) {
      need += temp;
      temp = 0;
    }
  }

  need -= temp;
  return -need;
};

console.log(minAddToMakeValid('((('))