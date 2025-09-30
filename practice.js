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


// array find
let arr1 = [1,2,3,4,5,6,7,8,9]
let data = arr1.find((dta) => {
    return dta>5
});
console.info("find",data);
let data1= arr1.findLast((dta) => {
    return dta>5
});
console.info("findLast",data1);

arr1.forEach((eachData,index)=>{
    console.log(`index ${index}`,eachData);
})

for (const [index, value] of arr1.entries()) {
    console.log(`Index: ${index}, Value: ${value}`);
}
let filterData = arr1.filter((data)=>{
   if(data%2 === 0){
    return " ";
   }
})
console.log("even no",filterData)

let str1 = "JavaScript";

console.info(str1.slice(0, 4));    // "Java"  (from 0 to 3)
console.table(str1.slice(-4));      // "Script"
 console.log("regex")
str = "abc123xyz";
 console.log(str.match(/\d+/));      // ["123"]
 let d1 = str.match(/\d+/);
 console.log(d1[0]);

//  const text = "The rain in Spain stays mainly in the plain.";
// const regex = /ain/g;

// for (const match of text.matchAll(regex)) {
//   console.log(match);
// }

const text = "2023-09-30 and 2025-09-30";
const regex = /(\d{4})-(\d{2})-(\d{2})/g;

for (const match of text.matchAll(regex)) {
  console.log(`Year: ${match[1]}, Month: ${match[2]}, Day: ${match[3]}`);
}

let sw = "hshjhsgshjhs";

let aw =  [...new Set(sw)];

console.log("spread",aw)


/*

=====================================================


*/

let r1 = "hello world";
console.log("reverse string",r1.split("").reverse().join(""));

console.error("palindrome",r1 === r1.split("").reverse().join(""));
r2 = "madam"

console.log("palindrome",r2 === r2.split("").reverse().join(""));

function lstr(data){
    let left=0;max=0;maxData = [];
    let oldmax = 0;
    let set = new Set();
   for(right=0;right<data.length;right++){

    if(set.has(data[right]))
    {
        set.delete(data[left++]);
    }

     set.add(data[right]);
  
    max = Math.max(max,right-left+1);
   
   }
  
   return max
}

console.log("max substr",lstr("ggsffsdddahhjvbjjiyrh"));

// first non repeat char

function nonrep(data){
    for(let st of data){
        if(data.indexOf(st) == data.lastIndexOf(st)) return st
    }
    return null
}

let repchar = "jggdhdhsjjm";

console.log("non repeat char",nonrep(repchar));
let json = {};
for(let ch of repchar){
    json[ch] = (json[ch]+1 || 1);
}
console.log("json structure",json);
for(let key in json){
    console.log("key",key);
    console.log("value",json[key]);
}


function firstSum(data,sm){
    let arrObj ={};
   for(let num of data){
    const diff = sm - num;
    if(arrObj[diff]){
        return [num,diff]
    }
    arrObj[num] = true;
   }
}

let dataArr = [1,2,3,4,5,6,7,8,9,10];
console.log("arrData",firstSum(dataArr,15));

function intersection(arr1, arr2) {

  return arr1.filter(num => arr2.includes(num));
  
}

console.log(intersection([1,2,3], [2,3,4])); // [2,3]

