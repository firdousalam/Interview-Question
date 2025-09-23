let arr = [3, 1, 4, 2];

console.log(arr.sort());              // [1,2,3,4] (string-based!)
console.log(arr.sort((a,b)=>b-a));    // [4,3,2,1] (numeric sort)
console.log(arr.reverse());           // [2,4,1,3]