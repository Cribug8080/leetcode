function treeBFS(arr, position) {
  let curLevel = [0];
  let [row, col] = position;
  let curRow = 0;
  while (curRow <= row) {
    const nextLevel = [];
    if (curRow === row) {
      return col < curLevel.length ? arr[curLevel[col]][0] : undefined;
    } else {
      curLevel.forEach(v => {
        nextLevel.push(...arr[v].slice(1))
      })
      curLevel = nextLevel;
      curRow++;
    }
  }
  return undefined;
}

// console.log(treeBFS([
//   [10, 1, 2],
//   [-21, 3, 4],
//   [23, 5],
//   [14],
//   [35],
//   [66],
// ], [1, 1])) // 23
// console.log(treeBFS([
//   [0,1,2,3,4],
//   [-11,5,6,7,8],
//   [113,9,10,11],
//   [24,12],
//   [35],
//   [66,13],
//   [77],
//   [88],
//   [99],
//   [101],
//   [102],
//   [103],
//   [25],
//   [104]
// ], [2, 5])) // 102
// console.log(treeBFS([
//   [0,1,2,3,4],
//   [-11,5,6,7,8],
//   [113,9,10,11],
//   [24,12],
//   [35],
//   [66,13],
//   [77],
//   [88],
//   [99],
//   [101],
//   [102],
//   [103],
//   [25],
//   [104]
// ], [3, 2])) // 

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let size = 0;
let nodes = [];
let condition = [];

rl.on('line', (line) => {
  console.log(size, nodes, condition)
  if (size === 0) {
    size = parseInt(line);
  } else if(nodes.length < size) {
    nodes.push(line.split(' ').map(Number));
  } else {
    condition = line.split(' ').map(Number);
    const res = treeBFS(nodes, condition);
    console.log(res);
    rl.close();
  }
})

