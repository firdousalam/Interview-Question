//1. Sort JSON Object by Key
const jsonObject = { "z": 1, "a": 3, "c": 2 };

console.log(Object.keys(jsonObject));

console.log(Object.keys(jsonObject).sort());
let sortedJson = {};
let sortedData = Object.keys(jsonObject).sort((a,b)=>b-a).forEach((data)=>{
    sortedJson[data] = jsonObject[data];
})
console.log("myjson",sortedJson);
const sortedByKey = Object.keys(jsonObject)
  .sort() // Sort keys alphabetically
  .reduce((acc, key) => {
    acc[key] = jsonObject[key];
    return acc;
  }, {});

console.log(sortedByKey);
// Output: { "a": 3, "c": 2, "z": 1 }
// 2. Sort JSON Object by Value


const sortedByValue1 = Object.entries(jsonObject)
  .sort(([, valueA], [, valueB]) => valueA - valueB) // Sort by values
  .reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

console.log(sortedByValue1);
// Output: { "z": 1, "c": 2, "a": 3 }

//3. Sort JSON Array of Objects by a Specific Key

const jsonArray = [
  { name: "John", age: 25 },
  { name: "Alice", age: 22 },
  { name: "Bob", age: 30 }
];

const sortedByKey2 = jsonArray.sort((a, b) => a.name.localeCompare(b.name)); // Sort by 'name'

console.log(sortedByKey);
// Output: [ { name: "Alice", age: 22 }, { name: "Bob", age: 30 }, { name: "John", age: 25 } ]


