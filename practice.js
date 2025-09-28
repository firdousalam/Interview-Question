let str = "Hello World";
console.log("reverse",str.split("").reverse().join(''))
let Palindrome = "madam";
console.log(Palindrome,Palindrome === Palindrome.split("").reverse().join(''));
console.log(str,Palindrome === str.split("").reverse().join(''));

console.log("Longest Substring without repeat");

function LongestSubStr(str){

    let left=0, max=0;
    let set = new Set();

    for(let right=0;right<str.length; right++){

        if(set.has(str[right])){

            set.delete(str[left++]);

        }

        set.add(str[right]);
        max = Math.max(max,right-left+1);
    }
    let arrData = str.split();
    console.log("left",left)
    return {"obj" : max ,data : arrData.splice(left)};
}
console.log("longest substring",LongestSubStr("hhhgdduhsghss"));
console.log(LongestSubStr("abcabcbb")); // 3

let arr4 = Array.from("hello");  
console.log("reverse hello",arr4.reverse());

let arr = ["a", "b", "c"];

console.log(arr.join("-"));    // "a-b-c"
console.log(arr.toString());   // "a,b,c"
console.log(JSON.stringify(arr)); // "[\"a\",\"b\",\"c\"]"
console.log(arr.join("")); 