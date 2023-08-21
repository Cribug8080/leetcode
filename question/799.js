// https://leetcode.cn/problems/champagne-tower/

/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
  
  // const factorial = new Array(query_row + 1).fill(1);
  // const power2 = new Array(query_row + 1).fill(1);
  // for (let i = 1; i < factorial.length; i++) {
  //   factorial[i] = factorial[i - 1] * i;
  //   power2[i] = power2[i - 1] * 2;
  // }

  // const fillPart = new Array(query_row + 1).fill(0);
  // let sum = 0;
  // let current_glass = query_glass;
  // for (let i = fillPart.length - 1; i > -1; i--) {
  //   // fillPart[i] =  (power2[i] * factorial[current_glass] * factorial[i - current_glass]) / factorial[i];
  //   // sum += fillPart[i];
  //   // const h = i / 2;
  //   fillPart[i] = current_glass;
  //   if (h < current_glass) {
  //     current_glass -= 1;
  //   }
  // }

  const resArr = new Array(query_row + 1);
  resArr[0] = [poured];
  for (let i = 1; i < resArr.length; i++) {
    resArr[i] = new Array(i + 1).fill(0);

    for (let j = 0; j < resArr[i].length; j++) {
      let res = 0;
      if (j > 0) {
        let preV = resArr[i - 1][j - 1] - 1;
        preV > 0 && (res += preV / 2)
      }
      if (j < resArr[i].length - 1) {
        let preV = resArr[i - 1][j] - 1;
        preV > 0 && (res += preV / 2)
      }
      resArr[i][j] = res;
    }
  }

  const resVal = resArr[query_row][query_glass]
  return resVal > 1 ? 1 : resVal;
};

console.log(champagneTower(2, 1, 1));
// console.log(champagneTower(100000009, 33, 17));