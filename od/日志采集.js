function addLog(array) {
  let max = 0;
  let preVal = 0;
  let logNum = 0;
  for (let index = 0; index < array.length; index++) {
    const v = array[index];
    preVal -= logNum;
    preVal += v;
    logNum += v;
    max = Math.max(preVal, max);
    if (logNum >= 100) {
      break;
    }
  }
  return max;
}

console.log(addLog([1,98,1]))
console.log(addLog([3,7,40, 10, 6]))
console.log(addLog([3, 5, 90, 7]))