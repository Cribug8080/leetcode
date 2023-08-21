function mergePort(...args) {
  const ports = Array.from(args);
  for (let index = 0; index < ports.length; index++) {
    const element = ports[index];
    element.sort((a, b) => a - b);
  }

  const res = [...ports];
  const changeIdx = new Array(ports.length).fill(1).map((v, i) => i);
  while (changeIdx.length) {
    let 
    for (let index = 0; index < ports.length; index++) {
      if (index != )
    }
  }
}

function canMerge(arr1, arr2, num) {
  let idx1 = 0, idx2 = 0;
  let equal = 0;
  let res = [];
  while (idx1 < arr1.length && idx2 < arr2.length) {
    if (arr1[idx1] === arr2[idx2]) {
      res.push(arr1[idx1]);
      res.push(arr1[idx2]);
      equal++;
    }
    if (arr1[idx1] > arr2[idx2]) {
      res.push(arr1[idx2]);
      idx2++;
    } else {
      res.push(arr1[idx1]);
      idx1++;
    }
  }
  return equal > num ? res : false;
}

console.log(mergePort([4], [4], [2,3,2], [1,2], [5]));
console.log(mergePort([3], [2,3,1], [4,3,2], [5]))
console.log(mergePort([6], [10], [4,2,1], [9],[3,6,9,2], [6,3,4], [8]))