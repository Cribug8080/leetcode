// https://leetcode.cn/problems/score-of-parentheses/


/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses2 = function(s) {
  const mulityFn = (ms) => {
    if (ms === '()') {
      return 1;
    }
    return 2 * addFn(ms.slice(1, s.length - 1));
  }

  const addFn = (as) => {
    let score = 0;
    const idxs = [-1];
    for (let i = 0; i < as.length; i++) {
      const element = as[i];
      if (element === '(') {
        score++;
      } else {
        score--;
      }

      if (score === 0) {
        idxs.push(i)
      }
    }

    let res = 0;
    for (let i = 1; i < idxs.length; i++) {
      const start = as.slice(idxs[i - 1] + 1, idxs[i] + 1);
      res += mulityFn(start);
    }
    return res;
  }

  

  return addFn(s);
};

// class Solution {
//   int idx = 0;
//   public int scoreOfParentheses(String s) {
//       int res = 0;
//       while (idx < s.length() && s.charAt(idx) == '(') {
//           idx++; //跳过当前 (
//           if (s.charAt(idx) == ')') res += 1; // 没有子节点
//           else res += scoreOfParentheses(s) * 2; // 存在子节点
//           idx++; //跳过当前 )
//       }
//       return res;
//   }
// }


console.log(scoreOfParentheses('()')) // 1;
console.log(scoreOfParentheses('(())')) // 2;
console.log(scoreOfParentheses('()()')) // 2;
console.log(scoreOfParentheses('(()(()))')) // 6;
