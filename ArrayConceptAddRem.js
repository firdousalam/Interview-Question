
let arr = [1, 2, 3];
console.log("original Value",arr)
arr.push(4);
console.log("Push",arr); 
arr.pop()         // [1,2,3,4]   (add at end)
console.log("POP",arr);            // [1,2,3]     (remove from end)
arr.unshift(0)
console.log("unshift",arr);       // [0,1,2,3]   (add at start)
arr.shift()
console.log("shift",arr);          // [1,2,3]     (remove from start)
arr.splice(1, 1, 99)
console.log("splice",arr); // [1,99,3]    (remove/replace at index)

console.log("sclice",arr.slice(0, 2));      // [1,99]      (copy portion, non-destructive)
console.log("original array",arr);
console.log("concat",arr.concat([4, 5]));   // [1,99,3,4,5] (merge arrays)
console.log("original array after concat",arr);