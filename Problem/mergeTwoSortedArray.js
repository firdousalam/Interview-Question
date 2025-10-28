function mergeTwo(arr1,arr2){
    for(let j=0;j<arr2.length;j++){
        arr1.push(arr2[j]);
    }
    let nerge =  arr1.sort((a,b)=> b-a);
    let uniqueJson = {};
    let uniqueArray = [];
    for(let i=0;i<nerge.length;i++){
        if(!uniqueJson[nerge[i]]){
            uniqueArray.push(nerge[i]);
             uniqueJson[nerge[i]] = true;
        }
    }
    return uniqueArray;
}

let arr1 = [2,3,4,56,7,8];
let arr2 = [3,6,8,9,10];

console.log(mergeTwo(arr1,arr2));