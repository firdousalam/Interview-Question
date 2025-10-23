/*
7. Reverse Integer
Solved
Medium
Topics
premium lock icon
Companies
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1
*/

/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
    if(x.toString().length<2) return x;

    let data = x.toString().split("").reverse();
    let revData = '';

    if(data[data.length-1] ==='-'){
        revData='-';
    }
    if(data[0] =='0'){
        // revData='-';
        data.shift();
    }
    for(let i=0;i<data.length;i++){
        revData+=data[i]
    }
    let revIntData = parseInt(revData);
    if(Math.pow(-2,31)>revIntData || Math.pow(2,31)-1<revIntData){
        revIntData = 0;
    }

    return revIntData;
};