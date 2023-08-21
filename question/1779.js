// https://leetcode.cn/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
  let mhd = Infinity;
  let res = -1;
  for (let i = points.length - 1; i > -1; i--) {
    const element = points[i];
    if (element[0] === x || element[1] === y) {
      let cMhd = Math.abs(element[0] - x) + Math.abs(element[1] - y);
      if (cMhd <= mhd) {
        mhd = cMhd;
        res = i;
      }
    }
  }
  return res;
};


console.log(nearestValidPoint(3,4,[[1,2],[3,1],[2,4],[2,3],[4,4]])) // 2
console.log(nearestValidPoint(3,4,[[3,4]])) // 0
console.log(nearestValidPoint(3,4,[[2,3]])) // -1