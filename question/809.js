// https://leetcode.cn/problems/expressive-words/


/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(s, words) {
  let str = s + '-';
  let nums = 1;
  let regexpStr = '';
  for (let i = 1; i < str.length; i++) {
    const cv = str[i];
    const pv = str[i - 1];
    if (cv === pv) {
      nums++;
    } else {
      if (nums > 2) {
        regexpStr += `${pv}{1,${nums}}`
      } else {
        regexpStr += pv.repeat(nums);
      }
      nums = 1;
    }
  }

  return words.reduce((p, v) => new RegExp(`^${regexpStr}$`).test(v) + p, 0);
};


console.log(expressiveWords("heeellooo", ["hello", "hi", "helo"])) // 1
console.log(expressiveWords("aaa",["aaaa"])) // 0