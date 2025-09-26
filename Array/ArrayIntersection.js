function intersection(arr1, arr2) {

  return arr1.filter(num => arr2.includes(num));
  
}

console.log(intersection([1,2,3], [2,3,4])); // [2,3]