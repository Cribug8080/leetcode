// https://leetcode.cn/problems/k-th-symbol-in-grammar/


/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar2 = function(n, k) {
  let s = '0';
  for (let i = 2; i <= n; i++) {
    let res = '';
    for (let j = 0; j < s.length; j++) {
      const element = s[j];
      if (element === '0') {
        res += '01';
      } else {
        res += '10';
      }
    }

    console.log(res)
    s = res;
  }

  return s[k - 1];
};

var kthGrammar = function(n, k) {
  const getIdx = (i) => {
    if (i === 0) {
      return 0;
    }
    if (i === 1) {
      return 1;
    }

    const preV = getIdx(Math.floor(i / 2));
    return (preV ? [1, 0] : [0, 1])[i % 2];
  }

  return getIdx(k - 1);
};


console.log(kthGrammar(1, 1)) // 0
console.log(kthGrammar(2, 1)) // 0
console.log(kthGrammar(2, 2)) // 1
console.log(kthGrammar(3, 2)) // 
console.log(kthGrammar(4, 3)) // 

