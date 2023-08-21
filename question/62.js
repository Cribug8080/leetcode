

// https://leetcode.cn/problems/unique-paths/


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths2 = function (m, n) {
  const record = {};
  const ways = (m, n, sx, sy) => {
    if (record[`${sx}-${sy}`]) {
      return record[`${sx}-${sy}`]
    }
    if (sx === m && sy === n) {
      return 1;
    }
    if (sx > m) {
      return 0
    }
    if (sy > n) {
      return 0
    }

    const val1 = ways(m, n, sx + 1, sy);
    record[`${sx + 1}-${sy}`] = val1;
    const val2 = ways(m, n, sx, sy + 1);
    record[`${sx}-${sy + 1}`] = val2;
    return val1 + val2;
  }

  return ways(m, n, 1, 1);
};

var uniquePaths3 = function (m, n) {
  const record = new Array(m).fill(new Array(n));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        record[i][j] = 1;
      } else {
        record[i][j] = record[i - 1][j] + record[i][j - 1];
      }
    }
  }

  return record[m - 1][n- 1];
};

var uniquePaths = function (m, n) {
  const record = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        record[j] = 1;
      } else {
        record[j] += record[j - 1];
      }
    }
  }

  return record[n -1];
};

console.log(uniquePaths(50,50))
console.log(uniquePaths(3,3))
console.log(uniquePaths(7,3))

