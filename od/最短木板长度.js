

function shortest(n, m, arr) { // n * ln
  arr.sort((a, b) => a - b);
  let res = m;
  let min = arr[0];
  for (let index = 0; index < arr.length - 1; index++) {
    const element = arr[index];
    const element2 = arr[index + 1];
    const temp = element2 - element;
    if (temp * (index + 1) < res && res > 0) {
      min += temp;
      res -= (temp * (index + 1));
    } else {
      return min + (Math.floor(res / (index + 1)));
    }
  }
  if (res > 0) {
    return min + (Math.floor(res / (arr.length)));
  }
}

function insertSortIdx(arr, val, start, end) {
  let s = start;
  let e = end;
  while (s < e) {
    const mid = Math.floor((s + e) / 2);
    if (arr[mid] < val) {
      s = mid + 1;
    } else {
      e = mid;
    }
  }
  return s;
}

function shortest2(n, m, arr) { // m * n * ln
  arr.sort((a, b) => a - b);
  while (m > 0) {
    arr[0] += 1;
    m -= 1;
    let nextVal = arr[0];
    const insertIdx = insertSortIdx(arr, nextVal, 1, arr.length - 1);
    arr.splice(0, 1);
    arr.splice(insertIdx - 1, 0, nextVal);
  }
  return arr[0];
}

console.log(insertSortIdx([1,2,3,4,5,6,7], 2, 2, 5))
console.log(insertSortIdx([1,2,3,4,5,6,7], 3, 2, 4))
console.log(insertSortIdx([1,2,3,4,5,6,7], 3.5, 2, 4))
console.log(insertSortIdx([1,2,3,4,5,6,7], 4, 2, 4))
console.log(insertSortIdx([1,2,3,4,5,6,7], 4.5, 2, 4))
console.log(insertSortIdx([1,2,3,4,5,6,7], 5, 2, 4))

// console.log(shortest(5,5,[5,5,5,5,5]), shortest2(5,5,[5,5,5,5,5]))
// console.log(shortest(5,3,[4,5,3,5,5]), shortest2(5,3,[4,5,3,5,5]))
// console.log(shortest(5,3,[4,5,2,5,5]), shortest2(5,3,[4,5,2,5,5]))