/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const useedEle = {};
  function findNext(i, j, n) {
    if (board[i][j] !== word[n]) {
      return false;
    }

    if (n + 1 === word.length) {
      return true;
    }

    const direction = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    useedEle[`${i}-${j}`] = true;
    let res = false;
    for (let dn = 0; dn < direction.length; dn++) {
      const [di, dj] = direction[dn];
      const newi = i + di;
      const newj = j + dj;
      if (!useedEle[`${newi}-${newj}`] && newi >= 0 && newi < board.length && newj >= 0 && newj < board[0].length) {
        const rt = findNext(newi, newj, n + 1)
        if (rt) {
          res = true;
          break;
        }
      }
      
    }

    useedEle[`${i}-${j}`] = false;
    return res;
  }
  for (let i = 0; i < board.length; i++) {
    const element = board[i];
    for (let j = 0; j < element.length; j++) {
      const rr = findNext(i, j, 0);
      if (rr) {
        return rr;
      }

    }
  }

  return false;
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCCED')) // true
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCB')) // false
console.log(exist([['A']], 'A'))
console.log(exist([["a","b"],["c","d"]],
"cdba"))
console.log(exist([["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"]],
"AAAAAAAAAAAABAA"))