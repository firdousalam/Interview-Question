/*
Given an integer x, return true if x is a palindrome, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeFun = function(x) {
   
    if(x.toString() === x.toString().split("").reverse().join('')){
        return true
    }
    return false;
};



/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    const src = x.toString();
    const length = src.length;
    console.log("datat",Math.ceil(length / 2));
    for (let i = 0; i < Math.ceil(length / 2); i++) {
        if (src[i] !== src[length - 1 - i]) {
            return false;
        }
    }

    return true; 
};
console.log("by half",isPalindrome("testtset"))
function isPalindromeNum(x) {
    // Negative numbers or numbers ending with 0 (but not 0 itself) are not palindromes
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversedHalf = 0;

    // Reverse only half of the digits
    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    // For odd-length numbers, drop the middle digit (reversedHalf / 10)
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}