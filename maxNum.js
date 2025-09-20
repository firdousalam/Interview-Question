function maxNum(data){
    return Math.max(...data)
}


function secondLargest(arr) {

  let unique = [...new Set(arr)];
  
  unique.sort((a, b) => b - a);
  
  return unique[1];
  
}
const originalNumber = [1,3,4,2,10,2]
console.log("original number",originalNumber)
console.log("largest number",maxNum(originalNumber)); //10
console.log("second largest",secondLargest(originalNumber)); // 4