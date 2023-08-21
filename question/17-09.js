// 17.09


/**
 * @param {number} k
 * @return {number}
 */

var getKthMagicNumber1 = function(k) {
  var uniq = [3, 5, 7];
  var isMagicNumber = (number) => {
    var res = number;
    for (var iterator of uniq) {
      while (Number.isInteger(res / iterator)) {
        res = res / iterator
      }
    }

    return res === 1;
  }

  var resArr = [1];
  var temp = 1;
  while (resArr.length < k) {
    temp += 2;
    if (isMagicNumber(temp)) {
      resArr.push(temp);
    }
  }

  return resArr[k-1];
};

var getKthMagicNumber2 = function(k) {
  var resArr = [];

  for (let i = 0; i <= k; i++) {
    for (let j = 0; j <= k; j++) {
      for (let q = 0; q <= k; q++) {
        resArr.push(3**q*5**j*7**i);
      }
    }
  }

  return resArr;
};

var getKthMagicNumber3 = function(k) {
  var resArr = [1];
  while (resArr.length < k) {
    var nextVal = resArr[resArr.length - 1] * 7;
    resArr.forEach(v => {
      [3, 5, 7].forEach(v2 => {
        const val = v2 * v;
        if (val > resArr[resArr.length - 1] && val < nextVal) {
          nextVal = val;
        }
      })
    })

    if (nextVal > resArr[resArr.length - 1]) {
      resArr.push(nextVal);
    } else {
      throw new Error('1');
    }
  }
  return resArr[k - 1];
}

var getKthMagicNumber = function(k) {

}

console.log(getKthMagicNumber3(700));



// class Solution {
//   /**
//     * 题目分析：
//     *  由题意的，某一个满足结果的数，一定是之前的某个 resultA*3 或者是 resultB*5 或者是 resultC*7 的结果
//     *  并且结果一定是 这三个乘积的最小值，
//     *  因此，只要能够记录 resultA、resultB、resultC 的值，再相互与 3、5、7 相乘，取其中的最小值，就是当前的目标值！
//     *  需要注意，resultA、B、C 是不断变化的，并且都应该是由小到大，谁被选中，就应该取下一个值！
//     *      例如 3 就是 resultA=1 的结果，此时 B、C 都等于 1，此后 resultA 取下一个值 3 
//     *      例如 5 就是 resultB=1 的结果，此时 resultA=3，resultC=1，此后 resultB 取下一个值 3
//     *      例如 7 就是 resultC=1 的结果，此时 resultA、resultB 都等于 3，此后 resultC 取下一个值 3
//     *      例如 15 就是 resultA=5 或者是 resultB=3 的结果，此时 resultC=7，此后 resultA 取下一个值 7 ，resultB 取下一个值 5
//     *      自己在纸上多画画，就明白了！
//     * @param k
//     * @return
//     */
//    public int getKthMagicNumber(int k) {
//        int [] result = new int[k];
//        result[0] = 1;
//        // 定义三个 指针，分别表示 resultA、B、C 的下标
//        int point3 = 0;
//        int point5 = 0;
//        int point7 = 0;
//        for (int i = 1; i < k; i++) {
//            int resultN = Math.min(Math.min(result[point3] * 3, result[point5] * 5), result[point7] * 7);
//            if (resultN % 3 == 0) {
//                point3++;
//            }
//            if (resultN % 5 == 0) {
//                point5++;
//            }
//            if (resultN % 7 == 0) {
//                point7++;
//            }
//            result[i] = resultN;
//        }
//        return result[k - 1];
//    }
// }


