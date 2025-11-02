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
/*
time Complexity O(n) linear with respect to element
space Complexity O(n) Linear with respect to Element.




*/
console.log("by half",isPalindromeFun("testtset"))
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
/*
time complexity O(log base 10 n )
space complexity O(1)
*/
function checkPalindrome(txt){
    let left = 0;
    console.log(txt)
    let right = txt.length-1;
    console.log(right);
    while(right>left){
        console.log(txt[left],"left")
        if(txt[left] != txt[right]){
            return false;
        }

        right--;
        left++;
    }
    return true;
}
/*
time complexity O(log base 10 n )
space complexity O(1)
*/
console.log("by half1",isPalindromeNum(1234321))
/*
* Function to sort array using divide and merge rule
* @params [number] : array of numbers
* @return [number] :  sorted array of number in ascending order
*/

let mergeSort = function(arr){
    if(arr.length<=1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);

    let leftSorted = mergeSort(left);
    let rightSorted = mergeSort(right);

    return merge(left,right)

}

/*
* Merge Function will take two array and merge those in ascending order
* @params ([number],[numbers]) we will pass two array
*
*@return [number] it will return array in sorted form
*/
function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    // Compare elements from both arrays and merge them in sorted order
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add any remaining elements from the left or right array
    return result.concat(left.slice(i)).concat(right.slice(j));
}

const array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array))