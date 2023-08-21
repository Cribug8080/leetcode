// https://leetcode.cn/problems/distinct-subsequences-ii/


/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function(s) {

  const subStr = (start) => {
    const currentSet = new Set();
    if (start === s.length) {
      return currentSet;
    }
    for (let i = start; i < s.length; i++) {
      const tempRes = subStr(i + 1);
      tempRes.forEach(v =>currentSet.add(`${s[i]}${v}`));
      currentSet.add(s[i])
    }

    return currentSet;
  }

  return subStr(0).size;
  
};

// console.log(distinctSubseqII('abc')); // "a", "b", "c", "ab", "ac", "bc", 以及 "abc"
// console.log(distinctSubseqII('aba')); // "a", "b", "ab", "ba", "aa" 以及 "aba"
console.log(distinctSubseqII('pcrdhwdxmqdznbenhwjsenjhvulyve')); // "a", "b", "ab", "ba", "aa" 以及 "aba"