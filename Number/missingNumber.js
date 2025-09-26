
function missingNumber(arr, n) {

  let sum = (n * (n + 1)) / 2;  
  
  return sum - arr.reduce((a, b) => a + b, 0);
  
}

console.log(missingNumber([1, 2, 4, 5], 5)); // 3