// https://leetcode.cn/problems/soup-servings/

/**
 * @param {number} n
 * @return {number}
 */
var soupServings2 = function(n) {
  const soup = [n, n];
  const map = {};

  const drink = (guo) => {
    if (map[guo.join(',')] !== undefined) {
      return map[guo.join(',')];
    }

    const res = [0, 0];

    if (guo[0] <= 0 && guo[1] > 0) {
      return [1, 0];
    }
    if (guo[0] <= 0 && guo[1] <= 0) {
      return [0, 1]
    }

    if (guo[0] > 0 && guo[1] <= 0) {
      return [0, 0]
    }

    let cr = drink([guo[0] - 100, guo[1]]);;
    res[0] += cr[0] / 4;
    cr = drink([guo[0] - 75, guo[1] - 25]);;
    res[0] += cr[0] / 4;
    res[1] += cr[1] / 4;
    cr = drink([guo[0] - 50, guo[1] - 50]);;
    res[0] += cr[0] / 4;
    res[1] += cr[1] / 4;
    cr = drink([guo[0] - 25, guo[1] - 75]);;
    res[0] += cr[0] / 4;
    res[1] += cr[1] / 4;

    console.log(guo.join(','), res.join(','))
    map[guo.join(',')] = [...res];
    return res;
  }

  const rr = drink(soup);
  return rr[0] + rr[1] / 2;
};

var soupServings = function(n) {
  const soup = [n, n];
  const map = {};

  const drink = (guo) => {
    if (map[guo.join(',')] !== undefined) {
      return map[guo.join(',')];
    }

    let res = 0;

    if (guo[0] <= 0 && guo[1] > 0) {
      return 1;
    }
    if (guo[0] <= 0 && guo[1] <= 0) {
      return 0.5;
    }

    if (guo[0] > 0 && guo[1] <= 0) {
      return 0
    }

    res = (drink([guo[0] - 100, guo[1]]) + drink([guo[0] - 75, guo[1] - 25]) + drink([guo[0] - 50, guo[1] - 50]) + drink([guo[0] - 25, guo[1] - 75])) / 4;

    map[guo.join(',')] = res;
    return res;
  }

  return drink(soup);
};

// console.log(soupServings(50)) // 0.625
// console.log(soupServings(100)) // 0.71875
console.log(soupServings(8000)) // 0.96162