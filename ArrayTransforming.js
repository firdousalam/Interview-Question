let arr = [1, 2, 3, 4];

console.log("map",arr.map(x => x * 2));         // [2,4,6,8]
console.log("filter",arr.filter(x => x % 2 === 0)); // [2,4]
console.log("reduce",arr.reduce((a, b) => a + b)); // 10 ((((1+2)+3)+4)
console.log("reduceRight",arr.reduceRight((a, b) => a - b)); // -2  ( (((4-3)-2)-1) )