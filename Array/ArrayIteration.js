let arr = [1, 2, 3,"a"];

arr.forEach((x,index) => console.log(index,x)); 
// 1 2 3

for (let x of arr) console.log(x); 
// 1 2 3
for(let [index,data] of arr.entries()){
   console.log(index,data)
}