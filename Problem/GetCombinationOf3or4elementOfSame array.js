function combinationsOfThree(arr) {
  const result = [];

  function combine(start, combo) {
    if (combo.length === 4) {
      
      result.push([...combo]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      combo.push(arr[i]);
      combine(i + 1, combo);
      combo.pop();
    }
  }

  combine(0, []);
  return result;
}

// Example usage:
const array = [1,0,-1,0,-2,2];
console.log(combinationsOfThree(array).length);
// Output: [ [ 1, 2, 3 ], [ 1, 2, 4 ], [ 1, 3, 4 ], [ 2, 3, 4 ] ]
