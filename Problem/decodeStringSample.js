/*

You said:
for input a2cd3  output aacddd

You said:
for input a2cd3  output aacddd

*/

// function decodeSimpleString(s) {
//   let result = "";
//   let prevChar = "";

//   for (let i = 0; i < s.length; i++) {
//     const ch = s[i];

//     if (isNaN(ch)) {
//       // if it's a letter, save it for possible repetition
//       prevChar = ch;
//       result += ch;
//     } else {
//       // if it's a digit, repeat the previous character (ch - 1 more times)
//       const repeatCount = parseInt(ch);
//       result = result.slice(0, -1) + prevChar.repeat(repeatCount);
//     }
//   }

//   return result;
// }

// // Example
// console.log(decodeSimpleString("a2cd3")); // Output: aacddd
// console.log(decodeSimpleString("x2y2z")); // Output: xxxyyz
// console.log(decodeSimpleString("p4q"));   // Output: ppppq


function decodeStringWithMultiDigits(s) {
  let result = "";
  let i = 0;

  while (i < s.length) {
    let char = s[i];
    console.log(char,typeof char);
    if (/[a-zA-Z]/.test(char)) {
      // start of a new character
      let j = i + 1;
      let num = "";

      // collect all digits after the character
       console.log(s[j],typeof s[j]);
      while (j < s.length && /[0-9]/.test(s[j])) {
        num += s[j];
        j++;
      }

      const repeatCount = num ? parseInt(num) : 1;
      result += char.repeat(repeatCount);

      i = j; // move to next letter
    } else {
      i++;
    }
  }

  return result;
}

// Examples
console.log(decodeStringWithMultiDigits("a2cd3"));   // "aacddd"
console.log(decodeStringWithMultiDigits("x3y12z"));  // "xxxyyyyyyyyyyyz"
console.log(decodeStringWithMultiDigits("p10q2r"));  // "ppppppppppqqr"
