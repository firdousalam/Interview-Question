# Nodejs Interview-Question

JavaScript Array Methods (with Examples)

🔹 1. Creation
let arr1 = [1, 2, 3];                 // Literal
let arr2 = new Array(3);              // [empty × 3]
let arr3 = Array.of(1, 2, 3);         // [1, 2, 3]
let arr4 = Array.from("hello");       // ['h','e','l','l','o']

🔹 2. Adding & Removing Elements
let arr = [1, 2, 3];

arr.push(4);          // [1,2,3,4]   (add at end)
arr.pop();            // [1,2,3]     (remove from end)

arr.unshift(0);       // [0,1,2,3]   (add at start)
arr.shift();          // [1,2,3]     (remove from start)

arr.splice(1, 1, 99); // [1,99,3]    (remove/replace at index)
arr.slice(0, 2);      // [1,99]      (copy portion, non-destructive)

arr.concat([4, 5]);   // [1,99,3,4,5] (merge arrays)

🔹 3. Searching & Checking
let arr = [10, 20, 30, 40];

arr.indexOf(20);      // 1
arr.lastIndexOf(30);  // 2
arr.includes(40);     // true
arr.find(x => x > 25); // 30 (first match)
arr.findIndex(x => x > 25); // 2
arr.some(x => x > 35); // true (at least one)
arr.every(x => x > 5); // true (all satisfy)

🔹 4. Iterating
let arr = [1, 2, 3];

arr.forEach(x => console.log(x)); 
// 1 2 3

for (let x of arr) console.log(x); 
// 1 2 3

🔹 5. Transforming
let arr = [1, 2, 3, 4];

arr.map(x => x * 2);         // [2,4,6,8]
arr.filter(x => x % 2 === 0); // [2,4]
arr.reduce((a, b) => a + b); // 10 ((((1+2)+3)+4)
arr.reduceRight((a, b) => a - b); // -2  ( (((4-3)-2)-1) )

🔹 6. Sorting & Reversing
let arr = [3, 1, 4, 2];

arr.sort();              // [1,2,3,4] (string-based!)
arr.sort((a,b)=>b-a);    // [4,3,2,1] (numeric sort)
arr.reverse();           // [2,4,1,3]

🔹 7. Joining & Converting
let arr = ["a", "b", "c"];

arr.join("-");    // "a-b-c"
arr.toString();   // "a,b,c"
JSON.stringify(arr); // "[\"a\",\"b\",\"c\"]"

🔹 8. Filling & Copying
let arr = [1, 2, 3, 4];

arr.fill(0);             // [0,0,0,0]
arr.fill(9, 1, 3);       // [0,9,9,0] (from index 1 to 2)

arr.copyWithin(2, 0, 2); // [0,9,0,9]

🔹 9. Flat & FlatMap
let arr = [1, [2, [3, 4]]];

arr.flat();           // [1,2,[3,4]]  (1 level)
arr.flat(2);          // [1,2,3,4]    (2 levels)
arr.flat(Infinity);   // [1,2,3,4]    (all levels)

[1, 2, 3].flatMap(x => [x, x*2]); 
// [1,2,2,4,3,6]

🔹 10. Keys, Values, Entries
let arr = ["a", "b"];

for (let i of arr.keys()) console.log(i); 
// 0 1

for (let v of arr.values()) console.log(v); 
// "a" "b"

for (let [i, v] of arr.entries()) console.log(i, v);
// 0 "a" ; 1 "b"

🔹 11. ES2023+ Methods
let arr = [1, 2, 3, 4, 5];

arr.at(-1);     // 5 (last element, negative index support)
arr.findLast(x => x % 2 === 0); // 4
arr.findLastIndex(x => x % 2 === 0); // 3

🔹 12. Type Checking
Array.isArray([1,2,3]);  // true
Array.isArray("abc");    // false


Mutating methods: push, pop, shift, unshift, splice, sort, reverse, fill, copyWithin

Non-mutating methods: slice, concat, map, filter, reduce, flat, flatMap

Searching/checking: find, findIndex, some, every, includes

Iterating: forEach, entries, keys, values


Let’s cover all major JavaScript String methods with examples.

I’ll group them by category so you can quickly find what you need.

📚 JavaScript String Methods (with Examples)
🔹 1. Creation
let str1 = "Hello";            // String literal
let str2 = 'World';            // Single quotes
let str3 = `Hi ${str1}`;       // Template literal → "Hi Hello"
let str4 = new String("JS");   // String object (not recommended)

🔹 2. Character Access
let str = "JavaScript";

str.charAt(0);     // "J"
str[1];            // "a" (modern way)
str.charCodeAt(0); // 74 (Unicode code of 'J')
str.at(-1);        // "t" (ES2022, negative index support)

🔹 3. Searching
let str = "Hello World";

str.indexOf("o");       // 4 (first match)
str.lastIndexOf("o");   // 7 (last match)
str.includes("World");  // true
str.startsWith("He");   // true
str.endsWith("ld");     // true

🔹 4. Extracting
let str = "JavaScript";

str.slice(0, 4);    // "Java"  (from 0 to 3)
str.slice(-6);      // "Script"

str.substring(0, 4); // "Java" (similar to slice but no negatives)
str.substr(4, 6);    // "Script" (⚠️ deprecated, but still works)

🔹 5. Modifying / Transforming
let str = "  hello world  ";

str.toUpperCase();  // "  HELLO WORLD  "
str.toLowerCase();  // "  hello world  "
str.trim();         // "hello world"
str.trimStart();    // "hello world  "
str.trimEnd();      // "  hello world"

🔹 6. Replacing
let str = "I love JavaScript";

str.replace("love", "like"); 
// "I like JavaScript"

str.replace(/a/g, "A"); 
// "I love JAvAScript" (regex global replace)

str.replaceAll("a", "A"); 
// "I love JAvAScript"

🔹 7. Splitting & Joining
let str = "a,b,c";

str.split(",");   // ["a", "b", "c"]
str.split("");    // ["a","b",",","c"]
["a","b","c"].join("-"); // "a-b-c"

🔹 8. Repeating & Padding
let str = "Hi";

str.repeat(3);         // "HiHiHi"
"5".padStart(3, "0");  // "005"
"5".padEnd(3, "*");    // "5**"

🔹 9. Searching with Regex
let str = "abc123xyz";

str.match(/\d+/);      // ["123"]
str.matchAll(/[a-z]/g); // Iterator for all letters

str.search(/\d/);      // 3 (first digit at index 3)

🔹 10. Iteration
let str = "JS";

for (let ch of str) {
  console.log(ch); // "J" "S"
}

[..."Hello"]; 
// ["H","e","l","l","o"] (spread into characters)

🔹 11. Newer (ES2021+)
let str = "hello";

str.replaceAll("l", "L"); // "heLLo"
str.at(-1);               // "o" (last character)

✅ Quick Summary (Cheat Sheet)

Method	What it does	Example → Result
charAt(i)	Get char at index	"Hi".charAt(1) → "i"
at(-1)	Negative index access (new)	"Hi".at(-1) → "i"
indexOf()	Find index of substring	"abc".indexOf("b") → 1
includes()	Check if substring exists	"abc".includes("a") → true
startsWith()	Check prefix	"hello".startsWith("he") → true
endsWith()	Check suffix	"hello".endsWith("lo") → true
slice()	Extract part	"hello".slice(1,3) → "el"
substring()	Extract part (no negatives)	"hello".substring(1,3) → "el"
replace()	Replace first match	"hi hi".replace("hi","bye") → "bye hi"
replaceAll()	Replace all matches	"hi hi".replaceAll("hi","bye") → "bye bye"
split()	Convert to array	"a,b".split(",") → ["a","b"]
trim()	Remove whitespace	" hi ".trim() → "hi"
toUpperCase()	Uppercase	"hi".toUpperCase() → "HI"
toLowerCase()	Lowercase	"HI".toLowerCase() → "hi"
repeat(n)	Repeat string	"ha".repeat(3) → "hahaha"
padStart(n, pad)	Pad start	"7".padStart(3,"0") → "007"
padEnd(n, pad)	Pad end	"7".padEnd(3,"*") → "7**"

JavaScript Number Functions
🔹 1. Creating Numbers
let n1 = 42;              // number literal
let n2 = 3.14;            // floating point
let n3 = new Number(100); // Number object (not recommended)

🔹 2. Number Object Properties
console.log(Number.MAX_VALUE);      // Largest possible number
console.log(Number.MIN_VALUE);      // Smallest positive number
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN);            // NaN

🔹 3. Number Methods
let num = 123.456;

num.toString();        // "123.456"
num.toFixed(2);        // "123.46"  (round with fixed decimals)
num.toPrecision(4);    // "123.5"   (significant digits)
num.toExponential(2);  // "1.23e+2"

Number.isFinite(123);      // true
Number.isFinite(Infinity); // false

Number.isInteger(10);      // true
Number.isInteger(10.5);    // false

Number.isNaN(NaN);         // true
Number.isNaN("hello");     // false

Number.parseInt("42");     // 42
Number.parseFloat("3.14"); // 3.14

🔹 4. Math Object (Useful with Numbers)
Math.abs(-5);       // 5
Math.round(4.7);    // 5
Math.floor(4.7);    // 4
Math.ceil(4.1);     // 5
Math.trunc(4.9);    // 4 (just drop decimals)

Math.pow(2, 3);     // 8
2 ** 3;             // 8 (same, modern way)
Math.sqrt(16);      // 4
Math.cbrt(27);      // 3

Math.max(1, 2, 3);  // 3
Math.min(1, 2, 3);  // 1

Math.random();      // 0 <= random < 1

🔹 5. Advanced Math Functions
Math.sign(-10);     // -1 (negative), 0 (zero), 1 (positive)
Math.log(10);       // Natural log
Math.log10(1000);   // 3 (log base 10)
Math.log2(8);       // 3 (log base 2)

Math.sin(Math.PI/2); // 1
Math.cos(0);         // 1
Math.tan(Math.PI/4); // 1

🔹 6. BigInt (for really large numbers)
let big = 123456789012345678901234567890n; // BigInt
console.log(big + 10n); // Works with "n" suffix only

✅ Quick Summary (Cheat Sheet)
Category	Function	Example → Result
Conversion	Number("42")	42
Formatting	num.toFixed(2)	123.46
Checking	Number.isInteger(10.5)	false
Parsing	Number.parseInt("100px")	100
Math rounding	Math.round(4.6)	5
Power/root	Math.pow(2,3)	8
Random	Math.random()	0.123...
Trigonometry	Math.sin(Math.PI/2)	1


Special Functions on Arrays of Objects

Suppose we have this array:

const users = [
  { id: 1, name: "Alice", age: 25, city: "Delhi" },
  { id: 2, name: "Bob", age: 30, city: "Mumbai" },
  { id: 3, name: "Charlie", age: 25, city: "Delhi" },
  { id: 4, name: "David", age: 35, city: "Bangalore" }
];

🔹 1. map() → transform objects

Extract just names:

const names = users.map(u => u.name);
console.log(names); // ["Alice","Bob","Charlie","David"]

🔹 2. filter() → filter objects

Get users from Delhi:

const delhiUsers = users.filter(u => u.city === "Delhi");
console.log(delhiUsers);
// [ {id:1,name:"Alice",...}, {id:3,name:"Charlie",...} ]

🔹 3. find() → first match

Find user with age 30:

const bob = users.find(u => u.age === 30);
console.log(bob); // {id:2, name:"Bob", age:30, city:"Mumbai"}

🔹 4. some() / every()

Check if any user is from Bangalore:

users.some(u => u.city === "Bangalore"); // true


Check if all users are 18+:

users.every(u => u.age >= 18); // true

🔹 5. reduce() → aggregate values

Sum of ages:

const totalAge = users.reduce((sum, u) => sum + u.age, 0);
console.log(totalAge); // 115


Group by city:

const grouped = users.reduce((acc, u) => {
  (acc[u.city] = acc[u.city] || []).push(u);
  return acc;
}, {});
console.log(grouped);
// { Delhi: [...], Mumbai: [...], Bangalore: [...] }

🔹 6. sort()

Sort users by age:

const sorted = [...users].sort((a, b) => a.age - b.age);
console.log(sorted.map(u => u.name)); 
// ["Alice","Charlie","Bob","David"]

🔹 7. findIndex()

Find index of user named "Charlie":

const index = users.findIndex(u => u.name === "Charlie");
console.log(index); // 2

🔹 8. flatMap()

Extract all cities (with duplicates):

const cities = users.flatMap(u => [u.city]);
console.log(cities); // ["Delhi","Mumbai","Delhi","Bangalore"]

🔹 9. Set + map → unique values

Unique cities:

const uniqueCities = [...new Set(users.map(u => u.city))];
console.log(uniqueCities); // ["Delhi","Mumbai","Bangalore"]

🔹 10. Object utilities with arrays

Convert to lookup by id:

const byId = Object.fromEntries(users.map(u => [u.id, u]));
console.log(byId[2]); 
// { id: 2, name: "Bob", age: 30, city: "Mumbai" }

✅ Quick Summary (Cheat Sheet)
Function	Use Case
.map()	Extract/transform fields
.filter()	Filter objects based on condition
.find()	Get first matching object
.findIndex()	Get index of first match
.some()	Check if any object matches
.every()	Check if all match
.reduce()	Aggregate (sum, group, count)
.sort()	Sort objects by property
.flatMap()	Flatten + map
Set + map	Unique values of a property
Object.fromEntries()	Convert to dictionary lookup



🚀 Top 20 JavaScript Coding Round Questions
# 1. Reverse a String

function reverseString(str) {

  return str.split('').reverse().join('');
  
}
console.log(reverseString("hello")); // "olleh"


# 2. Check if a String is a Palindrome

function isPalindrome(str) {

  return str === str.split('').reverse().join('');
  
}

console.log(isPalindrome("madam")); // true

# 3. Find the Largest Number in an Array

function findMax(arr) {

  return Math.max(...arr);
  
}

console.log(findMax([1, 5, 2, 9])); // 9


# 4. Find the Second Largest Number in an Array

function secondLargest(arr) {

  let unique = [...new Set(arr)];
  
  unique.sort((a, b) => b - a);
  
  return unique[1];
  
}

console.log(secondLargest([10, 20, 30, 20])); // 20


# 5. Remove Duplicates from an Array

function removeDuplicates(arr) {

  return [...new Set(arr)];
  
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1,2,3,4]


# 6. Flatten a Nested Array

function flatten(arr) {

  return arr.flat(Infinity);
  
}

console.log(flatten([1, [2, [3, 4]], 5])); // [1,2,3,4,5]


# 7. Find the Missing Number in an Array (1–n)

function missingNumber(arr, n) {

  let sum = (n * (n + 1)) / 2;
  
  return sum - arr.reduce((a, b) => a + b, 0);
  
}

console.log(missingNumber([1, 2, 4, 5], 5)); // 3


# 8. Find First Non-Repeating Character

function firstUniqueChar(str) {

  for (let char of str) {
  
    if (str.indexOf(char) === str.lastIndexOf(char)) return char;
    
  }
  return null;
}

console.log(firstUniqueChar("swiss")); // w


# 9. Count Character Frequency

function charCount(str) {

  let map = {};
  
  for (let char of str) {
  
    map[char] = (map[char] || 0) + 1;
    
  }
  
  return map;
  
}
console.log(charCount("hello")); // {h:1, e:1, l:2, o:1}


# 10. Check for Anagrams

function isAnagram(str1, str2) {

  return str1.split('').sort().join('') === str2.split('').sort().join('');
  
}

console.log(isAnagram("listen", "silent")); // true


# 11. Find Intersection of Two Arrays

function intersection(arr1, arr2) {

  return arr1.filter(num => arr2.includes(num));
  
}

console.log(intersection([1,2,3], [2,3,4])); // [2,3]


# 12. Sum of All Pairs Equal to Target

function twoSum(arr, target) {

  let map = {};
  
  for (let num of arr) {
  
    let diff = target - num;
    
    if (map[diff]) return [diff, num];
    
    map[num] = true;
    
  }
  
}

console.log(twoSum([2,7,11,15], 9)); // [2,7]


# 13. Debounce Function
    
function debounce(fn, delay) {

  let timer;
  
  return function(...args) {
  
    clearTimeout(timer);
    
    timer = setTimeout(() => fn(...args), delay);
    
  };
}

# 15. Throttle Function

function throttle(fn, delay) {

  let last = 0;
  
  return function(...args) {
  
    let now = Date.now();
    
    if (now - last >= delay) {
    
      fn(...args);
      last = now;
      
    }
  };
}


# 16. Deep Clone an Object

function deepClone(obj) {

  return JSON.parse(JSON.stringify(obj));
  
}
console.log(deepClone({a:1, b:{c:2}}));


# 17. Implement a Custom bind

Function.prototype.myBind = function(context, ...args) {

  let fn = this;
  
  return function(...newArgs) {
  
    return fn.apply(context, [...args, ...newArgs]);
    
  };
  
};

# 18. Implement a Custom map

Array.prototype.myMap = function(callback) {

  let result = [];
  for (let i = 0; i < this.length; i++) {
  
    result.push(callback(this[i], i, this));
    
  }
  return result;
  
};

# 19. Find the Longest Substring Without Repeating Characters

function longestSubstring(str) {

  let set = new Set();
  
  let left = 0, max = 0;
  
  for (let right = 0; right < str.length; right++) {
  
    while (set.has(str[right])) {
    
      set.delete(str[left++]);
      
    }
    
    set.add(str[right]);
    
    max = Math.max(max, right - left + 1);
    
  }
  
  return max;
}
console.log(longestSubstring("abcabcbb")); // 3


# 20. Implement Memoization

function memoize(fn) {

  let cache = {};
  
  return function(...args) {
  
    let key = JSON.stringify(args);
    
    if (cache[key]) return cache[key];
    
    cache[key] = fn(...args);
    
    return cache[key];
    
  };
  
}


# 21. Promise All Polyfill

function myPromiseAll(promises) {

  return new Promise((resolve, reject) => {
  
    let results = [];
    let completed = 0;
    
    promises.forEach((p, i) => {
    
      Promise.resolve(p).then(res => {
      
        results[i] = res;
        completed++;
        
        if (completed === promises.length) resolve(results);
      }).catch(reject);
      
    });
  });
}

# 22 First Non-Repeating Character

function firstUniqueChar(str) {

  const freq = {};
  for (let ch of str) freq[ch] = (freq[ch] || 0) + 1;
  
  for (let i = 0; i < str.length; i++) {
  
    if (freq[str[i]] === 1) return str[i];
    
  }
  
  return null;
  
}
console.log(firstUniqueChar("swiss")); // "w"


# 23. FizzBuzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let out = "";
    if (i % 3 === 0) out += "Fizz";
    if (i % 5 === 0) out += "Buzz";
    console.log(out || i);
  }
}
fizzBuzz(15);

# 24 . Factorial (Recursive)

function factorial(n) {

  if (n <= 1) return 1;
  return n * factorial(n - 1);
  
}

# 25 Prime Number Check

function isPrime(n) {

  if (n <= 1) return false;
  
  for (let i = 2; i * i <= n; i++) {
  
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(29)); // true
console.log(factorial(5)); // 120

# 26 Fibonacci Sequence

function fibonacci(n) {

  const seq = [0, 1];
  
  for (let i = 2; i < n; i++) {
  
    seq.push(seq[i - 1] + seq[i - 2]);
    
  }
  return seq.slice(0, n);
}

console.log(fibonacci(7)); // [0,1,1,2,3,5,8]

# 27 . Sum of Digits

function sumDigits(num) {

  return num.toString().split("").reduce((s, d) => s + +d, 0);
  
}

console.log(sumDigits(1234)); // 10

# 28 11. Find Max Number

function findMax(arr) {

  return Math.max(...arr);
  
}

console.log(findMax([1, 7, 3, 9])); // 9

# 29 . Remove Duplicates

function removeDuplicates(arr) {

  return [...new Set(arr)];
  
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1,2,3,4]

# 30 Find Missing Number
function findMissing(arr) {
  const n = arr.length + 1;
  const sum = (n * (n + 1)) / 2;
  return sum - arr.reduce((a, b) => a + b, 0);
}
console.log(findMissing([1, 2, 4, 5])); // 3

# 31 Intersection of Two Arrays

function intersect(arr1, arr2) {

  return arr1.filter(x => arr2.includes(x));
  
}

console.log(intersect([1,2,3], [2,3,4])); // [2,3]

# 32 Rotate Array by K

function rotateArray(arr, k) {

  k = k % arr.length;
  
  return arr.slice(-k).concat(arr.slice(0, -k));
  
}

console.log(rotateArray([1,2,3,4,5], 2)); // [4,5,1,2,3]

# 33  Deep Clone an Object

function deepClone(obj) {

  return JSON.parse(JSON.stringify(obj));
  
}

console.log(deepClone({a:1, b:{c:2}})); // {a:1, b:{c:2}}

# 34 Merge Two Objects

function mergeObjects(obj1, obj2) {

  return {...obj1, ...obj2};
  
}

console.log(mergeObjects({a:1}, {b:2})); // {a:1, b:2}

# 35 Count Keys in Object

function countKeys(obj) {

  return Object.keys(obj).length;
  
}

console.log(countKeys({a:1, b:2, c:3})); // 3

# 36 Check if Object is Empty

function isEmpty(obj) {

  return Object.keys(obj).length === 0;
  
}

console.log(isEmpty({})); // true

# 37 Group By Property

function groupBy(arr, key) {

  return arr.reduce((res, obj) => {
  
    const val = obj[key];
    
    res[val] = res[val] || [];
    res[val].push(obj);
    return res;
    
  }, {});
  
}

console.log(groupBy([{type:"fruit", name:"apple"}, {type:"fruit", name:"banana"}, {type:"veg", name:"carrot"}], "type"));

// { fruit: [{...}, {...}], veg: [{...}] }




# 🚀 20 Top HackerRank Coding Questions (with Solutions in JavaScript)
1. Two Sum Problem

# Find indices of two numbers that add up to a target.

function twoSum(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map[diff] !== undefined) return [map[diff], i];
    map[nums[i]] = i;
  }
}
console.log(twoSum([2,7,11,15], 9)); // [0,1]

# 2. Reverse a Linked List
function reverseList(head) {
  let prev = null, curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

# 3. Valid Parentheses
function isValid(s) {
  let stack = [];
  let map = {')':'(', '}':'{', ']':'['};
  for (let ch of s) {
    if (!map[ch]) stack.push(ch);
    else if (stack.pop() !== map[ch]) return false;
  }
  return stack.length === 0;
}
console.log(isValid("()[]{}")); // true

# 4. Maximum Subarray Sum (Kadane’s Algorithm)
function maxSubArray(nums) {
  let max = nums[0], curr = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curr = Math.max(nums[i], curr + nums[i]);
    max = Math.max(max, curr);
  }
  return max;
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6

# 5. Climbing Stairs (DP Fibonacci)
function climbStairs(n) {
  let a = 1, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}
console.log(climbStairs(5)); // 8

# 6. Merge Intervals
function merge(intervals) {
  intervals.sort((a,b) => a[0]-b[0]);
  let res = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let last = res[res.length-1];
    if (intervals[i][0] <= last[1]) {
      last[1] = Math.max(last[1], intervals[i][1]);
    } else {
      res.push(intervals[i]);
    }
  }
  return res;
}

# 7. Product of Array Except Self
function productExceptSelf(nums) {
  let n = nums.length;
  let left = Array(n).fill(1), right = Array(n).fill(1), res = [];
  for (let i = 1; i < n; i++) left[i] = left[i-1] * nums[i-1];
  for (let i = n-2; i >= 0; i--) right[i] = right[i+1] * nums[i+1];
  for (let i = 0; i < n; i++) res[i] = left[i] * right[i];
  return res;
}
console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]

# 8. Rotate Matrix 90°
function rotate(matrix) {
  let n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let row of matrix) row.reverse();
  return matrix;
}

# 9. Search in Rotated Sorted Array
function search(nums, target) {
  let l = 0, r = nums.length-1;
  while (l <= r) {
    let mid = Math.floor((l+r)/2);
    if (nums[mid] === target) return mid;
    if (nums[l] <= nums[mid]) {
      if (target >= nums[l] && target < nums[mid]) r = mid-1;
      else l = mid+1;
    } else {
      if (target > nums[mid] && target <= nums[r]) l = mid+1;
      else r = mid-1;
    }
  }
  return -1;
}

# 10. Coin Change (DP)
function coinChange(coins, amount) {
  let dp = Array(amount+1).fill(Infinity);
  dp[0] = 0;
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i-coin]+1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}

# 11. Trapping Rain Water
function trap(height) {
  let l = 0, r = height.length-1, leftMax = 0, rightMax = 0, water = 0;
  while (l < r) {
    if (height[l] < height[r]) {
      leftMax = Math.max(leftMax, height[l]);
      water += leftMax - height[l];
      l++;
    } else {
      rightMax = Math.max(rightMax, height[r]);
      water += rightMax - height[r];
      r--;
    }
  }
  return water;
}

# 12. Longest Palindromic Substring
function longestPalindrome(s) {
  let res = "";
  function expand(l,r) {
    while (l>=0 && r<s.length && s[l]===s[r]) {
      if (r-l+1 > res.length) res = s.slice(l, r+1);
      l--; r++;
    }
  }
  for (let i=0; i<s.length; i++) {
    expand(i,i); 
    expand(i,i+1);
  }
  return res;
}

# 13. Maximum Profit from Stock Prices
function maxProfit(prices) {
  let minPrice = prices[0], profit = 0;
  for (let p of prices) {
    minPrice = Math.min(minPrice, p);
    profit = Math.max(profit, p - minPrice);
  }
  return profit;
}

# 14. Find Duplicate Number (Cycle Detection)
function findDuplicate(nums) {
  let slow = nums[0], fast = nums[0];
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}

# 15. Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
  let set = new Set(), l = 0, max = 0;
  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) set.delete(s[l++]);
    set.add(s[r]);
    max = Math.max(max, r-l+1);
  }
  return max;
}

# 16. Minimum Window Substring
function minWindow(s, t) {
  let need = {}, have = {}, count = 0, start = 0, minLen = Infinity, res = "";
  for (let ch of t) need[ch] = (need[ch]||0)+1;
  for (let end = 0; end < s.length; end++) {
    let ch = s[end];
    have[ch] = (have[ch]||0)+1;
    if (have[ch] <= need[ch]) count++;
    while (count === t.length) {
      if (end-start+1 < minLen) {
        minLen = end-start+1;
        res = s.slice(start,end+1);
      }
      have[s[start]]--;
      if (have[s[start]] < need[s[start]]) count--;
      start++;
    }
  }
  return res;
}

# 17. Find Peak Element
function findPeakElement(nums) {
  let l=0, r=nums.length-1;
  while (l<r) {
    let mid = Math.floor((l+r)/2);
    if (nums[mid] > nums[mid+1]) r=mid;
    else l=mid+1;
  }
  return l;
}

# 18. Word Break (DP)
function wordBreak(s, wordDict) {
  let set = new Set(wordDict), dp = Array(s.length+1).fill(false);
  dp[0] = true;
  for (let i=1; i<=s.length; i++) {
    for (let j=0; j<i; j++) {
      if (dp[j] && set.has(s.slice(j,i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
}

# 19. House Robber (DP)
function rob(nums) {
  let prev1 = 0, prev2 = 0;
  for (let n of nums) {
    let temp = prev1;
    prev1 = Math.max(prev2+n, prev1);
    prev2 = temp;
  }
  return prev1;
}

# 20. Median of Two Sorted Arrays
function findMedianSortedArrays(a, b) {
  let arr = [...a, ...b].sort((x,y)=>x-y);
  let n = arr.length;
  return n%2 ? arr[Math.floor(n/2)] : (arr[n/2-1]+arr[n/2])/2;
}


✅ These are 20 of the most common HackerRank questions that test algorithms, DP, strings, arrays, and math — the core interview prep set.


Minimum Window Substring (sliding window hardest version)
# 50 Problems → LeetCode Links + Hints (quick reference)

Two Sum — https://leetcode.com/problems/two-sum/

Hint: Hash map for complement → O(n) time, O(n) space.


Reverse a String — https://leetcode.com/problems/reverse-string/

Hint: Two-pointer swap or built-ins → O(n) time, O(1) extra.


Valid Parentheses — https://leetcode.com/problems/valid-parentheses/

Hint: Stack, mapping pairs → O(n) time, O(n) space.


Merge Intervals — https://leetcode.com/problems/merge-intervals/

Hint: Sort by start, merge overlapping → O(n log n) time.


Maximum Subarray (Kadane) — https://leetcode.com/problems/maximum-subarray/

Hint: Running max/current sum → O(n) time, O(1) space.


Product of Array Except Self — https://leetcode.com/problems/product-of-array-except-self/

Hint: Prefix & suffix products (no division) → O(n) time, O(1) extra.


Rotate Image (matrix 90°) — https://leetcode.com/problems/rotate-image/

Hint: Transpose + reverse rows → O(n²) time, O(1) space.


Search in Rotated Sorted Array — https://leetcode.com/problems/search-in-rotated-sorted-array/

Hint: Modified binary search with partition check → O(log n).


Climbing Stairs — https://leetcode.com/problems/climbing-stairs/

Hint: Fibonacci DP iterative → O(n) time, O(1) space.


Longest Substring Without Repeating Characters — https://leetcode.com/problems/longest-substring-without-repeating-characters/

Hint: Sliding window + set / map → O(n) time.


Group Anagrams — https://leetcode.com/problems/group-anagrams/

Hint: Sort string or char-count signature as key → O(n * k log k) or O(nk).


Valid Anagram — https://leetcode.com/problems/valid-anagram/

Hint: Frequency maps or sort → O(n) time.


First Unique Character in a String — https://leetcode.com/problems/first-unique-character-in-a-string/

Hint: Count freq then scan → O(n) time.


Two Sum (Indices) — (same as #1) — https://leetcode.com/problems/two-sum/

Hint: same as above.


Subarray Sum Equals K — https://leetcode.com/problems/subarray-sum-equals-k/

Hint: Prefix sum + hashmap of prefix counts → O(n) time.


Longest Palindromic Substring — https://leetcode.com/problems/longest-palindromic-substring/

Hint: Expand-around-center or Manacher’s → O(n²) or O(n).


Word Break — https://leetcode.com/problems/word-break/

Hint: DP on positions / reachable indices → O(n² * k) depending on dict.


Word Break II — https://leetcode.com/problems/word-break-ii/

Hint: DFS + memoization to build sentences → prune with DP reachable check.


Minimum Window Substring — https://leetcode.com/problems/minimum-window-substring/

Hint: Sliding window with need/have counters → O(n) average.


Coin Change — https://leetcode.com/problems/coin-change/

Hint: DP 1D min-coin count → O(amount * coins).


Trapping Rain Water — https://leetcode.com/problems/trapping-rain-water/

Hint: Two-pointer left/right maintaining leftMax/rightMax → O(n).


Find Peak Element — https://leetcode.com/problems/find-peak-element/

Hint: Binary search comparing mid & neighbors → O(log n).


Search a 2D Matrix / Matrix search — https://leetcode.com/problems/search-a-2d-matrix/

Hint: Flatten index math or binary search per row → O(log(mn)).


Merge K Sorted Lists — https://leetcode.com/problems/merge-k-sorted-lists/

Hint: Min-heap (priority queue) or divide & conquer → O(n log k).


Serialize and Deserialize Binary Tree — https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

Hint: BFS/DFS with null markers; use queue for BFS decode.


Binary Tree Inorder Traversal — https://leetcode.com/problems/binary-tree-inorder-traversal/

Hint: Stack iterative or recursion → O(n).


Validate Binary Search Tree — https://leetcode.com/problems/validate-binary-search-tree/

Hint: DFS with min/max bounds → O(n).


Lowest Common Ancestor of BST — https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

Hint: Use BST properties and traverse from root → O(h).


LRU Cache (Design) — https://leetcode.com/problems/lru-cache/

Hint: Doubly-linked list + hashmap for O(1) ops.


N-Queens — https://leetcode.com/problems/n-queens/

Hint: Backtracking with column/diag sets → prune aggressively.


Kth Largest Element in an Array — https://leetcode.com/problems/kth-largest-element-in-an-array/

Hint: Quickselect (avg O(n)) or heap (O(n log k)).


Top K Frequent Elements — https://leetcode.com/problems/top-k-frequent-elements/

Hint: Hashmap + bucket sort or heap → O(n).


Minimum Path Sum (grid DP) — https://leetcode.com/problems/minimum-path-sum/

Hint: DP accumulating min path per cell → O(mn).


Number of Islands — https://leetcode.com/problems/number-of-islands/

Hint: DFS/BFS flood-fill to count components → O(mn).


Word Ladder — https://leetcode.com/problems/word-ladder/

Hint: BFS from begin word; transform by single-letter variations → O(N * L²).


Longest Increasing Subsequence (LIS) — https://leetcode.com/problems/longest-increasing-subsequence/

Hint: DP O(n²) or patience sorting using binary search O(n log n).


House Robber — https://leetcode.com/problems/house-robber/

Hint: DP with two-state rolling variables → O(n).


Best Time to Buy and Sell Stock — https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

Hint: Track min price so far and max profit → O(n).


Find Duplicate Number (Floyd’s cycle detection) — https://leetcode.com/problems/find-the-duplicate-number/

Hint: Treat indices as pointers → cycle detection O(n).


Median of Two Sorted Arrays — https://leetcode.com/problems/median-of-two-sorted-arrays/

Hint: Binary search partitioning → O(log min(m,n)).


Implement Trie (Prefix Tree) — https://leetcode.com/problems/implement-trie-prefix-tree/

Hint: Node children map + isWord flag; insert/search/triePrefix.


Serialize and Deserialize Binary Search Tree — https://leetcode.com/problems/serialize-and-deserialize-bst/

Hint: BST-specific serialization using preorder + bounds to reconstruct.


Dutch National Flag / Sort Colors — https://leetcode.com/problems/sort-colors/

Hint: Three-way partitioning (low, mid, high pointers) O(n).


Flatten Nested List Iterator — https://leetcode.com/problems/flatten-nested-list-iterator/

Hint: Stack-based lazy flattening or fully flatten list.


Basic Calculator / Expression Evaluation — https://leetcode.com/problems/basic-calculator/

Hint: Stack for numbers and signs, handle parentheses.


Sliding Window Maximum — https://leetcode.com/problems/sliding-window-maximum/

Hint: Deque (monotonic queue) → O(n).


K Closest Points to Origin — https://leetcode.com/problems/k-closest-points-to-origin/

Hint: Quickselect or heap → O(n) avg.


Course Schedule (Detect cycle in directed graph) — https://leetcode.com/problems/course-schedule/

Hint: Topological sort / DFS cycle detection → O(V+E).


Minimum Number of Platforms (Train platform / intervals variant) — https://www.hackerrank.com/
 (HackerRank has variants)
Hint: Sort arrival & departure arrays separately, sweep to find max concurrent trains → O(n log n).


Minimum Window Subsequence / Hard window variant — https://leetcode.com/problems/minimum-window-subsequence/
 (related)
Hint: DP or two-pass greedy expand+contract to track subsequence window → tricky O(n * m) naive.


# Q1: What do you mean by Asynchronous API? 

Answer: All APIs of Node.js library are aynchronous that is non-blocking. It essentially means a Node.js based server never waits for a API to return data. Server moves to next API after calling it and a notification mechanism of Events of Node.js helps server to get response from the previous API call.

Source: tutorialspoint.com

# Q2: What are the benefits of using Node.js? ☆☆

Answer: Following are main benefits of using Node.js

Aynchronous and Event Driven - All APIs of Node.js library are aynchronous that is non-blocking. 
It essentially means a Node.js based server never waits for a API to return data. Server moves to next API after calling it and a notification mechanism of Events of Node.js helps server to get response from the previous API call.

Very Fast - Being built on Google Chrome's V8 JavaScript Engine, Node.js library is very fast in code execution.

Single Threaded but highly Scalable - Node.js uses a single threaded model with event looping. Event mechanism helps server to respond in a non-bloking ways and makes server highly scalable as opposed to traditional servers which create limited threads to handle requests.
Node.js uses a single threaded program and same program can services much larger number of requests than traditional server like Apache HTTP Server.

No Buffering - Node.js applications never buffer any data. These applications simply output the data in chunks.
Source: tutorialspoint.com

# Q3: Is Node a single threaded application? ☆☆

Answer: Yes! Node uses a single threaded model with event looping.

Source: tutorialspoint.com

# Q4: What is global installation of dependencies? ☆☆

Answer: Globally installed packages/dependencies are stored in /npm directory. 
Such dependencies can be used in CLI (Command Line Interface) function of any node.js but can not be imported using require() in Node application directly. To install a Node project globally use -g flag.

Source: tutorialspoint.com

# Q5: What is an error-first callback? ☆☆

Answer: Error-first callbacks are used to pass errors and data. The first argument is always an error object that the programmer has to check if something went wrong. Additional arguments are used to pass data.

fs.readFile(filePath, function(err, data) {
  if (err) {
    //handle the error
  }
  // use the data object
});
Source: tutorialspoint.com

# Q6: What's the difference between operational and programmer errors? ☆☆

Answer: Operation errors are not bugs, but problems with the system, like request timeout or hardware failure. On the other hand programmer errors are actual bugs.

Source: blog.risingstack.com

# Q7: What is the difference between Nodejs, AJAX, and jQuery? ☆☆

Answer: The one common trait between Node.js, AJAX, and jQuery is that all of them are the advanced implementation of JavaScript. However, they serve completely different purposes.

Node.js –It is a server-side platform for developing client-server applications. For example, if we’ve to build an online employee management system, then we won’t do it using client-side JS. But the Node.js can certainly do it as it runs on a server similar to Apache, Django not in a browser.

AJAX (aka Asynchronous Javascript and XML) –It is a client-side scripting technique, primarily designed for rendering the contents of a page without refreshing it. There are a no. of large companies utilizing AJAX such as Facebook and Stack Overflow to display dynamic content.

jQuery –It is a famous JavaScript module which complements AJAX, DOM traversal, looping and so on. This library provides many useful functions to help in JavaScript development. However, it’s not mandatory to use it but as it also manages cross-browser compatibility, so can help you produce highly maintainable web applications.

Source: techbeamers.com

# Q8: How to make Post request in Node.js? ☆☆

Answer: Following code snippet can be used to make a Post Request in Node.js.

var request = require('request');
request.post('http://www.example.com/action', {
  form: {
    key: 'value'
  }
}, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body)
  }
});
Source: techbeamers.com

# Q9: What are the key features of Node.js? ☆☆
Answer: Let’s look at some of the key features of Node.js.

Asynchronous event driven IO helps concurrent request handling – All APIs of Node.js are asynchronous. This feature means that if a Node receives a request for some Input/Output operation, it will execute that operation in the background and continue with the processing of other requests. Thus it will not wait for the response from the previous requests.

# Fast in Code execution –
 Node.js uses the V8 JavaScript Runtime engine, the one which is used by Google Chrome. Node has a wrapper over the JavaScript engine which makes the runtime engine much faster and hence processing of requests within Node.js also become faster.

# Single Threaded but Highly Scalable – 
Node.js uses a single thread model for event looping. The response from these events may or may not reach the server immediately. However, this does not block other operations. Thus making Node.js highly scalable. Traditional servers create limited threads to handle requests while Node.js creates a single thread that provides service to much larger numbers of such requests.

# Node.js library uses JavaScript – 
This is another important aspect of Node.js from the developer’s point of view. The majority of developers are already well-versed in JavaScript. Hence, development in Node.js becomes easier for a developer who knows JavaScript.

There is an Active and vibrant community for the Node.js framework – The active community always keeps the framework updated with the latest trends in the web development.

# No Buffering – 
Node.js applications never buffer any data. They simply output the data in chunks.
Source: techbeamers.com

# Q10: What is control flow function? ☆☆

Answer: It is a generic piece of code which runs in between several asynchronous function calls is known as control flow function.

In JavaScript, a control flow function isn’t a special keyword or reserved term in the language — instead, it refers to a pattern of handling asynchronous operations in a structured way.

👉 In simple words: a control flow function helps you manage the order in which multiple async functions (callbacks, promises, async/await) execute, and how their results/errors are handled.

✅ Why do we need control flow functions?

JavaScript is non-blocking and uses an event loop.
When you have multiple asynchronous tasks (like DB queries, API calls, file reads), you often need to:

Run them in sequence (one after the other).

Run them in parallel (all at once).

Run until a condition is met.

Handle errors properly.

If you just nest callbacks → you get callback hell.
Control flow functions (or libraries like async.js, or using Promise.all, async/await) help solve this.

Source: lazyquestion.com

# Q11: What are Event ? ☆☆

Events in Node.js are just like real-world signals (e.g., "door opened", "message received").

Node.js uses the EventEmitter class from the events module to create, listen to, and fire (emit) events.

It follows the Observer pattern:

Emitter → raises an event.

Listener → reacts to the event.

This is the backbone of Node.js’s asynchronous and non-blocking architecture (e.g., http server request, streams, sockets).

Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.

For instance: a net.Server object emits an event each time a peer connects to it; a fs.ReadStream emits an event when the file is opened; a stream emits an event whenever data is available to be read.

All objects that emit events are instances of the EventEmitter class. These objects expose an eventEmitter.on() function that allows one or more functions to be attached to named events emitted by the object. Typically, event names are camel-cased strings but any valid JavaScript property key can be used.

When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously. Any values returned by the called listeners are ignored and discarded.

The following example shows a simple EventEmitter instance with a single listener. The eventEmitter.on() method is used to register listeners, while the eventEmitter.emit() method is used to trigger the event.

const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');
Passing arguments and this to listeners#
The eventEmitter.emit() method allows an arbitrary set of arguments to be passed to the listener functions. Keep in mind that when an ordinary listener function is called, the standard this keyword is intentionally set to reference the EventEmitter instance to which the listener is attached.

const EventEmitter = require('node:events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', function(a, b) {
  console.log(a, b, this, this === myEmitter);
  // Prints:
  //   a b MyEmitter {
  //     _events: [Object: null prototype] { event: [Function (anonymous)] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined,
  //     [Symbol(shapeMode)]: false,
  //     [Symbol(kCapture)]: false
  //   } true
});
myEmitter.emit('event', 'a', 'b');
Answer: Event Listeners are similar to call back functions but are associated with some event. For example when a server listens to http request on a given port a event will be generated and to specify http server has received and will invoke corresponding event listener. Basically, Event listener's are also call backs for a corresponding event.

Node.js has built in event's and built in event listeners. Node.js also provides functionality to create Custom events and Custom Event listeners.

Source: lazyquestion.com

# Q12: If Node.js is single threaded then how it handles concurrency? ☆☆

Answer: Node provides a single thread to programmers so that code can be written easily and without bottleneck. Node internally uses multiple POSIX threads for various I/O operations such as File, DNS, Network calls etc.

When Node gets I/O request it creates or uses a thread to perform that I/O operation and once the operation is done, it pushes the result to the event queue. On each such event, event loop runs and checks the queue and if the execution stack of Node is empty then it adds the queue result to execution stack.

This is how Node manages concurrency.

Source: codeforgeek.com

# Q13: What is Callback Hell? ☆☆
Answer: The asynchronous function requires callbacks as a return parameter. When multiple asynchronous functions are chained together then callback hell situation comes up.

Source: codeforgeek.com

# Q14: Could we run an external process with Node.js? ☆☆

Answer: Yes. Child process module enables us to access operating system functionaries or other apps. Scalability is baked into Node and child processes are the key factors to scale our application. You can use child process to run system commands, read large files without blocking event loop, decompose the application into various “nodes” (That’s why it’s called Node).

Child process module has following three major ways to create child processes –

spawn - child_process.spawn launches a new process with a given command.
exec - child_process.exec method runs a command in a shell/console and buffers the output.
fork - The child_process.fork method is a special case of the spawn() to create child processes.
Source: codeforgeek.com

# Q15: List out the differences between AngularJS and NodeJS? ☆☆
Answer: AngularJS is a web application development framework. It’s a JavaScript and it is different from other web app frameworks written in JavaScript like jQuery. NodeJS is a runtime environment used for building server-side applications while AngularJS is a JavaScript framework mainly useful in building/developing client-side part of applications which run inside a web browser.

Source: a4academics.com

# Q16: How you can monitor a file for modifications in Node.js ? ☆☆
Answer: We can take advantage of File System watch() function which watches the changes of the file.

Source: codingdefined.com

# Q17: What are the core modules of Node,js? ☆☆
Answer:

EventEmitter

Stream

FS

Net

Global Objects

Source: github.com/jimuyouyou

# Q18: What is V8? ☆☆
Answer: The V8 library provides Node.js with a JavaScript engine (a program that converts Javascript code into lower level or machine code that microprocessors can understand), which Node.js controls via the V8 C++ API. V8 is maintained by Google, for use in Chrome.

The Chrome V8 engine :

The V8 engine is written in C++ and used in Chrome and Nodejs.
It implements ECMAScript as specified in ECMA-262.
The V8 engine can run standalone we can embed it with our own C++ program.
Source: nodejs.org

# Q19: What is libuv? ☆☆

Answer: libuv is a C library that is used to abstract non-blocking I/O operations to a consistent interface across all supported platforms.
It provides mechanisms to handle file system, DNS, network, child processes, pipes, signal handling, polling and streaming. It also includes a thread pool for offloading work for some things that can't be done asynchronously at the operating system level.

Source: nodejs.org

Q20: What is the difference between returning a callback and just calling a callback? ☆☆
Answer:

return callback();
//some more lines of code; -  won't be executed

callback();
//some more lines of code; - will be executed
Of course returning will help the context calling async function get the value returned by callback.

function do2(callback) {
    log.trace('Execute function: do2');
    return callback('do2 callback param');
}

var do2Result = do2((param) => {
    log.trace(`print ${param}`);
    return `return from callback(${param})`; // we could use that return
});

log.trace(`print ${do2Result}`);
Output:

C:\Work\Node>node --use-strict main.js
[0] Execute function: do2
[0] print do2 callback param
[0] print return from callback(do2 callback param)
Source: stackoverflow.com

# Q21: What is REPL in context of Node? ☆☆☆

Answer: REPL stands for Read Eval Print Loop and it represents a computer environment like a window console or unix/linux shell where a command is entered and system responds with an output. Node.js or Node comes bundled with a REPL environment. It performs the following desired tasks.

Read - Reads user's input, parse the input into JavaScript data-structure and stores in memory.
Eval - Takes and evaluates the data structure
Print - Prints the result
Loop - Loops the above command until user press ctrl-c twice.
Source: tutorialspoint.com

# Q22: What is Callback? ☆☆☆
Answer: Callback is an asynchronous equivalent for a function. A callback function is called at the completion of a given task. Node makes heavy use of callbacks. All APIs of Node are written is such a way that they supports callbacks.

For example, a function to read a file may start reading file and return the control to execution environment immediately so that next instruction can be executed. Once file I/O is complete, it will call the callback function while passing the callback function, the content of the file as parameter. So there is no blocking or wait for File I/O.

This makes Node.js highly scalable, as it can process high number of request without waiting for any function to return result.

Source: tutorialspoint.com

# Q23: What is a blocking code? ☆☆☆

Answer: If application has to wait for some I/O operation in order to complete its execution any further then the code responsible for waiting is known as blocking code.

Source: tutorialspoint.com

# Q24: How Node prevents blocking code? ☆☆☆

Answer: By providing callback function. Callback function gets called whenever corresponding event triggered.

Source: tutorialspoint.com

# Q25: What is Event Loop? ☆☆☆

Answer: Node.js is a single threaded application but it support concurrency via concept of event and callbacks. As every API of Node js are asynchronous and being a single thread, it uses async function calls to maintain the concurrency. Node uses observer pattern. Node thread keeps an event loop and whenever any task get completed, it fires the corresponding event which signals the event listener function to get executed.

Source: tutorialspoint.com

# Q26: What is Event Emmitter? ☆☆☆

Answer: All objects that emit events are members of EventEmitter class. These objects expose an eventEmitter.on() function that allows one or more functions to be attached to named events emitted by the object.

When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously.

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');
Source: tutorialspoint.com

# Q27: What is purpose of Buffer class in Node? ☆☆☆

Answer: Buffer class is a global class and can be accessed in application without importing buffer module. A Buffer is a kind of an array of integers and corresponds to a raw memory allocation outside the V8 heap. A Buffer cannot be resized.
If you’re a JavaScript developer who is new to Node.js, you might have come across the term “Buffer” and wondered what it means. In this article, we’ll explain what Buffers are, why they’re important, and how you can use them in your Node.js applications.

So, what exactly is a Buffer? Simply put, a Buffer is a way to store and manipulate binary data in Node.js. Binary data refers to data that consists of binary values, as opposed to text data, which consists of characters and symbols. Examples of binary data include images, audio and video files, and raw data from a network.

Why is this important? The reason is that when you work with binary data, you often need to manipulate it in-memory, which can be difficult and inefficient using JavaScript’s standard data structures. For example, you might need to concatenate two binary data streams, slice a large binary file into smaller pieces, or encode and decode binary data into different character encodings. This is where Buffers come in: they provide a fast and efficient way to store and manipulate binary data in Node.js.

So, how do you use Buffers in Node.js? First, you need to create a Buffer object using the “Buffer” constructor. For example, you might create a Buffer with a fixed size like this:

const myBuffer = Buffer.alloc(10);
Or you might create a Buffer from an existing binary data stream:

const myBuffer = Buffer.from('Hello, world!');
Once you have a Buffer, you can use its various methods to manipulate the binary data it contains. For example, you might use the “slice” method to extract a portion of the binary data:

const slice = myBuffer.slice(0, 5);
console.log(slice.toString()); // Output: "Hello"
You can also use the “concat” method to concatenate two or more Buffers:

const firstBuffer = Buffer.from('Hello, ');
const secondBuffer = Buffer.from('world!');
const combinedBuffer = Buffer.concat([firstBuffer, secondBuffer]);
console.log(combinedBuffer.toString()); // Output: "Hello, world!"
As you can see, Buffers provide a flexible and efficient way to store and manipulate binary data in Node.js. Whether you’re working with images, audio, video, or raw data, you’ll find that Buffers are a powerful tool that can help you build high-performance and scalable applications.



Source: tutorialspoint.com

# Q28: What is difference between synchronous and asynchronous method of fs module? ☆☆☆

Answer:

Every method in fs module has synchronous as well as asynchronous form. Asynchronous methods takes a last parameter as completion function callback and first parameter of the callback function is error. It is preferred to use asynchronous method instead of synchronous method as former never block the program execution where the latter one does.

Source: tutorialspoint.com

# Q29: What are streams? ☆☆☆

Answer:
The official Node.js documentation defines streams as “A stream is an abstract interface for working with streaming data in Node.js.” The stream module provides an API for implementing the stream interface. Examples of the stream object in Node.js can be a request to an HTTP server and process.stdout are both stream instances. In short, Streams are objects in Node.js that lets the user read data from a source or write data to a destination in a continuous manner.
Streams are objects that let you read data from a source or write data to a destination in continuous fashion. In Node.js, there are four types of streams.

Readable - Stream which is used for read operation.
Writable - Stream which is used for write operation.
Duplex - Stream which can be used for both read and write operation.
Transform - A type of duplex stream where the output is computed based on input.
Source: tutorialspoint.com

# Q30: What is Chaining in Node? ☆☆☆
Answer: Chanining is a mechanism to connect output of one stream to another stream and create a chain of multiple stream operations. It is normally used with piping operations.

Source: tutorialspoint.com

# Q31: What is the purpose of setTimeout function? ☆☆☆
Answer: The setTimeout(cb, ms) global function is used to run callback cb after at least ms milliseconds. The actual delay depends on external factors like OS timer granularity and system load. A timer cannot span more than 24.8 days.

Source: tutorialspoint.com

# Q32: How can you avoid callback hells? ☆☆☆
Answer: To do so you have more options:

modularization: break callbacks into independent functions
use Promises
use yield with Generators and/or Promises
Source: tutorialspoint.com

# Q33: What's the event loop? ☆☆☆
Answer: The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.


Every I/O requires a callback - once they are done they are pushed onto the event loop for execution. Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed.

Source: blog.risingstack.com

# Q34: How to avoid callback hell in Node.js? ☆☆☆
Answer: Node.js internally uses a single-threaded event loop to process queued events. But this approach may lead to blocking the entire process if there is a task running longer than expected.

Node.js addresses this problem by incorporating callbacks also known as higher-order functions. So whenever a long-running process finishes its execution, it triggers the callback associated.

sometimes, it could lead to complex and unreadable code. More the no. of callbacks, longer the chain of returning callbacks would be.

There are four solutions which can address the callback hell problem.

Make your program modular

It proposes to split the logic into smaller modules. And then join them together from the main module to achieve the desired result.

Use async mechanism

It is a widely used Node.js module which provides a sequential flow of execution.

The async module has <async.waterfall> API which passes data from one operation to other using the next callback.

Another async API <async.map> allows iterating over a list of items in parallel and calls back with another list of results.

With the async approach, the caller’s callback gets called only once. The caller here is the main method using the async module.

Use promises mechanism

Promises give an alternate way to write async code. They either return the result of execution or the error/exception. Implementing promises requires the use of <.then()> function which waits for the promise object to return. It takes two optional arguments, both functions. Depending on the state of the promise only one of them will get called. The first function call proceeds if the promise gets fulfilled. However, if the promise gets rejected, then the second function will get called.

Use generators

Generators are lightweight routines, they make a function wait and resume via the yield keyword. Generator functions uses a special syntax <function* ()>. They can also suspend and resume asynchronous operations using constructs such as promises or and turn a synchronous code into asynchronous.

Source: techbeamers.com

# Q35: Explain how does Node.js work? ☆☆☆
Answer: A Node.js application creates a single thread on its invocation. Whenever Node.js receives a request, it first completes its processing before moving on to the next request.

Node.js works asynchronously by using the event loop and callback functions, to handle multiple requests coming in parallel. An Event Loop is a functionality which handles and processes all your external events and just converts them to a callback function. It invokes all the event handlers at a proper time. Thus, lots of work is done on the back-end, while processing a single request, so that the new incoming request doesn’t have to wait if the processing is not complete.


While processing a request, Node.js attaches a callback function to it and moves it to the back-end. Now, whenever its response is ready, an event is called which triggers the associated callback function to send this response.

Source: techbeamers.com

# Q36: When should we use Node.js? ☆☆☆
Answer: Node.js is well suited for applications that have a lot of concurrent connections and each request only needs very few CPU cycles, because the event loop (with all the other clients) is blocked during execution of a function. I believe Node.js is best suited for real-time applications: online games, collaboration tools, chat rooms, or anything where what one user (or robot? or sensor?) does with the application needs to be seen by other users immediately, without a page refresh.

Source: techbeamers.com

# Q37: How does Node.js handle child threads? ☆☆☆
Answer: Node.js, in its essence, is a single thread process. It does not expose child threads and thread management methods to the developer. Technically, Node.js does spawn child threads for certain tasks such as asynchronous I/O, but these run behind the scenes and do not execute any application JavaScript code, nor block the main event loop.

If threading support is desired in a Node.js application, there are tools available to enable it, such as the ChildProcess module.

Source: lazyquestion.com

# Q38: What is the preferred method of resolving unhandled exceptions in Node.js?

Answer: Unhandled exceptions in Node.js can be caught at the Process level by attaching a handler for uncaughtException event.

process.on('uncaughtException', function(err) {
  console.log('Caught exception: ' + err);
});
However, uncaughtException is a very crude mechanism for exception handling and may be removed from Node.js in the future. An exception that has bubbled all the way up to the Process level means that your application, and Node.js may be in an undefined state, and the only sensible approach would be to restart everything.

The preferred way is to add another layer between your application and the Node.js process which is called the domain.

Domains provide a way to handle multiple different I/O operations as a single group. So, by having your application, or part of it, running in a separate domain, you can safely handle exceptions at the domain level, before they reach the Process level.

Source: lazyquestion.com

# Q39: What is stream and what are types of streams available in Node.js? ☆☆☆
Answer: Streams are a collection of data that might not be available all at once and don’t have to fit in memory. Streams provide chunks of data in a continuous manner. It is useful to read a large set of data and process it.

There is four fundamental type of streams:

Readable.
Writeable.
Duplex.
Transform.
Readable streams as the name suggest used in reading a large chunk of data from a source. Writable streams are used in writing a large chunk of data to the destination.

Duplex streams are both readable and writable ( Eg socket). Transform stream is the duplex stream which is used in modifying the data (eg zip creation).

Source: codeforgeek.com

# Q40: What are the global objects of Node.js? ☆☆☆
Answer: These objects are available in all modules:

process - The process object is a global that provides information about, and control over, the current Node.js process.
console - Used to print to stdout and stderr.
buffer - Used to handle binary data.
Source: github.com/jimuyouyou

# Q41. How does Node.js handle concurrency if it is single-threaded?

Answer:

Node.js uses a single-threaded event loop and non-blocking I/O via the libuv library.

The main thread handles requests, and I/O operations are delegated to the event loop + worker threads (in the background).

CPU-intensive tasks should be offloaded to worker threads or microservices.

Architect-level note: For heavy workloads, scale horizontally using cluster mode or Kubernetes pods.

# Q42. When would you use Node.js over other backend technologies (e.g., Java, Python)?

Answer:

Use Node.js for:

Real-time apps (chat, gaming, collaboration).

Streaming apps (video/audio).

High I/O, low CPU workloads (API gateways, proxies).

Avoid Node.js for:

CPU-bound tasks (video rendering, ML training).

Architect role: Consider polyglot architecture — mix Node.js with services in Go/Java for CPU-heavy processing.

# Q43. What are Worker Threads and when should you use them in Node.js?

Answer:

Worker Threads allow parallel execution of CPU-intensive tasks in separate threads.

Use when:

Heavy computation blocks the event loop.

Tasks like image processing, encryption, machine learning inference.

Best practice: Use a pool of worker threads instead of spawning new ones frequently.

# Q44. How do you scale a Node.js application across multiple CPU cores?

Answer:

Node.js runs single-threaded by default.

Options:

Cluster Module: Spawns multiple workers, each on a different CPU core.

PM2: Process manager that supports clustering, monitoring, auto-restarts.

Kubernetes/Docker: Horizontal scaling across multiple servers.

Architect-level tip: Use sticky sessions or an external session store (Redis) when clustering.

# Q45. How do you handle large file uploads and streaming in Node.js?

Answer:

Use streams instead of loading the entire file in memory.

Example: fs.createReadStream() and pipe() to process chunks.

Architect note:

For huge files (GBs): Consider chunked uploads + object storage (S3, GCS).

For video streaming: Use range requests and CDN caching.

# Q46. How do you design a scalable logging solution in Node.js?

Answer:

Avoid writing logs directly to files in production.

Use:

Winston, Pino, Bunyan for structured JSON logging.

Log aggregation (ELK Stack, Loki, Datadog).

Correlation IDs for distributed tracing.

Architect-level: Implement OpenTelemetry for tracing across microservices.

# Q47. How do you handle memory leaks in Node.js?

Answer:

Causes:

Unreleased event listeners.

Global variable misuse.

Caching without eviction policies.

Tools:

node --inspect --inspect-brk

Chrome DevTools Heap Snapshots

clinic.js / memwatch

Fix: Use WeakMap/WeakSet for caching, apply LRU cache eviction.

# Q48. What is the difference between process.nextTick(), setImmediate(), and setTimeout()?

Answer:

process.nextTick() → executes before the event loop continues (high priority).

setImmediate() → executes after the current event loop phase.

setTimeout(fn, 0) → schedules on the next event loop tick (but after I/O).

Architect tip: Overusing nextTick() may starve the event loop.

# Q49. How do you secure a Node.js application?

Answer:

Use Helmet.js for HTTP headers.

Rate limiting with Redis or Nginx.

JWT + refresh tokens for authentication.

Avoid eval() / unsafe regex.

Dependency scanning (npm audit, Snyk).

Architect-level: Enforce Zero Trust security model and OWASP best practices.

# Q50. How do you manage environment configuration in Node.js apps?

Answer:

Use .env with dotenv for local.

For production:

Store secrets in Vault / AWS Parameter Store / GCP Secret Manager.

Architect-level: Avoid baking secrets into Docker images; use 12-Factor App principles.

# Q51. Explain the difference between CommonJS and ES Modules in Node.js.

Answer:

CommonJS (require) → synchronous, used in older Node.js.

ESM (import) → async, supports tree-shaking, standard in modern Node.js.

Architect-level: Prefer ESM for microservices but ensure compatibility with legacy modules.

# Q52. How do you optimize Node.js performance under high load?

Answer:

Enable HTTP keep-alive.

Use compression for responses.

Avoid blocking code.

Use load balancing + caching (Redis, CDN).

Architect-level: Implement CQRS + Event-driven design for distributed apps.

# Q53. What is EventEmitter in Node.js and how does it impact memory?

Answer:

EventEmitter is Node’s core pub/sub system.

Pitfalls:

Memory leaks if too many listeners (default max = 10).

Fix:

Use emitter.setMaxListeners(n).

Clean up listeners with removeListener.

# Q54. What’s the difference between fork() and spawn() in Node.js?

Answer:

spawn() → launches a new process.

fork() → special case of spawn() that creates a Node.js child process with IPC channel.

Architect-level: Use fork() for microservices or task runners.

# Q55. How do you handle distributed caching in Node.js?

Answer:

Use Redis / Memcached.

For scaling:

Implement cache invalidation strategies (LRU, TTL, write-through).

Use Redis Cluster for large-scale.

Architect-level: Apply cache-aside pattern.

# Q56. What is the difference between load balancing at the application level vs OS level in Node.js?

Answer:

App-level (cluster, PM2) → Node manages workers.

OS/Infra-level (NGINX, HAProxy, Kubernetes) → External load balancer distributes traffic.

Architect-level: Combine both for resiliency + fault tolerance.

# Q57. How do you implement rate limiting in Node.js APIs?

Answer:

Use middleware like express-rate-limit.

Store counters in Redis for distributed systems.

Architect-level: Use token bucket / leaky bucket algorithms for fairness.

# Q58. How do you implement message queues in Node.js?

Answer:

Use:

RabbitMQ (AMQP)

Kafka (streaming)

Bull.js (Redis-based job queue)

Architect-level: Apply event-driven architecture for microservices.

# Q59. How do you ensure fault tolerance in Node.js microservices?

Answer:

Use circuit breakers (e.g., opossum).

Retry with exponential backoff.

Graceful shutdown with SIGTERM.

Architect-level: Apply bulkhead pattern + service mesh (Istio, Linkerd).

# Q60. What’s your approach to designing a Node.js system for millions of requests per second?

Answer:

API Gateway in front (NGINX/Kong/Express Gateway).

Horizontally scale Node.js services with Kubernetes.

Use Redis + CDN caching.

Split into microservices with event-driven design.

Apply observability (logs, metrics, tracing).

Architect-level: Consider backpressure handling + circuit breaking.

# Q61: What is Piping in Node? ☆☆☆☆
Answer: Piping is a mechanism to connect output of one stream to another stream. It is normally used to get data from one stream and to pass output of that stream to another stream. There is no limit on piping operations.

Source: tutorialspoint.com

# Q62: Name some of the events fired by streams. ☆☆☆☆
Answer: Each type of Stream is an EventEmitter instance and throws several events at different instance of times. For example, some of the commonly used events are:

data - This event is fired when there is data is available to read.
end - This event is fired when there is no more data to read.
error - This event is fired when there is any error receiving or writing data.
finish - This event is fired when all data has been flushed to underlying system
Source: tutorialspoint.com

# Q63: What is the purpose of __filename variable? ☆☆☆☆
Answer: The __filename represents the filename of the code being executed. This is the resolved absolute path of this code file. For a main program this is not necessarily the same filename used in the command line. The value inside a module is the path to that module file.

Source: tutorialspoint.com

# Q64: How can you listen on port 80 with Node? ☆☆☆☆

Answer: Run the application on any port above 1024, then put a reverse proxy like nginx in front of it.

Source: blog.risingstack.com


# Q65: What tools can be used to assure consistent code style? ☆☆☆☆
Answer: You have plenty of options to do so:

JSLint by Douglas Crockford
JSHint
ESLint
JSCS
These tools are really helpful when developing code in teams, to enforce a given style guide and to catch common errors using static analysis.

Source: blog.risingstack.com

# Q66: What's a stub? Name a use case. ☆☆☆☆
Answer: Stubs are functions/programs that simulate the behaviours of components/modules. Stubs provide canned answers to function calls made during test cases. Also, you can assert on with what these stubs were called.

A use-case can be a file read, when you do not want to read an actual file:

var fs = require('fs');

var readFileStub = sinon.stub(fs, 'readFile', function(path, cb) {
  return cb(null, 'filecontent');
});

expect(readFileStub).to.be.called;
readFileStub.restore();
Source: blog.risingstack.com

# Q67: Does Node.js support multi-core platforms? And is it capable of utilizing all the cores? ☆☆☆☆

Answer: Yes, Node.js would run on a multi-core system without any issue. But it is by default a single-threaded application, so it can’t completely utilize the multi-core system.

However, Node.js can facilitate deployment on multi-core systems where it does use the additional hardware. It packages with a Cluster module which is capable of starting multiple Node.js worker processes that will share the same port.

Source: techbeamers.com

# Q68: Is Node.js entirely based on a single-thread? ☆☆☆☆

Answer: Yes, it’s true that Node.js processes all requests on a single thread. But it’s just a part of the theory behind Node.js design. In fact, more than the single thread mechanism, it makes use of events and callbacks to handle a large no. of requests asynchronously.

Moreover, Node.js has an optimized design which utilizes both JavaScript and C++ to guarantee maximum performance. JavaScript executes at the server-side by Google Chrome v8 engine. And the C++ lib UV library takes care of the non-sequential I/O via background workers.

To explain it practically, let’s assume there are 100s of requests lined up in Node.js queue. As per design, the main thread of Node.js event loop will receive all of them and forwards to background workers for execution. Once the workers finish processing requests, the registered callbacks get notified on event loop thread to pass the result back to the user.

Source: techbeamers.com

# Q69: Is Node.js entirely based on a single-thread? ☆☆☆☆
Answer: Yes, it’s true that Node.js processes all requests on a single thread. But it’s just a part of the theory behind Node.js design. In fact, more than the single thread mechanism, it makes use of events and callbacks to handle a large no. of requests asynchronously.

Moreover, Node.js has an optimized design which utilizes both JavaScript and C++ to guarantee maximum performance. JavaScript executes at the server-side by Google Chrome v8 engine. And the C++ lib UV library takes care of the non-sequential I/O via background workers.

To explain it practically, let’s assume there are 100s of requests lined up in Node.js queue. As per design, the main thread of Node.js event loop will receive all of them and forwards to background workers for execution. Once the workers finish processing requests, the registered callbacks get notified on event loop thread to pass the result back to the user.

Source: techbeamers.com

# Q70: When to not use Node.js? ☆☆☆☆
Answer: We can use Node.js for a variety of applications. But it is a single threaded framework, so we should not use it for cases where the application requires long processing time. If the server is doing some calculation, it won’t be able to process any other requests. Hence, Node.js is best when processing needs less dedicated CPU time.

Source: techbeamers.com

# Q71: Why to use Buffers instead of binary strings to handle binary data ? ☆☆☆☆
Answer: Pure JavaScript does not able to handle straight binary data very well. Since Node.js servers have to deal with TCP streams for reading and writing of data, binary strings will become problematic to work with as it is very slow and has a tendency to break. That's why it is always advisable to use Buffers instead of binary strings to handle binary data.

Source: codingdefined.com

# Q72: How to use Buffer in Node.js? ☆☆☆
Answer: Buffer is used to process binary data, such as pictures, mp3, database files, etc. Buffer supports a variety of encoding and decoding, binary string conversion.

Source: github.com/jimuyouyou

# Q73: When should I use EventEmitter? ☆☆☆
Answer: Whenever it makes sense for code to subscribe to something rather than get a callback from something. The typical use case would be that there's multiple blocks of code in your application that may need to do something when an event happens.

Source: stackoverflow.com/

# Q74: How do you debug Node.js applications? ☆☆☆
Answer: Node has its own built in GUI debugger as of version 6.3 (using Chrome's DevTools).

node --inspect server.js
Some other options for debugging are:

Joyent's Guide
Debugger
Node Inspector
Visual Studio Code
Cloud9
Brackets
Source: stackoverflow.com

# Q75: Rewrite promise-based Node.js applications to Async/Await ☆☆☆
Details: Rewrite this code to Async/Await:

function asyncTask() {
    return functionA()
        .then((valueA) => functionB(valueA))
        .then((valueB) => functionC(valueB))
        .then((valueC) => functionD(valueC))
        .catch((err) => logger.error(err))
}
Answer:

async function asyncTask() {
    try {
        const valueA = await functionA()
        const valueB = await functionB(valueA)
        const valueC = await functionC(valueB)
        return await functionD(valueC)
    } catch (err) {
        logger.error(err)
    }
}
Source: stackoverflow.com

# Q76: What is the relationship between Node.js and V8? ☆☆☆
Answer: V8 is the Javascript engine inside of node.js that parses and runs your Javascript. The same V8 engine is used inside of Chrome to run javascript in the Chrome browser. Google open-sourced the V8 engine and the builders of node.js used it to run Javascript in node.js.

Source: stackoverflow.com

# Q77: What is N-API in Node.js? ☆☆☆
Answer: N-API (pronounced N as in the letter, followed by API) is an API for building native Addons. It is independent from the underlying JavaScript runtime (ex V8) and is maintained as part of Node.js itself. This API will be Application Binary Interface (ABI) stable across versions of Node.js. It is intended to insulate Addons from changes in the underlying JavaScript engine and allow modules compiled for one version to run on later versions of Node.js without recompilation.

Source: medium.com

# Q78: Explain the concept of Domain in Node.js ☆☆☆
Answer: Domains provide a way to handle multiple different IO operations as a single group. If any of the event emitters or callbacks registered to a domain emit an error event, or throw an error, then the domain object will be notified, rather than losing the context of the error in the process.on('uncaughtException') handler, or causing the program to exit immediately with an error code.

Domain error handlers are not a substitute for closing down a process when an error occurs. The safest way to respond to a thrown error is to shut down the process. In a normal web server, the better approach is to send an error response to the request that triggered the error, while letting the others finish in their normal time, and stop listening for new requests in that worker.

var domain = require('domain');
var d = domain.create();
// Domain emits 'error' when it's given an unhandled error
d.on('error', function(err) {
    console.log(err.stack);
    // Our handler should deal with the error in an appropriate way
});

// Enter this domain
d.run(function() {
    // If an un-handled error originates from here, process.domain will handle it
    console.log(process.domain === d); // true
});

// domain has now exited. Any errors in code past this point will not be caught.
Source: nodejs.org

# Q79: Are you familiar with differences between Node.js nodules and ES6 nodules? ☆☆☆
Answer: The modules used in Node.js follow a module specification known as the CommonJS specification. The recent updates to the JavaScript programming language, in the form of ES6, specify changes to the language, adding things like new class syntax and a module system. This module system is different from Node.js modules. To import ES6 module, we'd use the ES6 import functionality.

Now ES6 modules are incompatible with Node.js modules. This has to do with the way modules are loaded differently between the two formats. If you use a compiler like Babel, you can mix and match module formats.

Source: stackoverflow.com

# Q80: What are the use cases for the Node.js "vm" core module? ☆☆☆
Answer: It can be used to safely execute a piece of code contained in a string or file. The execution is performed in a separate environment that by default has no access to the environment of the program that created it. Moreover, you can specify execution timeout and context-specific error handling.

Source: quora.com


Q1: Consider following code snippet ☆☆☆☆☆
Details: Consider following code snippet:

{
  console.time("loop");
  for (var i = 0; i < 1000000; i += 1) {
    // Do nothing
  }
  console.timeEnd("loop");
}
The time required to run this code in Google Chrome is considerably more than the time required to run it in Node.js Explain why this is so, even though both use the v8 JavaScript Engine.

Answer: Within a web browser such as Chrome, declaring the variable i outside of any function’s scope makes it global and therefore binds it as a property of the window object. As a result, running this code in a web browser requires repeatedly resolving the property i within the heavily populated window namespace in each iteration of the for loop.

In Node.js, however, declaring any variable outside of any function’s scope binds it only to the module’s own scope (not the window object) which therefore makes it much easier and faster to resolve.

Source: toptal.com

# Q2: Can Node.js use other engines than V8? ☆☆☆☆☆
Answer: Yes. Microsoft Chakra is another JavaScript engine which can be used with Node.js. It’s not officially declared yet.

Source: codeforgeek.com

# Q3: How would you scale Node application? ☆☆☆☆☆
Answer: We can scale Node application in following ways:

cloning using Cluster module.
decomposing the application into smaller services – i.e micro services.
Source: codeforgeek.com

# Q4: What is the difference between process.nextTick() and setImmediate() ? ☆☆☆☆☆
Answer: The difference between process.nextTick() and setImmediate() is that process.nextTick() defers the execution of an action till the next pass around the event loop or it simply calls the callback function once the ongoing execution of the event loop is finished whereas setImmediate() executes a callback on the next cycle of the event loop and it gives back to the event loop for executing any I/O operations.

Source: codingdefined.com

# Q5: How to solve "Process out of Memory Exception" in Node.js ? ☆☆☆☆☆
Answer: To solve the process out of memory exception in Node.js we need to increase the max-old-space-size. By default the max size of max-old-space-size is 512 mb which you can increase by the command:

node --max-old-space-size=1024 file.js
Source: codingdefined.com

# Q6: Explain what is Reactor Pattern in Node.js? ☆☆☆☆☆
Answer: Reactor Pattern is an idea of non-blocking I/O operations in Node.js. This pattern provides a handler(in case of Node.js, a callback function) that is associated with each I/O operation. When an I/O request is generated, it is submitted to a demultiplexer.

This demultiplexer is a notification interface that is used to handle concurrency in non-blocking I/O mode and collects every request in form of an event and queues each event in a queue. Thus, the demultiplexer provides the Event Queue.

At the same time, there is an Event Loop which iterates over the items in the Event Queue. Every event has a callback function associated with it, and that callback function is invoked when the Event Loop iterates.

Source: hackernoon.com

# Q7: Explain some Error Handling approaches in Node.js you know about. Which one will you use? ☆☆☆☆☆
Answer: Error handling in an asynchronous language works in a unique way and presents many challenges, some unexpected. There are four main error handling patterns in node:

Error return value - doesn't work asynchronously
var validateObject = function (obj) {
    if (typeof obj !== 'object') {
        return new Error('Invalid object');
    }
};
Error throwing - well-establish pattern, in which a function does its thing and if an error situation arises, it simply bails out throwing an error. Can leave you in an unstable state. It requires extra work to catch them. Also wrapping the async calls in try/catch won't help because the errors happen asynchronously. To fix this, we need domains. Domains provide an asynchronous try...catch.
var validateObject = function (obj) {
    if (typeof obj !== 'object') {
        throw new Error('Invalid object');
    }
};

try {
    validateObject('123');
}
catch (err) {
    console.log('Thrown: ' + err.message);
}
Error callback - returning an error via a callback is the most common error handling pattern in Node.js. Handling error callbacks can become a mess (callback hell or the pyramid of doom).
var validateObject = function (obj, callback) {
    if (typeof obj !== 'object') {
        return callback(new Error('Invalid object'));
    }
    return callback();
};

validateObject('123', function (err) {
    console.log('Callback: ' + err.message);
});
Error emitting - when emitting errors, the errors are broadcast to any interested subscribers and handled within the same process tick, in the order subscribed.
var Events = require('events');
var emitter = new Events.EventEmitter();

var validateObject = function (a) {
    if (typeof a !== 'object') {
        emitter.emit('error', new Error('Invalid object'));
    }
};

emitter.on('error', function (err) {
    console.log('Emitted: ' + err.message);
});

validateObject('123');
Promises for async error handling
doWork()
.then(doWork)
.then(doError)
.then(doWork)
.catch(errorHandler)
.then(verify);
Try...catch with async/await - ES7 Async/await allows us as developers to write asynchronous JS code that look synchronous.
async function f() {

  try {
    let response = await fetch('http://no-such-url');
  } catch(err) {
    alert(err); // TypeError: failed to fetch
  }
}

f();
Await-to-js lib - async/await without try-catch blocks in Javascript
import to from 'await-to-js';

async function main(callback) {
    const [err,quote] = await to(getQuote());

    if(err || !quote) return callback(new Error('No Quote found');

    callback(null,quote);

}
Source: gist.github.com

# Q8: Why should you separate Express 'app' and 'server'? ☆☆☆☆☆
Answer: Keeping the API declaration separated from the network related configuration (port, protocol, etc) allows testing the API in-process, without performing network calls, with all the benefits that it brings to the table: fast testing execution and getting coverage metrics of the code. It also allows deploying the same API under flexible and different network conditions. Bonus: better separation of concerns and cleaner code.

API declaration, should reside in app.js:

var app = express();
app.use(bodyParser.json());
app.use("/api/events", events.API);
app.use("/api/forms", forms);
Server network declaration, should reside in /bin/www:

var app = require('../app');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);
Source: github.com/i0natan/nodebestpractices

# Q9: Rewrite the code sample without try/catch block ☆☆☆☆☆
Details: Consider the code:

async function check(req, res) {
  try {
    const a = await someOtherFunction();
    const b = await somethingElseFunction();
    res.send("result")
  } catch (error) {
    res.send(error.stack);
  }
}
Rewrite the code sample without try/catch block.

Answer:

async function getData(){
  const a = await someFunction().catch((error)=>console.log(error));
  const b = await someOtherFunction().catch((error)=>console.log(error));
  if (a && b) console.log("some result")
}
or if you wish to know which specific function caused error:

async function loginController() {
  try {
    const a = await loginService().
    catch((error) => {
      throw new CustomErrorHandler({
        code: 101,
        message: "a failed",
        error: error
      })
    });
    const b = await someUtil().
    catch((error) => {
      throw new CustomErrorHandler({
        code: 102,
        message: "b failed",
        error: error
      })
    });
    //someoeeoe
    if (a && b) console.log("no one failed")
  } catch (error) {
    if (!(error instanceof CustomErrorHandler)) {
      console.log("gen error", error)
    }
  }
}
Source: medium.com

# Q10: How many threads does Node actually create? ☆☆☆☆☆
Answer: 4 extra threads are for use by V8. V8 uses these threads to perform various tasks, such as GC-related background tasks and optimizing compiler tasks.

Source: stackoverflow.com

# Q11: Can Node.js work without V8? ☆☆☆☆
Answer: No. The current node.js binary cannot work without V8. It would have no Javascript engine and thus no ability to run code which would obviously render it non-functional. Node.js was not designed to run with any other Javascript engine and, in fact, all the native code bindings that come with node.js (such as the fs module or the net module) all rely on the specific V8 interface between C++ and Javascript.

There is an effort by Microsoft to allow the Chakra Javascript engine (that's the engine in Edge) to be used with node.js. Node.js can actually function to some extent without V8, through use of the node-chakracore project. There is ongoing work to reduce the tight coupling between V8 and Node, so that different JavaScript engines can be used in-place.

Source: stackoverflow.com

# Q12: How the V8 engine works? ☆☆☆☆
Answer: V8 is a JavaScript engine built at the google development center, in Germany. It is open source and written in C++. It is used for both client side (Google Chrome) and server side (node.js) JavaScript applications.

V8 was first designed to increase the performance of the JavaScript execution inside web browsers. In order to obtain speed, V8 translates JavaScript code into more efficient machine code instead of using an interpreter. It compiles JavaScript code into machine code at execution by implementing a JIT (Just-In-Time) compiler like a lot of modern JavaScript engines such as SpiderMonkey or Rhino (Mozilla) are doing. The main difference with V8 is that it doesn’t produce bytecode or any intermediate code.

Source: nodejs.org

# Q13: What is the purpose of using hidden classes in V8? ☆☆☆☆☆
Answer: JavaScript is a prototype-based language: there are no classes and objects are created by using a cloning process. JavaScript is also dynamically typed: types and type informations are not explicit and properties can be added to and deleted from objects on the fly.

Accessing types and properties effectively makes a first big challenge for V8. Instead of using a dictionary-like data structure for storing object properties and doing a dynamic lookup to resolve the property location (like most JavaScript engines do), V8 creates** hidden classes**, at runtime, in order to have an internal representation of the type system and to improve the property access time.

Source: thibaultlaurens.github.io

# Q14: How V8 compiles JavaScript code? ☆☆☆☆☆
Answer: V8 has two compilers:

A “Full” Compiler that can generate good code for any JavaScript: good but not great JIT code. The goal of this compiler is to generate code quickly. To achieve its goal, it doesn’t do any type analysis and doesn’t know anything about types. Instead, it uses an Inline Caches or “IC” strategy to refine knowledge about types while the program runs. IC is very efficient and brings about 20 times speed improvment.

An Optimizing Compiler that produces great code for most of the JavaScript language. It comes later and re-compiles hot functions. The optimizing compiler takes types from the Inline Cache and make decisions about how to optimize the code better. However, some language features are not supported yet like try/catch blocks for instance. (The workaround for try/catch blocks is to write the “non stable” code in a function and call the function in the try block)

V8 also supports de-optimization: the optimizing compiler makes optimistic assumptions from the Inline Cache about the different types, de-optimization comes if these assumptions are invalid. For example, if a hidden class generated was not the one expected, V8 throws away the optimized code and comes back to the Full Compiler to get types again from the Inline Cache. This process is slow and should be avoided by trying to not change functions after they are optimized.

Source: thibaultlaurens.github.io

# Q15: How does libuv work under the hood? ☆☆☆☆☆
Answer: There is only one thread that executes JavaScript code and this is the thread where the event loop is running provided by libuv. The execution of callbacks (know that every userland code in a running Node.js application is a callback) is done by the event loop.

Libuv by default creates a thread pool with four threads to offload asynchronous work to. Today’s operating systems already provide asynchronous interfaces for many I/O tasks (e.g. AIO on Linux). Whenever possible, libuv will use those asynchronous interfaces, avoiding usage of the thread pool.

The event loop as a process is a set of phases with specific tasks that are processed in a round-robin manner. Each phase has a FIFO queue of callbacks to execute. While each phase is special in its own way, generally, when the event loop enters a given phase, it will perform any operations specific to that phase, then execute callbacks in that phase's queue until the queue has been exhausted or the maximum number of callbacks has executed. When the queue has been exhausted or the callback limit is reached, the event loop will move to the next phase, and so on.

timers: this phase executes callbacks scheduled by setTimeout() and setInterval().
pending callbacks: executes I/O callbacks deferred to the next loop iteration.
idle, prepare: only used internally.
poll: retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and setImmediate()); node will block here when appropriate.
check: setImmediate() callbacks are invoked here.
close callbacks: some close callbacks, e.g. socket.on('close', ...).

Source: nodejs.org

# Q16: How does the cluster module work? What’s the difference between it and a load balancer? ☆☆☆☆
Answer: The cluster module performs fork from your server (at that moment it is already an OS process), thus creating several slave processes. The cluster module supports two methods of distributing incoming connections.

The first one (and the default one on all platforms except Windows), is the round-robin approach, where the master process listens on a port, accepts new connections and distributes them across the workers in a round-robin fashion, with some built-in smarts to avoid overloading a worker process.

The second approach is where the master process creates the listen socket and sends it to interested workers. The workers then accept incoming connections directly.

The difference between a cluster module and a load balancer is that instead of distributing load between processes, the balancer distributes requests.

Source: imasters.com

# Q17: What is V8 Templates? ☆☆☆☆☆
Answer: A template is a blueprint for JavaScript functions and objects. You can use a template to wrap C++ functions and data structures within JavaScript objects. V8 has two types of templates: Function Templates and Object Templates.

Function Template is the blueprint for a single function. You create a JavaScript instance of template by calling the template’s GetFunction method from within the context in which you wish to instantiate the JavaScript function. You can also associate a C++ callback with a function template which is called when the JavaScript function instance is invoked.

Object Template is used to configure objects created with function template as their constructor. You can associate two types of C++ callbacks with object templates: accessor callback and interceptor callback. Accessor callback is invoked when a specific object property is accessed by a script. Interceptor callback is invoked when any object property is accessed by a script. In a nutshell, you can wrap C++ objects\structures within JavaScript objects.

Source: blog.ghaiklor.com

# Q18: Why do we need C++ Addons in Node.js? ☆☆☆☆☆
Answer: Node.js Addons are dynamically-linked shared objects, written in C++, that can be loaded into Node.js using the require() function, and used just as if they were an ordinary Node.js module. They are used primarily to provide an interface between JavaScript running in Node.js and C/C++ libraries.

There can be many reasons to write nodejs addons:

You may want to access some native apis that is difficult using JS alone.
You may want to integrate a third party library written in C/C++ and use it directly in Node.js.
You may want to rewrite some of the modules in C++ for performance reasons.
N-API (pronounced N as in the letter, followed by API) is an API for building native Addons.

Source: nodejs.org

# Q19: Is it possible to use "Class" in Node.js? ☆☆☆☆
Answer: With ES6, you are able to make "actual" classes just like this:

class Animal {

    constructor(name) {
        this.name = name;
    }

    print() {
        console.log('Name is :' + this.name);
    }
}
You can export a class just like anything else:

module.exports = class Animal {

};
Once imported into another module, then you can treat it as if it were defined in that file:

var Animal = require('./Animal');

class Cat extends Animal {
    ...
}
Source: stackoverflow.com

Q20: Why Node.js devs tend to lean towards the Module Requiring vs Dependency Injection? ☆☆☆☆☆
Answer: Dependency injection is somewhat the opposite of normal module design. In normal module design, a module uses require() to load in all the other modules that it needs with the goal of making it simple for the caller to use your module. The caller can just require() in your module and your module will load all the other things it needs.

With dependency injection, rather than the module loading the things it needs, the caller is required to pass in things (usually objects) that the module needs. This can make certain types of testing easier and it can make mocking certain things for testing purposes easier.

Modules and dependency injection are orthogonal: if you need dependency injection for testability or extensibility then use it. If not, importing modules is fine. The great thing about JS is that you can modify just about anything to achieve what you want. This comes in handy when it comes to testing.

Source: reddit.com

# Q1: Explain the result of this code execution ☆☆☆☆☆
Details: Explain the result of that code execution:

var EventEmitter = require("events");

var crazy = new EventEmitter();

crazy.on('event1', function () {
    console.log('event1 fired!');
    crazy.emit('event2');
});

crazy.on('event2', function () {
    console.log('event2 fired!');
    crazy.emit('event3');

});

crazy.on('event3', function () {
    console.log('event3 fired!');
    crazy.emit('event1');
});

crazy.emit('event1');
Answer: You’ll get an exception that basically says the call stack has exploded. Why? Every emit will invoke synchronous code. Because all callbacks are executed in a synchronous manner it’ll just recursive call itself to infinity and beyond.

Output:

console.js:165
    if (isStackOverflowError(e))
        ^

RangeError: Maximum call stack size exceeded
    at write (console.js:165:9)
    at Console.log (console.js:197:3)
    at EventEmitter.<anonymous> (C:\Work\Node\main.js:6:13)
    at EventEmitter.emit (events.js:182:13)
    at EventEmitter.<anonymous> (C:\Work\Node\main.js:18:11)
    at EventEmitter.emit (events.js:182:13)
    at EventEmitter.<anonymous> (C:\Work\Node\main.js:12:11)
    at EventEmitter.emit (events.js:182:13)
    at EventEmitter.<anonymous> (C:\Work\Node\main.js:7:11)
    at EventEmitter.emit (events.js:182:13)
Source: codementor.io

# Q2: Explain the result of this code execution ☆☆☆☆☆
Details: Explain the result of this code execution

var EventEmitter = require('events');

var crazy = new EventEmitter();

crazy.on('event1', function () {
    console.log('event1 fired!');
    setImmediate(function () {
        crazy.emit('event2');
    });
});

crazy.on('event2', function () {
    console.log('event2 fired!');
    setImmediate(function () {
        crazy.emit('event3');
    });

});

crazy.on('event3', function () {
    console.log('event3 fired!');
    setImmediate(function () {
        crazy.emit('event1');
    });
});

crazy.emit('event1');
Answer: Shortly - the app will be run infinitely. Any function passed as the setImmediate() argument is a callback that's executed in the next iteration of the event loop. Without setImmidiate all callbacks are executed in a synchronous manner. With setImmidiate each call back executed as a part of next event loop iteration so no recursion/stuck occurs.

Source: codementor.io

# Q3: What will happen when that code will be executed? ☆☆☆☆☆
Details:

What will happen when that code will be executed?

var EventEmitter = require('events');

var crazy = new EventEmitter();

crazy.on('event1', function () {
    console.log('event1 fired!');
    process.nextTick(function () {
        crazy.emit('event2');
    });
});

crazy.on('event2', function () {
    console.log('event2 fired!');
    process.nextTick(function () {
        crazy.emit('event3');
    });

});

crazy.on('event3', function () {
    console.log('event3 fired!');
    process.nextTick(function () {
        crazy.emit('event1');
    });
});

crazy.emit('event1');
Answer: It’ll get stuck! And if you wait long enough, about 30 seconds, it’ll eventually give you a “process out of memory” exception. Now, the problem is not stack overflow, it’s GC not being able to reclaim memory. Every handler has its own closure to access the crazy on the outer layer. This cost comes out of the heap. Though you might not be 100% why GC can't successfully get the memory back, you can probably guess that the program got stuck in some even loop phase because there’s always another process.nextTick callback to be processed. So essentially, the event loop is blocked completely.

Source: _codementor.io_Consider the code:

function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x * 2);
        }, 2000);
    });
}
What if we want to run a few different values through our function and add the result?

Promise-based solution will be:

function addPromise(x) {
    return new Promise(resolve => {
        doubleAfter2Seconds(10).then((a) => {
            doubleAfter2Seconds(20).then((b) => {
                doubleAfter2Seconds(30).then((c) => {
                    resolve(x + a + b + c);
                })
            })
        })
    });
}

addPromise(10).then((sum) => {
  console.log(sum);
});
Async/Await solution will look like:

async function addAsync(x) {
    const a = await doubleAfter2Seconds(10);
    const b = await doubleAfter2Seconds(20);
    const c = await doubleAfter2Seconds(30);
    return x + a + b + c;
}

addAsync(10).then((sum) => {
  console.log(sum);
});

# React Js Interview Question #

# 1. What are the main features of React?

Component-based architecture → UI split into reusable components.

Virtual DOM → React creates a virtual copy of DOM and efficiently updates only changed parts.

One-way data binding → Data flows parent → child (unidirectional).

Declarative UI → You describe what UI should look like, React handles the rendering.

JSX → Combines JavaScript and HTML-like syntax.

Hooks → Enable state and side-effects in functional components.

# 2. What is JSX? How is it different from HTML?

JSX = JavaScript XML, looks like HTML but is actually syntactic sugar.

It gets compiled by Babel into React.createElement.

Example:

const element = <h1>Hello</h1>;
// Compiled to:
const element = React.createElement("h1", null, "Hello");


Difference from HTML:

Attributes use camelCase (className, onClick).

You can embed JS expressions inside {}.

# 3. Explain Virtual DOM.

Virtual DOM is a lightweight, in-memory representation of the real DOM.

React keeps a copy of the old VDOM → when state changes, React diffs (reconciliation) → only updates the parts that changed.

Advantage: avoids costly direct DOM operations → better performance.

# 4. What are React components? Difference between functional and class components.

Components = building blocks of UI, return JSX.

Functional components:

function Button() { return <button>Click</button>; }


Stateless (before hooks) but now can use hooks.

Class components:

class Button extends React.Component {
  render() { return <button>Click</button>; }
}


Have lifecycle methods (componentDidMount).

Functional components are preferred since React 16.8 (hooks).

# 5. What are React hooks? Why introduced?

Hooks are special functions (useState, useEffect, etc.).

Introduced in React 16.8 to let functional components use state & lifecycle logic (previously only in class components).

They reduce boilerplate, improve readability, and encourage reusable logic via custom hooks.

# 6. Explain useState.

useState declares a state variable.

const [count, setCount] = useState(0);


Initial value = 0.

setCount triggers a re-render with updated value.

# 7. How does useEffect work?

useEffect handles side-effects (data fetching, subscriptions, DOM updates).

Runs after render by default.

useEffect(() => {
  console.log("Runs after render");
  return () => console.log("Cleanup"); // cleanup on unmount
}, [dependencies]);


Dependency array controls when it runs:

[] → once on mount

[state] → runs when state changes

# 8. Difference: useRef vs useState.

useState → triggers re-render when value changes.

useRef → persists value across renders but does not cause re-render.

Example:

const count = useRef(0); // does not cause re-render
const [state, setState] = useState(0); // triggers re-render

🔹 useRef vs useState in React
1. Purpose

useState: Used when you want to store a value that affects rendering.

useRef: Used when you want to store a value that persists across renders but does NOT trigger re-render.

2. Behavior on Change

useState

Updating state triggers re-render of the component.

The UI is updated to reflect new state.

useRef

Updating ref.current does NOT re-render the component.

Useful for storing values you want to “remember” between renders (like instance variables in classes).

3. Examples
Example A: Counter with useState
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  console.log("Component re-rendered");

  return (
    <div>
      <p>Count (re-renders when updated): {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;


👉 Each click updates count → triggers re-render → UI updates.

Example B: Counter with useRef
import { useRef, useState } from "react";

function RefCounter() {
  const refCount = useRef(0);
  const [display, setDisplay] = useState(0);

  console.log("Component re-rendered");

  const increment = () => {
    refCount.current += 1;
    console.log("Ref value:", refCount.current); // updates but no re-render
  };

  return (
    <div>
      <p>Display: {display}</p>
      <button onClick={increment}>Increment Ref (no re-render)</button>
      <button onClick={() => setDisplay(refCount.current)}>
        Show Ref Value
      </button>
    </div>
  );
}

export default RefCounter;


👉 Clicking Increment Ref updates refCount.current, but UI does not re-render.
👉 UI only updates when you call setDisplay.


# 9. Purpose of useContext.

Used to avoid prop drilling (passing props through multiple levels).

const ThemeContext = React.createContext("light");
const value = useContext(ThemeContext);


Shares state globally without passing props manually.

# 10. Controlled vs Uncontrolled Components.

Controlled: Form input controlled by React state.

<input value={name} onChange={(e) => setName(e.target.value)} />


Uncontrolled: Uses ref to directly access DOM element.

<input ref={inputRef} />


Controlled = React-driven, Uncontrolled = DOM-driven.

Controlled vs Uncontrolled Components in React
1. Controlled Component

A component where form data is handled by React state.

The input field’s value is always controlled by React via useState or props.

Every keystroke triggers a re-render because React updates the state.

👉 React is the “single source of truth”.

✅ Controlled Example
import { useState } from "react";

function ControlledInput() {
  const [value, setValue] = useState("");

  return (
    <div>
      <h2>Controlled Component</h2>
      <input
        type="text"
        value={value}              // controlled by React state
        onChange={(e) => setValue(e.target.value)} // updates state
      />
      <p>Typed Value: {value}</p>
    </div>
  );
}

export default ControlledInput;


✔️ React knows the current input value at all times.
✔️ Easier to validate, reset, or conditionally modify values.

2. Uncontrolled Component

A component where form data is handled by the DOM directly, not React state.

You use useRef to access values from the DOM when needed.

React does not re-render on each keystroke.

👉 The DOM is the “source of truth”.

✅ Uncontrolled Example
import { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert(`Input Value: ${inputRef.current.value}`); // get value directly from DOM
  };

  return (
    <div>
      <h2>Uncontrolled Component</h2>
      <input type="text" ref={inputRef} />  {/* DOM manages value */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default UncontrolledInput;


✔️ No state updates → fewer re-renders (better performance for huge forms).
✔️ Simple to implement if you don’t need live validation.

# 11. What is reconciliation in React?

Process of comparing new VDOM with old VDOM to determine minimal updates.

Based on diffing algorithm → O(n) efficiency.

# 12. How does diffing algorithm work?

Compares elements by type and key:

If type changes → remove old, add new.

If keys differ in a list → re-create nodes.

If same → re-use existing node.

# 13. What are React keys?

Keys identify list elements.

Without keys, React may re-render unnecessarily.

{items.map(item => <li key={item.id}>{item.name}</li>)}

# 14. Memoization in React.

React.memo: Prevents re-render if props unchanged.

useMemo: Caches expensive calculation results.

useCallback: Memoizes function reference.

Example:

const memoizedValue = useMemo(() => expensiveFn(a, b), [a, b]);

🔹 What is Memoization in React?

Memoization is an optimization technique that stores ("remembers") the result of expensive function calls and returns the cached result when the same inputs occur again, instead of recalculating.

👉 In React, memoization is mainly used to:

Prevent unnecessary re-renders.

Avoid recomputing expensive calculations.

🔹 Memoization Tools in React

React.memo → Memoize components (prevents re-render if props don’t change).

useMemo → Memoize computed values (avoids recalculating).

useCallback → Memoize functions (avoids function re-creation).

1. React.memo Example
import React, { useState } from "react";

const Child = React.memo(({ value }: { value: number }) => {
  console.log("Child re-rendered");
  return <p>Child Value: {value}</p>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOther(other + 1)}>Increment Other</button>

      <Child value={count} />
    </div>
  );
}

export default Parent;


👉 Without React.memo, Child would re-render every time Parent changes.
👉 With React.memo, Child re-renders only if value changes.

2. useMemo Example
import { useMemo, useState } from "react";

function ExpensiveCalculation(num: number) {
  console.log("Calculating...");
  let result = 0;
  for (let i = 0; i < 1e7; i++) result += num;
  return result;
}

function App() {
  const [count, setCount] = useState(1);
  const [other, setOther] = useState(0);

  // Memoize the expensive calculation
  const calculation = useMemo(() => ExpensiveCalculation(count), [count]);

  return (
    <div>
      <p>Result: {calculation}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOther(other + 1)}>Increment Other</button>
    </div>
  );
}

export default App;


👉 Without useMemo, ExpensiveCalculation runs on every render.
👉 With useMemo, it only recalculates when count changes.

3. useCallback Example
import { useCallback, useState } from "react";

const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("Child re-rendered");
  return <button onClick={onClick}>Click Child</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  // Without useCallback, a new function is created on each render
  const handleClick = useCallback(() => {
    console.log("Child clicked");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}

export default Parent;


👉 useCallback ensures the same function reference is passed to Child, so Child doesn’t re-render unnecessarily.

🔹 When to Use Memoization?

✅ Use when:

A component re-renders often with same props.

You have expensive calculations.

Functions are passed as props to memoized child components.

⚠️ Avoid when:

The component is small/lightweight.

Premature optimization may add unnecessary complexity.

🔹 Interview Answer (short & precise)

Memoization in React is an optimization technique to avoid unnecessary re-renders and expensive recalculations.
React provides React.memo to memoize components, useMemo to memoize computed values, and useCallback to memoize functions.
It improves performance by caching results until dependencies change.

# 15. How to optimize performance?

Memoization (useMemo, useCallback)

React.memo

Code splitting & lazy loading

Avoid unnecessary re-renders (pure components, keys)

Virtualization for large lists

# 16. useReducer vs useState.

useState → simple state.

useReducer → complex state with multiple transitions.

function reducer(state, action) {
  switch(action.type) { case "inc": return { count: state.count + 1 }; }
}
const [state, dispatch] = useReducer(reducer, { count: 0 });

# 17. Custom Hook.

Reusable logic built on top of hooks.

function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => { fetch(url).then(r => r.json()).then(setData); }, [url]);
  return data;
}

What is a Custom Hook?

A Custom Hook is simply a JavaScript function that:

Starts with the word use (by convention).

Allows you to reuse logic (stateful or side-effect logic) across multiple components.

Can internally use React hooks (useState, useEffect, useRef, etc.).

👉 Think of it as a way to extract component logic into reusable functions.

🔹 Why Custom Hooks?

✅ Code reusability (share logic across components).
✅ Cleaner components (UI code separated from logic).
✅ Encapsulation (hook manages its own state/effects).

🔹 Example 1: useWindowSize Hook
import { useState, useEffect } from "react";

// Custom Hook
function useWindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // cleanup
  }, []);

  return size;
}

export default useWindowSize;

Usage:
import useWindowSize from "./useWindowSize";

function App() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h2>Window Size</h2>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}

export default App;


👉 Here, useWindowSize encapsulates the resize event logic and can be reused in many components.

🔹 Example 2: useFetch Hook (API Calls)
import { useState, useEffect } from "react";

// Custom Hook
function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;

Usage:
import useFetch from "./useFetch";

function UserList() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data?.map((user: any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;


👉 Now you can reuse useFetch across multiple components to fetch different data.

🔹 Example 3: useLocalStorage Hook
import { useState } from "react";

// Custom Hook
function useLocalStorage(key: string, initialValue: any) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  const setStoredValue = (newValue: any) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue] as const;
}

export default useLocalStorage;

Usage:
import useLocalStorage from "./useLocalStorage";

function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;

🔹 Interview Answer (short version)

A custom hook is a reusable function in React that starts with use and encapsulates stateful or side-effect logic.
It allows code reusability and keeps components clean.
For example, useFetch can handle API calls, useLocalStorage can sync state with local storage, and useWindowSize can track window resizing.

# 18. What is prop drilling?

Passing props through multiple nested components unnecessarily.

Solved by Context API, Redux, Zustand.

# 19. Error Boundaries.

Special class components that catch JS errors in children.

class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) { console.log(error); }
  render() { return this.props.children; }
}

# 20. Higher-Order Components (HOC).

Function that takes a component → returns new component with extra props/logic.

function withLogger(Wrapped) {
  return function(props) { console.log("Props:", props); return <Wrapped {...props} />; }
}
What is a Higher-Order Component (HOC)?

A Higher-Order Component (HOC) is a function that takes a component as input and returns a new component with additional props, logic, or behavior.

👉 In short: HOC = Component enhancer.

Formula:
const EnhancedComponent = HOC(WrappedComponent);

🔹 Real-Life Analogy

Think of a car 🚗:

Base car (WrappedComponent).

You take it to a workshop (HOC).

They add features like AC, music system, sunroof.

You get a new enhanced car (EnhancedComponent).

🔹 Example 1: Basic HOC (Logging Props)
import React from "react";

// HOC: Logs props every time component renders
function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log("Props passed:", props);
    return <WrappedComponent {...props} />;
  };
}

// Simple component
function Hello({ name }: { name: string }) {
  return <h2>Hello, {name}!</h2>;
}

// Wrap component
const HelloWithLogger = withLogger(Hello);

export default function App() {
  return <HelloWithLogger name="Firdous" />;
}


✅ Now every time HelloWithLogger renders, props are logged.

🔹 Example 2: Authentication HOC
import React from "react";

function withAuth(WrappedComponent) {
  return function AuthComponent(props) {
    const isLoggedIn = localStorage.getItem("token");

    if (!isLoggedIn) {
      return <p>Please login to continue.</p>;
    }

    return <WrappedComponent {...props} />;
  };
}

// Protected Page
function Dashboard() {
  return <h2>Welcome to Dashboard</h2>;
}

export default withAuth(Dashboard);


✅ Here, withAuth adds authentication logic to any component.

🔹 Example 3: Data Fetching HOC
import React, { useEffect, useState } from "react";

function withData(WrappedComponent, url: string) {
  return function DataComponent() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, []);

    if (loading) return <p>Loading...</p>;
    return <WrappedComponent data={data} />;
  };
}

// Usage
function UserList({ data }: { data: any[] }) {
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default withData(UserList, "https://jsonplaceholder.typicode.com/users");


✅ Now UserList automatically fetches data.

🔹 Key Points About HOCs

Pure Functions → HOCs should not modify the original component, they should return a new component.

Props Forwarding → Always pass {...props} to keep WrappedComponent flexible.

Reusability → Same HOC can enhance multiple components.

Alternative in Modern React → Hooks (like useAuth, useFetch) often replace HOCs, but HOCs are still seen in many codebases (especially older ones and libraries like react-redux).

🔹 Common Use Cases of HOCs

Authentication (withAuth)

Logging / Debugging (withLogger)

Data fetching (withData)

Permission control (withRole)

State management (withRedux, connect in react-redux)

🔹 Interview-Ready Answer

A Higher-Order Component (HOC) in React is a function that takes a component as input and returns a new component with added functionality.
HOCs are used for code reusability, logic sharing, and cross-cutting concerns like authentication, logging, and data fetching.
For example, withAuth can wrap a Dashboard component to restrict access unless the user is logged in.

# 21. React.Fragment vs <div>.

<div> adds extra node in DOM.

Fragment groups children without DOM wrapper:

<Fragment><h1>A</h1><h2>B</h2></Fragment>

# 22. React vs DOM events.

React uses Synthetic Events (wrapper around native events).

Cross-browser compatibility, event pooling.

# 23. Portals.

Allow rendering children into a DOM node outside parent hierarchy.

ReactDOM.createPortal(<Modal />, document.getElementById("modal-root"))

# 24. Code Splitting & Lazy Loading.

Load parts of app on demand.

const Component = React.lazy(() => import("./Component"));
<Suspense fallback={<div>Loading...</div>}><Component /></Suspense>

# 25. React Server Components.

Introduced in React 18.

Run on server, send serialized result to client.

Benefits: smaller client bundle, better performance.

# 26. Testing React Components.

Jest + React Testing Library (RTL).

render(<Button label="Click" />);
fireEvent.click(screen.getByText("Click"));
expect(mockFn).toHaveBeenCalled();

# 27. Shallow vs Full Rendering.

Shallow: only render the component (no children).

Full: renders component + children (via Enzyme or RTL).

# 28. PropTypes vs TypeScript props.

PropTypes = runtime type checking.

TypeScript = compile-time type checking, more robust.

# 29. Debugging React app.

Tools: React DevTools, console.log, error boundaries, Profiler.

# 30. Redux vs Zustand vs Context API.

Redux: predictable state container, strict pattern.

Zustand: minimalistic global store.

Context: simple global state, but causes re-renders.

🔹 Next.js Interview Questions & Answers (20)
# 31. What is Next.js?

React framework with built-in SSR, SSG, routing, API routes, image optimization, and more.

# 32. CSR vs SSR vs SSG vs ISR.

CSR: rendered in browser (React default).

SSR: rendered on server each request (getServerSideProps).

SSG: pre-rendered at build (getStaticProps).

ISR: pre-render with revalidation (regenerate after X seconds).

# 33. File-based routing.

Every file in pages/ = a route.

Example: pages/about.tsx → /about.

# 34. pages/ vs app/.

pages/: legacy routing, SSR/SSG methods.

app/: Next.js 13+ with layouts, server components.

# 35. Dynamic routes.

[id].tsx → /123

[...slug].tsx → catch-all (/a/b/c).

# 36. getStaticProps, getServerSideProps, getStaticPaths.

getStaticProps: build-time data fetch.

getServerSideProps: fetch at runtime (each request).

getStaticPaths: define paths for SSG dynamic routes.

# 37. getInitialProps.

Old data fetching API (runs both server & client).

Replaced by newer methods.

# 38. fetch in Next.js vs React.

In React: runs on client only.

In Next.js: can run on server (no client bundle impact).

# 39. Middleware in Next.js.

Runs before request completes.

Use cases: auth, redirects, geo-based routing.

# 40. API routes.

Create API endpoints inside pages/api/.

export default function handler(req, res) { res.json({ msg: "Hello" }) }

# 41. React Server Components in Next.js 13.

Default in app/ directory.

Fetch data on server, send serialized UI to client.

# 42. TypeScript in Next.js.

Install typescript + @types/react.

Next auto-generates tsconfig.json.

# 43. Client vs Server components.

Server: default, faster, can fetch data.

Client: add "use client" at top → can use hooks.

# 44. Image optimization (next/image).

Automatic resizing, lazy loading, WebP.

import Image from "next/image";
<Image src="/img.png" width={300} height={200} />

# 45. Authentication.

Use libraries like next-auth, or custom JWT with middleware.

# 46. Environment variables.

.env.local → process.env.MY_KEY.

Client vars must start with NEXT_PUBLIC_.

# 47. Static file serving.

public/ folder → /file.png.

# 48. Middleware vs Edge functions.

Middleware: lightweight code before request.

Edge functions: full serverless logic deployed at CDN edge.

# 49. Internationalization (i18n).

Next.js supports i18n via next.config.js.

Define locales and default language.

# 50. Deploying Next.js.

Best with Vercel (official).

Other: AWS, Netlify, Docker, custom Node server.


# AWS Practioneer Question #

# 1. A company needs to keep sensitive data in its own data center due to compliance but would still like to deploy resources using AWS. Which Cloud deployment model does this refer to?


1.on-primise

2. Private

3. hybrid

4. public


ans 3 Hybrid

# 2. A corporation would like to simplify access management to multiple AWS accounts as well as facilitate AWS Single Sign-On (AWS SSO) access to its AWS accounts. As a Cloud Practitioner, which AWS service would you use for this task?

1. AWS identity and access management

2. AWS Iam Identity center

3. AWs Cognito

4. aws cli

ans 2 aws IAM identity center


# 3. Question 3 Which Amazon Elastic Compute Cloud (Amazon EC2) Auto Scaling feature can help with fault tolerance?

1. Distributing load to Amazon EC2 instances
2. Lower cost by adjusting the number of Amazon EC2 instances
3.Replacing unhealthy Amazon EC2 instances
4. Having the right amount of computing capacity

  ANS 3


# Question 4 Which AWS tool can provide best practice recommendations for performance, service limits, and cost optimization?

1. AWS Health Dashboard - Service health
2. AWS Trusted Advisor
3. Amazon CloudWatch
4. Amazon Inspector

#### Overall explanation
Correct option:
AWS Trusted Advisor

AWS Trusted Advisor is an online resource to help you reduce cost, increase performance, and improve security by optimizing your AWS environment. AWS Trusted Advisor provides real-time guidance to help you provision your resources following AWS best practices.

How AWS Trusted Advisor works:  via - https://aws.amazon.com/premiumsupport/technology/trusted-advisor/

Incorrect options:

Amazon Inspector - Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on your Amazon EC2 instances. Amazon Inspector automatically assesses applications for exposure, vulnerabilities, and deviations from best practices. Nevertheless, it does not provide best practice recommendations.

AWS Health Dashboard - Service health - AWS Health Dashboard - Service health publishes most up-to-the-minute information on the status and availability of all AWS services in tabular form for all Regions that AWS is present in. It does not provide best practice recommendations.

Amazon CloudWatch - Amazon CloudWatch is a monitoring and observability service built for DevOps engineers, developers, site reliability engineers (SREs), and IT managers. Amazon CloudWatch provides data and actionable insights to monitor applications, respond to system-wide performance changes, optimize resource utilization, and get a unified view of operational health. This is an excellent service for building Resilient systems. Think resource performance monitoring, events, and alerts; think Amazon CloudWatch. Amazon CloudWatch does not provide best practice recommendations.

Reference:

https://aws.amazon.com/premiumsupport/technology/trusted-advisor/

Domain
Security and Compliance

  # Question 5 According to the AWS Well-Architected Framework, which of the following statements are recommendations in the Operational Excellence pillar? (Select two)

1. Use serverless architectures
2. Anticipate failure
3. Make frequent, small, reversible changes
4. Enable traceability
5. Automatically recover from failure

Overall explanation
Correct options: 2,3
Anticipate failure
and 
Make frequent, small, reversible changes

The Operational Excellence pillar includes the ability to run and monitor systems to deliver business value and to continually improve supporting processes and procedures.

Perform “pre-mortem” exercises to identify potential sources of failure so that they can be removed or mitigated. Test your failure scenarios and validate your understanding of their impact. Test your response procedures to ensure that they are effective, and that teams are familiar with their execution. Set up regular game days to test workloads and team responses to simulated events.

Design workloads to allow components to be updated regularly. Make changes in small increments that can be reversed if they fail (without affecting customers when possible).

The AWS Well-Architected Framework helps you understand the pros and cons of the decisions you make while building systems on AWS. By using the Framework you will learn architectural best practices for designing and operating reliable, secure, efficient, and cost-effective systems in the cloud. It provides a way for you to consistently measure your architectures against best practices and identify areas for improvement.

The AWS Well-Architected Framework is based on six pillars — Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability.

Overview of the six pillars of the AWS Well-Architected Framework:

 via - https://aws.amazon.com/architecture/well-architected/

Incorrect options:

Enable traceability - Monitor, alert, and audit actions and changes to your environment in real-time. Integrate logs and metrics with systems to automatically respond and take action. It is a design principle of the Security pillar.

Automatically recover from failure - By monitoring a system for key performance indicators (KPIs), you can trigger automation when a threshold is breached. This allows for automatic notification and tracking of failures, and for automated recovery processes that work around or repair the failure. With more sophisticated automation, it's possible to anticipate and remediate failures before they occur. It is a design principle of the Reliability pillar.

Use serverless architectures - In the cloud, serverless architectures remove the need for you to run and maintain servers to carry out traditional compute activities. For example, storage services can act as static websites, removing the need for web servers, and event services can host your code for you. This not only removes the operational burden of managing these servers but also can lower transactional costs because these managed services operate at a cloud scale. It is a design principle of the Performance Efficiency pillar.

Reference:

https://wa.aws.amazon.com/index.en.html

# Question 6 A company based in Sydney hosts its application on an Amazon Elastic Compute Cloud (Amazon EC2) instance in ap-southeast-2. They would like to deploy the same Amazon EC2 instances in eu-south-1. Which of the following AWS entities can address this use case?

1. Elastic Load Balancing (ELB)
2. Amazon Machine Image (AMI)
3. Amazon EBS Elastic Volume snapshots
4. AWS Lambda

Overall explanation
Correct option: 2

Amazon Machine Image (AMI)

An Amazon Machine Image (AMI) provides the information required to launch an instance. You must specify an Amazon Machine Image (AMI) when you launch an instance. You can launch multiple instances from a single Amazon Machine Image (AMI) when you need multiple instances with the same configuration.

How to use an Amazon Machine Image (AMI): 
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html

Incorrect options:

Elastic Load Balancing (ELB) - Elastic Load Balancing (ELB) automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, IP addresses, and Lambda functions. It can handle the varying load of your application traffic in a single Availability Zone (AZ) or across multiple Availability Zones (AZs). It cannot be used to deploy the same EC2 instances across different Availability Zones (AZs).

AWS Lambda - AWS Lambda lets you run code without provisioning or managing servers. It cannot be used to deploy the same EC2 instances across different Availability Zones (AZs).

Amazon EBS Elastic Volume snapshots - An Amazon EBS snapshot is a point-in-time copy of your Amazon EBS volume. EBS snapshots are one of the components of an AMI, but EBS snapshots alone cannot be used to deploy the same EC2 instances across different Availability Zones (AZs).

Reference:

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html

# Question 7 A production company would like to establish an AWS managed virtual private network (VPN) service between its on-premises network and AWS. Which item needs to be set up on the company's side?

1. A security group
2. A VPC endpoint interface
3. A virtual private gateway (VGW)
4. A customer gateway

Overall explanation
Correct option: 4
A customer gateway

### A customer gateway device is a physical or software appliance on your side of a Site-to-Site VPN connection. You or your network administrator must configure the device to work with the Site-to-Site VPN connection.
You can enable access to your remote network from your VPC by creating an AWS Site-to-Site VPN (Site-to-Site VPN) connection, and configuring routing to pass traffic through the connection.
More on customer gateway device:  via - https://docs.aws.amazon.com/vpn/latest/s2svpn/your-cgw.html

Incorrect options:

### A security group - A security group acts as a virtual firewall for your instance to control inbound and outbound traffic. It is not a component of a connection between on-premises network and AWS.
### A VPC endpoint interface - An interface VPC endpoint (interface endpoint) enables you to connect to services powered by AWS PrivateLink. It is not a component of a connection between on-premises network and AWS.

### A virtual private gateway (VGW) - A virtual private gateway (VGW) device is a physical or software appliance on AWS side of a Site-to-Site VPN connection.

# Question 8 A Cloud Practitioner would like to get operational insights of its resources to quickly identify any issues that might impact applications using those resources. Which AWS service can help with this task?

1. AWS Trusted Advisor
2. AWS Systems Manager
3. Amazon Inspector
4. AWS Health Dashboard - Your Account Health

Overall explanation
Correct option: 2
AWS Systems Manager

AWS Systems Manager allows you to centralize operational data from multiple AWS services and automate tasks across your AWS resources. You can create logical groups of resources such as applications, different layers of an application stack, or production versus development environments.

With AWS Systems Manager, you can select a resource group and view its recent API activity, resource configuration changes, related notifications, operational alerts, software inventory, and patch compliance status. You can also take action on each resource group depending on your operational needs. AWS Systems Manager provides a central place to view and manage your AWS resources, so you can have complete visibility and control over your operations.

How AWS Systems Manager works:  via - https://aws.amazon.com/systems-manager/

Incorrect options:

Amazon Inspector - Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS. It is not used to get operational insights of AWS resources.

AWS Health Dashboard - Your Account Health - AWS Health Dashboard - Your Account Health provides alerts and remediation guidance when AWS is experiencing events that may impact you. It is not used to get operational insights of AWS resources.

AWS Trusted Advisor - AWS Trusted Advisor is an online resource to help you reduce cost, increase performance, and improve security by optimizing your AWS environment. AWS Trusted Advisor provides real-time guidance to help you provision your resources following AWS best practices. It is not used to get operational insights of AWS resources.








