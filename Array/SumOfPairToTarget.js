function twoSum(arr, target) {

  let map = {};
  
  for (let num of arr) {
  
    let diff = target - num;
    
    if (map[diff]) return [diff, num];
    
    map[num] = true;
    
  }
  
}

console.log(twoSum([5,7,3,,6,1,8,11,15], 9)); // [2,7]