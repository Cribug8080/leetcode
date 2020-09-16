/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  const nums = [];
  for (let index = 0; index < n - 1; index++) {
    nums.push((index === 0 ? 1 : nums[index - 1]) * (index + 1))
  }

  const idxs = [];
  let curCount = k;
  while (nums.length > 0) {
    const curNum = nums.pop();
    idxs.push(Math.ceil(curCount / curNum));
    curCount = curCount % curNum;
  }
  idxs.push(1);

  const items = new Array(n).fill(1).map((v, i) => i + 1);
  let res = '';
  idxs.forEach(v => res = res += items.splice(v - 1, 1))
  return res;
};

console.log(getPermutation(9, 9));