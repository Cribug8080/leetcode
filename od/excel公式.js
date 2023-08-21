
function rowMap(str) { // 根据字符串获取是第几列
  return str.split('').reverse().reduce((p, c, i) => (c.charCodeAt(0) - 64) * (26 ** i) + p, 0);
}

const add = '+';
const subtraction = '-';
function praseAST(str) {
  let idx = 0;
  let ast = [];

  function checkNumber(str, idx) {
    // 结束不是数字和字母
    let end = idx;
    let res = '';
    while (/[A-Z0-9]/.test(str[end])) {
      res+= str[end];
      end++;
    }
    return [end - idx, res];
  }

  while (idx < str.length) {
    if (str[idx] === add) {
      ast.push(add);
      idx++;
    } else if (str[idx] === subtraction) {
      ast.push(subtraction);
      idx++;
    } else {
      const [len, number] = checkNumber(str, idx);
      ast.push(number);
      idx += len;
    }
  }
  return ast;
}

function getCitedNumber(str) {
  const col = str.match(/^[A-Z]*/)[0];
  const row = Number(str.match(/[0-9]*$/)[0]);
  return [row - 1, rowMap(col) - 1];
}

function isCellCited(str) {
  return /^[A-Z].*/.test(str);
}
function isFunction(str) {
  return /^=.*/.test(str);
}

function excelFunction(arr, range) {
  function exec(ast) {
    let flag = null;
    return ast.reduce((p, c) => {
      let value = c;
      if (isCellCited(c)) {
        const [x, y] = getCitedNumber(c);
        value = arr[x][y];
      }
      if ([add, subtraction].includes(c)) {
        flag = c;
        return p;
      }
      value = Number(value);
      switch (flag) {
        case add:
          return p + value
        case subtraction:
          return p - value
        default:
          return p + value;
      }
    }, 0);
  }
  function getNumber(str) {
    if (isFunction(str)) {
      const ast = praseAST(str.slice(1));
      return exec(ast);
    }
    if (isCellCited(str)) {
      const [x, y] = getCitedNumber(str);
      return arr[x][y];
    }
    return str;
  }

  const [r1, r2] = range;
  const [startX, startY] = getCitedNumber(r1);
  const [endX, endY] = getCitedNumber(r2);

  let sum = 0;
  for(let i = startX; i < endX + 1; i++) {
    for (let j = startY; j < endY + 1; j++) {
      sum += getNumber(arr[i][j]);
    }
  }
  return sum;
}

console.log(excelFunction([
  [10,12,'=C5'],
  [15, 5, 6],
  [7,8,'=3+C2'],
  [6,'=B2-A1','=C2'],
    [7,5,3]
], ['B2', 'C4']))