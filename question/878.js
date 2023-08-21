// https://leetcode.cn/problems/nth-magical-number/

/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// 2, 3
// 2 4 6 8 10
// 3 6 9 12 

// 2 4
// 2 4 6 8 10
// 4 8 12 16

// 1 2
// 1 2 3 4
// 2 4 6 8 10

// 2 11
// 2 4 6 8 10 12 14 16 18 20 22
// 11 22 33 44

var nthMagicalNumber2 = function(n, a, b) {
  let ai = 1;
  let bi = 1;
  let num = 1;
  let mod = 1000000007
  for (let i = 0; i < n; i++) {
    let an = ai * a;
    let bn = bi * b;
    
    num = Math.min(an, bn);

    if (num % a === 0) {
      ai++;
    }
    if (num % b === 0) {
      bi++;
    }
  }

  return num % mod;
};


var nthMagicalNumber = function(n, a, b) {
  const gcd = (a, b) => {
      return b !== 0 ? gcd(b, a % b) : a;
  };
  const mod = 1000000007;
  const c = a * b / gcd(a, b);
  const xn = c / a + c / b -1;
  const q = n % xn;
  let res = Math.floor(n / xn) * c % mod;

  if (q === 0 ) return res;

  let addA = a;
  let addB = b;
  for (let i = 0; i < q - 1; i++) {
    if (addA < addB) {
      addA += a;
    } else {
      addB += b;
    }
  }

  return (res + Math.min(addA, addB) % mod) % mod;
};

console.log(nthMagicalNumber(1,2,3)) // 2
console.log(nthMagicalNumber(3,6,4)) // 8
console.log(nthMagicalNumber(4,2,3)) // 6
console.log(nthMagicalNumber(1000000000, 40000, 40000)) // 999720007