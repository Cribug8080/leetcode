


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
 var numComponents = function(head, nums) {
  let res = 0;

  const exist = {};
  nums.forEach(v => exist[v] = 1);

  let currentNode = head.next;
  let preVal = head.val;
  while (currentNode) {
      if (preVal + 1 != currentNode.val || (!exist[currentNode.val] && exist[preVal])) {
          res++;
      } else if (currentNode.next === null) {
          res++;
      }
      currentNode = currentNode.next;
      
  }

  return res;
};

console.log(numComponents([0,1,2,3,4],[0,3,1,4])) // 2

