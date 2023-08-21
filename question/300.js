/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const res = [];
  nums.forEach(v => {
    let curV = 1;
    res.forEach((v2, i) => {
      if (v > nums[i] && curV < v2 + 1) {
        curV = v2 + 1;
      }
    })
    res.push(curV);
  })
  return res;
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18])) // 4
console.log(lengthOfLIS([0,1,0,3,2,3])) // 4
console.log(lengthOfLIS([7,7,7,7,7,7,7])) // 1