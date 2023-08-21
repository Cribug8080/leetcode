// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function(prices) {
  let score = 0
  const n = prices.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      score = Math.max(score, prices[j] - prices[i]);
    }
  }

  return score;
};

var maxProfit = function(prices) {
  let score = 0
  let min = Infinity;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    score = Math.max(score, prices[i] - min);
  }
  return score;
};

console.log(maxProfit([7,1,5,3,6,4])) // 5
console.log(maxProfit([7,6,4,3,1])) // 0
