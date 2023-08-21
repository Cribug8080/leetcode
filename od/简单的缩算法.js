function main(str) {
  let res = '';
  const leftPot = [];
  let numberStr = '';
  for(let i = 0; i < str.length; i++) {
    if (str[i] > '0' && str[i] < '9') {
      numberStr += str[i];
      if (i < str.length - 1) continue;
    }

    if (numberStr) {
      let nums = Number(numberStr);
      if (res[res.length - 1] === '}') {
        let prePot = leftPot.pop();
        let repeatStr = res.slice(prePot + 1, res.length - 1);
        res = res.slice(0, prePot) + repeatStr.repeat(nums);
      } else {
        res = res.slice(0, res.length - 1) + res[res.length - 1].repeat(nums)
      }
      numberStr = '';
    }

    if (str[i] === '{') {
      leftPot.push(i);
    }

    if (Number.isNaN(+str[i])) {
      res += str[i];
    }
    
  }
  return res;
}
console.log(main('A22'))