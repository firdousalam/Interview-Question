let arr = [1, [2, [3, 4]]];

console.log(arr.flat());           // [1,2,[3,4]]  (1 level)
console.log(arr.flat(2));          // [1,2,3,4]    (2 levels)
console.log(arr.flat(Infinity));   // [1,2,3,4]    (all levels)

console.log([1, 2, 3].flatMap(x => [x, x*2])); 
// [1,2,2,4,3,6]