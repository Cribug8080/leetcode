/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
 var numMatchingSubseq = function(s, words) {
  const map = {};
  for(var i = 0; i < s.length; i ++) {
      if (map[s[i]]) {
          map[s[i]].push(i);
      } else {
          map[s[i]] = [i];
      }
  }

  const quickFind = (v, arr, s, e) => {
      if (s <= e) {
          const h = Math.floor((s + e) / 2);
          if (arr[h] < v) {
              return quickFind(v, arr, h, e);
          } else if (arr[h] > v) {
              if (h === 0) {
                  return h;
              }
              if (arr[h - 1] <= v) {
                  return h;
              } else {
                  return quickFind(v, arr, s, h);
              }
          } else {
              return h;
          }
      } else {
          return -1;
      }
  }

  let res = 0
  for(var ii = 0; ii < words.length; ii++) {
      const ele = words[ii];
      const idx = [];

      if (map[ele[0]] && map[ele[0]].length > 0) {
          idx.push(map[ele[0]][0]);
          for (var i = 1; i < ele.length; i ++) {
              const idxs = map[ele[i]];
              const preIdx = idx[i - 1];
              const newIdx = quickFind(preIdx, idxs, 0, idxs.length - 1);
              if (newIdx > -1) {
                  idx.push(newIdx);
              }
          }
      }

      if (idx.length === ele.length) {
          res++;
      }
  }
  return res;
};

console.log(numMatchingSubseq("abcde",
["a","bb","acd","ace"])) // 3