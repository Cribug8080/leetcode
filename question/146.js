// LRU

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.hash = {};
  const headNode = {
    value: 0,
    key: null,
    next: null,
    pre: null,
  }
  this.head = headNode;
  this.tail = headNode;
  this.head.next = this.tail;
  this.tail.pre = this.head;

  this.capacity = capacity;
  this.size = 0;
};

LRUCache.prototype.removeNode = function(node) {
  node.pre.next = node.next;
  node.next.pre = node.pre;
}
LRUCache.prototype.addToHead = function(node) {
  node.next = this.head.next;
  node.pre = this.head;
  this.head.next.pre = node;
  this.head.next = node;
}


/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if (this.hash[key]) {
      let hasNode = this.hash[key];
      this.removeNode(hasNode);
      this.addToHead(hasNode);
      return hasNode.value;
  }
  return -1;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  const curent = {
      pre: null,
      next: null,
      value,
      key,
  }

  if (this.hash[key]) {
      let hasNode = this.hash[key];
      hasNode.value = value;
      this.removeNode(hasNode);
      this.addToHead(hasNode);
  } else { // add
      if (this.size < this.capacity) {
          this.size++;
      } else {
          delete this.hash[this.head.pre.key]
          this.removeNode(this.head.pre);
      }
      this.addToHead(curent);
      this.hash[key] = curent;
  }
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/

function operatorLRU(operator, args) {
  let lruCatch;
  for(let i=0;i<operator.length; i++) {
    if (i === 0) {
      lruCatch = new LRUCache(args[0]);
    } else {
      console.log(lruCatch[operator[i]](...args[i]));
    }
  }
}

// operatorLRU(
//   ["LRUCache","put","put","get","put","get","put","get","get","get"],
//   [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]
// )
operatorLRU(
  ["LRUCache","put","put","get","put","get","put","get","get","get"],
  [[2],[1,0],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]
)