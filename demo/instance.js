function myInstanceOf(left, right) {
  let leftProto = Object.getPrototypeOf(left);
  let rightProto = right.prototype;

  while (leftProto) {
    if (rightProto == leftProto) return true;
    leftProto = Object.getPrototypeOf(leftProto);
  }
  return false;
}

// console.log(myInstanceOf([], Object));

