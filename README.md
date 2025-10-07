we are dealing with 10 tricky Javacript questions.

1. What will “typeof NaN return and why?
The typeof NaN will return number. This is tricky and somewhat counterintuitive, because NaN stands for “Not a number”. However, in Javascript, NaN is considered a special number and therefore its type is number.

2. Can you explain closures with an example?
A closure is a function that has access to its own scope, the scope of the outer function and the global scope. This often confuses people who are new to JavaScript because it behaves differently than other programming languages in this respect.

function outer() {
  let outerVar = "I am from outer function!";
  
  function inner() {
    let innerVar = "I am from inner function!";
    console.log(outerVar);  // I can access outerVar!
    console.log(innerVar);  // I can access innerVar!
  }
  
  return inner;
}

const myClosure = outer();
myClosure();  // Outputs: "I am from outer function!" and "I am from inner function!"
Here, inner() is a closure that encompasses its own scope, the scope of outer() and the global scope.

3. What does the .bind() method do?
The .bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. This is tricky because it involves understanding how the this keyword works and how it can be explicitly set.

const obj = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = obj.getX;
console.log(unboundGetX());  // Output: undefined

const boundGetX = unboundGetX.bind(obj);
console.log(boundGetX());  // Output: 42
4. What will [2] == [2] return and why?
This expression will return false. This is because, in Javascript, arrays are objects and objects are compared by reference, not by value. Each array literal creates a new reference, so they are not equal, even if their contents are the same.

5. What does 0.1 + 0.2 === 0.3 evaluate to and why?
This expression evaluates to false in JavaScript. This can be quite puzzling for those new to the language or even to some seasoned developers. The reason lies in the way floating-point numbers are represented in binary, as per the IEEE 754 standard. Both 0.1 and 0.2 cannot be exactly represented in binary, and the rounding errors from the approximations lead to a sum that is not exactly equal to 0.3. Therefore, 0–1 + 0.2 ends up being a number very close to but not exactly 0.3, making the expression false.

6. What will ‘5’ + 3 and ‘5’ — 3 return?
‘5’ + 3 returns the string ‘53’. This is because when you try to use the “+” operator with a string and a number, JS performs type coertion, converting the number to a string and concatenating it with the original string.
‘5’ — 3 returns the number 2. Interestingly, the “—” operator does not perform string concatenation. Instead, it coerces both operands to numbers and performs the substraction.
7. What are different ways to create an object in JavaScript?
You can create objects in JavaScript in several ways:

Object literals
const obj1 = { key: "value" };
Constructor function
function Person(name) {
  this.name = name;
}
const obj2 = new Person("Alice");
Object.create method
const obj3 = Object.create({ key: "value" });
“new Object()” syntax
const obj4 = new Object();
ES6 “class” syntax
class Animal {
  constructor(name) {
    this.name = name;
  }
}
const obj5 = new Animal("Dog");
8. What does the instanceof operator do?
The instanceof operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object. The operator returns a Boolean value that indicates whether the object inherits from a certain class or not.

const arr = [1, 2, 3];

console.log(arr instanceof Array);  // Output: true
console.log(arr instanceof Object);  // Output: true
console.log(arr instanceof Number);  // Output: false
This can be tricky because instanceof looks at the prototype chain, so an object may be an instance of multiple constructors/objects that appear in its prototype chain.

9. What is a prototype in JavaScript?
In JavaScript, a prototype is an object from which other objects inherit properties and methods. The prototype system is a key part of JavaScript’s object-oriented programming (OOP) model and it serves as a mechanism for code reuse and inheritance.

Prototype Chain
Each object in JavaScript has an internal link to another object, its “prototype,” from which it can inherit properties and methods. This link forms a chain known as the “prototype chain.” When you attempt to access a property or method on an object, JavaScript will first look for that property or method on the object itself. If it doesn’t find it there, it will look at the object’s prototype, and so on, up the prototype chain, until it either finds the requested property/method or reaches an object with a null prototype (usually the Object.prototype), indicating the end of the chain.

function Person(name) {
  this.name = name;
}

// Add a method to the Person prototype
Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person('Alice');

// Use the sayHello method from the Person prototype
alice.sayHello();  // Output: "Hello, my name is Alice"
Here, we define a Person constructor function. We then add a sayHello method to the Person prototype. When we create a new object alice using new Person(‘Alice’), alice will have access to all properties and methods defined on Person.prototype.

10. What is the difference between null and undefinded?
Both null and undefined are special values in JavaScript that indicate the absence of a value or a "hole" in an object or an array. However, they are used in slightly different contexts:

undefinded:

A variable that is declared but not initialized is automatically assigned the value undefined:

let x;
console.log(x);  // Output: undefined
If a function parameter is not provided, its value becomes undefined inside the function.

function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet();  // Output: Hello, undefined!
Accessing a non-existent property of an object returns undefined.

const obj = {};
console.log(obj.someProp);  // Output: undefined
Sparse arrays have undefined for the missing elements.

const arr = [1,,3];
console.log(arr[1]);  // Output: undefined
null:

null is used to indicate the intentional absence of any value or object.

const x = null;
When you want to “empty” a variable that may have previously held a value, null is often used.

let x = 'some value';
x = null;  // Explicitly setting it to null
Return Value: Some built-in JavaScript methods and functions return null to indicate that the object you were trying to fetch doesn’t exist. For example, document.getElementById() returns null when the element is not found.

Thats it. We’ve done it. If you dont want to miss any new article like this, consider following me :)







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


Global Error Handling

For uncaught exceptions or unhandled promise rejections, use process-level handlers:

process.on('uncaughtException', (err) => {
console.error("Uncaught Exception:", err.message);
});

process.on('unhandledRejection', (reason) => {
console.error("Unhandled Rejection:", reason);
});
Copy
Key Considerations

Always handle errors at the appropriate level.

Avoid using process.on('uncaughtException') as the primary error-handling mechanism; it should be a last resort.

Use tools like PM2 or Forever to restart the application gracefully in case of crashes.


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

🔹 Simple Example
Step 1: Import EventEmitter
const EventEmitter = require("events");

// Create an instance
const eventEmitter = new EventEmitter();

Step 2: Register an Event Listener
// Listen for a custom event called 'greet'
eventEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

Step 3: Emit the Event
// Emit (trigger) the 'greet' event
eventEmitter.emit("greet", "Firdous");

✅ Output:
Hello, Firdous!

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

Answer: 
In Node.js, a Buffer is a special object used to handle binary data (raw bytes).

Unlike regular JavaScript strings (which are UTF-16 encoded and immutable), Buffers let you work directly with raw memory.

Useful when dealing with:

File system (reading/writing files).

Network packets (TCP/UDP sockets).

Streams (audio, video, images).

Working with binary formats (e.g., encryption, compression).

🔹 Why Do We Need Buffers?

JavaScript was originally designed for browsers and didn’t have direct support for binary data.
But in Node.js:

Files, sockets, and streams all deal with raw bytes.

The Buffer class was introduced to make it possible to read/write this kind of data.

🔹 Example 1: Creating a Buffer
// Create a buffer from a string
const buf = Buffer.from("Hello", "utf-8");

console.log(buf);          // <Buffer 48 65 6c 6c 6f>
console.log(buf.toString()); // Hello


✅ Output shows the raw byte values (48 65 6c 6c 6f = ASCII for "Hello").

🔹 Example 2: Allocating a Buffer
// Allocate 5 bytes of buffer
const buf = Buffer.alloc(5);
console.log(buf); // <Buffer 00 00 00 00 00>

🔹 Example 3: Writing into a Buffer
const buf = Buffer.alloc(10);
buf.write("Hi");
console.log(buf);          // <Buffer 48 69 00 00 00 00 00 00 00 00>
console.log(buf.toString()); // Hi

🔹 Example 4: Reading File Data with Buffer
const fs = require("fs");

fs.readFile("example.txt", (err, data) => {
  if (err) throw err;
  console.log(data);            // Raw Buffer data
  console.log(data.toString()); // Convert buffer to string
});

🔹 Example 5: Concatenating Buffers
const buf1 = Buffer.from("Hello ");
const buf2 = Buffer.from("World");
const buf3 = Buffer.concat([buf1, buf2]);

console.log(buf3.toString()); // Hello World

🔹 Key Notes for Interviews

Buffers are like raw byte arrays in C/C++.

They are allocated outside V8’s heap for efficiency.

Common methods:

Buffer.from(string, encoding)

Buffer.alloc(size)

buf.toString(encoding)

Buffer.concat([buf1, buf2])

Default encoding = UTF-8.

Buffer class is a global class and can be accessed in application without importing buffer module. A Buffer is a kind of an array of integers and corresponds to a raw memory allocation outside the V8 heap. A Buffer cannot be resized.
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
A stream is a continuous flow of data.

Instead of reading/writing all data at once, streams process it in chunks, which is memory-efficient.

Useful for:

Reading/writing large files.

Handling HTTP requests/responses.

🔹 Example 1: Reading a File (Readable Stream)
const fs = require("fs");

// Create a readable stream
const readable = fs.createReadStream("example.txt", { encoding: "utf8" });

// Read data in chunks
readable.on("data", (chunk) => {
  console.log("Received chunk:", chunk);
});

readable.on("end", () => {
  console.log("Finished reading file.");
});


✅ Output:
Data will appear chunk by chunk, not all at once — very memory-efficient for large files.

🔹 Example 2: Writing to a File (Writable Stream)
const fs = require("fs");

const writable = fs.createWriteStream("output.txt");

writable.write("Hello, ");
writable.write("World!\n");
writable.end("Finished writing.\n");

writable.on("finish", () => {
  console.log("All data written successfully.");
});

🔹 Example 3: Piping Streams

Streams can be piped together — data flows automatically from readable → writable.

const fs = require("fs");

// Pipe file data to another file
const readable = fs.createReadStream("example.txt");
const writable = fs.createWriteStream("copy.txt");

readable.pipe(writable);

writable.on("finish", () => {
  console.log("File copied using streams.");
});

🔹 Example 4: Transform Stream

Modify data while reading/writing.

const { Transform } = require("stream");

const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    // Convert data to uppercase
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

const fs = require("fs");

fs.createReadStream("example.txt")
  .pipe(upperCase)
  .pipe(fs.createWriteStream("upper.txt"));

console.log("File transformed to uppercase.");

🔹 Key Points for Interviews

Streams reduce memory usage by processing data in chunks.

They are EventEmitters → events: data, end, error, finish.

Pipe() allows chaining multiple streams.

Use Transform streams for modifying data on the fly.

Common use cases:

File upload/download.

HTTP responses (big JSON, video streaming).

Real-time data processing.

Processing video/audio in real time.
The official Node.js documentation defines streams as “A stream is an abstract interface for working with streaming data in Node.js.” The stream module provides an API for implementing the stream interface. Examples of the stream object in Node.js can be a request to an HTTP server and process.stdout are both stream instances. In short, Streams are objects in Node.js that lets the user read data from a source or write data to a destination in a continuous manner.
Streams are objects that let you read data from a source or write data to a destination in continuous fashion. In Node.js, there are four types of streams.

Readable - Stream which is used for read operation.
Writable - Stream which is used for write operation.
Duplex - Stream which can be used for both read and write operation.
Transform - A type of duplex stream where the output is computed based on input.
Source: tutorialspoint.com

# Q30: What is Chaining in Node? ☆☆☆
Answer: Chanining is a mechanism to connect output of one stream to another stream and create a chain of multiple stream operations. It is normally used with piping operations.

Chaining in Node.js is a programming pattern where multiple methods are called in a single statement, one after another, because each method returns an object (often the same object).

It makes code concise, readable, and fluent.

Commonly used with:

Streams (readable.pipe().pipe())

Promises (.then().catch())

Some libraries like Express, Mongoose, Lodash

🔹 Why Use Chaining?

Avoid repetitive variable assignments.

Makes sequential operations clear.

Reduces boilerplate code.

🔹 Example 1: Chaining with Streams
const fs = require("fs");
const { Transform } = require("stream");

// Transform stream: convert text to uppercase
const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

// Chaining readable -> transform -> writable
fs.createReadStream("example.txt")
  .pipe(upperCase)
  .pipe(fs.createWriteStream("output.txt"));

console.log("File transformed using stream chaining!");

Chaining in Express.js
const express = require("express");
const app = express();

app.get("/users/:id", 
  (req, res, next) => {
    console.log("Middleware 1");
    next();
  }, 
  (req, res, next) => {
    console.log("Middleware 2");
    next();
  }, 
  (req, res) => {
    res.send("Final Response");
  }
);

app.listen(3000, () => console.log("Server running on port 3000"));


✅ Explanation:

Middleware functions are chained using next().

Each function executes in sequence until the final response is sent.

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

🔹 What is Node.js?

Node.js is a JavaScript runtime built on Chrome’s V8 engine.

It allows JavaScript to run outside the browser, primarily on the server-side.

Designed for non-blocking, event-driven I/O, making it highly scalable for real-time applications.

Key features:

Single-threaded (handles multiple requests using the event loop).

Non-blocking I/O (asynchronous operations).

Built on V8 engine (fast JS compilation).

Uses libuv for asynchronous I/O under the hood.

🔹 Node.js Architecture

Node.js is composed of several layers:

V8 Engine

Compiles JS code to machine code.

Executes JavaScript.

Supports modern ES6+ features.

libuv

Provides event loop, async I/O, thread pool.

Handles:

File system operations

Network sockets

DNS lookups

Async tasks in general

Event Loop

Core of Node.js, allows single-threaded async concurrency.

Executes callbacks for events.

Node.js APIs

File system, HTTP, Streams, Events, Child Processes, Buffer, etc.

C++ Bindings

Node.js core modules (like fs, net) have C++ bindings for system-level operations.

🔹 How Node.js Handles Requests

Node.js starts a single main thread to execute JS code.

Incoming requests (HTTP, TCP) are delegated to libuv.

libuv handles I/O asynchronously, possibly using a thread pool for blocking operations.

When the operation completes, a callback is pushed to the event loop queue.

The event loop executes callbacks sequentially on the main thread.

🔹 Event Loop in Depth

The event loop has multiple phases:

Phase	Description
Timers	Executes callbacks from setTimeout and setInterval.
Pending Callbacks	Executes I/O callbacks deferred to the next loop iteration.
Idle, Prepare	Internal use.
Poll	Retrieves new I/O events, executes I/O callbacks.
Check	Executes setImmediate() callbacks.
Close Callbacks	Executes socket.on('close') events.

Microtasks queue:

process.nextTick() and Promises are executed before moving to the next phase, giving them higher priority.

Visual Flow:

Timers -> I/O Callbacks -> Idle/Prepare -> Poll -> Check -> Close
      ^ Microtasks (process.nextTick, Promises) run here

🔹 Handling Blocking vs Non-Blocking

Blocking: CPU-heavy tasks (loops, encryption, compression) can block the event loop.

Non-blocking: File system, DB queries, network calls are asynchronous via callbacks/promises/async-await.

Example: Non-blocking

const fs = require('fs');
fs.readFile('file.txt', (err, data) => {
  if(err) throw err;
  console.log(data.toString());
});
console.log("Reading file...");


Output:

Reading file...
<file content>


Node.js continues running the main thread while waiting for I/O.

🔹 Node.js Threading Model

Single-threaded JS execution (main thread).

libuv thread pool (default 4 threads) handles:

File system

DNS

Crypto

Compression

Worker Threads can be used for CPU-intensive tasks.

🔹 Streams, Buffers, and Efficient Data Handling

Node.js uses streams for handling large files/data efficiently without loading everything into memory.

Buffer allows working with raw binary data.

Stream + Buffer + Event Loop = highly efficient data processing.

🔹 Modules and NPM

Node.js has a module system (CommonJS / ES Modules).

require() imports modules.

NPM provides a vast ecosystem of packages for almost anything (HTTP, DB, caching, etc.).

🔹 Real-World Flow Example

Scenario: HTTP request for reading a file

Browser sends GET request.

Node.js receives request (single thread).

File read is delegated to libuv thread pool.

Node.js continues handling other requests.

File read completes → callback is added to event loop queue.

Callback executes → response sent to client.

✅ Node.js can handle thousands of concurrent requests without spawning multiple threads for each connection.

🔹 Advantages of Node.js

High scalability (event-driven, non-blocking I/O).

Single language (JS) for front-end and back-end.

Real-time applications (chat, streaming, gaming).

Large ecosystem via NPM.

🔹 Limitations

Not suitable for CPU-intensive tasks (blocking main thread).

Callback hell if not handled properly (mitigated by Promises/async-await).

🔹 Summary

Node.js = V8 + libuv + JS APIs → single-threaded, async, event-driven.

Event Loop = core mechanism for async concurrency.

Non-blocking I/O allows high-performance network apps.

Streams & Buffers handle large data efficiently.

Use Worker Threads / child processes for CPU-heavy tasks.

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
Answer: 
A stream is a continuous flow of data.

Instead of reading/writing all data at once, streams process it in chunks, which is memory-efficient.

Useful for:

Reading/writing large files.

Handling HTTP requests/responses.

Processing video/audio in real time.
Streams are a collection of data that might not be available all at once and don’t have to fit in memory. Streams provide chunks of data in a continuous manner. It is useful to read a large set of data and process it.

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

# Q49. How do you secure a Node.js application? explain JWT

Answer:

Use Helmet.js for HTTP headers.

Rate limiting with Redis or Nginx.

JWT + refresh tokens for authentication.

Avoid eval() / unsafe regex.

Dependency scanning (npm audit, Snyk).

Architect-level: Enforce Zero Trust security model and OWASP best practices.

JWT (JSON Web Token) is a must-know for senior Node.js developers and system design interviews. Let’s break it down step by step.

🔹 What is JWT?

JWT (JSON Web Token) is a compact, URL-safe way of securely transmitting information between parties as a JSON object.

Commonly used for authentication and authorization in APIs.

Instead of storing sessions on the server, the client holds the token and sends it with every request.

🔹 Structure of a JWT

A JWT has 3 parts (separated by .):

header.payload.signature

1. Header (metadata)

Defines algorithm (e.g., HS256, RS256).

Example:

{
  "alg": "HS256",
  "typ": "JWT"
}

2. Payload (claims)

Contains data (user info, permissions, expiry).

Example:

{
  "sub": "1234567890",
  "name": "Firdous",
  "role": "admin",
  "exp": 1714828800
}

3. Signature

Ensures token integrity (not tampered).

Created by encoding header + payload and signing with a secret/private key.

HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)

🔹 How JWT Works (Step-by-Step)
✅ 1. User Login

User logs in with username + password.

Server verifies credentials.

✅ 2. Server Issues JWT

Server creates a JWT with user data (id, role) + expiry (exp).

Signs it with a secret key.

Returns token to client.

✅ 3. Client Stores Token

Client stores JWT (usually in localStorage, sessionStorage, or HTTP-only cookies).

✅ 4. Sending Requests

Client sends JWT with each API request (commonly in Authorization header).

Authorization: Bearer <JWT_TOKEN>

✅ 5. Server Verifies Token

Server verifies:

Signature (ensures token not tampered).

Expiry (exp) (checks validity).

If valid → process request.

If invalid/expired → reject with 401 Unauthorized.

🔹 Example in Node.js (Express + jsonwebtoken)
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const SECRET_KEY = "mysecretkey";

// Generate JWT
app.post("/login", (req, res) => {
  const user = { id: 1, name: "Firdous" };
  const token = jwt.sign(user, SECRET_KEY, { expiresIn: "1h" });
  res.json({ token });
});

// Protected Route
app.get("/profile", (req, res) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.sendStatus(403);
    res.json({ message: "Profile accessed", user: decoded });
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));

🔹 Benefits of JWT

✅ Stateless (no server memory needed for sessions).
✅ Compact & portable (can be sent in headers, cookies).
✅ Secure (if signed with strong secret/private key).
✅ Cross-platform (works in web, mobile, microservices).

🔹 Limitations of JWT

⚠️ If a JWT is stolen, attacker can impersonate until expiry.
⚠️ Cannot be revoked easily (unless using a blacklist or short expiry + refresh tokens).
⚠️ Payload is only base64 encoded, not encrypted (anyone can read it, so never store sensitive data like passwords).

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




Q1. Write a program to swap two numbers.
Answer: Here is a Python program to swap two numbers:

a = int(input("Enter the first number: "))
b = int(input("Enter the second number: "))

print(f"\nBefore swap:\na = {a}, b = {b}")

# Swap using tuple unpacking (no need for a temp variable)
a, b = b, a

print(f"After swap (using tuple unpacking):\na = {a}, b = {b}\n")

// Output
Enter the first number: 5
Enter the second number: 10

Before swap:
a = 5, b = 10
After swap (using tuple unpacking):
a = 10, b = 5
Q2. Write a program to convert a decimal number to a binary number.
Answer: Here is a simple Python program to convert a decimal number to a binary number:

def decimal_to_binary(n: int) -> str:
    """Convert decimal to binary without using built-in functions."""
    if n == 0:
        return "0"
    bits = []
    while n > 0:
        bits.append(str(n % 2))
        n //= 2
    return ''.join(reversed(bits))

def main():
    num = int(input("Enter a non-negative integer: "))
    if num < 0:
        print("Please enter a non-negative integer.")
        return

    binary = decimal_to_binary(num)
    print(f"Binary: {binary}")

if __name__ == "__main__":
    main()

// Output
Enter a non-negative integer: 12
Binary: 1100
Q3. Given the head of a singly linked list, reverse the list and return the new head.
Answer: Here is a clean and efficient C++ solution to reverse a singly linked list:

#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* reverseList(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* curr = head;
    
    while (curr) {
        ListNode* next = curr->next; // Store next node
        curr->next = prev;           // Reverse current node's pointer
        prev = curr;                 // Move prev one step forward
        curr = next;                 // Move curr one step forward
    }
    
    return prev; // New head of the reversed list
}

void printList(ListNode* head) {
    ListNode* curr = head;
    while (curr) {
        cout << curr->val << " -> ";
        curr = curr->next;
    }
    cout << "null" << endl;
}

int main() {
    // Create a simple linked list: 1 -> 2 -> 3 -> 4 -> null
    ListNode* head = new ListNode(1);
    head->next = new ListNode(2);
    head->next->next = new ListNode(3);
    head->next->next->next = new ListNode(4);
    
    cout << "Original List: ";
    printList(head);

    ListNode* reversedHead = reverseList(head);

    cout << "Reversed List: ";
    printList(reversedHead);

    return 0;
}

//Output
Original List: 1 -> 2 -> 3 -> 4 -> null
Reversed List: 4 -> 3 -> 2 -> 1 -> null
Pro Tip: Strengthen your programming skills by exploring C++ interview questions and answers. Enhance your coding skills and excel in Power Programmer interview questions at Infosys.

Q4. Write a program to convert a decimal number to an octal number.
Answer: Here is a solution in C++ that manually converts a decimal number to an octal number:

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int num;
    cout << "Enter a decimal number: ";
    cin >> num;

    // Special case for zero
    if (num == 0) {
        cout << "Octal: 0" << endl;
        return 0;
    }

    vector<int> octalDigits;
    int n = num;

    // Convert to octal by repeatedly dividing by 8 and storing remainders
    while (n > 0) {
        octalDigits.push_back(n % 8);
        n /= 8;
    }

    // The digits are collected in reverse order, so reverse them
    reverse(octalDigits.begin(), octalDigits.end());

    // Display the octal number
    cout << "Octal: ";
    for (int digit : octalDigits) {
        cout << digit;
    }
    cout << endl;

    return 0;
}
Q5. Check if a Number is Prime
Answer: Below is a Python function that checks whether a number is prime by testing divisibility from 2 up to √n:

def is_prime(n):
    if n <= 1:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    for i in range(3, int(n**0.5) + 1, 2):  # Only check odd numbers
        if n % i == 0:
            return False
    return True
#Example usage and Output
# Test cases
print(is_prime(2))    # Output: True, since 2 is a prime number
print(is_prime(11))   # Output: True, since 11 is a prime number
print(is_prime(15))   # Output: False, since 15 is not a prime number
print(is_prime(18))   # Output: False, since 18 is not a prime number
print(is_prime(29))   # Output: True, since 29 is a prime number
print(is_prime(97))   # Output: True, since 97 is a prime number
print(is_prime(100))  # Output: False, since 100 is not a prime number
Q6. Given the head of a singly linked list, reverse the list by changing the next pointers of the nodes, and return the new head of the reversed list.
Answer: Here is a concise, in-place Python implementation that reverses a singly linked list by updating each node’s next pointer:

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_list(head: ListNode) -> ListNode:
    prev, curr = None, head
    while curr:
        nxt = curr.next      # save next node
        curr.next = prev     # reverse the link
        prev, curr = curr, nxt  # advance pointers
    return prev

# Helper function to print a linked list
def print_list(head):
    while head:
        print(head.val, end=" -> " if head.next else "\n")
        head = head.next

# Example usage
# Creating the linked list: 1 -> 2 -> 3 -> 4 -> 5
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = ListNode(5)

print("Original list:")
print_list(head)

# Reverse the linked list
reversed_head = reverse_list(head)

print("Reversed list:")
print_list(reversed_head)

//Output
Original list:
1 -> 2 -> 3 -> 4 -> 5
Reversed list:
5 -> 4 -> 3 -> 2 -> 1
Q7. Given a directed graph with V vertices numbered 0 to V−1 and an edge list, determine whether the graph contains a cycle.
Answer: Here is the solution in a JavaScript program that uses depth-first search with a recursion stack to detect if a directed graph contains a cycle:

function hasCycle(V, edges) {
    const adj = Array.from({ length: V }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
    }

    const visited = new Array(V).fill(false);
    const inStack = new Array(V).fill(false);

    function dfs(u) {
        visited[u] = inStack[u] = true;
        for (const v of adj[u]) {
            if (!visited[v] && dfs(v)) return true;
            if (inStack[v]) return true;
        }
        inStack[u] = false;
        return false;
    }

    for (let i = 0; i < V; i++) {
        if (!visited[i] && dfs(i)) {
            return true;
        }
    }
    return false;
}

# Example usage
const V1 = 4;
const edges1 = [[0, 1], [1, 2], [2, 0], [2, 3]];
console.log(hasCycle(V1, edges1)); // Output: true (Cycle exists)

const V2 = 4;
const edges2 = [[0, 1], [1, 2], [2, 3]];
console.log(hasCycle(V2, edges2)); // Output: false (No cycle)
Q8. Given two strings s1 and s2, return the length of their longest common subsequence (a subsequence appears in both strings in the same relative order).
Answer: Below is a Java implementation using a dynamic-programming table to compute the length of the longest common subsequence between two strings:

public class LCS {
    public int longestCommonSubsequence(String s1, String s2) {
        int m = s1.length(), n = s2.length();
        int[][] dp = new int[m + 1][n + 1];

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (s1.charAt(i - 1) == s2.charAt(j - 1))
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                else
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
        return dp[m][n];
    }

    public static void main(String[] args) {
        LCS lcs = new LCS();

        String s1 = "abcde";
        String s2 = "ace";
        int result = lcs.longestCommonSubsequence(s1, s2);
        System.out.println("Length of LCS: " + result);
    }
}

//Output
Length of LCS: 3
Q9. Given an array heights[] representing bar heights in a histogram, find the area of the largest rectangle that can be formed.
Answer: Here is the solution in a Python program, in which we use a stack to keep track of the indices of the bars. We iterate through each bar and calculate the area, considering the current bar as the smallest bar in the rectangle.

def largestRectangleArea(heights):
    stack = []
    max_area = 0
    heights.append(0)  # Append a zero to pop all remaining bars in stack

    for i, h in enumerate(heights):
        while stack and heights[stack[-1]] > h:
            height = heights[stack.pop()]
            width = i if not stack else i - stack[-1] - 1
            max_area = max(max_area, height * width)
        stack.append(i)

    return max_area

# Example usage
heights = [2, 1, 5, 6, 2, 3]
result = largestRectangleArea(heights)
print("Largest Rectangle Area:", result)
Q10. Given an array of distinct integers arr[], return the minimum number of swaps needed to sort it in ascending order.
Answer: Here is a solution in a JavaScript program with minimum number of swaps needed to sort the array in ascending order:

function minSwaps(arr) {
    const n = arr.length;
    const pairs = arr.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]);
    const visited = Array(n).fill(false);
    let swaps = 0;

    for (let i = 0; i < n; i++) {
        if (visited[i] || pairs[i][1] === i) continue;
        let cycleSize = 0, j = i;
        while (!visited[j]) {
            visited[j] = true;
            j = pairs[j][1];
            cycleSize++;
        }
        swaps += cycleSize - 1;
    }
    return swaps;
}

// Example usage
const arr = [4, 3, 2, 1];
const result = minSwaps(arr);
console.log("Minimum number of swaps:", result);
Q11. Write a function that takes a string and returns the string in reverse order.
Answer: Here is a JavaScript function that reverses a given string by splitting it into an array of characters, reversing the array, and then joining it back into a string:

function reverseString(str) {
  return str.split('').reverse().join('');
}

# Example usage
console.log(reverseString("hello")); // Output: "olleh"
Q12. Write a function that returns the factorial of a non-negative integer n (i.e., n!).
Answer: Here is a C++ function that returns the factorial of a non-negative integer n (i.e., n!):

int factorial(int n) {
    if (n < 0)
        throw std::invalid_argument("Input must be a non-negative integer");
    if (n <= 1)
        return 1;
    return n * factorial(n - 1);
}
Q13. Write a function that takes a string s and returns true if it reads the same forwards and backwards, otherwise false. 
Answer: Below is a JavaScript approach that checks if a string is a palindrome by reversing it and comparing it to the original:

function isPalindrome(s) {
  const reversed = s.split('').reverse().join('');
  return s === reversed;
}

// Example usage
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false
Q14. Write a function that takes a list of integers arr and returns the maximum element.
Answer: Here is a Python approach that finds the maximum element in a list by iterating through the list and updating the maximum value encountered so far:

fdef find_max(arr):
    return max(arr)

# Example usage
print(find_max([3, 7, 2, 9, 5]))  # Output: 9
Q15. Write a function that takes an integer n and returns true if it’s even and false otherwise. 
Answer: Here is a Python approach that finds the maximum element in a list by iterating through the list and updating the maximum value encountered so far:

def is_even(n):
    return n % 2 == 0

# Example usage
print(is_even(4))  # Output: True
print(is_even(7))  # Output: False
Pro Tip: Boost your algorithm-based interview prep by checking out our Infosys coding interview questions and answers blog. Strengthen problem-solving skills and excel in the Power Programmer interview at Infosys.

Infosys Power Programmer Interview Coding Questions and Answers on Data Structure
In this section, we explore the most commonly asked Infosys Power Programmer coding questions focused on data structures. These questions are designed to assess your understanding of fundamental data structures, including arrays, linked lists, trees, graphs, and hash tables. By reviewing these key concepts and practicing the corresponding problems, you can strengthen your ability to tackle data structure-related challenges during the interview process.

Q16. How do you reverse a singly linked list in-place?
Answer: Below is an in-place Python solution to reverse a singly linked list by updating the following pointers of each node:

class ListNode:
    def __init__(self, val=0, next=None):
        self.val  = val
        self.next = next

def reverseList(head: ListNode) -> ListNode:
    prev = None
    curr = head
    while curr:
        # 1. Remember the next node
        next_node = curr.next
        
        # 2. Reverse the pointer on the current node
        curr.next = prev
        
        # 3. Advance prev and curr one step forward
        prev = curr
        curr = next_node

    # At the end, prev points to the new head of the reversed list
    return prev
Q17. How do you detect a cycle in a singly linked list?
Answer: Here is a JavaScript function that detects a cycle in a singly linked list using Floyd’s Cycle Detection Algorithm:

function detectCycle(head) {
    if (!head || !head.next) {
        return false; // No cycle if the list is empty or has only one element
    }

    let slow = head; // Tortoise
    let fast = head; // Hare

    while (fast !== null && fast.next !== null) {
        slow = slow.next;         // Move slow by 1 step
        fast = fast.next.next;    // Move fast by 2 steps

        if (slow === fast) {
            return true; // Cycle detected
        }
    }

    return false; // No cycle found
}
Q18. How do you implement a queue using two stacks?
Answer: Here is a C++ implementation of a queue using two stacks. The enqueue operation transfers elements between stacks to maintain the correct order, while dequeue simply pops from the main stack:

#include <iostream>
#include <stack>
using namespace std;

class QueueUsingTwoStacks {
private:
    stack<int> stack1, stack2;

public:
    // Enqueue operation: push to stack1
    void enqueue(int x) {
        stack1.push(x);
    }

    // Dequeue operation: transfer elements from stack1 to stack2, then pop from stack2
    int dequeue() {
        if (stack2.empty()) {
            // Transfer elements from stack1 to stack2 if stack2 is empty
            while (!stack1.empty()) {
                stack2.push(stack1.top());
                stack1.pop();
            }
        }

        if (stack2.empty()) {
            cout << "Queue is empty!" << endl;
            return -1; // Return an error code
        }

        int front = stack2.top();
        stack2.pop();
        return front;
    }

    // Check if the queue is empty
    bool isEmpty() {
        return stack1.empty() && stack2.empty();
    }
};

int main() {
    QueueUsingTwoStacks q;
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);

    cout << "Dequeued: " << q.dequeue() << endl; // 10
    cout << "Dequeued: " << q.dequeue() << endl; // 20
    cout << "Dequeued: " << q.dequeue() << endl; // 30

    cout << "Dequeued: " << q.dequeue() << endl; // Queue is empty!

    return 0;
}
Q19. How do you convert an infix expression to postfix notation?
Answer: Below is a Python implementation that converts an infix expression to postfix (Reverse Polish Notation) using a stack to manage operator precedence and parentheses:

def precedence(op):
    if op == '+' or op == '-':
        return 1
    if op == '*' or op == '/':
        return 2
    return 0

def infixToPostfix(expression):
    stack = []  # To store operators and parentheses
    output = []  # To store the final postfix expression
    
    for char in expression:
        # If the character is an operand (number or variable), add it to the output
        if char.isalnum():  # This checks if the character is an operand (number or variable)
            output.append(char)
        
        # If the character is '(', push it to the stack
        elif char == '(':
            stack.append(char)
        
        # If the character is ')', pop from the stack to the output until '(' is found
        elif char == ')':
            while stack and stack[-1] != '(':
                output.append(stack.pop())
            stack.pop()  # Pop the '(' from the stack
        
        # If the character is an operator, pop operators from the stack to the output
        # based on precedence, then push the current operator to the stack
        elif char in '+-*/':
            while stack and precedence(stack[-1]) >= precedence(char):
                output.append(stack.pop())
            stack.append(char)
    
    # Pop all the remaining operators from the stack to the output
    while stack:
        output.append(stack.pop())
    
    return ''.join(output)

# Example usage
expression = "A+(B*C-(D/E^F)*G)*H"
print("Infix Expression: ", expression)
print("Postfix Expression: ", infixToPostfix(expression))
Q20. How do you perform a level-order traversal (breadth-first) of a binary tree?
Answer: Here is a JavaScript implementation of level order traversal (breadth-first traversal) of a binary tree using a queue to process nodes level by level:

function levelOrder(root) {
    const res = [];
    if (!root) return res;

    const q = [root]; // Initialize the queue with the root node
    while (q.length) {
        const level = []; // Array to store the nodes at the current level
        const size = q.length; // Number of nodes at the current level

        for (let i = 0; i < size; i++) {
            const node = q.shift(); // Dequeue the front node from the queue
            level.push(node.val);   // Add the node's value to the level array

            if (node.left)  q.push(node.left);  // Enqueue left child if exists
            if (node.right) q.push(node.right); // Enqueue right child if exists
        }

        res.push(level); // Add the current level's nodes to the result
    }

    return res; // Return the result after all levels are processed
}
Q21. How do you implement a Trie (prefix tree) with insert and search operations?
Answer: Here is a C++ implementation of a Trie (prefix tree) that supports insert, search, and starts with operations using an array of child pointers for each lowercase English letter:

struct TrieNode {
    bool isEnd;
    TrieNode* children[26];

    TrieNode() : isEnd(false) {
        for (auto &c : children) c = nullptr;
    }
};

class Trie {
private:
    TrieNode* root;

public:
    Trie() {
        root = new TrieNode();
    }

    // Inserts a word into the Trie
    void insert(const string &word) {
        TrieNode* node = root;
        for (char c : word) {
            int idx = c - 'a';
            if (!node->children[idx]) 
                node->children[idx] = new TrieNode();
            node = node->children[idx];
        }
        node->isEnd = true;
    }

    // Searches for a word in the Trie
    bool search(const string &word) {
        TrieNode* node = root;
        for (char c : word) {
            int idx = c - 'a';
            if (!node->children[idx]) return false;
            node = node->children[idx];
        }
        return node->isEnd;
    }

    // Checks if any word in the Trie starts with the given prefix
    bool startsWith(const string &prefix) {
        TrieNode* node = root;
        for (char c : prefix) {
            int idx = c - 'a';
            if (!node->children[idx]) return false;
            node = node->children[idx];
        }
        return true;
    }
};
Q22. How do you find the top K frequent elements in an array?
Answer: Here is a Python solution to find the top K most frequent elements in an array using a counter and a max-heap (via heapq.nlargest):

from collections import Counter
import heapq

def topKFrequent(nums, k):
    # Count the frequency of each element in the array
    count = Counter(nums)
    
    # Use heapq.nlargest to find the K most frequent elements
    # The key argument ensures we are sorting by frequency (the second element of the tuple)
    return [item[0] for item in heapq.nlargest(k, count.items(), key=lambda x: x[1])]

# Example usage:
nums = [1,1,1,2,2,3]
k = 2
print(topKFrequent(nums, k))  # Output: [1, 2]
Q23. How do you design a HashMap without using built-in libraries?
Answer: Here is a JavaScript implementation of a basic HashMap without using any built-in Map or Set libraries. It uses an array of buckets and simple modular hashing to store key-value pairs:

class MyHashMap {
    constructor() {
        this.SIZE = 1000;
        this.data = Array.from({ length: this.SIZE }, () => []);
    }

    // Hash function to map the key to an index
    _hash(key) {
        return key % this.SIZE;
    }

    // Put a key-value pair into the map
    put(key, value) {
        const h = this._hash(key);
        for (const pair of this.data[h]) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }
        this.data[h].push([key, value]);
    }

    // Get the value for a given key
    get(key) {
        const h = this._hash(key);
        for (const [k, v] of this.data[h]) {
            if (k === key) return v;
        }
        return -1;  // Return -1 if the key is not found
    }

    // Remove a key-value pair from the map
    remove(key) {
        const h = this._hash(key);
        for (let i = 0; i < this.data[h].length; i++) {
            if (this.data[h][i][0] === key) {
                this.data[h].splice(i, 1);
                return;
            }
        }
    }
}

// Example usage:
const map = new MyHashMap();
map.put(1, "one");
map.put(2, "two");
map.put(1001, "one thousand one");

console.log(map.get(1));  // Output: "one"
console.log(map.get(2));  // Output: "two"
console.log(map.get(1001));  // Output: "one thousand one"
console.log(map.get(3));  // Output: -1 (key not found)

map.remove(2);
console.log(map.get(2));  // Output: -1 (key removed)
Q24.  How do you check if the parentheses in a string are balanced?
Answer: Here is a C++ function that checks whether the parentheses in a string are balanced using a stack:

#include <iostream>
#include <stack>
#include <string>

bool areParenthesesBalanced(const std::string& expression) {
    std::stack<char> s;

    for (char ch : expression) {
        if (ch == '(') {
            s.push(ch); // Push opening parenthesis onto stack
        } else if (ch == ')') {
            if (s.empty()) return false; // Stack is empty, no matching opening parenthesis
            s.pop(); // Pop the matching opening parenthesis
        }
    }

    return s.empty(); // If stack is empty, parentheses are balanced
}

int main() {
    std::cout << (areParenthesesBalanced("(())") ? "Balanced" : "Unbalanced") << std::endl; // Balanced
    std::cout << (areParenthesesBalanced("(()") ? "Balanced" : "Unbalanced") << std::endl;  // Unbalanced
    std::cout << (areParenthesesBalanced("())(") ? "Balanced" : "Unbalanced") << std::endl; // Unbalanced

    return 0;
}
Q25. Find the middle element of a singly linked list.
Answer: Here is a simple C++ function that finds the middle element of a singly linked list. The approach uses the two-pointer technique (also known as the slow and fast pointer approach) to find the middle element in one pass.

#include <iostream>
using namespace std;

// Define the structure for the node
struct Node {
    int data;
    Node* next;
    Node(int x) : data(x), next(NULL) {}
};

// Function to find the middle element of the linked list
Node* findMiddle(Node* head) {
    if (head == NULL) return NULL;

    Node* slow = head;  // Slow pointer
    Node* fast = head;  // Fast pointer

    // Move fast pointer by two steps and slow pointer by one step
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;      // Move slow pointer one step
        fast = fast->next->next; // Move fast pointer two steps
    }

    return slow; // Slow pointer is now at the middle element
}

// Function to insert a new node at the end of the list
void insert(Node*& head, int data) {
    Node* newNode = new Node(data);
    if (head == NULL) {
        head = newNode;
        return;
    }
    Node* temp = head;
    while (temp->next != NULL) {
        temp = temp->next;
    }
    temp->next = newNode;
}

// Function to print the linked list
void printList(Node* head) {
    while (head != NULL) {
        cout << head->data << " -> ";
        head = head->next;
    }
    cout << "NULL" << endl;
}

int main() {
    Node* head = NULL;

    // Insert some values into the linked list
    insert(head, 1);
    insert(head, 2);
    insert(head, 3);
    insert(head, 4);
    insert(head, 5);

    // Print the linked list
    cout << "Linked List: ";
    printList(head);

    // Find and print the middle element
    Node* middle = findMiddle(head);
    if (middle != NULL) {
        cout << "Middle element: " << middle->data << endl;
    } else {
        cout << "List is empty." << endl;
    }

    return 0;
}
Q26. Merge two sorted linked lists.
Answer. Here is a JavaScript function that merges two sorted linked lists into one sorted list by comparing node values iteratively:

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(0), tail = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) { 
            tail.next = l1; 
            l1 = l1.next; 
        } else { 
            tail.next = l2; 
            l2 = l2.next; 
        }
        tail = tail.next;
    }
    tail.next = l1 || l2;
    return dummy.next;
}
Q27. Design a stack that supports getMin() in O(1) time.
Answer: Here is the design of a stack that supports  getMin() in O(1) time, in a Python program:

class MinStack:
    def __init__(self):
        self.stack = []  # main stack to store elements
        self.min_stack = []  # auxiliary stack to store minimum elements

    def push(self, x: int) -> None:
        # Push the element onto the main stack
        self.stack.append(x)
        
        # Push the minimum element onto the min_stack
        if not self.min_stack or x <= self.min_stack[-1]:
            self.min_stack.append(x)

    def pop(self) -> None:
        # Pop the top element from the main stack
        if self.stack:
            popped_value = self.stack.pop()
            # If the popped element is the same as the top of the min_stack, pop it from min_stack as well
            if popped_value == self.min_stack[-1]:
                self.min_stack.pop()

    def top(self) -> int:
        # Return the top element of the main stack
        if self.stack:
            return self.stack[-1]

    def getMin(self) -> int:
        # Return the top element of the min_stack, which is the minimum element in the stack
        if self.min_stack:
            return self.min_stack[-1]

# Example Usage
min_stack = MinStack()
min_stack.push(5)
min_stack.push(3)
min_stack.push(8)
print(min_stack.getMin())  # Output: 3
min_stack.pop()
print(min_stack.getMin())  # Output: 3
min_stack.pop()
print(min_stack.getMin())  # Output: 5
Q28. Perform a binary search on a sorted array.
Answer: Here is a C++ function that performs binary search on a sorted array to find the index of a target element:

#include <iostream>
#include <vector>
using namespace std;

int binarySearch(vector<int>& a, int target) {
    int lo = 0, hi = a.size() - 1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
        if (a[mid] == target) return mid;
        else if (a[mid] < target) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
}

int main() {
    vector<int> arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int target = 7;
    int index = binarySearch(arr, target);
    if (index != -1) {
        cout << "Target found at index: " << index << endl;
    } else {
        cout << "Target not found" << endl;
    }
    return 0;
}
Q29. Implement Disjoint Set Union (Union-Find) with path compression and rank.
Answer: Here is a Python implementation of Disjoint Set Union (Union-Find) with path compression and union by rank:

class DSU:
    def __init__(self, n):
        self.p = list(range(n))  # Parent array
        self.r = [0] * n         # Rank array

    def find(self, x):
        if self.p[x] != x:
            self.p[x] = self.find(self.p[x])  # Path compression
        return self.p[x]

    def union(self, x, y):
        x, y = self.find(x), self.find(y)
        if x == y:
            return False  # x and y are already in the same set
        if self.r[x] < self.r[y]:
            x, y = y, x  # Ensure the tree with greater rank is the root
        self.p[y] = x
        if self.r[x] == self.r[y]:  # Increment rank only when ranks are equal
            self.r[x] += 1
        return True

# Example usage
dsu = DSU(5)  # Create DSU for 5 elements: 0, 1, 2, 3, 4

# Union some sets
print(dsu.union(0, 1))  # True, 0 and 1 are now in the same set
print(dsu.union(2, 3))  # True, 2 and 3 are now in the same set
print(dsu.union(1, 2))  # True, 0-1 and 2-3 are now united

# Find the representative of each element
for i in range(5):
    print(f"Find({i}) = {dsu.find(i)}")

// Output
True
True
True
Find(0) = 0
Find(1) = 0
Find(2) = 0
Find(3) = 0
Find(4) = 4
Q30. Find the maximum subarray sum (Kadane’s algorithm).
Answer: Here is a Python implementation of Kadane’s Algorithm to find the maximum subarray sum:

def maxSubArray(nums):
    if not nums:            # optional guard for empty list
        return 0
    max_end = max_so = nums[0]
    for x in nums[1:]:
        max_end = max(x, max_end + x)   # extend or start new subarray
        max_so  = max(max_so, max_end)  # update max so far
    return max_so

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # 6   (subarray [4,-1,2,1])
print(maxSubArray([1,2,3,4]))                # 10  (entire array)
print(maxSubArray([-1,-2,-3,-4]))            # -1  (the largest element)
print(maxSubArray([5, -2, 5, -1, 2]))        # 9   (subarray [5, -2, 5, -1, 2])
print(maxSubArray([]))                       # 0   (with the empty-guard)
‘Pro -Tip’: For a comprehensive interview preparation, practice Infosys HR interview questions focusing on behavioral and situational scenarios. Strengthen your communication skills, build confidence, and ensure your responses reflect Infosys’ core values to leave a lasting impression!

Infosys Power Programmer Interview  Coding Questions on String Manipulation
This section focuses on Infosys power programmer coding questions related to string manipulation. String-related problems are a common feature in coding interviews, testing your ability to efficiently handle operations such as searching, sorting, reversing, and pattern matching. Mastering these fundamental string operations will help you excel in the interview and demonstrate your problem-solving skills. Here are some questions you can practice:

Q31. Given a string s, return a new string that is the reverse of s (e.g., “hello” → “olleh”).
Answer: The function used takes a string s and returns a new string that is its reverse by swapping characters from both ends. Here’s the code using C++:

#include <iostream>
#include <string>
using namespace std;

// Returns a new string that is the reverse of s
string reverseString(const string &s) {
    return string(s.rbegin(), s.rend());
}

int main() {
    // Example inputs
    string inputs[] = {"hello", "racecar", "", "A"};
    
    for (const auto &str : inputs) {
        cout << "Original: \"" << str << "\"  →  Reversed: \"" 
             << reverseString(str) << "\"\n";
    }
    
    return 0;
}

// Output
Original: "hello"  →  Reversed: "olleh"
Original: "racecar"  →  Reversed: "racecar"
Original: ""  →  Reversed: ""
Original: "A"  →  Reversed: "A"
Q32. Determine whether a given string reads the same forwards and backwards, ignoring non-alphanumeric characters and case (e.g., “A man, a plan, a canal: Panama” → true).
Answer: This function determines whether a given string is a palindrome by removing all non-alphanumeric characters and comparing the cleaned string to its reverse, case-insensitively.

#include <iostream>
#include <cctype>
#include <string>
using namespace std;

bool isPalindrome(string s) {
    int left = 0, right = s.length() - 1;
    
    while (left < right) {
        // Skip non-alphanumeric characters on the left
        if (!isalnum(s[left])) {
            left++;
        }
        // Skip non-alphanumeric characters on the right
        else if (!isalnum(s[right])) {
            right--;
        }
        // Compare characters (case-insensitive)
        else if (tolower(s[left]) != tolower(s[right])) {
            return false; // Not a palindrome
        } else {
            left++;
            right--;
        }
    }
    
    return true; // It is a palindrome
}

int main() {
    string str = "A man, a plan, a canal: Panama";
    if (isPalindrome(str)) {
        cout << "The string is a palindrome." << endl;
    } else {
        cout << "The string is not a palindrome." << endl;
    }

    return 0;
}

// Output
The string is a palindrome.
Q33. Given two strings s and t, determine if t is an anagram of s (i.e., they contain the same characters in any order). 
Answer: Here is the solution in a JavaScript program determining if t is an anagram of s:

function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const count = {};
    for (let c of s) count[c] = (count[c] || 0) + 1;
    for (let c of t) {
        if (!count[c]) return false;
        count[c]--;
    }
    return true;
}

// Example usage and expected output:
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat",     "car"));     // false
console.log(isAnagram("aacc",    "ccac"));    // false
console.log(isAnagram("",        ""));        // true
Q34. Find the first character in a string that does not repeat (e.g., “leetcode” → ‘l’).
Answer: Here is a solution in a C++ program to find the first character in a string that does not repeat:

#include <iostream>
#include <unordered_map>
#include <string>
using namespace std;

char firstUniqChar(const string &s) {
    unordered_map<char, int> count;

    // Count the frequency of each character
    for (char c : s) {
        count[c]++;
    }

    // Find the first character with a frequency of 1
    for (char c : s) {
        if (count[c] == 1) {
            return c;
        }
    }

    // If no unique character is found
    return ' '; // return a space if no unique character exists
}

int main() {
    string s = "leetcode";
    char result = firstUniqChar(s);

    if (result != ' ') {
        cout << "Input: \"" << s << "\"" << endl;
        cout << "Output: The first non-repeating character is: " << result << endl;
    } else {
        cout << "Input: \"" << s << "\"" << endl;
        cout << "Output: No unique character found." << endl;
    }

    return 0;
}

// Output
string s = "leetcode";
Q35. Implement atoi, converting a string to a 32-bit signed integer with proper overflow handling. 
Answer: Here is the solution in a Python program implementing atoi, converting a string to a 32-bit signed integer with proper overflow handling:

def my_atoi(s: str) -> int:
    s = s.lstrip()  # Remove leading spaces
    if not s: 
        return 0  # Empty string or only spaces

    sign, i = 1, 0
    # Check for optional sign at the start
    if s[0] in '+-':
        sign = -1 if s[0] == '-' else 1
        i = 1

    num = 0
    # Parse digits
    while i < len(s) and s[i].isdigit():
        num = num * 10 + int(s[i])
        i += 1
    
    # Apply sign
    num *= sign
    
    # Handle overflow
    return max(-2**31, min(num, 2**31 - 1))

# Example usage:
print(my_atoi("42"))  # 42
print(my_atoi("   -42"))  # -42
print(my_atoi("4193 with words"))  # 4193
print(my_atoi("words and 987"))  # 0
print(my_atoi("-91283472332"))  # -2147483648
print(my_atoi("2147483648"))  # 2147483647
print(my_atoi("-2147483649"))  # -2147483648
Q36. Given a string s, find the length of the longest substring without repeating characters (e.g., “abcabcbb” → 3).
Answer: Here is the solution in a JavaScript program finding the longest substring without repeating characters:

function lengthOfLongestSubstring(s) {
    let map = new Map(); // To store characters and their most recent index
    let left = 0; // Left pointer of the sliding window
    let maxLength = 0; // To store the length of the longest substring

    // Loop through each character in the string using a right pointer
    for (let right = 0; right < s.length; right++) {
        // If the character is already in the map and is within the window
        if (map.has(s[right]) && map.get(s[right]) >= left) {
            // Move the left pointer to the right of the last occurrence of s[right]
            left = map.get(s[right]) + 1;
        }

        // Update the map with the current character's index
        map.set(s[right], right);

        // Calculate the length of the current substring and update maxLength if it's larger
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage
let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));  // Output: 3
Q37. Return the index of the first occurrence of needle in haystack, or -1 if not found (e.g., “hello”, “ll” → 2). 
Answer: Here is the solution in a C++ program returning the index of the first occurrence of needle in haystack, or -1 if not found :

#include <iostream>
#include <string>
using namespace std;

int strStr(string haystack, string needle) {
    // Check if needle is empty, return 0
    if (needle.empty()) return 0;
    
    // Loop through the haystack, checking for the first occurrence of needle
    for (int i = 0; i <= haystack.length() - needle.length(); i++) {
        if (haystack.substr(i, needle.length()) == needle) {
            return i;
        }
    }
    // Return -1 if needle is not found
    return -1;
}

int main() {
    string haystack = "hello";
    string needle = "ll";
    
    // Test the function and print the result
    cout << "Index of first occurrence: " << strStr(haystack, needle) << endl;  // Output: 2
    return 0;
}
Q38. Given two non-negative integer strings num1 and num2, return their sum as a string (e.g., “123” + “77” → “200”). 
Answer: Here is the sum of two non-negative integer strings in a Python program:

def addStrings(num1, num2):
    # Initialize two pointers for both strings and a carry variable
    i, j, carry, result = len(num1) - 1, len(num2) - 1, 0, []
    
    # Loop until we've processed all digits or there's no carry left
    while i >= 0 or j >= 0 or carry:
        # Get current digits or 0 if we've run out of digits
        digit1 = int(num1[i]) if i >= 0 else 0
        digit2 = int(num2[j]) if j >= 0 else 0
        
        # Calculate the sum of the current digits plus carry
        total = digit1 + digit2 + carry
        
        # Update carry for the next step
        carry = total // 10
        
        # Append the current digit to the result (total % 10 gives the last digit)
        result.append(str(total % 10))
        
        # Move the pointers to the left
        i -= 1
        j -= 1
    
    # Since we've added digits in reverse order, reverse the result and return it
    return ''.join(result[::-1])

# Example usage
num1 = "123"
num2 = "77"
print(addStrings(num1, num2))  # Output: "200"
Q39. Given strings s and t, find the smallest substring in s that contains all characters of t (e.g., s = “ADOBECODEBANC”, t = “ABC” → “BANC”).
Answer: Here is the solution in a C++ program to find the smallest substring:

#include <iostream>
#include <string>
#include <unordered_map>
#include <climits>
using namespace std;

string minWindow(string s, string t) {
    unordered_map<char,int> need, window;
    for (char c : t) need[c]++;
    int have = 0, required = need.size(), left = 0, minLen = INT_MAX, start = 0;
    for (int right = 0; right < s.size(); right++) {
        char c = s[right];
        if (++window[c] == need[c]) have++;
        while (have == required) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }
            if (--window[s[left]] < need[s[left]]) have--;
            left++;
        }
    }
    return (minLen == INT_MAX) ? "" : s.substr(start, minLen);
}

int main() {
    string s = "ADOBECODEBANC";
    string t = "ABC";
    
    cout << "Smallest substring: " << minWindow(s, t) << endl;  // Output: "BANC"
    
    return 0;
}
Q40. Determine if s2 is a rotation of s1 using a single substring check (e.g., “waterbottle” is a rotation of “erbottlewat”). 
Answer: Here is the solution in a JavaScript program to determine if s2 is a rotation of s1:

function isRotation(s1, s2) {
    if (s1.length !== s2.length || s1.length === 0) {
        return false;
    }
    const combined = s1 + s1;
    return combined.includes(s2);
}

// Example usage
console.log(isRotation("waterbottle", "erbottlewat")); // Output: true
console.log(isRotation("hello", "llohe"));             // Output: true
console.log(isRotation("hello", "olelh"));             // Output: false
Q41. Given an array of strings, group the anagrams together.
Answer: Here’s how to group anagrams in a C++ program:

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>
using namespace std;

vector<vector<string>> groupAnagrams(vector<string>& strs) {
    unordered_map<string, vector<string>> anagramMap;

    for (string word : strs) {
        string sortedWord = word;
        sort(sortedWord.begin(), sortedWord.end());
        anagramMap[sortedWord].push_back(word);
    }

    vector<vector<string>> result;
    for (auto& pair : anagramMap) {
        result.push_back(pair.second);
    }

    return result;
}

int main() {
    vector<string> words = {"eat", "tea", "tan", "ate", "nat", "bat"};
    vector<vector<string>> groups = groupAnagrams(words);

    for (const auto& group : groups) {
        for (const auto& word : group) {
            cout << word << " ";
        }
        cout << endl;
    }

    return 0;
}

//Output
eat tea ate 
tan nat 
bat 
Q42. Given a string s, return the longest palindromic substring in s.
Answer: Here is the code in a Python program to return the longest palindromic substring in s:

def longest_palindrome(s):
    if not s or len(s) < 1:
        return ""

    def expand_around_center(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return s[left + 1:right]

    longest = ""
    for i in range(len(s)):
        # Odd length palindrome
        temp1 = expand_around_center(i, i)
        # Even length palindrome
        temp2 = expand_around_center(i, i + 1)

        # Update the longest palindrome found so far
        if len(temp1) > len(longest):
            longest = temp1
        if len(temp2) > len(longest):
            longest = temp2

    return longest

// Example usage:
input_str = "babad"
print(longest_palindrome(input_str))  # Output: "bab" or "aba"
Q43. Given two strings s and t, determine if they are isomorphic.
Answer: Here is a code in a JavaScript program to determine if s and t are isomorphic:

ffunction isIsomorphic(s, t) {
    if (s.length !== t.length) return false;

    const mapST = new Map();
    const mapTS = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (mapST.has(charS)) {
            if (mapST.get(charS) !== charT) return false;
        } else {
            mapST.set(charS, charT);
        }

        if (mapTS.has(charT)) {
            if (mapTS.get(charT) !== charS) return false;
        } else {
            mapTS.set(charT, charS);
        }
    }

    return true;
}

// Example usage:
console.log(isIsomorphic("egg", "add"));  // Output: true
console.log(isIsomorphic("foo", "bar"));  // Output: false
console.log(isIsomorphic("paper", "title"));  // Output: true
Q44. Given a string containing just the characters ‘(‘, ‘)’, ‘{‘, ‘}’, ‘[‘, and ‘]’, determine if the input string is valid. An input string is valid if:
Open brackets are closed by the same type of brackets.
Open brackets are closed in the correct order.
Answer: Here is a Python program to determine whether the input string is valid or not:

def is_valid(s):
    stack = []
    bracket_map = {')': '(', '}': '{', ']': '['}

    for char in s:
        if char in bracket_map.values():  # opening brackets
            stack.append(char)
        elif char in bracket_map:  # closing brackets
            if not stack or stack[-1] != bracket_map[char]:
                return False
            stack.pop()
        else:
            # Ignore any characters that are not brackets (optional)
            return False

    return len(stack) == 0

// Example usage:
input_str = "({[]})"
print(is_valid(input_str))  # Output: True
Q45. Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string “”.
Answer: Here is the function to find the longest common prefix string among an array of strings in a C++ program:

#include <vector>
#include <string>
using namespace std;

string longestCommonPrefix(vector<string>& strs) {
    if (strs.empty()) return "";
    
    for (int i = 0; i < strs[0].size(); ++i) {
        char c = strs[0][i];
        for (int j = 1; j < strs.size(); ++j) {
            if (i >= strs[j].size() || strs[j][i] != c) {
                return strs[0].substr(0, i);
            }
        }
    }
    return strs[0];
}


// Example usage:
vector<string> words = {"flower", "flow", "flight"};
cout << longestCommonPrefix(words);  // Output: "fl"








