function getVal(row, col) {
  let res = false;
  let length = 2 ** (row - 2);
  while (row > 0) {
    if (col >= length) {
      col = col - length;
    } else {
      res = !res;
    }
    length /= 2;
    row--;
  }
  return res ? 'red' : 'blue';
}

console.log(getVal(1, 0)); // r 
console.log(getVal(2, 1)); // r
console.log(getVal(3, 2)); // b
console.log(getVal(4, 6)); // r
console.log(getVal(5, 8)); // b
console.log(getVal(64, 73709551616)); // b

// r
// br
// rbbr
// brrbrbbr