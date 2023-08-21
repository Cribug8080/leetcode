// https://leetcode.cn/problems/reformat-phone-number/



/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
  const replace = number.replace(/[\s\-]/ig, '');
  if (replace.length <= 3) {
    return replace
;
  }
  const threeNum = Math.floor(replace.length / 3);
  let res = [];
  if (replace.length % 3 === 1) {
    res = new Array(threeNum - 1).fill(3)
    res.push(2, 2);
  } else {
    res = new Array(threeNum).fill(3);
    replace.length % 3 && res.push(replace.length % 3);
  }

  let start = 0;
  return res.map((v, i) => {
    const r = replace.slice(start, start + v);
    start += v;
    return r;
  }).join('-');;
};

console.log(reformatNumber("1-23-45 6"));
