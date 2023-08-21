function deliver(arr) {
  if (arr.length < 1) {
    return 0;
  }

  if (arr.length < 2) {
    return [arr[0]];
  }

  let res = [];
  outer: for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    for (let j = index; j < arr.length; j++) {
      const elementJ = arr[j];
      if (elementJ > element) {
        res.push(((elementJ - element) * (j - index)));
        continue outer;
      }
      if (j === arr.length - 1) {
        res.push(element)
      }
    }
  }
  return res;
}

console.log(deliver([2,10,3]));