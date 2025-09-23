let arr = [10, 20, 30, 40,30];

arr.indexOf(40);      // 3
console.log(arr.indexOf(40));
arr.lastIndexOf(30);  // 4
console.log(arr.lastIndexOf(30))
arr.includes(40);     // true
console.log(arr.includes(40));
let firstmatch = arr.find(x => x > 25); // 30 (first match)
console.log("firstmatch",firstmatch);
let firstIndex = arr.findIndex(x => x > 25); // 2
console.log("firstIndex",firstIndex)
let hasVal = arr.some(x => x > 35); // true (at least one)
console.log("has any val",hasVal);

const hasAllVal = arr.every(x => x > 5); // true (all satisfy)
console.log("has all val",hasAllVal);