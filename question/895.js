// https://leetcode.cn/problems/maximum-frequency-stack/


var FreqStack = function() {
  this.count = {};
  this.maxCount = 0;

  this.groups = [];
};

/** 
* @param {number} val
* @return {void}
*/
FreqStack.prototype.push = function(val) {
  this.count[val] = this.count[val] ? this.count[val] + 1 : 1;
  this.groups[this.count[val]] = this.groups[this.count[val]] ?? [];

  this.groups[this.count[val]].push(val);
  this.maxCount = Math.max(this.maxCount, this.count[val]);
};

/**
* @return {number}
*/
FreqStack.prototype.pop = function() {

  let res = this.groups[this.groups.length - 1].pop();
  if (this.groups[this.groups.length - 1].length === 0) {
    this.groups.length = this.groups.length - 1;
  }
  this.count[res]--;
  return res;
};

/**
* Your FreqStack object will be instantiated and called as such:
* var obj = new FreqStack()
* obj.push(val)
* var param_2 = obj.pop()
*/

// ["FreqStack","push","push","push","push","push","push","pop","push","pop","push","pop","push","pop","push","pop","pop","pop","pop","pop","pop"]
// [[],[4],[0],[9],[3],[4],[2],[],[6],[],[1],[],[1],[],[4],[],[],[],[],[],[]]

// freqStack = new FreqStack();
// freqStack.push (5);//堆栈为 [5]
// freqStack.push (7);//堆栈是 [5,7]
// freqStack.push (5);//堆栈是 [5,7,5]
// freqStack.push (7);//堆栈是 [5,7,5,7]
// freqStack.push (4);//堆栈是 [5,7,5,7,4]
// freqStack.push (5);//堆栈是 [5,7,5,7,4,5]
// console.log(freqStack.pop ()); //返回 5 ，因为 5 出现频率最高。堆栈变成 [5,7,5,7,4]。
// console.log(freqStack.pop ()); //返回 7 ，因为 5 和 7 出现频率最高，但7最接近顶部。堆栈变成 [5,7,5,4]。
// console.log(freqStack.pop ()); //返回 5 ，因为 5 出现频率最高。堆栈变成 [5,7,4]。
// console.log(freqStack.pop ()); //返回 4 ，因为 4, 5 和 7 出现频率最高，但 4 是最接近顶部的。堆栈变成 [5,7]。

const data = [[4],[0],[9],[3],[4],[2],[],[6],[],[1],[],[1],[],[4],[],[],[],[],[],[]];
const freqStack = new FreqStack();
data.forEach((v, i) => {
  console.log('i = ', i)
  if(v.length === 0) {
    console.log(freqStack.pop());
  } else {
    freqStack.push(v[0]);
  }
})
