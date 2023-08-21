function pkp(array) {
  const object = {};
  array.forEach(v => {
    object[v] ? object[v]++ : (object[v] = 1);
  });

  const four = [];
  const three = [];
  const two = [];
  const one = [];
  for(const key in object) {
    const val = object[key];
    const keyNum = +key;
    switch (val) {
      case 1:
        one.push(keyNum);
        break;
      case 2:
        two.push(keyNum);
        break;
      case 3:
        three.push(keyNum);
        break;
      default:
        four.push(keyNum);
    }
  }

  // 大到小排序
  four.sort((a, b) => b - a);
  three.sort((a, b) => b - a);
  two.sort((a, b) => b - a);
  // one.sort((a, b) => b - a);

  const res = [];
  four.forEach(v => {
    res.push(v,v,v,v);
  })


  let twoIdx = 0;
  let needThree = true;
  for(let index = 0; index < three.length; index++) {
    const threeVal = three[index];

    if (needThree) {
      res.push(threeVal,threeVal,threeVal);
      needThree = false;
      continue;
    }
    needThree = true;

    let twoVal = 0;
    if (twoIdx < two.length) {
      twoVal = two[twoIdx];
    }

    if (threeVal > twoVal) {
      res.push(threeVal, threeVal);
      one.push(threeVal); // 拆分3个拼接最大的葫芦
      index++;
    } else if (twoVal) {
      res.push(twoVal, twoVal);
      twoIdx++;
    }
  }

  two.forEach(v => {
    res.push(v,v);
  })
  one.sort((a, b) => b - a);
  res.push(...one);

  return res;
}

// console.log(pkp([1,3,3,3,2,1,5]))
// console.log(pkp([4,4,2,1,2,1,3,3,3,4]))
const map = new Map();
map.set(1, 2)
map.set(2, 5)

const array = Array.from(map);
for(let i = 0; i < array.length; i++) {
  console.log(array[i])
}

