/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109

*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  
    if(nums.length==1) return

  let map = {};
  
  for(let [index,num] of nums.entries()) {
  
    let diff = target - num;
    if(typeof map[diff] != 'undefined') {
        return [ map[diff],index];
    }
    map[num] = index; 
  }
};

/*
time complexity O(n)
Space Complexity O(n)
*/

let sumTwo = function(arr,target){
  let left =0;
  let right = arr.length-1;
  while(right>left){
    const sum = arr[left]+arr[right];
    if(sum === target){
      return [arr[left],arr[right]];
    }else if(sum<target){
      left++;
    }else {
      right--;
    }
  }
  return null;
}

console.log(sumTwo([9,1,2,3,4,5,6,7,8,9,10],15))

/*
to return all pair

*/
var twoSumRet = function(nums, target) {
  
    if(nums.length==1) return
  let data = [];
  let map = {};
  
  for(let [index,num] of nums.entries()) {
  
    let diff = target - num;
    if(typeof map[diff] != 'undefined') {
      console.log(index,diff);
        data.push([ map[diff],num]);
    }
    map[num] = num; 
  }

  return data;
};
console.log(JSON.stringify(twoSumRet([9,1,2,3,4,5,6,7,8,9,10],15)))
/*
time complexity O(n)
Space Complexity O(n)
*/