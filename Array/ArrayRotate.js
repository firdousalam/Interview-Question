function rotateArray(nums, k) {
k = k % nums.length;
return nums.slice(-k).concat(nums.slice(0, -k));
}

// Test the function
let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log(rotateArray(nums, k)); // Output: [5, 6, 7, 1, 2, 3, 4]