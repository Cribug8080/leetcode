function shortest(arr) {
  const map = {};
  const keys = [];
  arr.forEach((v, i) => {
    if (map[v]) {
      map[v].nums++;
      map[v].end = i;
    } else {
      keys.push(v);
      map[v] = {
        nums: 1,
        start: i,
        end: i,
      }
    }
  })
  let res = arr.length;
  let maxCount = keys.reduce((p, c, i) => Math.max(p, map[c].nums), 0)
  keys.forEach(v => {
    (maxCount === map[v].nums) && (res = Math.min(res, map[v].end - map[v].start));
  })
  return res + 1;
}

console.log(shortest([1,2,2,4,1]))
console.log(shortest([1,2,2,4,2,1]))