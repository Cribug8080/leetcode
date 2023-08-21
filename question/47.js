// https://leetcode.cn/problems/permutations-ii/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const output = [...nums];
  output.sort((a, b) => a - b);
  
  const res = [];
  const n = output.length;
  const flag = new Array(n).fill(false);

  const backTrack = (start, arr) => {
    if (arr.length === n) {
      res.push([...arr]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (flag[i] || (i > 0 && output[i] === output[i - 1] && !flag[i - 1])) {
        continue;
      }

      arr.push(output[i]);
      flag[i] = true;
      backTrack(start + 1, arr);
      arr.pop()
      flag[i] = false;
      
    }
  }

  backTrack(0, []);

  return res;
};

// console.log(permuteUnique([0,1,0,0,9]));
console.log(permuteUnique([3,3,0,3]));


