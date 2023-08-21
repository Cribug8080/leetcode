// https://leetcode.cn/problems/coordinate-with-maximum-network-quality/

/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
var bestCoordinate1 = function(towers, radius) {
  const res = {};
  let max = 0;
  let maxPos = [50, 50];
  let posMap = {};

  for (let i = 0; i < towers.length; i++) {
    const element = towers[i];

    for (let i = element[0] - radius; i <= element[0] + radius; i++) {
      for (let j = element[1] - radius; j <= element[1] + radius; j++) {
        if (res[`${i}-${j}`] === undefined) {
          const power = towers.reduce((p, c) => {
            const d = Math.sqrt((c[0] - i)**2 + (c[1] - j) ** 2);
            if (d > radius) {
              return p;
            }
            return p + element[2] / (1 + d);
          }, 0)

          res[`${i}-${j}`] = power;
          if (power >= max) {
            max = power;
            if (posMap[power]) {
              posMap[power].push([i, j].join(','))
            } else {
              posMap[power] = [[i, j].join(',')];
            }
          }
        }
      }
    }
  }
  return posMap[max].reduce((p, c) => p < c ? p : c, '50,50').split(',').map(v => +v);
};

var bestCoordinate = function(towers, radius) {
  const res = {};
  let max = 0;
  let maxPos = [50, 50];

  for (let i = 0; i <= 100; i++) {
    for (let j = 0; j <= 100; j++) {
      if (res[`${i}-${j}`] === undefined) {
        const power = towers.reduce((p, c) => {
          const d = Math.sqrt((c[0] - i)**2 + (c[1] - j) ** 2);
          if (d > radius) {
            return p;
          }
          return p + c[2] / (1 + d);
        }, 0)

        res[`${i}-${j}`] = power;
        if (power > max) {
          max = power;
          maxPos = [i, j]
        }
      }
    }
  }
  return maxPos;
};

// console.log(bestCoordinate([[1,2,5],[2,1,7],[3,1,9]], 2)) // [2, 1]
// console.log(bestCoordinate([[23,11,21]], 9)) // [23, 11]
// console.log(bestCoordinate([[1,2,13],[2,1,7],[0,1,9]], 2)) // [1, 2]
// console.log(bestCoordinate([[50,20,31],[43,36,29]], 38)) // [50,20]
// console.log(bestCoordinate([[2,1,9],[0,1,9]],2)) // [0,1]
console.log(bestCoordinate([[42,0,0]],7)) // [0,0]