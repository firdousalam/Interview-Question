/*
15. 3Sum
Attempted
Medium
Topics
premium lock icon
Companies
Hint
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 
*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//     let num = [];
//     function Distinct(arr,checkSort){
//         let Notexist = true;
//         if(arr.length ==0 ) return Notexist;
//         for(let i=0;i<arr.length;i++){
//             let data = arr[i].sort((a,b)=> a-b);
//             if(data[0] == checkSort[0] && data[1] == checkSort[1] && checkSort[2] == data[2]){
//                 Notexist = false;
//             }   
//         }
//         return Notexist;
//     }
//     for(let i=0;i<nums.length;i++){
//         for(let j=0;j<nums.length;j++){
//             for(let k=0;k<nums.length;k++){
             
//                 if(i !=j && j!=k && i!=k && (nums[i]+nums[j]+nums[k]) == 0 ){
//                     let arrNum = [nums[i],nums[j],nums[k]].sort((a,b)=> a-b);;
//                      if(Distinct(num,arrNum)){
//                          num.push(arrNum);
//                      }
                      
//                 }
              
//             }
//         }
//     }
//     return num;
    
// };


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);  // Step 1: sort the array
    const res = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate numbers for the first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);

                // Move both pointers while skipping duplicates
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } 
            else if (sum < 0) {
                left++;
            } 
            else {
                right--;
            }
        }
    }

    return res;
};
