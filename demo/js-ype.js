
console.log('' instanceof String)
console.log(2 instanceof Number)
console.log(2 instanceof Number)

console.log(new Number(3) instanceof Number)
console.log([] instanceof Array);
console.log(Array instanceof Object);
console.log(Array.prototype.isPrototypeOf([]));

console.log(function(){} instanceof Function)
console.log((() => undefined) instanceof Function)

console.log((2).constructor == Number)

console.log(void 0 === undefined);


