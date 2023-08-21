
// https://leetcode.cn/problems/zero-matrix-lcci/


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const zeroRow = new Set();
  const zeroCol = new Set();

  for (let i = 0; i < matrix.length; i++) {
    const element = matrix[i];
    for (let j = 0; j < element.length; j++) {
      const item = element[j];
      if (item === 0) {
        zeroRow.add(i);
        zeroCol.add(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    const element = matrix[i];
    for (let j = 0; j < element.length; j++) {
      if (zeroRow.has(i) || zeroCol.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
};





